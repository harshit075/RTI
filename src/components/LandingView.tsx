'use client';

import React, { useState } from 'react';
import { 
  FileText, Search, ShieldCheck, CreditCard, Clock, BellRing, 
  HelpCircle, Sparkles, BookOpen, Scale, ArrowRight, CornerDownRight, RefreshCw, AlertTriangle
} from 'lucide-react';
import { FAQ, mockDisclosures } from '../data/mockData';

interface LandingViewProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
}

export default function LandingView({ setActiveView, language }: LandingViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FAQ[]>([]);
  const [disclosureResults, setDisclosureResults] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  React.useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error('Failed to load FAQs:', err));
  }, []);



  const t = {
    en: {
      heroTitle: 'Get the information you have a right to know.',
      heroSub: 'File, track, and manage your Right to Information requests in one clear, guided journey.',
      ctaStart: 'Start an RTI Application',
      ctaTrack: 'Track My RTI',
      ctaNotSure: 'I am not sure where to start',
      searchLabel: 'Has this information already been published?',
      searchPlaceholder: 'Search FAQs, authorities, or published documents (e.g. passport delay, railway tenders)...',
      searchBtn: 'Search',
      trustOfficial: 'Demo Concept Portal',
      trustPayment: '₹10 Secure Payment',
      trustTrack: 'Live Status Timeline',
      trustAlerts: 'Sms / Email Updates',
      trustSupport: 'Accessibility & Support',
      howItWorksTitle: 'How RTI Saathi Works',
      howItWorksSub: 'Filing an RTI doesn\'t require a legal degree. We guide you step-by-step.',
      step1: 'Submit Request to CPIO',
      step1Desc: 'Formulate and submit your inquiry to the Central Public Information Officer (CPIO) of the matching authority.',
      step2: 'CPIO Decision (30 Days)',
      step2Desc: 'CPIO must supply the requested records or reject under Section 8 exemptions within 30 days.',
      step3: 'FAA First Appeal',
      step3Desc: 'If CPIO rejects, responds late, or omits questions, file a First Appeal to the senior FAA officer within 30 days.',
      step4: 'FAA Order (30-45 Days)',
      step4Desc: 'The First Appellate Authority decides your appeal and issues a final department order.',
      step5: 'Second Appeal to CIC',
      step5Desc: 'If FAA appeal is unsatisfactory, legally appeal to the Central Information Commission (CIC) at cic.gov.in.',
      faqTitle: 'Frequently Asked Questions',
      viewAllFaqs: 'View Help Centre FAQs',
      quickActionsTitle: 'What do you want to do today?',
      quickFile: 'File New RTI',
      quickFileSub: 'Draft, review, and submit',
      quickTrack: 'Track RTI',
      quickTrackSub: 'Check status and dates',
      quickAppeal: 'File First Appeal',
      quickAppealSub: 'Address incomplete replies',
      quickAuth: 'Find Department',
      quickAuthSub: 'Search government CPIOs',
      quickSearch: 'Search Disclosures',
      quickSearchSub: 'Browse public files',
      quickReconcile: 'Reconcile Payment',
      quickReconcileSub: 'Money deducted, request pending?'
    },
    hi: {
      heroTitle: 'वह जानकारी प्राप्त करें जिसे जानने का आपको अधिकार है।',
      heroSub: 'सूचना का अधिकार (RTI) के तहत आवेदन दर्ज करें, ट्रैक करें और अपने अनुरोधों को एक स्पष्ट व निर्देशित यात्रा में प्रबंधित करें।',
      ctaStart: 'आरटीआई आवेदन शुरू करें',
      ctaTrack: 'मेरा आरटीआई ट्रैक करें',
      ctaNotSure: 'मुझे समझ नहीं आ रहा कहाँ से शुरू करूँ',
      searchLabel: 'क्या यह जानकारी पहले से ही प्रकाशित की जा चुकी है?',
      searchPlaceholder: 'आरटीआई नियम, विभाग या पहले से पूछे गए सवालों को खोजें...',
      searchBtn: 'खोजें',
      trustOfficial: 'डेमो वैचारिक मॉडल',
      trustPayment: '₹10 सुरक्षित भुगतान',
      trustTrack: 'लाइव स्टेटस टाइमलाइन',
      trustAlerts: 'एसएमएस / ईमेल अपडेट',
      trustSupport: 'अभिगम्यता और सहायता',
      howItWorksTitle: 'आरटीआई साथी कैसे काम करता है',
      howItWorksSub: 'आरटीआई दाखिल करने के लिए किसी कानूनी डिग्री की आवश्यकता नहीं है। हम कदम-दर-कदम मार्गदर्शन करते हैं।',
      step1: 'सीपीआईओ को अनुरोध भेजें',
      step1Desc: 'सीपीआईओ को अपना प्रश्न प्रारूपित करके प्रस्तुत करें।',
      step2: 'सीपीआईओ निर्णय (30 दिन)',
      step2Desc: 'सीपीआईओ को 30 दिनों के भीतर दस्तावेज़ देने होंगे या धारा 8 के तहत अस्वीकार करना होगा।',
      step3: 'प्रथम अपील (FAA)',
      step3Desc: 'यदि जवाब अधूरा है या देरी हुई है, तो 30 दिनों के भीतर वरिष्ठ अपील अधिकारी को प्रथम अपील भेजें।',
      step4: 'FAA आदेश (30-45 दिन)',
      step4Desc: 'प्रथम अपील अधिकारी आपकी अपील पर सुनवाई करके अंतिम आदेश जारी करता है।',
      step5: 'CIC को द्वितीय अपील',
      step5Desc: 'यदि प्रथम अपील भी असंतोषजनक हो, तो cic.gov.in पर केंद्रीय सूचना आयोग (CIC) में अपील करें।',
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
      viewAllFaqs: 'सहायता केंद्र पर सभी प्रश्न देखें',
      quickActionsTitle: 'आज आप क्या करना चाहते हैं?',
      quickFile: 'नया आरटीआई दाखिल करें',
      quickFileSub: 'प्रारूप तैयार करें और भेजें',
      quickTrack: 'आरटीआई ट्रैक करें',
      quickTrackSub: 'स्थिति और तिथियों की जांच करें',
      quickAppeal: 'प्रथम अपील दायर करें',
      quickAppealSub: 'अधूरे जवाबों का समाधान करें',
      quickAuth: 'विभाग खोजें',
      quickAuthSub: 'सरकारी अधिकारियों को खोजें',
      quickSearch: 'प्रकाशित दस्तावेज़',
      quickSearchSub: 'सार्वजनिक फाइलों को ब्राउज़ करें',
      quickReconcile: 'भुगतान मिलान (Reconciliation)',
      quickReconcileSub: 'असफल भुगतानों को सिंक्रोनाइज़ करें'
    }
  }[language];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setDisclosureResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    
    // Search disclosures
    const discResults = mockDisclosures.filter(disc => 
      disc.keywords.some(kw => query.includes(kw)) ||
      disc.title.toLowerCase().includes(query) ||
      disc.ministry.toLowerCase().includes(query) ||
      disc.snippet.toLowerCase().includes(query)
    );
    setDisclosureResults(discResults);

    // Search FAQs
    const results = faqs.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query) || 
      faq.category.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-primary-navy/5 via-transparent to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-saffron/10 px-3.5 py-1.5 text-xs font-bold text-secondary-saffron mb-6 border border-secondary-saffron/20 animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Guided Citizen Services Dashboard</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-primary-navy sm:text-5xl md:text-6xl leading-[1.1] dark:text-white">
            {t.heroTitle}
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed dark:text-slate-400">
            {t.heroSub}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveView('onboarding')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary-navy px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-primary-blue hover:-translate-y-0.5 transition-all focus-ring cursor-pointer"
            >
              {t.ctaStart}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all focus-ring cursor-pointer"
            >
              {t.ctaTrack}
            </button>
            <button
              onClick={() => setActiveView('onboarding')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-blue-50/80 border border-blue-200 text-secondary-saffron px-6 py-4 text-sm font-bold hover:bg-blue-100/50 transition-all focus-ring cursor-pointer"
            >
              {t.ctaNotSure}
            </button>
          </div>
        </div>
      </section>

      {/* Central Government Scope Warning Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 mb-8 animate-in fade-in duration-300">
        <div className="rounded-2xl border border-[#E5E2D9] bg-[#FAF9F5] p-5 text-xs text-slate-700 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#B94A48] shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-xs block uppercase tracking-wider text-[#B94A48]">
                CRITICAL COMPLIANCE NOTICE: CENTRAL GOVERNMENT ONLY
              </span>
              This portal is strictly for filing requests with **Central Government Ministries, Departments, and Central Public Authorities** (such as Railways, UIDAI, EPFO, Passport Office, Income Tax). 
              State Government authorities (e.g. Uttar Pradesh, Maharashtra, Karnataka, Delhi NCT, local municipalities, state police) **cannot** be filed here. Submitting state-level applications will result in rejection with <span className="font-extrabold text-[#B94A48]">NO REFUND</span>.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
            <a 
              href="https://rtionline.gov.in/request/allpa.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#123B5D] hover:bg-[#1e5885] text-white text-center font-bold px-4 py-2.5 rounded-xl text-[10.5px] shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Search className="h-3.5 w-3.5 text-white" /> Public Authorities List (2,000+) ↗
            </a>
            <button
              onClick={() => setActiveView('authorities')}
              className="bg-white hover:bg-red-50/20 border border-[#B94A48] text-[#B94A48] text-center font-bold px-4 py-2.5 rounded-xl text-[10.5px] shadow-sm transition-colors cursor-pointer"
            >
              Explore Database
            </button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-y border-slate-200 py-6 dark:bg-slate-900 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="flex flex-col items-center gap-1.5 p-2">
              <ShieldCheck className="h-6 w-6 text-primary-blue" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.trustOfficial}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <CreditCard className="h-6 w-6 text-emerald-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.trustPayment}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <Clock className="h-6 w-6 text-secondary-saffron" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.trustTrack}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <BellRing className="h-6 w-6 text-purple-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.trustAlerts}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2 col-span-2 md:col-span-1">
              <HelpCircle className="h-6 w-6 text-blue-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.trustSupport}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-primary-navy mb-6 text-center sm:text-left dark:text-white">
          {t.quickActionsTitle}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Action 1: File RTI */}
          <div 
            onClick={() => setActiveView('onboarding')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-navy/5 text-primary-navy group-hover:bg-primary-navy group-hover:text-white transition-colors mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickFile}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickFileSub}</p>
          </div>

          {/* Action 2: Track RTI */}
          <div 
            onClick={() => setActiveView('dashboard')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-secondary-saffron group-hover:bg-secondary-saffron group-hover:text-white transition-colors mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickTrack}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickTrackSub}</p>
          </div>

          {/* Action 3: File Appeal */}
          <div 
            onClick={() => setActiveView('dashboard')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors mb-4">
              <Scale className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickAppeal}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickAppealSub}</p>
          </div>

          {/* Action 4: Authority Explorer */}
          <div 
            onClick={() => setActiveView('authorities')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickAuth}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickAuthSub}</p>
          </div>

          {/* Action 5: Search disclosures */}
          <div 
            onClick={() => {
              const el = document.getElementById('search-info-bar');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickSearch}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickSearchSub}</p>
          </div>

          {/* Action 6: Reconcile Payment */}
          <div 
            onClick={() => setActiveView('reconciliation')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-350 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-4 animate-pulse">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickReconcile}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickReconcileSub}</p>
          </div>

        </div>
      </section>

      {/* Information Search Bar Section */}
      <section id="search-info-bar" className="py-12 bg-white border-y border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-primary-navy dark:text-white">{t.searchLabel}</h3>
            <p className="text-xs text-slate-500 mt-1">Section 4 of the RTI Act mandates proactive government disclosures. Search them here before filing.</p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2 p-1.5 border border-slate-350 rounded-2xl bg-slate-50 focus-within:border-primary-blue shadow-sm">
            <div className="flex items-center pl-3 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 bg-transparent px-3 py-2 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary-navy px-5 py-2 text-xs font-bold text-white hover:bg-primary-blue transition-colors cursor-pointer"
            >
              {t.searchBtn}
            </button>
          </form>

          {/* Search Results Display */}
          {disclosureResults.length > 0 && (
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/20 p-5 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-start gap-2.5">
                <Sparkles className="h-5 w-5 text-primary-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-primary-navy">We found something that may answer your question:</h4>
                  <p className="text-xs text-slate-500 leading-snug mt-0.5">The government has proactively published details related to this topic. Check this before filing to save time.</p>
                </div>
              </div>
              <div className="space-y-3">
                {disclosureResults.map((disc, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-3xs">
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-primary-blue bg-blue-50 px-2 py-0.5 rounded">
                        {disc.category}
                      </span>
                      <h5 className="font-bold text-slate-800 text-sm">{disc.title}</h5>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{disc.snippet}</p>
                      <span className="text-[10px] text-slate-400 font-bold block">{disc.ministry} • {disc.source}</span>
                    </div>
                    <a
                      href={disc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-navy hover:bg-primary-blue text-white font-bold text-xs px-4.5 py-2.5 rounded-xl shrink-0 shadow-sm cursor-pointer whitespace-nowrap text-center w-full sm:w-auto"
                    >
                      View Information
                    </a>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-250 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-500 leading-snug">
                <span>Still need more information? You can proceed with drafting a new custom query.</span>
                <button
                  onClick={() => setActiveView('onboarding')}
                  className="rounded-xl border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-4.5 py-2.5 font-bold transition-all cursor-pointer whitespace-nowrap"
                >
                  Continue with RTI
                </button>
              </div>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 divide-y divide-slate-200">
              {searchResults.map(faq => (
                <div key={faq.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-secondary-saffron tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">{faq.citation}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mt-1">{faq.question}</h4>
                  <p className="text-xs text-slate-650 mt-1 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
          {searchQuery && searchResults.length === 0 && disclosureResults.length === 0 && (
            <div className="mt-4 text-center text-xs text-slate-500 py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              We couldn't find a matching official result. Try searching with other terms or check out the{' '}
              <button onClick={() => setActiveView('help')} className="text-primary-blue font-bold hover:underline cursor-pointer">
                Help Centre FAQ
              </button>
              .
            </div>
          )}
        </div>
      </section>

      {/* 5-Step Process "How RTI Works" */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-primary-navy dark:text-white">{t.howItWorksTitle}</h3>
          <p className="text-sm text-slate-500 mt-2">{t.howItWorksSub}</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold shadow">
                    01
                  </div>
                  <span className="text-[9px] font-bold bg-blue-50 text-primary-blue px-2 py-0.5 rounded">
                    Sec 6(1)
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step1}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step1Desc}</p>
              </div>
              <div className="text-[10px] font-bold text-slate-400 mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                Action: Draft & File
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold shadow">
                    02
                  </div>
                  <span className="text-[9px] font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded">
                    Sec 7(1)
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step2}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step2Desc}</p>
              </div>
              <div className="text-[10px] font-bold text-amber-600 mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                Limit: 30 Days
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold shadow">
                    03
                  </div>
                  <span className="text-[9px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                    Sec 19(1)
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step3}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step3Desc}</p>
              </div>
              <div className="text-[10px] font-bold text-purple-700 mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                Limit: 30 Days
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold shadow">
                    04
                  </div>
                  <span className="text-[9px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                    Sec 19(6)
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step4}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step4Desc}</p>
              </div>
              <div className="text-[10px] font-bold text-purple-700 mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                Limit: 30-45 Days
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-saffron text-white text-sm font-bold shadow animate-pulse">
                    05
                  </div>
                  <span className="text-[9px] font-bold bg-red-50 text-red-705 px-2 py-0.5 rounded">
                    Sec 19(3)
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step5}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step5Desc}</p>
              </div>
              <div className="text-[10px] font-bold text-red-700 mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                External Appeal
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Basic FAQ Previews */}
      <section className="py-12 bg-slate-100/50 border-t border-slate-200 dark:bg-slate-900/30 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h3 className="text-xl font-bold text-primary-navy text-center mb-8 dark:text-white">{t.faqTitle}</h3>
          
          <div className="space-y-4">
            {faqs.slice(0, 3).map(faq => (
              <div key={faq.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-slate-800 text-sm flex items-start gap-1.5 dark:text-slate-200">
                    <CornerDownRight className="h-4 w-4 text-secondary-saffron mt-0.5 shrink-0" />
                    {faq.question}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold shrink-0">{faq.citation}</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed pl-5 dark:text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setActiveView('help')}
              className="inline-flex items-center justify-center rounded-lg border border-primary-navy px-4 py-2.5 text-xs font-bold text-primary-navy hover:bg-primary-navy hover:text-white transition-all focus-ring cursor-pointer"
            >
              {t.viewAllFaqs}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
