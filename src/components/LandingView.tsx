'use client';

import React, { useState } from 'react';
import { 
  FileText, Search, ShieldCheck, CreditCard, Clock, BellRing, 
  HelpCircle, Sparkles, BookOpen, Scale, ArrowRight, CornerDownRight 
} from 'lucide-react';
import { mockFAQs, FAQ } from '../data/mockData';

interface LandingViewProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
}

export default function LandingView({ setActiveView, language }: LandingViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FAQ[]>([]);

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
      step1: 'Describe your request',
      step1Desc: 'Type your question in natural language (English or Hindi). Our AI extracts the key terms.',
      step2: 'Select Authority',
      step2Desc: 'We suggest the correct Central/State public department so you never file in the wrong place.',
      step3: 'AI Draft Builder',
      step3Desc: 'We automatically format your query into 5 precise, legally appropriate questions to avoid CPIO rejection.',
      step4: 'Secure Review & Pay',
      step4Desc: 'Review the generated form, upload BPL certificate if applicable, and complete the ₹10 fee payment.',
      step5: 'Track & Appeal',
      step5Desc: 'Track statutory countdowns. If they omit answers, generate a First Appeal in two clicks.',
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
      quickLearn: 'Learn RTI Act',
      quickLearnSub: 'Basics, fees and limits'
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
      step1: 'अपना अनुरोध बताएं',
      step1Desc: 'अपनी समस्या को सरल भाषा में लिखें (अंग्रेजी या हिंदी)। हमारा एआई मुख्य शब्दों को समझ लेता है।',
      step2: 'विभाग का चयन करें',
      step2Desc: 'हम सही सरकारी विभाग का सुझाव देते हैं ताकि आप कभी भी गलत जगह आवेदन न भेजें।',
      step3: 'एआई ड्राफ्ट बिल्डर',
      step3Desc: 'हम आपके प्रश्न को 5 विशिष्ट, कानूनी रूप से उपयुक्त प्रश्नों में प्रारूपित करते हैं ताकि विभाग खारिज न कर सके।',
      step4: 'समीक्षा और भुगतान',
      step4Desc: 'तैयार प्रपत्र की जांच करें, यदि आवश्यक हो तो बीपीएल प्रमाण पत्र अपलोड करें, और ₹10 शुल्क का भुगतान करें।',
      step5: 'ट्रैक और अपील',
      step5Desc: 'समयसीमा को ट्रैक करें। यदि विभाग आधा-अधूरा उत्तर देता है, तो केवल दो क्लिक में प्रथम अपील तैयार करें।',
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
      quickLearn: 'आरटीआई कानून जानें',
      quickLearnSub: 'मूल बातें, शुल्क और सीमाएं'
    }
  }[language];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = mockFAQs.filter(faq => 
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

          {/* Action 6: Learn RTI */}
          <div 
            onClick={() => setActiveView('help')}
            className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all cursor-pointer dark:bg-slate-900 dark:border-slate-850"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base dark:text-white">{t.quickLearn}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.quickLearnSub}</p>
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
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
          {searchQuery && searchResults.length === 0 && (
            <div className="mt-4 text-center text-xs text-slate-500 py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              We couldn\'t find a matching official result. Try searching with other terms or check out the{' '}
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold mb-4 shadow">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step1}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold mb-4 shadow">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step2}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold mb-4 shadow">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step3}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step3Desc}</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-navy text-white text-sm font-bold mb-4 shadow">
                04
              </div>
              <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step4}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step4Desc}</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-saffron text-white text-sm font-bold mb-4 shadow">
                05
              </div>
              <h4 className="font-bold text-slate-900 text-sm dark:text-white">{t.step5}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed dark:text-slate-400">{t.step5Desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Basic FAQ Previews */}
      <section className="py-12 bg-slate-100/50 border-t border-slate-200 dark:bg-slate-900/30 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h3 className="text-xl font-bold text-primary-navy text-center mb-8 dark:text-white">{t.faqTitle}</h3>
          
          <div className="space-y-4">
            {mockFAQs.slice(0, 3).map(faq => (
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
