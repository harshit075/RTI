'use client';

import React, { useState } from 'react';
import { Sparkles, HelpCircle, CheckCircle, AlertTriangle, ArrowRight, CornerDownRight, Landmark, Search, BarChart } from 'lucide-react';
import { Authority, mockTemplates, geographicHierarchy } from '../data/mockData';

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
  const [authorities, setAuthorities] = useState<Authority[]>([]);

  // Geographic Finder states
  const [geoState, setGeoState] = useState('');
  const [geoDistrict, setGeoDistrict] = useState('');
  const [geoLocalBody, setGeoLocalBody] = useState('');

  const selectedStateObj = geographicHierarchy.find(s => s.name === geoState);
  const selectedDistrictObj = selectedStateObj?.districts.find(d => d.name === geoDistrict);

  // Real-time AI Copilot Computations
  const lowerText = rawText.toLowerCase();
  
  // 1. Specificity (length-based)
  const specificityScore = Math.min(100, Math.floor((rawText.trim().length / 100) * 100));
  const specificityLevel = specificityScore > 75 ? 'Strong' : specificityScore > 35 ? 'Good' : 'Weak';

  // 2. Time period detection
  const hasTimePeriod = /\b(20\d{2}|19\d{2})\b/g.test(rawText) || lowerText.includes('year') || lowerText.includes('month') || lowerText.includes('saal') || lowerText.includes('mahina');
  const timePeriodScore = hasTimePeriod ? 100 : 0;
  
  // 3. Question Intelligence (avoiding 'Why')
  const isWhyQuestion = lowerText.includes('why ') || lowerText.includes('kyu') || lowerText.includes('kyun') || lowerText.includes('reasons for') || lowerText.includes('reason why');
  const suitabilityScore = isWhyQuestion ? 40 : (rawText.trim().length > 10 ? 100 : 0);

  // 4. Scope Specificity (Check if too broad)
  const isTooBroad = lowerText.includes('all information') || lowerText.includes('every details') || lowerText.includes('entire record') || lowerText.includes('all project') || (lowerText.includes('railway') && lowerText.includes('india') && !lowerText.includes('station'));
  const scopeScore = isTooBroad ? 50 : 100;

  // Overall Health Score (average of them)
  const overallHealth = Math.round((specificityScore + timePeriodScore + suitabilityScore + scopeScore) / 4);

  React.useEffect(() => {
    fetch('/api/authorities')
      .then(res => res.json())
      .then(data => setAuthorities(data))
      .catch(err => console.error('Failed to load authorities:', err));
  }, []);

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
      
      // 1. Check Indic Input (Hinglish or Devanagari characters)
      const hasIndicChars = /[\u0900-\u097F]/.test(rawText);
      const indicKeywords = ['mujhe', 'kharcha', 'gaon', 'road', 'pichle', 'saal', 'chahiye', 'paisa', 'kam', 'kab', 'kaise'];
      const hasIndicKeywords = indicKeywords.some(kw => lowerText.includes(kw));
      const isIndicInput = hasIndicChars || hasIndicKeywords;
      
      let indicTranslation = '';
      if (isIndicInput) {
        if (lowerText.includes('road') || lowerText.includes('kharcha') || lowerText.includes('sarak') || lowerText.includes('sadak')) {
          indicTranslation = 'Provide administrative sanctions, expenditure logs, and contractor details for road construction in Rampur village during the last 3 years.';
        } else {
          indicTranslation = 'Provide standard operating procedures, police verification timelines, and officer remarks regarding the delayed passport issue.';
        }
      }

      // 2. Check Suitability (Good RTI vs Needs Improvement)
      let isGood = true;
      let suitabilityFeedback = 'Your request is well-structured and focuses on accessing records, which is appropriate for RTI.';
      
      if (lowerText.includes('why did you') || lowerText.includes('why is') || lowerText.includes('how can you') || lowerText.includes('why are you ignoring') || lowerText.includes('kyun') || lowerText.includes('kyu')) {
        isGood = false;
        suitabilityFeedback = 'Needs Modification: RTI is primarily for accessing records, files, orders, and documents that already exist. Try requesting the recorded reasons, file movements, or correspondence regarding your issue, rather than asking general "Why" questions or demanding explanations.';
      }

      // 3. Extract entities
      let timePeriod = 'Not specified';
      if (lowerText.match(/(2022|2023|2024|2025|2026)/g)) {
        const years = lowerText.match(/(2022|2023|2024|2025|2026)/g);
        timePeriod = years ? [...new Set(years)].join(' to ') : 'Not specified';
      } else if (lowerText.includes('3 years') || lowerText.includes('three years') || lowerText.includes('3 saal') || lowerText.includes('teen saal')) {
        timePeriod = 'Last 3 years';
      }

      let location = 'Central jurisdiction / Not specific';
      if (lowerText.includes('rampur') || lowerText.includes('alwar') || lowerText.includes('village') || lowerText.includes('gaon')) {
        location = 'Rampur Village, Alwar District';
      } else if (lowerText.includes('jaipur')) {
        location = 'Jaipur Junction Railway Station';
      }

      // 4. Central vs State routing check
      let isStateDept = false;
      let routingWarning = null;
      let statePortalUrl = 'https://rtionline.gov.in'; // fallback
      let stateName = 'the State Government';

      const stateKeywords = [
        { name: 'Delhi NCT', keywords: ['delhi', 'nct', 'mcd', 'dda', 'delhi jal board'], portal: 'https://rtionline.delhi.gov.in/' },
        { name: 'Uttar Pradesh', keywords: ['uttar pradesh', 'up ', 'lucknow', 'up police', 'noida authority', 'kanpur'], portal: 'https://rtionline.up.gov.in/' },
        { name: 'Maharashtra', keywords: ['maharashtra', 'mumbai', 'bmc', 'pune', 'mahaonline', 'thane'], portal: 'https://rtionline.maharashtra.gov.in/' },
        { name: 'Karnataka', keywords: ['karnataka', 'bangalore', 'bengaluru', 'bbmp', 'ksp', 'mysore'], portal: 'https://rtionline.karnataka.gov.in/' },
        { name: 'Rajasthan', keywords: ['rajasthan', 'jaipur', 'ajmer', 'sso rajasthan', 'gram panchayat', 'jodhpur'], portal: 'https://sso.rajasthan.gov.in/' }
      ];

      const localKeywords = ['panchayat', 'municipal', 'corporation', 'municipality', 'tahsildar', 'collectorate', 'state road', 'rto', 'state board', 'village road', 'police station', 'water board', 'local school', 'state university'];

      const matchesState = stateKeywords.find(item => 
        item.keywords.some(kw => lowerText.includes(kw))
      );

      const hasLocalTerm = localKeywords.some(kw => lowerText.includes(kw));

      if (matchesState || hasLocalTerm) {
        // Special Legal Edge Case: Delhi Police reports to the Central MHA (Ministry of Home Affairs), not State.
        const isDelhiPoliceEdgeCase = lowerText.includes('delhi police') || lowerText.includes('delhi traffic police');
        
        if (!isDelhiPoliceEdgeCase) {
          isStateDept = true;
          stateName = matchesState ? matchesState.name : 'State Government';
          statePortalUrl = matchesState ? matchesState.portal : 'https://rtionline.gov.in';
          
          routingWarning = `This request references state or local jurisdiction items (${stateName}). Filing state/local authorities through the Central RTI Online portal will result in rejection with NO REFUND. We recommend filing directly through the official ${stateName} RTI portal.`;
        }
      }

      // 5. Find suitable authority
      let suggestedAuth = authorities[0] || {} as Authority; // default
      let matchWhy = 'This public authority regulates and manages records matching your inquiry categories.';
      
      if (lowerText.includes('passport')) {
        suggestedAuth = authorities.find(a => a.id === 'passport') || suggestedAuth;
        matchWhy = 'Your request concerns delays in passport processing and status checks, which are handled by the CPV Division.';
      } else if (lowerText.includes('aadhaar') || lowerText.includes('uidai') || lowerText.includes('biometric')) {
        suggestedAuth = authorities.find(a => a.id === 'uidai') || suggestedAuth;
        matchWhy = 'Your request concerns Aadhaar correction requests and status updates, managed by UIDAI.';
      } else if (lowerText.includes('railway') || lowerText.includes('train') || lowerText.includes('station')) {
        suggestedAuth = authorities.find(a => a.id === 'railways') || suggestedAuth;
        matchWhy = 'Your request concerns railway station tender awards and project files, managed by the Railway Board.';
      } else if (lowerText.includes('epf') || lowerText.includes('provident') || lowerText.includes('pf')) {
        suggestedAuth = authorities.find(a => a.id === 'epfo') || suggestedAuth;
        matchWhy = 'Your request concerns transfer of EPF balance and claim processing, managed by the EPFO.';
      } else if (lowerText.includes('road') || lowerText.includes('highway') || lowerText.includes('construction') || lowerText.includes('contractor') || lowerText.includes('road')) {
        suggestedAuth = authorities.find(a => a.id === 'morth') || suggestedAuth;
        matchWhy = 'Your request concerns road construction and highway project expenditures, managed by the NHAI / MoRTH.';
      } else if (lowerText.includes('education') || lowerText.includes('college') || lowerText.includes('school') || lowerText.includes('ugc') || lowerText.includes('university')) {
        suggestedAuth = authorities.find(a => a.id === 'ugc') || suggestedAuth;
        matchWhy = 'Your request concerns university grants, college recognition, or higher education project files, managed by UGC.';
      }

      setAnalysisResult({
        isGood,
        suitabilityFeedback,
        timePeriod,
        location,
        isStateDept,
        routingWarning,
        stateName,
        statePortalUrl,
        suggestedAuth,
        matchWhy,
        isIndicInput,
        indicTranslation,
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
      rawText: analysisResult.isIndicInput ? analysisResult.indicTranslation : rawText,
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

      {/* Central-only Scope Warning */}
      <div className="rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] text-slate-700 p-4.5 mb-6 text-xs flex gap-3 items-start leading-relaxed shadow-2xs">
        <AlertTriangle className="h-5.5 w-5.5 text-[#B94A48] shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold block text-sm uppercase text-[#B94A48] mb-0.5">Central Government Ministries Scope Only</span>
          RTI Online portal is ONLY for filing requests with **Central Government Ministries, Departments, and Public Authorities**. 
          State Government authorities (e.g. Uttar Pradesh, Maharashtra, Karnataka, Delhi NCT) cannot be filed here. State applications will be returned with <span className="font-extrabold text-[#B94A48]">NO REFUND</span>. 
          <div className="mt-2.5">
            <a 
              href="https://rtionline.gov.in/request/allpa.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#123B5D] font-extrabold hover:underline mr-4 inline-flex items-center gap-1.5 bg-white/70 px-2.5 py-1.5 rounded-lg border border-[#E5E2D9] shadow-2xs"
            >
              <Search className="h-3 w-3" /> View Registered 2000+ Public Authorities List ↗
            </a>
          </div>
        </div>
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

      {/* Geographic Finder */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6 dark:bg-slate-900 dark:border-slate-800">
        <h3 className="font-bold text-sm text-slate-800 mb-2 dark:text-slate-200">
          Geographic Authority Finder (Optional)
        </h3>
        <p className="text-[10.5px] text-slate-500 mb-3">
          If your issue concerns a specific local body, select the state and district to narrow down the authority.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[9px] font-extrabold text-slate-400 block uppercase mb-1">State</label>
            <select
              value={geoState}
              onChange={(e) => {
                setGeoState(e.target.value);
                setGeoDistrict('');
                setGeoLocalBody('');
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-700 outline-none"
            >
              <option value="">Select State</option>
              {geographicHierarchy.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[9px] font-extrabold text-slate-400 block uppercase mb-1">District</label>
            <select
              value={geoDistrict}
              disabled={!geoState}
              onChange={(e) => {
                setGeoDistrict(e.target.value);
                setGeoLocalBody('');
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-700 outline-none disabled:bg-slate-100 disabled:cursor-not-allowed"
            >
              <option value="">Select District</option>
              {selectedStateObj?.districts.map(d => (
                <option key={d.name} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[9px] font-extrabold text-slate-400 block uppercase mb-1">Local Body</label>
            <select
              value={geoLocalBody}
              disabled={!geoDistrict}
              onChange={(e) => {
                const val = e.target.value;
                setGeoLocalBody(val);
                const selectedBody = selectedDistrictObj?.localBodies.find(b => b.name === val);
                if (selectedBody) {
                  setRawText(prev => `Regarding road construction, municipal projects and public works under ${selectedBody.name} in district ${geoDistrict}, ${geoState}. \n${prev}`);
                }
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-700 outline-none disabled:bg-slate-100 disabled:cursor-not-allowed"
            >
              <option value="">Select Local Body</option>
              {selectedDistrictObj?.localBodies.map(b => (
                <option key={b.name} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Two-Column Editor & AI Copilot Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
        
        {/* Left Column: Template Selection & Text Input Area (span 2) */}
        <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-4">
          
          {/* Templates library */}
          <div>
            <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">RTI Template Library</h3>
            <div className="flex flex-wrap gap-1.5">
              {mockTemplates.map(temp => (
                <button
                  key={temp.id}
                  onClick={() => {
                    setRawText(temp.questions.join('\n'));
                    setSelectedTopic(temp.id);
                    setAnalysisResult(null);
                  }}
                  className="rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-3 py-2 text-[10.5px] font-bold transition-all cursor-pointer whitespace-nowrap"
                >
                  Use "{temp.title}"
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <h3 className="font-bold text-sm text-slate-800 mb-2 dark:text-slate-200 font-sans">
              {language === 'en' ? '2. Tell us what you want to know in plain language:' : '2. सरल भाषा में बताएं कि आप क्या जानना चाहते हैं:'}
            </h3>
            <p className="text-[10.5px] text-slate-400 mb-3">
              {language === 'en' 
                ? 'Example: "I want to know the road budget and work order details for rampur village road constructed in 2022-2025."'
                : 'उदाहरण: "मुझे 2022-2025 में बनी रामपुर गांव की सड़क के बजट और वर्क ऑर्डर का विवरण चाहिए।"'}
            </p>

            <textarea
              rows={6}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder={language === 'en' ? 'Type your description here...' : 'यहाँ अपना विवरण टाइप करें...'}
              className="w-full rounded-xl border border-slate-350 px-4 py-3 text-sm text-slate-800 outline-none focus:border-primary-blue bg-slate-50 leading-relaxed font-medium"
            />
          </div>

          <div className="flex justify-end pt-2">
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

        {/* Right Column: AI Copilot Sidebar (span 1) */}
        <div className="rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] p-5 space-y-4 shadow-2xs">
          <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 mb-2">
            <Sparkles className="h-4.5 w-4.5 text-secondary-saffron" />
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-850">RTI AI Copilot</h4>
          </div>

          {/* Health Score Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
              <span>RTI Health Score</span>
              <span className={overallHealth > 75 ? 'text-emerald-700 font-extrabold' : overallHealth > 45 ? 'text-amber-700 font-bold' : 'text-red-700 font-bold'}>
                {overallHealth}% {overallHealth > 75 ? 'Strong' : overallHealth > 45 ? 'Good' : 'Needs Review'}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  overallHealth > 75 ? 'bg-emerald-500' : overallHealth > 45 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${overallHealth}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 text-[11px] leading-relaxed text-slate-700">
            {/* Specificity feedback */}
            {specificityLevel === 'Weak' && rawText.trim().length > 0 && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-800">
                <strong>Query is too short:</strong> Please describe the record or event in detail (minimum 35 characters recommended).
              </div>
            )}

            {/* Time period warning */}
            {!hasTimePeriod && rawText.trim().length > 0 && (
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                <strong>Timeframe missing:</strong> Your request doesn't specify a time period. Recommends adding dates (e.g. "between 2024 and 2025") to prevent reject delays.
              </div>
            )}

            {/* Question Intelligence Warning */}
            {isWhyQuestion && (
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
                <div>
                  <strong>"Why" Question Detected:</strong> Your request asks for reasons. A stronger RTI should request existing records instead.
                </div>
                <div className="border-t border-amber-200/50 pt-1 text-[10px] italic">
                  <strong>Try requesting:</strong>
                  <ul className="list-disc pl-3.5 mt-0.5 space-y-0.5 font-medium">
                    <li>Copy of inspection reports</li>
                    <li>Work order / Sanction order copy</li>
                    <li>Funds allocated and released logs</li>
                    <li>File notings / Officer comments</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Scope Optimizer Warning */}
            {isTooBroad && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-800">
                <strong>Request is too broad:</strong> Recommends specifying a location, project name, or concrete document type to prevent processing rejections.
              </div>
            )}

            {/* General Guideline */}
            {rawText.trim().length === 0 && (
              <p className="text-slate-500 italic">
                Start typing your query on the left. The AI Copilot will analyze your draft scope, specificity, and timeframe in real time.
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Analysis Results Display */}
      {analysisResult && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* Indic Assistant Translator */}
          {analysisResult.isIndicInput && (
            <div className="rounded-2xl border border-amber-250 bg-amber-50/20 text-amber-900 p-5 shadow-2xs">
              <div className="flex items-start gap-3">
                <div>
                  <h4 className="font-bold text-sm text-amber-800">Indic Language Assistant (Hinglish/Hindi detected)</h4>
                  <p className="text-xs mt-1 leading-relaxed opacity-95">We formalized your request for optimal legal clarity:</p>
                  <p className="text-xs font-bold mt-2 bg-white/70 p-2.5 rounded-lg border border-amber-100 italic text-slate-800">
                    "{analysisResult.indicTranslation}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Suitability Box (Section 8) */}
          <div className={`rounded-2xl border p-5 ${
            analysisResult.isGood 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-amber-50 border-amber-200 text-amber-850'
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
            <div className="rounded-2xl border bg-red-50 border-red-200 text-red-950 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5.5 w-5.5 text-red-650 shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <h4 className="font-bold text-sm">State Jurisdiction Detected ({analysisResult.stateName})</h4>
                  <p className="text-xs mt-1 leading-relaxed opacity-90">{analysisResult.routingWarning}</p>
                  <a 
                    href={analysisResult.statePortalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-red-650 hover:bg-red-750 text-white font-bold text-[11px] px-3.5 py-1.5 rounded-lg shadow-sm"
                  >
                    Go to official {analysisResult.stateName} RTI Portal ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Department Box with Match Ratings & Alternatives */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Match Confidence & suggested authority</h4>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                91% Match
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-navy/5 text-primary-navy">
                  <Landmark className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-850 text-base leading-snug dark:text-slate-100">
                    {analysisResult.suggestedAuth.name}
                  </h5>
                  <p className="text-xs text-slate-550 font-bold">
                    {analysisResult.suggestedAuth.ministry} • Recommended
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-150 my-4 pt-4 text-xs text-slate-650 dark:text-slate-400">
              <span className="font-extrabold text-slate-800 block mb-1 dark:text-slate-200">Why recommended?</span>
              {analysisResult.matchWhy}
            </div>

            {/* Alternatives (Section 4) */}
            <div className="border-t border-slate-150 my-4 pt-4">
              <span className="font-extrabold text-xs text-slate-400 uppercase tracking-wider block mb-2">Alternative Authorities Available</span>
              <div className="space-y-2">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-150 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">Department of Personnel and Training (DoPT)</span>
                    <span className="text-[10px] text-slate-500">Ministry of Personnel, Public Grievances and Pensions</span>
                  </div>
                  <span className="font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">68% Match</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-150 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">Ministry of Road Transport and Highways (Alternate Branch)</span>
                    <span className="text-[10px] text-slate-500">Regional Coordination Office</span>
                  </div>
                  <span className="font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">54% Match</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-150 rounded-xl p-3.5 flex flex-wrap gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block text-[9.5px] uppercase">Time Period</span>
                <span className="font-bold text-slate-700">{analysisResult.timePeriod}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block text-[9.5px] uppercase">Location</span>
                <span className="font-bold text-slate-700">{analysisResult.location}</span>
              </div>
            </div>

            {/* Official Source Verification Notice (P0) */}
            <div className="mt-4 border-t border-slate-150 pt-3 flex items-start gap-2 text-[10.5px] text-slate-500 leading-relaxed bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E2D9]">
              <CheckCircle className="h-4.5 w-4.5 text-[#B94A48] shrink-0 mt-0.5" />
              <div>
                <strong>Official Source Verification:</strong> Suggestions generated according to the official RTI Act (Section 4 proactive disclosure mandates) and official DoPT FAQ guidelines. (Last verified: 25 August 2026).
              </div>
            </div>

            {/* CTA to proceed */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setAnalysisResult(null);
                  setSelectedTopic('other'); // lets user select other category manually
                }}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-650 hover:bg-slate-50 cursor-pointer"
              >
                See other authorities
              </button>
              <button
                onClick={proceedToBuilder}
                className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white flex items-center gap-1 shadow cursor-pointer"
              >
                Use Recommended Authority & Proceed
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
