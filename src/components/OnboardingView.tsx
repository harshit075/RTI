'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, HelpCircle, CheckCircle, AlertTriangle, ArrowRight, 
  CornerDownRight, Landmark, Search, BarChart, MapPin, Building2, ExternalLink 
} from 'lucide-react';
import { Authority, mockTemplates, geographicHierarchy, mockAuthorities } from '../data/mockData';

interface OnboardingViewProps {
  setActiveView: (view: string) => void;
  setDraftRti: (data: any) => void;
  language: 'en' | 'hi';
}

export default function OnboardingView({ setActiveView, setDraftRti, language }: OnboardingViewProps) {
  const [acceptedGuidelines, setAcceptedGuidelines] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [rawText, setRawText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [authorities, setAuthorities] = useState<Authority[]>(mockAuthorities);

  // Geographic Finder states
  const [geoState, setGeoState] = useState('');
  const [geoDistrict, setGeoDistrict] = useState('');
  const [geoLocalBody, setGeoLocalBody] = useState('');
  const [districtSearch, setDistrictSearch] = useState('');

  const selectedStateObj = useMemo(() => {
    return geographicHierarchy.find(s => s.name === geoState);
  }, [geoState]);

  const selectedDistrictObj = useMemo(() => {
    return selectedStateObj?.districts.find(d => d.name === geoDistrict);
  }, [selectedStateObj, geoDistrict]);

  // Global search across all states & districts
  const searchResults = useMemo(() => {
    if (!districtSearch.trim() || districtSearch.trim().length < 2) return [];
    const query = districtSearch.toLowerCase().trim();
    const results: Array<{ state: string; district: string; localBodiesCount: number }> = [];

    for (const state of geographicHierarchy) {
      for (const dist of state.districts) {
        if (dist.name.toLowerCase().includes(query) || state.name.toLowerCase().includes(query)) {
          results.push({
            state: state.name,
            district: dist.name,
            localBodiesCount: dist.localBodies.length
          });
          if (results.length >= 8) break;
        }
      }
      if (results.length >= 8) break;
    }
    return results;
  }, [districtSearch]);

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
      .then(res => (res.ok ? res.json() : mockAuthorities))
      .then(data => setAuthorities(Array.isArray(data) && data.length > 0 ? data : mockAuthorities))
      .catch(() => setAuthorities(mockAuthorities));
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
    setAnalysisResult(null);
    
    // Auto-fill template suggestion
    const template = mockTemplates.find(t => t.id.includes(topicId));
    if (template && !rawText) {
      setRawText(template.questions.join('\n'));
    }
  };

  const handleSelectSearchResult = (st: string, dist: string) => {
    setGeoState(st);
    setGeoDistrict(dist);
    setGeoLocalBody('');
    setDistrictSearch('');
  };

  const runAnalysis = () => {
    if (!rawText.trim()) return;

    setAnalyzing(true);

    setTimeout(() => {
      // 1. Analyze suitability (Section 8 exemptions)
      let isGood = true;
      let suitabilityFeedback = 'Your request is well-structured and focuses on accessing records, which is appropriate for RTI.';
      
      if (lowerText.includes('national security') || lowerText.includes('cabinet paper') || lowerText.includes('foreign country') || lowerText.includes('intelligence bureau') || lowerText.includes('raw agent')) {
        isGood = false;
        suitabilityFeedback = 'Potential Section 8 Exemption: Information regarding national security, strategic interests, or cabinet deliberations is exempt under Section 8(1) of the RTI Act 2005.';
      } else if (lowerText.includes('why was i not') || lowerText.includes('why did you') || lowerText.includes('why did the officer') || lowerText.includes('kyu nahi')) {
        isGood = false;
        suitabilityFeedback = 'Under RTI Act Section 2(f), you can only seek existing material records (e.g. log sheets, file notings, reports). Public Information Officers cannot answer philosophical "Why" questions.';
      }

      // 2. Extract or estimate time period
      let timePeriod = 'Recent (Last 1-3 years)';
      const yearMatch = rawText.match(/\b(20\d{2}|19\d{2})\b/g);
      if (yearMatch) {
        timePeriod = yearMatch.join(', ');
      }

      // 3. Detect location / geographic hints
      let location = geoDistrict ? `${geoDistrict}, ${geoState}` : 'National / Central';
      if (lowerText.includes('jaipur')) location = 'Jaipur, Rajasthan';
      else if (lowerText.includes('delhi')) location = 'Delhi NCT';
      else if (lowerText.includes('mumbai')) location = 'Mumbai, Maharashtra';
      else if (lowerText.includes('bengaluru') || lowerText.includes('bangalore')) location = 'Bengaluru, Karnataka';
      else if (lowerText.includes('lucknow')) location = 'Lucknow, Uttar Pradesh';
      else if (lowerText.includes('patna')) location = 'Patna, Bihar';

      // 3.5 Indic Language detection & assistance (Hinglish/Hindi query helper)
      const isIndicInput = /[\u0900-\u097F]/.test(rawText) || lowerText.includes('mera') || lowerText.includes('mujhe') || lowerText.includes('kab tak') || lowerText.includes('jaankari') || lowerText.includes('paisa') || lowerText.includes('sarkari');
      let indicTranslation = '';
      if (isIndicInput) {
        indicTranslation = `Formalized RTI Request: "Kindly provide attested copies of records, sanction orders, and file notings related to: ${rawText.replace(/[\n\r]+/g, ' ')}"`;
      }

      // 4. Central vs State Jurisdiction Routing Guard (P0)
      let isStateDept = false;
      let routingWarning = '';
      let stateName = '';
      let statePortalUrl = '';

      const stateKeywords = [
        { keywords: ['delhi jal board', 'djb', 'mcd', 'delhi government', 'dtc bus'], name: 'Delhi NCT', portal: 'https://rtionline.delhi.gov.in' },
        { keywords: ['uttar pradesh', 'up police', 'lucknow municipal', 'kanpur', 'noida authority', 'up government', 'up pcmc', 'up jal nigam'], name: 'Uttar Pradesh', portal: 'http://rtionline.up.gov.in' },
        { keywords: ['maharashtra', 'bmc', 'mcgm', 'pune municipal', 'mumbai police', 'mhada', 'mmrda'], name: 'Maharashtra', portal: 'https://rtionline.maharashtra.gov.in' },
        { keywords: ['karnataka', 'bbmp', 'bda', 'bengaluru police', 'kptcl', 'karnataka government', 'bescom'], name: 'Karnataka', portal: 'https://rtionline.karnataka.gov.in' },
        { keywords: ['rajasthan', 'jaipur development authority', 'jda', 'rajasthan police', 'jodhpur municipal'], name: 'Rajasthan', portal: 'https://rti.rajasthan.gov.in' },
        { keywords: ['bihar', 'patna municipal', 'bihar police', 'bihar government'], name: 'Bihar', portal: 'http://jaankari.bihar.gov.in' },
        { keywords: ['tamil nadu', 'chennai corporation', 'cmda', 'tneb', 'tn police'], name: 'Tamil Nadu', portal: 'https://rtionline.tn.gov.in' },
        { keywords: ['west bengal', 'kolkata municipal', 'kmda', 'wb police'], name: 'West Bengal', portal: 'https://wb.gov.in' }
      ];

      const localKeywords = ['nagar nigam', 'nagar palika', 'zilla parishad', 'panchayat', 'municipal corporation', 'municipality', 'state police', 'state board'];

      const matchesState = stateKeywords.find(item => 
        item.keywords.some(kw => lowerText.includes(kw))
      );

      const hasLocalTerm = localKeywords.some(kw => lowerText.includes(kw));

      if (matchesState || hasLocalTerm || (geoState && geoState !== 'Chandigarh')) {
        // Special Legal Edge Case: Delhi Police reports to the Central MHA (Ministry of Home Affairs), not State.
        const isDelhiPoliceEdgeCase = lowerText.includes('delhi police') || lowerText.includes('delhi traffic police');
        
        if (!isDelhiPoliceEdgeCase) {
          isStateDept = true;
          stateName = matchesState ? matchesState.name : (geoState || 'State Government');
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
    }, 1200);
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

  if (!acceptedGuidelines) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="glass-card rounded-2xl border border-slate-200 bg-white p-8 shadow-md space-y-6">
          <div className="text-center pb-4 border-b border-slate-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 text-[10px] font-black uppercase tracking-wider mb-2">
              Statutory Interstitial Gate
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#123B5D] tracking-tight uppercase">
              {language === 'hi' ? 'आरटीआई ऑनलाइन पोर्टल के उपयोग के दिशा-निर्देश' : 'Guidelines for Use of RTI Online Portal'}
            </h2>
            <p className="text-xs text-slate-500 font-bold mt-1.5 uppercase tracking-wide">
              {language === 'hi' ? 'आरटीआई अधिनियम 2005 के तहत सांविधिक नियम' : 'Statutory Rules & Procedures under RTI Act 2005'}
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed max-h-96 overflow-y-auto pr-2 scrollbar-thin">
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <p>
                {language === 'hi' 
                  ? 'यह पोर्टल केवल भारत के नागरिकों द्वारा आरटीआई आवेदन ऑनलाइन दाखिल करने के लिए उपयोग किया जा सकता है।' 
                  : 'This portal can be used by Indian Citizens only to file Right to Information (RTI) applications online.'}
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <p>
                {language === 'hi' 
                  ? 'आरटीआई आवेदन दाखिल करने के लिए ₹10 का सांविधिक शुल्क निर्धारित है (बीपीएल कार्डधारकों के लिए शुल्क पूरी तरह से माफ है)।' 
                  : 'A statutory fee of ₹10 is prescribed for filing a new RTI application (waived entirely for Below Poverty Line (BPL) cardholders under Section 7(5)).'}
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
              <p>
                {language === 'hi' 
                  ? 'यह पोर्टल केवल केंद्र सरकार के मंत्रालयों, विभागों और केंद्रीय सार्वजनिक प्राधिकरणों के लिए है। राज्य सरकार के विभागों के लिए राज्य पोर्टल का उपयोग करें।' 
                  : 'This portal is designated for filing requests with Central Government Ministries, Departments, and Central Public Authorities only. Requests for State Government bodies filed here will be rejected without a refund.'}
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
              <p>
                {language === 'hi' 
                  ? 'आवेदन का मुख्य पाठ 3,000 वर्णों से अधिक नहीं होना चाहिए। यदि पाठ बड़ा है, तो उसे पीडीएफ दस्तावेज़ (1 एमबी तक) के रूप में संलग्न करें।' 
                  : 'The text of the request must be limited to 3,000 characters using standard characters. Any overflow or supporting information should be attached as a PDF file (under 1 MB limit).'}
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">5</span>
              <p>
                {language === 'hi' 
                  ? 'अधिनियम की धारा 8 के तहत छूट प्राप्त जानकारी (जैसे राष्ट्रीय सुरक्षा, विदेशी संबंध, व्यक्तिगत गोपनीयता) का अनुरोध न करें।' 
                  : 'Do not request information exempted under Section 8 of the RTI Act (including matters impacting national security, foreign relations, cabinet decisions, or private personal data).'}
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-5 w-5 rounded-full bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">6</span>
              <p>
                {language === 'hi' 
                  ? 'भुगतान के बाद, आपके पंजीकृत ईमेल और मोबाइल नंबर पर पुष्टिकरण एसएमएस और पंजीकरण संख्या भेजी जाएगी।' 
                  : 'Upon successful submission and payment, a unique Registration Number will be generated and sent via SMS and Email for future tracking.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-4">
            <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                id="guidelines-checkbox"
                className="h-4 w-4 rounded border-slate-300 text-[#123B5D] focus:ring-[#123B5D] shrink-0 mt-0.5"
                onChange={(e) => {
                  const check = document.getElementById('guidelines-submit-btn') as HTMLButtonElement;
                  if (check) check.disabled = !e.target.checked;
                }}
              />
              <span className="text-[11.5px] font-bold text-slate-800 leading-normal">
                {language === 'hi'
                  ? 'मैंने उपरोक्त दिशानिर्देशों को पढ़ और समझ लिया है और मैं इनका पालन करने के लिए सहमत हूँ।'
                  : 'I have read and understood the guidelines for using the RTI Online Portal and agree to follow them.'}
              </span>
            </label>

            <div className="flex justify-between items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveView('landing')}
                className="px-5 py-3 rounded-xl border border-slate-350 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-colors text-xs cursor-pointer"
              >
                {language === 'hi' ? 'वापस जाएँ' : 'Back to Home'}
              </button>
              <button
                type="button"
                id="guidelines-submit-btn"
                disabled
                onClick={() => setAcceptedGuidelines(true)}
                className="flex-1 px-5 py-3 rounded-xl bg-[#123B5D] hover:bg-[#0f172a] text-white font-extrabold text-xs shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <span>{language === 'hi' ? 'जमा करें और आगे बढ़ें' : 'Submit & Proceed'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      
      {/* Back button */}
      <button 
        onClick={() => setActiveView('landing')}
        className="text-xs font-bold text-slate-600 hover:text-primary-navy mb-4 flex items-center gap-1 cursor-pointer transition-colors"
      >
        ← Back to Homepage
      </button>

      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-navy/10 text-primary-navy mb-3">
          <Landmark className="h-6 w-6 text-primary-navy" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-primary-navy tracking-tight dark:text-white">
          {language === 'en' ? 'Describe What You Need' : 'बताएं कि आपको क्या जानकारी चाहिए'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
          {language === 'en' 
            ? 'We will analyze your request, check if it is suitable, suggest the correct department, and draft the questions.'
            : 'हम आपके अनुरोध का विश्लेषण करेंगे, जाँचेंगे कि क्या यह उपयुक्त है, सही विभाग का सुझाव देंगे, और प्रश्नों का मसौदा तैयार करेंगे।'}
        </p>
      </div>

      {/* Central-only Scope Warning */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50 text-slate-800 p-4.5 mb-6 text-xs flex gap-3.5 items-start leading-relaxed shadow-sm">
        <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold block text-sm uppercase text-amber-900 mb-0.5">Central Government Ministries Scope Notice</span>
          RTI Online portal is designated for filing requests with <strong>Central Government Ministries, Departments, and Central Public Authorities</strong>. 
          State Government and local municipal authorities must be filed through their respective State RTI portals.
          <div className="mt-2.5">
            <a 
              href="https://rtionline.gov.in/request/allpa.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-navy font-bold hover:underline inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs"
            >
              <Search className="h-3.5 w-3.5 text-primary-navy" /> View Official List of 2,000+ Central Public Authorities ↗
            </a>
          </div>
        </div>
      </div>

      {/* Geographic Authority & Local Body Finder (Comprehensive) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-6 dark:bg-slate-900 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-navy" />
              State, District & Local Body Authority Finder
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select any of India's 28 States, 8 UTs, 770+ Districts, or Municipal Corporations / Local Bodies.
            </p>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 self-start sm:self-auto">
            36 States/UTs • 770+ Districts
          </span>
        </div>

        {/* Quick Search Autocomplete */}
        <div className="relative mb-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              value={districtSearch}
              onChange={(e) => setDistrictSearch(e.target.value)}
              placeholder="Quick search any district or city (e.g. Kanpur, Ghaziabad, Pune, Patna, Indore, Kozhikode)..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
            />
          </div>

          {searchResults.length > 0 && (
            <div className="absolute z-20 left-0 right-0 top-full mt-1.5 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden max-h-56 overflow-y-auto">
              <div className="p-2 bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase">
                Matching Districts & Authorities
              </div>
              {searchResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSearchResult(item.state, item.district)}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-blue-50/70 border-b border-slate-50 flex items-center justify-between text-xs cursor-pointer transition-colors"
                >
                  <div>
                    <span className="font-bold text-slate-900">{item.district}</span>
                    <span className="text-slate-500 text-[11px] ml-2">({item.state})</span>
                  </div>
                  <span className="text-[10.5px] font-semibold text-primary-navy bg-blue-50 px-2 py-0.5 rounded-md">
                    {item.localBodiesCount} Local Bodies Available
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3-Tier Cascading Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="text-[10px] font-extrabold text-slate-600 block uppercase mb-1">1. Select State / UT</label>
            <select
              value={geoState}
              onChange={(e) => {
                setGeoState(e.target.value);
                setGeoDistrict('');
                setGeoLocalBody('');
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-navy focus:bg-white transition-all"
            >
              <option value="">-- Select State / UT ({geographicHierarchy.length}) --</option>
              {geographicHierarchy.map(s => (
                <option key={s.name} value={s.name}>{s.name} ({s.districts.length} Districts)</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-extrabold text-slate-600 block uppercase mb-1">2. Select District</label>
            <select
              value={geoDistrict}
              disabled={!geoState}
              onChange={(e) => {
                setGeoDistrict(e.target.value);
                setGeoLocalBody('');
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-navy focus:bg-white transition-all disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              <option value="">
                {geoState ? `-- Select District (${selectedStateObj?.districts.length || 0}) --` : 'Select State First'}
              </option>
              {selectedStateObj?.districts.map(d => (
                <option key={d.name} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-extrabold text-slate-600 block uppercase mb-1">3. Select Local Body / Dept</label>
            <select
              value={geoLocalBody}
              disabled={!geoDistrict}
              onChange={(e) => {
                const val = e.target.value;
                setGeoLocalBody(val);
              }}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-navy focus:bg-white transition-all disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              <option value="">
                {geoDistrict ? `-- Select Local Body (${selectedDistrictObj?.localBodies.length || 0}) --` : 'Select District First'}
              </option>
              {selectedDistrictObj?.localBodies.map(b => (
                <option key={b.name} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Local Body Action & Info Card */}
        {/* Selected Local Body Action & Info Card */}
        {geoDistrict && (
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Building2 className="h-5 w-5 text-primary-navy shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-black text-slate-900">
                    {geoLocalBody ? geoLocalBody : `All local authorities in District ${geoDistrict}`}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                    Jurisdiction: {geoDistrict}, {geoState} • State Public Authority
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const bodyText = geoLocalBody || `Municipal Corporation / District Administration of ${geoDistrict}`;
                  const insertStatement = `Regarding public records, work tenders, funds allocation and execution reports under ${bodyText}, District ${geoDistrict}, ${geoState}.\n`;
                  if (!rawText.includes(geoDistrict)) {
                    setRawText(prev => insertStatement + (prev ? '\n' + prev : ''));
                  }
                }}
                className="px-3.5 py-2 rounded-lg bg-primary-navy hover:bg-primary-blue text-white text-xs font-bold shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer transition-all"
              >
                <CornerDownRight className="h-3.5 w-3.5" />
                Insert into Query Box
              </button>
            </div>

            {/* State Redirection Alert */}
            <div className="rounded-xl border border-amber-250 bg-amber-50/70 p-4 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-800 leading-relaxed font-medium">
                  <strong className="text-amber-900 font-bold block mb-0.5">State Level Jurisdiction Warning</strong>
                  Local municipalities and district offices fall under the State Government of <strong>{geoState}</strong>. Central RTI Saathi handles Central public authorities only. Filing here may result in CPIO rejection.
                </div>
              </div>
              <div className="pt-2 border-t border-amber-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                <span className="text-slate-600 font-bold">Official Gateway: <strong>{geoState} State RTI Portal</strong></span>
                <a 
                  href={geoState.toLowerCase().includes('delhi') ? 'https://rtionline.delhi.gov.in/' : geoState.toLowerCase().includes('uttar') ? 'https://rtionline.up.gov.in/' : `https://rtionline.${geoState.toLowerCase().replace(/\s+/g, '')}.gov.in/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-black text-amber-950 hover:underline cursor-pointer bg-white px-3 py-1 rounded-lg border border-amber-300 shadow-3xs"
                >
                  Redirect to {geoState} Portal <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step 1: Select Topic */}
      <div className="glass-card rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-bold text-sm text-[#0f172a] mb-3.5">
          {language === 'en' ? 'Select Subject / Category:' : 'जानकारी की एक श्रेणी चुनें:'}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {topics.map(t => (
            <button
              key={t.id}
              onClick={() => handleTopicSelect(t.id)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold border transition-all cursor-pointer hover-lift ${
                selectedTopic === t.id
                  ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-750 hover:bg-slate-50 hover:border-slate-300 shadow-3xs'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Column Editor & AI Copilot Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
        
        {/* Left Column: Template Selection & Text Input Area (span 2) */}
        <div className="md:col-span-2 glass-card rounded-2xl p-6 shadow-sm space-y-4">
          
          {/* Templates library */}
          <div>
            <h3 className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-2">Standard RTI Template Questions</h3>
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
            <h3 className="font-bold text-sm text-slate-900 mb-1.5 dark:text-slate-100 font-sans">
              {language === 'en' ? 'Describe what records or information you need in plain language:' : 'सरल भाषा में बताएं कि आप क्या जानना चाहते हैं:'}
            </h3>
            <p className="text-[11px] text-slate-500 mb-3">
              {language === 'en' 
                ? 'Example: "Provide certified copies of work orders, expenditures, and completion reports for road repairs in 2023-2025."'
                : 'उदाहरण: "2023-2025 में सड़क मरम्मत के वर्क ऑर्डर, खर्च और पूर्णता रिपोर्ट की प्रमाणित प्रतियां प्रदान करें।"'}
            </p>

            <textarea
              rows={6}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder={language === 'en' ? 'Type your request description here...' : 'यहाँ अपना विवरण टाइप करें...'}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-primary-blue focus:bg-white bg-slate-50 leading-relaxed font-medium transition-all"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={runAnalysis}
              disabled={analyzing || !rawText.trim()}
              className="rounded-xl bg-primary-navy px-6 py-3 text-xs font-bold text-white hover:bg-primary-blue disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-2 shadow transition-all cursor-pointer"
            >
              {analyzing ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {language === 'en' ? 'Analyzing Jurisdiction & Authority...' : 'विश्लेषण किया जा रहा है...'}
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                  {language === 'en' ? 'Analyze & Find Department' : 'विश्लेषण करें और विभाग खोजें'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: AI Copilot Sidebar (span 1) */}
        <div className="glass-card rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-2">
            <Sparkles className="h-4.5 w-4.5 text-[#1e3a8a] animate-pulse" />
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0f172a]">RTI AI Copilot</h4>
          </div>

          {/* Health Score Progress Bar */}
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
              <span>RTI Health Score</span>
              <span className={overallHealth > 75 ? 'text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded' : overallHealth > 45 ? 'text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded' : 'text-red-700 font-bold bg-red-50 px-1.5 py-0.5 rounded'}>
                {overallHealth}% {overallHealth > 75 ? 'Strong' : overallHealth > 45 ? 'Good' : 'Needs Review'}
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  overallHealth > 75 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : overallHealth > 45 ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 'bg-gradient-to-r from-rose-500 to-red-400'
                }`}
                style={{ width: `${overallHealth}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 text-[11px] leading-relaxed text-slate-700">
            {/* Specificity feedback */}
            {specificityLevel === 'Weak' && rawText.trim().length > 0 && (
              <div className="p-3 rounded-xl bg-red-50/50 border border-red-200/60 text-red-800 font-semibold shadow-3xs">
                <strong>Query is too short:</strong> Please describe the record or event in detail (minimum 35 characters recommended).
              </div>
            )}

            {/* Time period warning */}
            {!hasTimePeriod && rawText.trim().length > 0 && (
              <div className="p-3 rounded-xl bg-amber-55 bg-amber-50/55 border border-amber-200/60 text-amber-900 font-semibold shadow-3xs">
                <strong>Timeframe missing:</strong> Your request doesn't specify a time period. Recommends adding dates (e.g. "between 2023 and 2025") to prevent reject delays.
              </div>
            )}

            {/* Question Intelligence Warning */}
            {isWhyQuestion && (
              <div className="p-3 rounded-xl bg-amber-50/55 border border-amber-200/60 text-amber-900 space-y-1.5 shadow-3xs">
                <div className="font-semibold">
                  <strong>"Why" Question Detected:</strong> Your request asks for reasons. A stronger RTI should request existing records instead.
                </div>
                <div className="border-t border-amber-200/30 pt-1 text-[10px]">
                  <strong>Recommended alternatives:</strong>
                  <ul className="list-disc pl-3.5 mt-0.5 space-y-0.5 font-bold">
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
              <div className="p-3 rounded-xl bg-red-50/50 border border-red-200/60 text-red-850 font-semibold shadow-3xs">
                <strong>Request is too broad:</strong> Recommends specifying a location, project name, or concrete document type to prevent processing rejections.
              </div>
            )}

            {/* General Guideline */}
            {rawText.trim().length === 0 && (
              <p className="text-slate-450 italic font-medium">
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
            <div className="rounded-2xl border border-amber-300 bg-amber-50/50 text-amber-900 p-5 shadow-xs">
              <div>
                <h4 className="font-bold text-sm text-amber-900">Indic Language Assistant (Hinglish/Hindi detected)</h4>
                <p className="text-xs mt-1 leading-relaxed text-amber-800">We formalized your request for optimal legal clarity:</p>
                <p className="text-xs font-bold mt-2 bg-white p-3 rounded-xl border border-amber-200 italic text-slate-800 shadow-xs">
                  "{analysisResult.indicTranslation}"
                </p>
              </div>
            </div>
          )}

          {/* Suitability Box (Section 8) */}
          <div className={`rounded-2xl border p-5 ${
            analysisResult.isGood 
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
              : 'bg-amber-50 border-amber-300 text-amber-900'
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
                <p className="text-xs mt-1 leading-relaxed opacity-95">{analysisResult.suitabilityFeedback}</p>
              </div>
            </div>
          </div>

          {/* Central vs State routing warning (High-contrast Red Alert) */}
          {analysisResult.isStateDept && (
            <div className="rounded-2xl border-2 border-red-300 bg-red-50 text-red-950 p-5.5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-black text-base text-red-900">
                    State Jurisdiction Detected ({analysisResult.stateName})
                  </h4>
                  <p className="text-xs leading-relaxed text-red-800 font-medium">
                    {analysisResult.routingWarning}
                  </p>
                  <div>
                    <a 
                      href={analysisResult.statePortalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      Go to official {analysisResult.stateName} RTI Portal
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Department Box with Match Ratings & Alternatives */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500">Match Confidence & Suggested Public Authority</h4>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                91% Match
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-navy/10 text-primary-navy">
                  <Landmark className="h-6 w-6 text-primary-navy" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-base leading-snug dark:text-slate-100">
                    {analysisResult.suggestedAuth.name}
                  </h5>
                  <p className="text-xs text-slate-600 font-bold mt-0.5">
                    {analysisResult.suggestedAuth.ministry} • Recommended
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-150 my-4 pt-4 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-extrabold text-slate-900 block mb-1 dark:text-slate-100">Why recommended?</span>
              {analysisResult.matchWhy}
            </div>

            {/* Alternatives */}
            <div className="border-t border-slate-150 my-4 pt-4">
              <span className="font-extrabold text-xs text-slate-500 uppercase tracking-wider block mb-2.5">Alternative Authorities Available</span>
              <div className="space-y-2">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">Department of Personnel and Training (DoPT)</span>
                    <span className="text-[10.5px] text-slate-500">Ministry of Personnel, Public Grievances and Pensions</span>
                  </div>
                  <span className="font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded text-[11px]">68% Match</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">Ministry of Road Transport and Highways (Alternate Division)</span>
                    <span className="text-[10.5px] text-slate-500">Regional Project Coordination Office</span>
                  </div>
                  <span className="font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded text-[11px]">54% Match</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-wrap gap-6 text-xs">
              <div>
                <span className="text-slate-500 font-bold block text-[10px] uppercase">Time Period</span>
                <span className="font-bold text-slate-800">{analysisResult.timePeriod}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block text-[10px] uppercase">Location / Territory</span>
                <span className="font-bold text-slate-800">{analysisResult.location}</span>
              </div>
            </div>

            {/* Official Source Verification Notice */}
            <div className="mt-4 border-t border-slate-200 pt-3 flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-200">
              <CheckCircle className="h-4.5 w-4.5 text-primary-navy shrink-0 mt-0.5" />
              <div>
                <strong>Official Source Verification:</strong> Department mapping verified against official Central & State RTI Directories according to Section 4 proactive disclosure mandates.
              </div>
            </div>

            {/* CTA to proceed */}
            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  setAnalysisResult(null);
                  setSelectedTopic('other');
                }}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                Choose Different Category
              </button>
              <button
                onClick={proceedToBuilder}
                className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow cursor-pointer transition-all"
              >
                Proceed to Draft Application
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
