'use client';

import React, { useState } from 'react';
import { 
  FileText, Search, ShieldCheck, Clock, CheckCircle2, 
  ArrowRight, Sparkles, BookOpen, Scale, Landmark, ChevronRight, 
  CornerDownRight, FileQuestion, AlertTriangle, RefreshCw,
  User, CheckCircle, HelpCircle as HelpIcon, ArrowUpRight
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
      
      quickActionsHeading: 'RTI Service Directory',
      quickActionFile: 'File an RTI',
      quickActionFileDesc: 'Draft and submit a new RTI request under Section 6(1) of the Act. Answer simple guided questions, prepare request body, and pay simulated fee.',
      quickActionTrack: 'Track Application',
      quickActionTrackDesc: 'Monitor real-time status of your submitted RTI requests, view deadlines, CPIO letters, and responses.',
      quickActionAuth: 'Find an Authority',
      quickActionAuthDesc: 'Search and identify the correct Public Authority, Ministry, or CPIO with contact details.',
      quickActionAppeal: 'File a First Appeal',
      quickActionAppealDesc: 'Challenge delayed, unsatisfactory, or incomplete responses under Section 19(1).',
      quickActionMyRtis: 'My RTIs',
      quickActionMyRtisDesc: 'Access your citizen dashboard, draft filings, and receipts.',
      quickActionPayment: 'Payments',
      quickActionPaymentDesc: 'View payment history, transaction status, and fee receipts.',
      
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
      
      quickActionsHeading: 'आरटीआई सेवा निर्देशिका',
      quickActionFile: 'आरटीआई दाखिल करें',
      quickActionFileDesc: 'अधिनियम की धारा 6(1) के तहत नया आरटीआई आवेदन तैयार करें और प्रस्तुत करें। सरल प्रश्नों के उत्तर दें, पाठ तैयार करें और सांकेतिक शुल्क का भुगतान करें।',
      quickActionTrack: 'आवेदन ट्रैक करें',
      quickActionTrackDesc: 'अपने प्रस्तुत आवेदनों की वास्तविक समय स्थिति देखें, समयसीमा, सीपीआईओ के पत्रों और प्राप्त उत्तरों को ट्रैक करें।',
      quickActionAuth: 'विभाग खोजें',
      quickActionAuthDesc: 'विस्तृत संपर्क विवरणों के साथ लोक सूचना अधिकारियों, मंत्रालयों और सार्वजनिक विभागों को खोजें व पहचानें।',
      quickActionAppeal: 'प्रथम अपील दायर करें',
      quickActionAppealDesc: 'धारा 19(1) के तहत असंतोषजनक, अधूरी या समय पर उत्तर न मिलने वाली स्थिति में प्रथम अपील दायर करें।',
      quickActionMyRtis: 'मेरे आरटीआई',
      quickActionMyRtisDesc: 'अपने नागरिक डैशबोर्ड तक पहुंचें, ड्राफ्ट आवेदनों और भुगतानों को प्रबंधित करें।',
      quickActionPayment: 'भुगतान व रसीदें',
      quickActionPaymentDesc: 'भुगतान इतिहास, लेनदेन की स्थिति और शुल्क रसीदें प्राप्त करें।',
      
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
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden z-10 mx-auto max-w-[1360px] w-[calc(100%-48px)] sm:w-[calc(100%-64px)] my-6 rounded-2xl shadow-sm bg-[#172B5B]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/government-building.png" 
            alt="Indian Parliament Building" 
            className="w-full h-full object-cover object-[center_30%] opacity-45" 
          />
          {/* Gradient Overlay: dark navy blue on the left to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081534]/95 via-[#081534]/80 to-transparent lg:w-2/3 md:w-3/4" />
          <div className="absolute inset-0 bg-[#081534]/90 lg:hidden" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 md:py-24 lg:py-28 max-w-2xl text-white space-y-6 lg:min-h-[480px] flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 w-fit">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-400">
              {t.heroBadge}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12]">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-normal">
            {t.heroSub}
          </p>
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setActiveView('onboarding')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-7 py-3.5 text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-md"
            >
              {t.startRti}
            </button>
            <button
              onClick={() => setActiveView('status-lookup')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-6 py-3.5 text-xs font-bold transition-all cursor-pointer"
            >
              {t.trackRti}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES DIRECTORY (Asymmetric Editorial Grid Layout) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
              {language === 'en' ? 'Direct Services Gateway' : 'प्रत्यक्ष सेवा प्रवेशद्वार'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.quickActionsHeading}
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 1. File an RTI - Large Primary Block (Spans 8/12 on lg) */}
            <div className="md:col-span-12 lg:col-span-8 flex">
              <button
                onClick={() => setActiveView('onboarding')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-8 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between w-full min-h-[220px] group relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 h-32 w-32 bg-blue-50 rounded-full -mr-8 -mt-8 opacity-40 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="space-y-4 max-w-xl relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB]">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {t.quickActionFile}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {t.quickActionFileDesc}
                  </p>
                </div>
                <div className="text-[#2563EB] font-bold text-xs flex items-center gap-1.5 mt-6 relative z-10">
                  <span>{language === 'hi' ? 'आवेदन अभी शुरू करें' : 'Start application now'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* 2. Track Application - Medium Primary Block (Spans 4/12 on lg) */}
            <div className="md:col-span-6 lg:col-span-4 flex">
              <button
                onClick={() => setActiveView('status-lookup')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-8 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between w-full min-h-[220px] group relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 h-24 w-24 bg-amber-50 rounded-full -mr-6 -mt-6 opacity-40 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {t.quickActionTrack}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {t.quickActionTrackDesc}
                  </p>
                </div>
                <div className="text-[#2563EB] font-bold text-xs flex items-center gap-1.5 mt-6 relative z-10">
                  <span>{language === 'hi' ? 'ट्रैकिंग खोलें' : 'Open tracker'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* 3. Find Authority (Spans 4/12 on lg) */}
            <div className="md:col-span-6 lg:col-span-4 flex">
              <button
                onClick={() => setActiveView('authorities')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-6 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between w-full group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                      <Landmark className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {t.quickActionAuth}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {t.quickActionAuthDesc}
                  </p>
                </div>
                <div className="text-[#2563EB] font-bold text-xs flex items-center gap-1 mt-4">
                  <span>{language === 'hi' ? 'विभाग खोजें' : 'Search directory'}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* 4. First Appeal (Spans 4/12 on lg) */}
            <div className="md:col-span-6 lg:col-span-4 flex">
              <button
                onClick={() => setActiveView('appeal-lookup')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-6 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between w-full group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Scale className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {t.quickActionAppeal}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {t.quickActionAppealDesc}
                  </p>
                </div>
                <div className="text-[#2563EB] font-bold text-xs flex items-center gap-1 mt-4">
                  <span>{language === 'hi' ? 'अपील दर्ज करें' : 'Initiate appeal'}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* 5. My RTIs & 6. Payments combined nicely */}
            <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveView('dashboard')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-5 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between h-full group"
              >
                <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {t.quickActionMyRtis}
                  </h4>
                  <p className="text-[10px] text-slate-450 mt-1 line-clamp-2">
                    {language === 'hi' ? 'सभी आवेदन प्रबंधित करें' : 'Manage files'}
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('reconciliation')}
                className="bg-white border border-[#E2E8F0] hover:border-blue-500/40 p-5 rounded-xl text-left transition-all hover:shadow-md cursor-pointer flex flex-col justify-between h-full group"
              >
                <div className="h-8 w-8 rounded bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <RefreshCw className="h-4 w-4" />
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {t.quickActionPayment}
                  </h4>
                  <p className="text-[10px] text-slate-450 mt-1 line-clamp-2">
                    {language === 'hi' ? 'रसीदें और इतिहास' : 'Receipts history'}
                  </p>
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SMART AUTHORITY FINDER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#EEF3FA] border-b border-[#D9E1EA] relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider block">
              {t.authFinderLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.authFinderHeading}
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl font-normal">
              {t.authFinderSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Finder form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <form onSubmit={handleFindAuthority} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-4.5 h-4.5 w-4.5 text-slate-400" />
                    <input
                      type="text"
                      value={authorityQuery}
                      onChange={(e) => setAuthorityQuery(e.target.value)}
                      placeholder={t.authFinderPlaceholder}
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-all shadow-3xs"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearchingAuth || !authorityQuery.trim()}
                    className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-7 py-4 text-xs font-bold transition-all disabled:opacity-50 cursor-pointer shadow-sm shrink-0"
                  >
                    {isSearchingAuth ? (language === 'en' ? 'Searching...' : 'खोज रहे हैं...') : t.authFinderBtn}
                  </button>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1.5 font-medium pl-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{t.authFinderLabelDesc}</span>
                </div>
              </form>

              {/* Suggestions output details */}
              {authorityResult && authorityResult.suggestedAuthority && (
                <div className="rounded-xl border border-blue-200 bg-white p-6 space-y-4 shadow-sm animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 gap-2">
                    <span className="text-[9px] font-black uppercase tracking-wider bg-[#2563EB] text-white px-2.5 py-0.5 rounded">
                      {language === 'en' ? 'Suggested Public Authority' : 'सुझाया गया लोक प्राधिकरण'} ({authorityResult.confidence}% {language === 'en' ? 'Match' : 'मिलान'})
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {language === 'en' ? 'Level' : 'स्तर'}: {authorityResult.jurisdictionLevel}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-base text-[#172B5B]">
                      {authorityResult.suggestedAuthority.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {authorityResult.reason}
                    </p>
                  </div>

                  <div className="pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#E2E8F0] gap-2 text-xs text-slate-500">
                    <span>
                      CPIO: <strong className="text-slate-800 font-bold">{authorityResult.suggestedAuthority.cpioName}</strong> ({authorityResult.suggestedAuthority.department})
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

            {/* Smart finder flowchart (5 cols) */}
            <div className="lg:col-span-5 pt-4 lg:pt-0">
              <div className="relative p-6 bg-white border border-[#E2E8F0] rounded-xl shadow-xs space-y-4">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 border-b border-[#F1F5F9] pb-2">
                  {language === 'en' ? 'Matching Process Flow' : 'मिलान प्रक्रिया फ्लो'}
                </div>
                <div className="flex flex-col gap-3 relative">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-extrabold text-xs">1</div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{language === 'en' ? 'Input Query' : 'इनपुट प्रश्न'}</p>
                      <p className="text-[10px] text-slate-500 leading-none mt-0.5">{language === 'en' ? 'Describe the information needed' : 'आवश्यक जानकारी का विवरण दें'}</p>
                    </div>
                  </div>
                  {/* Connector Arrow */}
                  <div className="flex justify-center my-0.5">
                    <div className="h-4 w-0.5 border-l border-dashed border-slate-350"></div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100/70">
                    <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 font-extrabold text-xs">2</div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{language === 'en' ? 'Semantic Matching' : 'शब्दार्थ आधारित मिलान'}</p>
                      <p className="text-[10px] text-slate-500 leading-none mt-0.5">{language === 'en' ? 'Keyword matching across directories' : 'कीवर्ड्स का प्राधिकरण निर्देशिका से मिलान'}</p>
                    </div>
                  </div>
                  {/* Connector Arrow */}
                  <div className="flex justify-center my-0.5">
                    <div className="h-4 w-0.5 border-l border-dashed border-slate-350"></div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100/70">
                    <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-650 shrink-0 font-extrabold text-xs">3</div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{language === 'en' ? 'Authority Suggestions' : 'प्राधिकरण का सुझाव'}</p>
                      <p className="text-[10px] text-slate-500 leading-none mt-0.5">{language === 'en' ? 'Department matching with 90%+ confidence' : '90%+ सटीकता के साथ विभाग का मिलान'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 space-y-12">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
              {language === 'en' ? 'Process Overview' : 'प्रक्रिया का अवलोकन'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.howHeading}
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
          </div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="absolute top-6 left-16 right-16 h-0.5 border-t border-dashed border-slate-200 hidden lg:block" />

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
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#172B5B] text-white text-sm font-black shadow-xs ring-4 ring-white group-hover:bg-blue-600 group-hover:scale-105 transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-normal">
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
      <section className="py-16 bg-[#F1F6FF] border-y border-[#D9E1EA] relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Form (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider block">
                {language === 'hi' ? 'रियल-टाइम ट्रैकिंग' : 'Real-time Tracking'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t.trackPreviewHeading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {t.trackPreviewSub}
              </p>
              
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="e.g. RTI-2024-000123"
                  className="rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#2563EB] flex-1 shadow-3xs"
                />
                <button
                  onClick={() => setActiveView('status-lookup')}
                  className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-5 py-3 text-xs font-bold transition-all cursor-pointer shadow-sm shrink-0"
                >
                  {t.trackPreviewBtn}
                </button>
              </div>
            </div>

            {/* Right Column: Timeline Card (7 cols) - Clean Contrast White Card */}
            <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E8F0] pb-3 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-slate-800">{t.trackPreviewApp}-2024-000123</span>
                  <span className="inline-flex items-center text-[9px] font-bold text-[#16A34A] bg-[#DCFCE7] border border-[#BBF7D0] px-2 py-0.5 rounded-full">
                    {t.trackPreviewStatus}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{t.trackPreviewSubmitted}</span>
              </div>

              {/* Status steps */}
              <div className="grid grid-cols-4 gap-2 pt-1 relative">
                {/* Connecting lines */}
                <div className="absolute top-2.5 left-6 right-6 h-0.5 bg-[#E2E8F0] -translate-y-0.5" />
                <div className="absolute top-2.5 left-6 w-2/3 h-0.5 bg-emerald-500 -translate-y-0.5" />

                {[
                  { label: t.trackPreviewStep1, date: t.trackPreviewStep1Date, state: 'done' },
                  { label: t.trackPreviewStep2, date: t.trackPreviewStep2Date, state: 'done' },
                  { label: t.trackPreviewStep3, date: t.trackPreviewStep3Date, state: 'active' },
                  { label: t.trackPreviewStep4, date: t.trackPreviewStep4Date, state: 'upcoming' }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-2 relative z-10">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ring-4 ring-white ${
                      step.state === 'done' ? 'bg-emerald-500 text-white' :
                      step.state === 'active' ? 'bg-blue-600 text-white' : 'bg-slate-200'
                    }`}>
                      {step.state === 'done' && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {step.state === 'active' && <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-800 leading-tight">{step.label}</p>
                      <p className="text-[8px] text-slate-500 font-semibold">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#E2E8F0] pt-4 text-xs text-slate-500 gap-2">
                <span className="italic text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 font-medium">
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
      <section className="py-16 bg-white relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2E8F0] pb-4 gap-3">
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
                {language === 'en' ? 'Constitutional Powers' : 'संवैधानिक शक्तियां'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t.rightsHeading}
              </h2>
            </div>
            <button
              onClick={() => handleLearnClick('All')}
              className="text-xs font-bold text-[#2563EB] hover:underline transition-all cursor-pointer inline-flex items-center gap-0.5"
            >
              <span>{t.rightsLearnMore}</span>
            </button>
          </div>

          {/* 5-Column Dashboard-style Info Strip with Vertical Line Separators */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              { title: t.rights30Days, desc: t.rights30DaysDesc },
              { title: t.rightsFee, desc: t.rightsFeeDesc },
              { title: t.rightsAppeal, desc: t.rightsAppealDesc },
              { title: t.rightsSecondAppeal, desc: t.rightsSecondAppealDesc },
              { title: t.rightsSec8, desc: t.rightsSec8Desc }
            ].map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-3 md:py-2 flex flex-col justify-start space-y-3 first:pl-0 last:pr-0"
              >
                <h3 className="font-black text-lg sm:text-xl text-[#172B5B]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. KNOWLEDGE CENTER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0] relative z-10">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider block">
              {language === 'en' ? 'Resources & Guides' : 'संसाधन और दिशानिर्देश'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.knowledgeHeading}
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              {t.knowledgeSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Search and Results (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <form onSubmit={handleInfoSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-4.5 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    value={infoQuery}
                    onChange={(e) => setInfoQuery(e.target.value)}
                    placeholder={t.knowledgePlaceholder}
                    className="w-full rounded-lg border border-[#CBD5E1] bg-white pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 outline-none focus:border-[#2563EB] shadow-3xs"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white px-7 py-4 text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  {t.knowledgeBtn}
                </button>
              </form>

              {/* Popular links */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
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
                    className="px-2.5 py-1.5 rounded border border-[#E2E8F0] bg-white text-[#2563EB] hover:bg-[#F1F5F9] transition-all font-semibold cursor-pointer text-[10px]"
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
                    className="bg-white border border-[#E2E8F0] p-5 rounded-lg flex flex-col justify-between hover:border-blue-500/30 transition-all hover:shadow-xs"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[9px] font-bold">
                        <span className={`px-2 py-0.5 rounded ${
                          item.sourceType === 'Official Source' ? 'bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]' :
                          item.sourceType === 'Statutory Rule' ? 'bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF]' :
                          'bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE]'
                        }`}>
                          {item.sourceType}
                        </span>
                        <span className="text-slate-450 uppercase">{item.category}</span>
                      </div>
                      <h3 className="font-bold text-sm text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.snippet}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1F5F9] mt-4 flex justify-between items-center text-[10px] text-slate-450 font-semibold">
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

            {/* Right: Important resources list of links (4 cols) - Clean list, not cards */}
            <div className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-5 shadow-3xs">
              <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider border-b border-[#E2E8F0] pb-2">
                {language === 'hi' ? 'महत्वपूर्ण आरटीआई संसाधन' : 'Important RTI resources'}
              </h3>
              
              <div className="space-y-4 text-xs divide-y divide-slate-100">
                {[
                  { label: 'RTI Act, 2005 (Full Text)', view: 'help', category: 'Basics' as const },
                  { label: 'RTI Rules, 2012', url: 'https://rtionline.gov.in/RTI_Rules_2012.pdf' },
                  { label: 'DoPT RTI Manual', url: 'https://dopt.gov.in/RTI_Manual' },
                  { label: 'Central Information Commission', url: 'https://cic.gov.in' },
                  { label: 'Public Authorities Directory', view: 'authorities' },
                  { label: 'State RTI Portals', view: 'authorities' }
                ].map((res, idx) => (
                  <div key={idx} className="flex items-center justify-between pt-3.5 first:pt-0">
                    {res.url ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-600 hover:text-[#2563EB] hover:translate-x-0.5 transition-all duration-200 flex items-center justify-between w-full"
                      >
                        <span>{res.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (res.category) handleLearnClick(res.category);
                          else if (res.view === 'authorities') setActiveView('authorities');
                          else setActiveView('help');
                        }}
                        className="font-semibold text-slate-600 hover:text-[#2563EB] hover:translate-x-0.5 transition-all duration-205 text-left flex items-center justify-between w-full cursor-pointer"
                      >
                        <span>{res.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E2E8F0]">
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
      <section className="py-8 bg-white border-t border-[#E2E8F0] z-10 relative">
        <div className="mx-auto max-w-[1360px] w-full px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-black text-slate-450 uppercase tracking-wider block">
            {t.trustHeading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* DoPT */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="DoPT Emblem" className="h-6 w-auto object-contain" />
              <div className="text-[9px] font-bold leading-none text-[#172B5B]">
                <p>DoPT</p>
                <p className="text-[7px] text-slate-500 font-medium uppercase mt-0.5">{language === 'hi' ? 'कार्मिक और प्रशिक्षण विभाग' : 'Dept of Personnel & Training'}</p>
              </div>
            </div>
            {/* CIC */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="CIC Emblem" className="h-6 w-auto object-contain" />
              <div className="text-[9px] font-bold leading-none text-[#172B5B]">
                <p>CIC</p>
                <p className="text-[7px] text-slate-500 font-medium uppercase mt-0.5">{language === 'hi' ? 'केंद्रीय सूचना आयोग' : 'Central Info Commission'}</p>
              </div>
            </div>
            {/* india.gov.in */}
            <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <div className="h-5 w-5 rounded bg-blue-900 flex items-center justify-center text-white text-[9px] font-black">IN</div>
              <div className="text-[9px] font-black text-slate-800 tracking-tight leading-none">
                <span>india.</span><span className="text-orange-500">gov.in</span>
                <p className="text-[6px] text-slate-550 font-semibold uppercase mt-0.5">{t.nationalPortal}</p>
              </div>
            </div>
            {/* GIGW */}
            <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 duration-200">
              <div className="h-5 w-5 rounded bg-emerald-600 flex items-center justify-center text-white text-[9px] font-black">Q</div>
              <div className="text-[9px] font-bold leading-none text-slate-800">
                <p className="font-extrabold">GIGW 3.0</p>
                <p className="text-[6px] text-slate-500 font-semibold uppercase mt-0.5">Good Governance Web Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
