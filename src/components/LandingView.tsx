'use client';

import React, { useState } from 'react';
import { 
  FileText, Search, ShieldCheck, Clock, CheckCircle2, 
  ArrowRight, Sparkles, BookOpen, Scale, HelpCircle, 
  Landmark, ChevronRight, CornerDownRight, FileQuestion, AlertTriangle, RefreshCw,
  User, CheckCircle, HelpCircle as HelpIcon
} from 'lucide-react';
import { authorityService } from '../services/authorityService';
import { AuthoritySuggestionResult } from '../services/types';
import { seedSearchResults } from '../services/seedData';

interface LandingViewProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setHelpCategory?: (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function LandingView({ setActiveView, language, setHelpCategory }: LandingViewProps) {
  // Authority Finder interactive query state
  const [authorityQuery, setAuthorityQuery] = useState('');
  const [authorityResult, setAuthorityResult] = useState<AuthoritySuggestionResult | null>(null);
  const [isSearchingAuth, setIsSearchingAuth] = useState(false);

  // Search Information state
  const [infoQuery, setInfoQuery] = useState('');
  const [searchResults, setSearchResults] = useState(seedSearchResults);

  const handleFindAuthority = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorityQuery.trim()) return;
    setIsSearchingAuth(true);
    const res = await authorityService.searchAuthorities(authorityQuery);
    setAuthorityResult(res);
    setIsSearchingAuth(false);
  };

  const handleInfoSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!infoQuery.trim()) {
      setSearchResults(seedSearchResults);
      return;
    }
    const q = infoQuery.toLowerCase();
    const filtered = seedSearchResults.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.snippet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
    setSearchResults(filtered);
  };

  const handlePopularSearch = (term: string) => {
    setInfoQuery(term);
    const q = term.toLowerCase();
    const filtered = seedSearchResults.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.snippet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
    setSearchResults(filtered);
  };

  const handleLearnClick = (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => {
    if (setHelpCategory) {
      setHelpCategory(category);
    }
    setActiveView('help');
  };

  const t = {
    en: {
      heroBadge: 'RIGHT TO INFORMATION ACT, 2005',
      heroTitle: 'Get the information you have a right to know.',
      heroSub: 'File an RTI request, find the right authority, track your application, and exercise your rights under the RTI Act, 2005.',
      startRti: 'File an RTI →',
      trackRti: 'Track an Application',
      
      authFinderHeading: 'Not sure where to send your RTI?',
      authFinderSub: 'Describe what information you need and we\'ll help identify the appropriate authority.',
      authFinderPlaceholder: 'e.g. Road construction expenditure in my area...',
      authFinderBtn: 'Find the right authority',
      authFinderLabel: 'Smart Authority Finder',
      authFinderLabelDesc: 'Assisted matching across public authorities',
      authStep1: 'Describe your need',
      authStep2: 'We find the right authority',
      authStep3: 'You file your RTI with ease',
      
      quickActionsHeading: 'What can you do?',
      quickActionFile: 'File an RTI',
      quickActionFileDesc: 'Draft and submit a new RTI request.',
      quickActionTrack: 'Track an Application',
      quickActionTrackDesc: 'Check status, deadlines and responses.',
      quickActionAuth: 'Find an Authority',
      quickActionAuthDesc: 'Identify the correct public authority or CPIO.',
      quickActionAppeal: 'File a First Appeal',
      quickActionAppealDesc: 'Challenge delayed, incomplete or unsatisfactory information.',
      quickActionMyRtis: 'My RTIs',
      quickActionMyRtisDesc: 'View and manage your submitted RTI requests.',
      quickActionPayment: 'Payment & Receipts',
      quickActionPaymentDesc: 'Make payments and access your receipts.',
      
      howHeading: 'How RTI Saathi works',
      howStep1Title: 'Find the authority',
      howStep1Desc: 'Identify the appropriate Public Information Officer.',
      howStep2Title: 'Build your request',
      howStep2Desc: 'Answer guided questions and prepare your RTI application.',
      howStep3Title: 'Submit & track',
      howStep3Desc: 'Submit the request and track the statutory timeline.',
      howStep4Title: 'Receive the response',
      howStep4Desc: 'Review the response and file an appeal when necessary.',
      
      trackPreviewHeading: 'Track your RTI application',
      trackPreviewSub: 'Know where your application stands and keep track of important deadlines.',
      trackPreviewBtn: 'Track Application',
      trackPreviewApp: 'Application',
      trackPreviewStatus: 'Under Review',
      trackPreviewSubmitted: 'Submitted on 12 May 2024',
      trackPreviewStep1: 'Submitted',
      trackPreviewStep1Date: '12 May 2024',
      trackPreviewStep2: 'Received by CPIO',
      trackPreviewStep2Date: '14 May 2024',
      trackPreviewStep3: 'Under Review',
      trackPreviewStep3Date: '16 May 2024',
      trackPreviewStep4: 'Response',
      trackPreviewStep4Date: 'by 11 Jun 2024',
      trackPreviewExpected: 'Expected response by: 11 Jun 2024',
      trackPreviewViewDetails: 'View details',
      
      rightsHeading: 'Know your RTI rights',
      rights30Days: '30 Days',
      rights30DaysDesc: 'Typical statutory response period under Section 7(1).',
      rightsFee: '₹10 Fee',
      rightsFeeDesc: 'Standard application fee (waived for BPL cards).',
      rightsAppeal: 'First Appeal',
      rightsAppealDesc: 'Available if CPIO response is delayed or incomplete.',
      rightsSecondAppeal: 'Second Appeal',
      rightsSecondAppealDesc: 'Escalation to the Information Commission (CIC/SIC).',
      rightsSec8: 'Section 8',
      rightsSec8Desc: 'Exemptions: Categories of info protected from disclosure.',
      rightsLearnMore: 'Learn more about RTI rules →',
      
      knowledgeHeading: 'RTI Knowledge Center',
      knowledgeSub: 'Find guidance on RTI rules, applications, appeals, fees, exemptions and deadlines.',
      knowledgePlaceholder: 'Search RTI information...',
      knowledgeBtn: 'Search',
      knowledgePopular: 'Popular links',
      knowledgePopular1: '30-day response time',
      knowledgePopular2: 'How to file first appeal',
      knowledgePopular3: 'RTI application fee',
      knowledgePopular4: 'Section 8 exemptions',
      knowledgeAllGuides: 'Browse all guides & FAQs ➔',
      
      resourcesHeading: 'Important RTI Resources',
      resourcesBtn: 'Explore all resources ➔',
      trustHeading: 'An initiative aligned with:',
      
      dopt: 'Department of Personnel and Training',
      cic: 'Central Information Commission',
      nationalPortal: 'National Portal of India',
      indiaGovIn: 'india.gov.in',
      gigw: 'Good Governance through Information'
    },
    hi: {
      heroBadge: 'सूचना का अधिकार अधिनियम, 2005',
      heroTitle: 'वह जानकारी प्राप्त करें जिसे जानने का आपको अधिकार है।',
      heroSub: 'आरटीआई आवेदन दर्ज करें, सही विभाग खोजें, अपने आवेदन को ट्रैक करें और आरटीआई अधिनियम, 2005 के तहत अपने अधिकारों का उपयोग करें।',
      startRti: 'आरटीआई दाखिल करें →',
      trackRti: 'आवेदन ट्रैक करें',
      
      authFinderHeading: 'समझ नहीं आ रहा आवेदन कहाँ भेजें?',
      authFinderSub: 'सरल भाषा में लिखें कि आपको क्या जानकारी चाहिए। हम सही लोक सूचना अधिकारी (CPIO) का सुझाव देंगे।',
      authFinderPlaceholder: 'उदा. मुझे अपने क्षेत्र में सड़क निर्माण के खर्च की जानकारी चाहिए...',
      authFinderBtn: 'सही विभाग खोजें',
      authFinderLabel: 'स्मार्ट विभाग खोजक',
      authFinderLabelDesc: 'सार्वजनिक प्राधिकरणों में सहायता प्राप्त मिलान',
      authStep1: 'अपनी आवश्यकता लिखें',
      authStep2: 'हम विभाग खोजेंगे',
      authStep3: 'आप आसानी से आरटीआई फाइल करें',
      
      quickActionsHeading: 'आप क्या कर सकते हैं?',
      quickActionFile: 'आरटीआई दाखिल करें',
      quickActionFileDesc: 'नया आरटीआई आवेदन तैयार करें और जमा करें।',
      quickActionTrack: 'आवेदन ट्रैक करें',
      quickActionTrackDesc: 'स्थिति, समयसीमा और उत्तरों की जांच करें।',
      quickActionAuth: 'विभाग खोजें',
      quickActionAuthDesc: 'सही लोक सूचना अधिकारी या विभाग की पहचान करें।',
      quickActionAppeal: 'प्रथम अपील दायर करें',
      quickActionAppealDesc: 'असंतोषजनक या विलंबित सूचना को चुनौती दें।',
      quickActionMyRtis: 'मेरे आरटीआई',
      quickActionMyRtisDesc: 'अपने सभी आरटीआई आवेदनों को प्रबंधित करें।',
      quickActionPayment: 'भुगतान व रसीदें',
      quickActionPaymentDesc: 'भुगतान करें और रसीदें डाउनलोड करें।',
      
      howHeading: 'आरटीआई साथी कैसे काम करता है',
      howStep1Title: 'विभाग खोजें',
      howStep1Desc: 'सही लोक सूचना अधिकारी की पहचान करने के लिए खोजें।',
      howStep2Title: 'आवेदन तैयार करें',
      howStep2Desc: 'निर्देशित प्रश्नों के उत्तर दें और आवेदन का मसौदा तैयार करें।',
      howStep3Title: 'जमा करें और ट्रैक करें',
      howStep3Desc: 'आवेदन जमा करें और वैधानिक समयसीमा पर नजर रखें।',
      howStep4Title: 'उत्तर प्राप्त करें',
      howStep4Desc: 'उत्तर की समीक्षा करें और आवश्यक होने पर अपील दायर करें।',
      
      trackPreviewHeading: 'अपना आरटीआई आवेदन ट्रैक करें',
      trackPreviewSub: 'जानें आपका आवेदन कहां है और वैधानिक समयसीमा का ट्रैक रखें।',
      trackPreviewBtn: 'आवेदन ट्रैक करें',
      trackPreviewApp: 'आवेदन',
      trackPreviewStatus: 'समीक्षा के अधीन',
      trackPreviewSubmitted: '12 मई 2024 को जमा किया गया',
      trackPreviewStep1: 'जमा किया गया',
      trackPreviewStep1Date: '12 मई 2024',
      trackPreviewStep2: 'CPIO द्वारा प्राप्त',
      trackPreviewStep2Date: '14 मई 2024',
      trackPreviewStep3: 'समीक्षा के अधीन',
      trackPreviewStep3Date: '16 मई 2024',
      trackPreviewStep4: 'उत्तर नियत',
      trackPreviewStep4Date: '11 जून 2024 तक',
      trackPreviewExpected: 'अनुमानित उत्तर तिथि: 11 जून 2024',
      trackPreviewViewDetails: 'विवरण देखें',
      
      rightsHeading: 'अपने आरटीआई अधिकार जानें',
      rights30Days: '30 दिन',
      rights30DaysDesc: 'धारा 7(1) के तहत उत्तर देने की वैधानिक अवधि।',
      rightsFee: '₹10 शुल्क',
      rightsFeeDesc: 'सांविधिक आवेदन शुल्क (गरीबी रेखा के नीचे के आवेदकों के लिए निःशुल्क)।',
      rightsAppeal: 'प्रथम अपील',
      rightsAppealDesc: 'उत्तर न मिलने या असंतोषजनक उत्तर पर उपलब्ध विकल्प।',
      rightsSecondAppeal: 'द्वितीय अपील',
      rightsSecondAppealDesc: 'सूचना आयोग (CIC/SIC) में अपील करने का सर्वोच्च अधिकार।',
      rightsSec8: 'धारा 8 छूट',
      rightsSec8Desc: 'वे श्रेणियां जिन्हें राष्ट्रीय सुरक्षा/हित में प्रकट नहीं किया जा सकता।',
      rightsLearnMore: 'आरटीआई नियमों के बारे में और जानें →',
      
      knowledgeHeading: 'आरटीआई सेवाएं और सूचना निर्देशिका',
      knowledgeSub: 'आरटीआई नियमों, आवेदनों, अपीलों, शुल्कों और छूटों पर आधिकारिक मार्गदर्शन प्राप्त करें।',
      knowledgePlaceholder: 'आरटीआई नियम, समयसीमा खोजें...',
      knowledgeBtn: 'खोजें',
      knowledgePopular: 'लोकप्रिय खोजें',
      knowledgePopular1: '30-दिन की उत्तर सीमा',
      knowledgePopular2: 'प्रथम अपील कैसे दायर करें',
      knowledgePopular3: 'आरटीआई आवेदन शुल्क',
      knowledgePopular4: 'धारा 8 के तहत छूट',
      knowledgeAllGuides: 'सभी गाइड्स और प्रश्न देखें ➔',
      
      resourcesHeading: 'महत्वपूर्ण आरटीआई संसाधन',
      resourcesBtn: 'सभी संसाधन देखें ➔',
      trustHeading: 'एक संरेखित पहल:',
      
      dopt: 'कार्मिक और प्रशिक्षण विभाग',
      cic: 'केंद्रीय सूचना आयोग',
      nationalPortal: 'भारत का राष्ट्रीय पोर्टल',
      indiaGovIn: 'india.gov.in',
      gigw: 'सूचना के माध्यम से सुशासन'
    }
  }[language];

  return (
    <div className="flex-1 bg-white overflow-x-hidden relative">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (GOV.UK Inspired Full Image cover) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden z-10 mx-auto max-w-7xl my-6 rounded-xl shadow-xs border border-[#D9E1EA]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/government-building.png" 
            alt="Indian Parliament" 
            className="w-full h-full object-cover object-[center_35%]" 
          />
          {/* Gradient Overlay: dark navy blue on the left to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#172B5B]/95 via-[#172B5B]/80 to-transparent lg:w-2/3 md:w-3/4" />
          <div className="absolute inset-0 bg-[#172B5B]/90 lg:hidden" /> {/* Solid overlay on mobile */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 md:py-20 lg:py-24 max-w-2xl text-white space-y-5 lg:min-h-[460px] flex flex-col justify-center">
          <span className="text-[11px] font-black tracking-wider uppercase text-amber-400">
            {t.heroBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.15]">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {t.heroSub}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setActiveView('onboarding')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-7 py-3 text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              {t.startRti}
            </button>
            <button
              onClick={() => setActiveView('status-lookup')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-transparent border border-white/40 hover:bg-white/10 text-white px-6 py-3 text-xs font-bold transition-all cursor-pointer"
            >
              {t.trackRti}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT CAN YOU DO? (Service Directory Directory Layout) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#D9E1EA] pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] uppercase">
              {t.quickActionsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t.quickActionFile,
                desc: t.quickActionFileDesc,
                view: 'onboarding',
                icon: <FileText className="h-5 w-5 text-[#2563EB]" />
              },
              {
                title: t.quickActionTrack,
                desc: t.quickActionTrackDesc,
                view: 'status-lookup',
                icon: <Clock className="h-5 w-5 text-[#2563EB]" />
              },
              {
                title: t.quickActionAuth,
                desc: t.quickActionAuthDesc,
                view: 'authorities',
                icon: <Landmark className="h-5 w-5 text-[#2563EB]" />
              },
              {
                title: t.quickActionAppeal,
                desc: t.quickActionAppealDesc,
                view: 'appeal-lookup',
                icon: <Scale className="h-5 w-5 text-[#2563EB]" />
              },
              {
                title: t.quickActionMyRtis,
                desc: t.quickActionMyRtisDesc,
                view: 'dashboard',
                icon: <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
              },
              {
                title: t.quickActionPayment,
                desc: t.quickActionPaymentDesc,
                view: 'reconciliation',
                icon: <RefreshCw className="h-5 w-5 text-[#2563EB]" />
              }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveView(service.view)}
                className="bg-white border border-[#D9E1EA] hover:border-[#2563EB]/60 p-5 rounded-lg text-left transition-all hover:shadow-xs cursor-pointer flex flex-col justify-between h-40 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <h3 className="font-extrabold text-sm text-[#111827] group-hover:text-[#2563EB] group-hover:underline transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
                <div className="text-[#2563EB] font-bold text-xs flex items-center gap-1 mt-4">
                  <span>{language === 'hi' ? 'शुरू करें' : 'Get started'}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SMART AUTHORITY FINDER (Directly Below Services) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F5F7FA] border-y border-[#D9E1EA] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-b border-[#D9E1EA] pb-3">
            <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider block">
              {t.authFinderLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mt-1">
              {t.authFinderHeading}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {t.authFinderSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Finder form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <form onSubmit={handleFindAuthority} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-[#64748B]" />
                    <input
                      type="text"
                      value={authorityQuery}
                      onChange={(e) => setAuthorityQuery(e.target.value)}
                      placeholder={t.authFinderPlaceholder}
                      className="w-full rounded-lg border border-[#D9E1EA] bg-white pl-10 pr-4 py-3.5 text-xs font-semibold text-[#111827] outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/25 transition-all shadow-3xs"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearchingAuth || !authorityQuery.trim()}
                    className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-3.5 text-xs font-bold transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {isSearchingAuth ? (language === 'en' ? 'Searching...' : 'खोज रहे हैं...') : t.authFinderBtn}
                  </button>
                </div>
                <div className="text-[10px] text-[#64748B] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{t.authFinderLabelDesc}</span>
                </div>
              </form>

              {/* Suggestions output details */}
              {authorityResult && authorityResult.suggestedAuthority && (
                <div className="rounded-lg border border-blue-200 bg-white p-5 space-y-3 shadow-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-[#D9E1EA] pb-2">
                    <span className="text-[9px] font-black uppercase tracking-wider bg-[#2563EB] text-white px-2 py-0.5 rounded">
                      {language === 'en' ? 'Suggested Public Authority' : 'सुझाया गया लोक प्राधिकरण'} ({authorityResult.confidence}% {language === 'en' ? 'Match' : 'मिलान'})
                    </span>
                    <span className="text-[10px] font-semibold text-[#64748B]">
                      {language === 'en' ? 'Level' : 'स्तर'}: {authorityResult.jurisdictionLevel}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-[#172B5B]">
                      {authorityResult.suggestedAuthority.name}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {authorityResult.reason}
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#D9E1EA] gap-2 text-[11px] text-[#64748B]">
                    <span>
                      CPIO: <strong className="text-[#111827] font-bold">{authorityResult.suggestedAuthority.cpioName}</strong> ({authorityResult.suggestedAuthority.department})
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveView('onboarding')}
                      className="text-xs font-bold text-[#2563EB] hover:underline transition-all inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Draft Request' : 'आवेदन तैयार करें'} ➔</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Steps on Right (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D9E1EA] pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <div className="space-y-4">
                {[
                  { num: '01', title: t.authStep1, desc: language === 'en' ? 'Describe your query details.' : 'अपने प्रश्न का विवरण दर्ज करें।' },
                  { num: '02', title: t.authStep2, desc: language === 'en' ? 'AI suggests matching CPIO authority.' : 'एआई संबंधित सीपीआईओ प्राधिकरण का सुझाव देता है।' },
                  { num: '03', title: t.authStep3, desc: language === 'en' ? 'File application with fee waiver.' : 'शुल्क छूट के साथ आवेदन दाखिल करें।' }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-[#D9E1EA] text-[10px] font-bold text-[#64748B]">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111827]">{step.title}</h4>
                      <p className="text-[11px] text-[#64748B] font-normal">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border-b border-[#D9E1EA] pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] uppercase">
              {t.howHeading}
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="absolute top-6 left-16 right-16 h-0.5 border-t border-dashed border-[#D9E1EA] hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: t.howStep1Title,
                  desc: t.howStep1Desc,
                },
                {
                  step: '02',
                  title: t.howStep2Title,
                  desc: t.howStep2Desc,
                },
                {
                  step: '03',
                  title: t.howStep3Title,
                  desc: t.howStep3Desc,
                },
                {
                  step: '04',
                  title: t.howStep4Title,
                  desc: t.howStep4Desc,
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#172B5B] text-white text-sm font-black shadow-xs ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-sm text-[#111827]">{item.title}</h3>
                    <p className="text-[11px] text-[#64748B] leading-relaxed max-w-xs font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TRACK YOUR RTI APPLICATION */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F5F7FA] border-y border-[#D9E1EA] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider block">
                {language === 'hi' ? 'रियल-टाइम ट्रैकिंग' : 'Real-time Tracking'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                {t.trackPreviewHeading}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                {t.trackPreviewSub}
              </p>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. RTI-2024-000123"
                  className="rounded-lg border border-[#D9E1EA] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#111827] outline-none focus:border-[#2563EB] flex-1"
                />
                <button
                  onClick={() => setActiveView('status-lookup')}
                  className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-5 py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm shrink-0"
                >
                  {t.trackPreviewBtn}
                </button>
              </div>
            </div>

            {/* Right Column: Timeline Card (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#D9E1EA] rounded-lg p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D9E1EA] pb-3 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xs text-[#111827]">{t.trackPreviewApp}-2024-000123</span>
                  <span className="inline-flex items-center text-[9px] font-bold text-[#16A34A] bg-[#DCFCE7] border border-[#BBF7D0] px-1.5 py-0.5 rounded-full">
                    {t.trackPreviewStatus}
                  </span>
                </div>
                <span className="text-[10px] text-[#64748B] font-medium">{t.trackPreviewSubmitted}</span>
              </div>

              {/* Status steps */}
              <div className="grid grid-cols-4 gap-2 pt-1 relative">
                {/* Connecting lines */}
                <div className="absolute top-2 left-6 right-6 h-0.5 bg-[#E2E8F0] -translate-y-0.5" />
                <div className="absolute top-2 left-6 w-2/3 h-0.5 bg-emerald-500 -translate-y-0.5" />

                {[
                  { label: t.trackPreviewStep1, date: t.trackPreviewStep1Date, state: 'done' },
                  { label: t.trackPreviewStep2, date: t.trackPreviewStep2Date, state: 'done' },
                  { label: t.trackPreviewStep3, date: t.trackPreviewStep3Date, state: 'active' },
                  { label: t.trackPreviewStep4, date: t.trackPreviewStep4Date, state: 'upcoming' }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-1 relative z-10">
                    <div className={`h-4 w-4 rounded-full flex items-center justify-center ring-4 ring-white ${
                      step.state === 'done' ? 'bg-emerald-500 text-white' :
                      step.state === 'active' ? 'bg-blue-600 text-white' : 'bg-slate-200'
                    }`}>
                      {step.state === 'done' && <CheckCircle2 className="h-2.5 w-2.5" />}
                      {step.state === 'active' && <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-bold text-[#111827] leading-tight">{step.label}</p>
                      <p className="text-[8px] text-[#64748B] font-semibold">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#D9E1EA] pt-3.5 text-xs text-[#64748B] gap-2">
                <span className="italic text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 font-medium">
                  {language === 'hi' ? 'प्रदर्शन सूचना: यह केवल एक उदाहरण / अभ्यास डेटा है।' : 'Practice Note: This is simulated sample data for demonstration.'}
                </span>
                <button
                  onClick={() => setActiveView('status-lookup')}
                  className="font-bold text-[#2563EB] hover:underline transition-all inline-flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{t.trackPreviewViewDetails} ➔</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. KNOW YOUR RTI RIGHTS */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D9E1EA] pb-3 gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] uppercase">
              {t.rightsHeading}
            </h2>
            <button
              onClick={() => handleLearnClick('All')}
              className="text-xs font-bold text-[#2563EB] hover:underline transition-all cursor-pointer inline-flex items-center gap-0.5"
            >
              <span>{t.rightsLearnMore}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: t.rights30Days, desc: t.rights30DaysDesc },
              { title: t.rightsFee, desc: t.rightsFeeDesc },
              { title: t.rightsAppeal, desc: t.rightsAppealDesc },
              { title: t.rightsSecondAppeal, desc: t.rightsSecondAppealDesc },
              { title: t.rightsSec8, desc: t.rightsSec8Desc }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D9E1EA] p-5 rounded-lg flex flex-col justify-between h-36 hover:border-[#2563EB]/40 transition-colors"
              >
                <h3 className="font-extrabold text-sm text-[#111827]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#64748B] leading-relaxed font-normal mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. KNOWLEDGE CENTER (Search & Sidebar Resources) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F5F7FA] border-y border-[#D9E1EA] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-b border-[#D9E1EA] pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#111827] uppercase">
              {t.knowledgeHeading}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-normal">
              {t.knowledgeSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Search and Results (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <form onSubmit={handleInfoSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-[#64748B]" />
                  <input
                    type="text"
                    value={infoQuery}
                    onChange={(e) => setInfoQuery(e.target.value)}
                    placeholder={t.knowledgePlaceholder}
                    className="w-full rounded-lg border border-[#D9E1EA] bg-white pl-10 pr-4 py-3.5 text-xs font-semibold text-[#111827] outline-none focus:border-[#2563EB]"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-3.5 text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  {t.knowledgeBtn}
                </button>
              </form>

              {/* Popular links */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                <span className="font-semibold">{t.knowledgePopular}:</span>
                {[
                  { label: t.knowledgePopular1, term: '30-day response time' },
                  { label: t.knowledgePopular2, term: 'How to file first appeal' },
                  { label: t.knowledgePopular3, term: 'RTI application fee' },
                  { label: t.knowledgePopular4, term: 'Section 8 exemptions' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePopularSearch(item.term)}
                    className="px-2.5 py-1 rounded border border-[#D9E1EA] bg-white text-[#2563EB] hover:bg-[#F5F7FA] transition-colors font-semibold cursor-pointer text-[11px]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-[#D9E1EA] p-5 rounded-lg flex flex-col justify-between hover:border-[#2563EB]/40 transition-colors"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className={`px-2 py-0.5 rounded ${
                          item.sourceType === 'Official Source' ? 'bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]' :
                          item.sourceType === 'Statutory Rule' ? 'bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF]' :
                          'bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE]'
                        }`}>
                          {item.sourceType}
                        </span>
                        <span className="text-[#64748B]">{item.category}</span>
                      </div>
                      <h3 className="font-extrabold text-xs sm:text-sm text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                        {item.snippet}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D9E1EA] mt-4 flex justify-between items-center text-[10px] text-[#64748B] font-semibold">
                      <span>Source: {item.sourceName}</span>
                      <button
                        onClick={() => handleLearnClick('All')}
                        className="text-[#2563EB] hover:underline cursor-pointer"
                      >
                        Read Guide ➔
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleLearnClick('All')}
                  className="text-xs font-bold text-[#2563EB] hover:underline cursor-pointer"
                >
                  {t.knowledgeAllGuides}
                </button>
              </div>
            </div>

            {/* Right: Important resources sidebar (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-[#D9E1EA] rounded-lg p-5 space-y-4 shadow-3xs">
              <h3 className="font-black text-xs text-[#111827] uppercase tracking-wider border-b border-[#D9E1EA] pb-2">
                {language === 'hi' ? 'महत्वपूर्ण आरटीआई संसाधन' : 'Important RTI resources'}
              </h3>
              
              <div className="space-y-3.5 text-xs">
                {[
                  { label: 'RTI Act, 2005 (Full Text)', view: 'help', category: 'Basics' as const },
                  { label: 'RTI Rules, 2012', url: 'https://rtionline.gov.in/RTI_Rules_2012.pdf' },
                  { label: 'DoPT RTI Manual', url: 'https://dopt.gov.in/RTI_Manual' },
                  { label: 'Central Information Commission', url: 'https://cic.gov.in' },
                  { label: 'Public Authorities Directory', view: 'authorities' },
                  { label: 'State RTI Portals', view: 'authorities' }
                ].map((res, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    {res.url ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-700 hover:text-[#2563EB] transition-colors flex items-center justify-between w-full"
                      >
                        <span>{res.label}</span>
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (res.category) handleLearnClick(res.category);
                          else if (res.view === 'authorities') setActiveView('authorities');
                          else setActiveView('help');
                        }}
                        className="font-semibold text-slate-700 hover:text-[#2563EB] transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                      >
                        <span>{res.label}</span>
                        <ExternalLinkIcon />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#D9E1EA]">
                <button
                  onClick={() => handleLearnClick('All')}
                  className="w-full rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white text-center py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  {t.resourcesBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ALIGNED INITIATIVES TRUST ROW */}
      {/* ========================================================================= */}
      <section className="py-6.5 bg-slate-50 border-t border-[#D9E1EA] z-10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            {t.trustHeading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* DoPT */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="DoPT Emblem" className="h-6 w-auto object-contain" />
              <div className="text-[9px] font-bold leading-none text-[#172B5B]">
                <p>DoPT</p>
                <p className="text-[7px] text-[#64748B] font-medium uppercase mt-0.5">{language === 'hi' ? 'कार्मिक और प्रशिक्षण विभाग' : 'Dept of Personnel & Training'}</p>
              </div>
            </div>
            {/* CIC */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="CIC Emblem" className="h-6 w-auto object-contain" />
              <div className="text-[9px] font-bold leading-none text-[#172B5B]">
                <p>CIC</p>
                <p className="text-[7px] text-[#64748B] font-medium uppercase mt-0.5">{language === 'hi' ? 'केंद्रीय सूचना आयोग' : 'Central Info Commission'}</p>
              </div>
            </div>
            {/* india.gov.in */}
            <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <div className="h-5 w-5 rounded bg-blue-900 flex items-center justify-center text-white text-[9px] font-black">IN</div>
              <div className="text-[9px] font-black text-slate-800 tracking-tight leading-none">
                <span>india.</span><span className="text-orange-500">gov.in</span>
                <p className="text-[6px] text-[#64748B] font-semibold uppercase mt-0.5">{t.nationalPortal}</p>
              </div>
            </div>
            {/* GIGW */}
            <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <div className="h-5 w-5 rounded bg-emerald-600 flex items-center justify-center text-white text-[9px] font-black">Q</div>
              <div className="text-[9px] font-bold leading-none text-slate-800">
                <p className="font-extrabold">GIGW 3.0</p>
                <p className="text-[6px] text-[#64748B] font-semibold uppercase mt-0.5">Good Governance Web Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helpers
function ExternalLinkIcon() {
  return (
    <svg className="h-3 w-3 text-slate-400 shrink-0 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
