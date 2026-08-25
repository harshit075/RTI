'use client';

import React, { useState } from 'react';
import { Sparkles, HelpCircle, CheckCircle, AlertTriangle, ArrowRight, CornerDownRight, Landmark } from 'lucide-react';
import { mockAuthorities, Authority } from '../data/mockData';

interface OnboardingViewProps {
  setActiveView: (view: string) => void;
  setDraftRti: (data: any) => void;
  language: 'en' | 'hi';
}

export default function OnboardingView({ setActiveView, setDraftRti, language }: OnboardingViewProps) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [rawText, setRawText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const topics = [
    { id: 'passport', label: 'Passport Delay / Grievance', authorityId: 'passport' },
    { id: 'aadhaar', label: 'Aadhaar Card / UIDAI', authorityId: 'uidai' },
    { id: 'railway', label: 'Railway Tenders / Upgrades', authorityId: 'railways' },
    { id: 'epf', label: 'Provident Fund (EPFO)', authorityId: 'epfo' },
    { id: 'road', label: 'Road Project / Construction', authorityId: 'morth' },
    { id: 'education', label: 'College / UGC / Education', authorityId: 'ugc' },
    { id: 'other', label: 'Other Government Service', authorityId: '' }
  ];

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    
    // Autofill text box with a helpful template
    const templates: Record<string, string> = {
      passport: 'I want to know the reasons for the delay in issuing my passport. My file number is DL2068472910, submitted in May 2026. The police verification was completed but passport is still processing.',
      aadhaar: 'Provide the status of my Aadhaar correction request submitted on 10th June 2026 under update request ID 8291048. Also provide details on why the biometric update failed twice.',
      railway: 'I want to see the budget allocation and completion report for the platform escalators at Jaipur Junction that were tender-released in 2025.',
      epf: 'State the reasons for the delay in transferring my EPF balance under transfer claim ID 7294820 from my previous employer to current account. The claim was submitted 45 days ago.',
      road: 'I want to know how much money was spent on the construction of the bypass road in my village Rampur, District Alwar, Rajasthan between January 2022 and December 2025.',
      education: 'Provide copies of the circulars and minutes of meetings regarding the recognition and funding grants for XYZ State University during the financial year 2025-26.',
      other: ''
    };
    setRawText(templates[topicId] || '');
    setAnalysisResult(null);
  };

  const runAnalysis = () => {
    if (!rawText.trim()) return;

    setAnalyzing(true);
    setAnalysisResult(null);

    // Simulate AI extraction and suitability analysis (Section 8 + Section 23 Central/State routing)
    setTimeout(() => {
      const lowerText = rawText.toLowerCase();
      
      // 1. Check Suitability (Good RTI vs Needs Improvement)
      let isGood = true;
      let suitabilityFeedback = 'Your request is well-structured and focuses on accessing records, which is appropriate for RTI.';
      
      if (lowerText.includes('why did you') || lowerText.includes('why is') || lowerText.includes('how can you') || lowerText.includes('why are you ignoring')) {
        isGood = false;
        suitabilityFeedback = 'Needs Improvement: RTI is primarily for accessing records, file notes, orders, and documents that already exist. Try requesting the recorded reasons, file movements, or correspondence regarding your issue, rather than asking general "Why" questions or demanding explanations.';
      }

      // 2. Extract entities
      let timePeriod = 'Not specified';
      if (lowerText.match(/(2022|2023|2024|2025|2026)/g)) {
        const years = lowerText.match(/(2022|2023|2024|2025|2026)/g);
        timePeriod = years ? [...new Set(years)].join(' to ') : 'Not specified';
      } else if (lowerText.includes('3 years') || lowerText.includes('three years')) {
        timePeriod = 'Last 3 years';
      }

      let location = 'Central jurisdiction / Not specific';
      if (lowerText.includes('rampur') || lowerText.includes('alwar') || lowerText.includes('village')) {
        location = 'Rampur Village, Alwar District';
      } else if (lowerText.includes('jaipur')) {
        location = 'Jaipur Junction Railway Station';
      }

      // 3. Central vs State routing check
      let isStateDept = false;
      let routingWarning = null;
      if (lowerText.includes('panchayat') || lowerText.includes('municipal') || lowerText.includes('state road') || lowerText.includes('rajasthan')) {
        // If it specifically mentions road in village Rampur, it might be state government (Gram Panchayat / PWD)
        if (selectedTopic === 'road') {
          isStateDept = true;
          routingWarning = 'This request concerns a local village road, which falls under the State Government of Rajasthan. The Central RTI Online portal cannot process state-level applications. We recommend submitting this to the Rajasthan state RTI department.';
        }
      }

      // 4. Find suitable authority
      let suggestedAuth: Authority = mockAuthorities[0]; // default
      if (selectedTopic === 'passport') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'passport')!;
      } else if (selectedTopic === 'aadhaar') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'uidai')!;
      } else if (selectedTopic === 'railway') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'railways')!;
      } else if (selectedTopic === 'epf') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'epfo')!;
      } else if (selectedTopic === 'road') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'morth')!;
      } else if (selectedTopic === 'education') {
        suggestedAuth = mockAuthorities.find(a => a.id === 'ugc')!;
      } else {
        // default match based on words
        if (lowerText.includes('rail')) suggestedAuth = mockAuthorities.find(a => a.id === 'railways')!;
        else if (lowerText.includes('passport')) suggestedAuth = mockAuthorities.find(a => a.id === 'passport')!;
        else if (lowerText.includes('road') || lowerText.includes('highway')) suggestedAuth = mockAuthorities.find(a => a.id === 'morth')!;
      }

      setAnalysisResult({
        isGood,
        suitabilityFeedback,
        timePeriod,
        location,
        isStateDept,
        routingWarning,
        suggestedAuth,
        extractedTopic: selectedTopic || 'General Inquiry'
      });
      setAnalyzing(false);
    }, 1500);
  };

  const proceedToBuilder = () => {
    if (!analysisResult) return;
    
    // Save state in the parent
    setDraftRti({
      topic: analysisResult.extractedTopic,
      authorityId: analysisResult.suggestedAuth.id,
      authorityName: analysisResult.suggestedAuth.name,
      location: analysisResult.location,
      timePeriod: analysisResult.timePeriod,
      rawText: rawText,
      isStateDept: analysisResult.isStateDept
    });
    
    setActiveView('builder');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      
      {/* Back button */}
      <button 
        onClick={() => setActiveView('landing')}
        className="text-xs font-bold text-slate-500 hover:text-primary-navy mb-6 flex items-center gap-1 cursor-pointer"
      >
        ← Back to Homepage
      </button>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <Landmark className="h-10 w-10 text-primary-navy mx-auto mb-3" />
        <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">
          {language === 'en' ? 'Describe What You Need' : 'बताएं कि आपको क्या जानकारी चाहिए'}
        </h2>
        <p className="text-xs text-slate-500 mt-2">
          {language === 'en' 
            ? 'We will analyze your request, check if it is suitable, suggest the correct department, and draft the questions.'
            : 'हम आपके अनुरोध का विश्लेषण करेंगे, जाँचेंगे कि क्या यह उपयुक्त है, सही विभाग का सुझाव देंगे, और प्रश्नों का मसौदा तैयार करेंगे।'}
        </p>
      </div>

      {/* Step 1: Select Topic */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6 dark:bg-slate-900 dark:border-slate-800">
        <h3 className="font-bold text-sm text-slate-800 mb-4 dark:text-slate-200">
          {language === 'en' ? '1. Select a category of information:' : '1. जानकारी की एक श्रेणी चुनें:'}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {topics.map(t => (
            <button
              key={t.id}
              onClick={() => handleTopicSelect(t.id)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold border transition-all cursor-pointer ${
                selectedTopic === t.id
                  ? 'bg-primary-navy border-primary-navy text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-350'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Formulate in own words */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6 dark:bg-slate-900 dark:border-slate-800">
        <h3 className="font-bold text-sm text-slate-800 mb-2 dark:text-slate-200 font-sans">
          {language === 'en' ? '2. Tell us what you want to know in plain language:' : '2. सरल भाषा में बताएं कि आप क्या जानना चाहते हैं:'}
        </h3>
        <p className="text-[10.5px] text-slate-400 mb-3">
          {language === 'en' 
            ? 'Example: "I want to know the road budget and work order details for rampur village road constructed in 2022-2025."'
            : 'उदाहरण: "मुझे 2022-2025 में बनी रामपुर गांव की सड़क के बजट और वर्क ऑर्डर का विवरण चाहिए।"'}
        </p>

        <textarea
          rows={4}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder={language === 'en' ? 'Type your description here...' : 'यहाँ अपना विवरण टाइप करें...'}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
        />

        <div className="mt-4 flex justify-end">
          <button
            onClick={runAnalysis}
            disabled={analyzing || !rawText.trim()}
            className="rounded-xl bg-primary-navy px-6 py-3 text-xs font-bold text-white hover:bg-primary-blue disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-1.5 shadow transition-all cursor-pointer"
          >
            {analyzing ? (
              <>
                <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {language === 'en' ? 'Analyzing query...' : 'विश्लेषण किया जा रहा है...'}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-secondary-gold" />
                {language === 'en' ? 'Analyze & Find Department' : 'विश्लेषण करें और विभाग खोजें'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Analysis Results Display */}
      {analysisResult && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* Suitability Box (Section 8) */}
          <div className={`rounded-2xl border p-5 ${
            analysisResult.isGood 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            <div className="flex items-start gap-3">
              {analysisResult.isGood ? (
                <CheckCircle className="h-5.5 w-5.5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5.5 w-5.5 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-bold text-sm">
                  {analysisResult.isGood 
                    ? (language === 'en' ? 'RTI Suitability: Good Request' : 'आरटीआई उपयुक्तता: सही अनुरोध')
                    : (language === 'en' ? 'RTI Suitability: Needs Modification' : 'आरटीआई उपयुक्तता: संशोधन की आवश्यकता')}
                </h4>
                <p className="text-xs mt-1 leading-relaxed opacity-90">{analysisResult.suitabilityFeedback}</p>
              </div>
            </div>
          </div>

          {/* Central vs State routing warning (Section 23) */}
          {analysisResult.isStateDept && (
            <div className="rounded-2xl border bg-blue-50 border-blue-200 text-blue-900 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5.5 w-5.5 text-blue-600 shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <h4 className="font-bold text-sm">State Jurisdiction Detected</h4>
                  <p className="text-xs mt-1 leading-relaxed opacity-90">{analysisResult.routingWarning}</p>
                  <a 
                    href="https://sso.rajasthan.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] px-3.5 py-1.5 rounded-lg shadow-sm"
                  >
                    Open Rajasthan State RTI Route ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Department Box (Section 7) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Suggested Public Authority</h4>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-navy/5 text-primary-navy">
                  <Landmark className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-850 text-base leading-snug dark:text-slate-100">
                    {analysisResult.suggestedAuth.name}
                  </h5>
                  <p className="text-xs text-slate-400 font-medium">
                    {analysisResult.suggestedAuth.ministry} • Central Department
                  </p>
                </div>
              </div>

              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Confidence: High
              </span>
            </div>

            <div className="border-t border-slate-150 my-4 pt-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 block mb-1 dark:text-slate-200">Why was this authority matched?</span>
              Your request mentions <span className="font-bold text-slate-800 dark:text-slate-200">"{selectedTopic}"</span> parameters. Under the Government delegation allocation of rules, this department regulates and maintains official records for such queries.
            </div>

            <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-wrap gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block text-[9.5px] uppercase">Time Period</span>
                <span className="font-semibold text-slate-700">{analysisResult.timePeriod}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block text-[9.5px] uppercase">Location</span>
                <span className="font-semibold text-slate-700">{analysisResult.location}</span>
              </div>
            </div>

            {/* CTA to proceed */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setAnalysisResult(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Reset Matching
              </button>
              <button
                onClick={proceedToBuilder}
                className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white flex items-center gap-1 shadow cursor-pointer"
              >
                Use this Authority & Proceed to Draft
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
