'use client';

import React, { useState } from 'react';
import { 
  FileText, Search, ShieldCheck, Clock, CheckCircle2, 
  ArrowRight, Sparkles, BookOpen, Scale, HelpCircle, 
  Landmark, ChevronRight, CornerDownRight, FileQuestion 
} from 'lucide-react';
import { authorityService } from '../services/authorityService';
import { AuthoritySuggestionResult, Authority } from '../services/types';
import { seedSearchResults } from '../services/seedData';

interface LandingViewProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
}

export default function LandingView({ setActiveView, language }: LandingViewProps) {
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

  const t = {
    en: {
      heroTitle: 'Get the information you have a right to know.',
      heroSub: 'File, track and manage your Right to Information requests through one clear, guided journey.',
      startRti: 'Start an RTI →',
      trackRti: 'Track an RTI',
      notSureLink: 'Not sure where to begin? Find the right authority →',
      quickStartTitle: 'What would you like to do?',
      quickStartFile: 'File an RTI',
      quickStartFileDesc: 'Draft and submit a new request with guided assistance',
      quickStartTrack: 'Track an Application',
      quickStartTrackDesc: 'Check 30-day deadlines, CPIO status, and updates',
      quickStartAuth: 'Find an Authority',
      quickStartAuthDesc: 'Locate central ministries and local government bodies',
      quickStartLearn: 'Understand RTI',
      quickStartLearnDesc: 'Read filing rules, fee exemptions, and appeal guides',
      howTitle: 'How RTI Saathi helps',
      howSub: 'Navigating public records made simple and legally precise.',
      authFinderTitle: 'Not sure where to send your request?',
      authFinderSub: 'Describe what you need in plain language. We will match the designated Public Information Officer (CPIO).',
      authFinderPlaceholder: 'e.g. I want information about road construction expenditure in my area...',
      findBtn: 'Find the right authority',
      searchTitle: 'Search RTI information',
      searchSub: 'Explore statutory rules, published records, proactive disclosures, and FAQs.',
      searchPlaceholder: 'Search by keyword (e.g. 30 days limit, Section 8, tender expenditure)...',
      scopeNotice: 'Covers Central Government ministries and departments. State requests are directed to the designated state portal.'
    },
    hi: {
      heroTitle: 'वह जानकारी प्राप्त करें जिसे जानने का आपको अधिकार है।',
      heroSub: 'सूचना का अधिकार (RTI) के तहत आवेदन दर्ज करें, ट्रैक करें और अपने अनुरोधों को एक स्पष्ट व निर्देशित यात्रा में प्रबंधित करें।',
      startRti: 'आरटीआई शुरू करें →',
      trackRti: 'आरटीआई ट्रैक करें',
      notSureLink: 'शुरुआत कहाँ से करें? सही विभाग खोजें →',
      quickStartTitle: 'आज आप क्या करना चाहते हैं?',
      quickStartFile: 'आरटीआई दाखिल करें',
      quickStartFileDesc: 'सरल मार्गदर्शन के साथ नया आवेदन तैयार करें',
      quickStartTrack: 'आवेदन ट्रैक करें',
      quickStartTrackDesc: '30-दिवसीय समयसीमा और स्थिति देखें',
      quickStartAuth: 'विभाग खोजें',
      quickStartAuthDesc: 'केंद्रीय मंत्रालयों और स्थानीय निकायों को खोजें',
      quickStartLearn: 'आरटीआई समझें',
      quickStartLearnDesc: 'नियम, शुल्क छूट और अपील दिशानिर्देश पढ़ें',
      howTitle: 'आरटीआई साथी कैसे सहायता करता है',
      howSub: 'सरकारी सूचना प्राप्त करने की प्रक्रिया को सरल और स्पष्ट बनाएं।',
      authFinderTitle: 'समझ नहीं आ रहा आवेदन कहाँ भेजें?',
      authFinderSub: 'सरल भाषा में लिखें कि आपको क्या जानकारी चाहिए। हम सही लोक सूचना अधिकारी (CPIO) का सुझाव देंगे।',
      authFinderPlaceholder: 'उदा. मुझे अपने क्षेत्र में सड़क निर्माण के खर्च की जानकारी चाहिए...',
      findBtn: 'सही विभाग खोजें',
      searchTitle: 'आरटीआई जानकारी खोजें',
      searchSub: 'कानूनी नियम, प्रकाशित दस्तावेज और अक्सर पूछे जाने वाले प्रश्नों में खोजें।',
      searchPlaceholder: 'सर्च करें (उदा. 30 दिन की सीमा, धारा 8, टेंडर खर्च)...',
      scopeNotice: 'केंद्र सरकार के मंत्रालयों को कवर करता है। राज्य के आवेदनों को उनके आधिकारिक पोर्टल पर भेजा जाता है।'
    }
  }[language];

  return (
    <div className="flex-1 bg-[#F7F8FA]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Balanced 2-Column Citizen Service Layout) */}
      {/* ========================================================================= */}
      <section className="border-b border-[#D9E0E6] bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#123B5D] border border-blue-200/60">
                <ShieldCheck className="h-3.5 w-3.5 text-[#123B5D]" />
                <span>RTI Act 2005 Citizen Portal</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#17212B] leading-[1.15]">
                {t.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-[#52606D] font-normal leading-relaxed max-w-2xl">
                {t.heroSub}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={() => setActiveView('onboarding')}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-7 py-3.5 text-sm font-black shadow-3xs cursor-pointer transition-all hover:scale-[1.01]"
                >
                  {t.startRti}
                </button>

                <button
                  onClick={() => setActiveView('dashboard')}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white border border-[#D9E0E6] hover:bg-slate-50 text-[#17212B] px-6 py-3.5 text-sm font-bold shadow-3xs cursor-pointer transition-colors"
                >
                  {t.trackRti}
                </button>
              </div>

              {/* Supporting link */}
              <div className="pt-1">
                <button
                  onClick={() => setActiveView('authorities')}
                  className="text-xs font-bold text-[#123B5D] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  {t.notSureLink}
                </button>
              </div>

              <p className="text-xs text-slate-500 font-medium">
                {t.scopeNotice}
              </p>
            </div>

            {/* Right Column: Functional Quick Start Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#D9E0E6] bg-[#F7F8FA] p-6 shadow-3xs space-y-4">
                <div className="border-b border-[#D9E0E6] pb-3">
                  <h2 className="text-sm font-black text-[#17212B] uppercase tracking-wider">
                    {t.quickStartTitle}
                  </h2>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setActiveView('onboarding')}
                    className="w-full p-3.5 rounded-xl bg-white hover:bg-blue-50/50 border border-[#D9E0E6] text-left transition-all flex items-center justify-between cursor-pointer group shadow-3xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-xs text-[#123B5D] flex items-center gap-1.5">
                        <FileText className="h-4 w-4" />
                        <span>{t.quickStartFile}</span>
                      </div>
                      <div className="text-[11px] text-[#52606D]">{t.quickStartFileDesc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#123B5D] transition-colors shrink-0" />
                  </button>

                  <button
                    onClick={() => setActiveView('dashboard')}
                    className="w-full p-3.5 rounded-xl bg-white hover:bg-blue-50/50 border border-[#D9E0E6] text-left transition-all flex items-center justify-between cursor-pointer group shadow-3xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-xs text-[#123B5D] flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{t.quickStartTrack}</span>
                      </div>
                      <div className="text-[11px] text-[#52606D]">{t.quickStartTrackDesc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#123B5D] transition-colors shrink-0" />
                  </button>

                  <button
                    onClick={() => setActiveView('authorities')}
                    className="w-full p-3.5 rounded-xl bg-white hover:bg-blue-50/50 border border-[#D9E0E6] text-left transition-all flex items-center justify-between cursor-pointer group shadow-3xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-xs text-[#123B5D] flex items-center gap-1.5">
                        <Landmark className="h-4 w-4" />
                        <span>{t.quickStartAuth}</span>
                      </div>
                      <div className="text-[11px] text-[#52606D]">{t.quickStartAuthDesc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#123B5D] transition-colors shrink-0" />
                  </button>

                  <button
                    onClick={() => setActiveView('help')}
                    className="w-full p-3.5 rounded-xl bg-white hover:bg-blue-50/50 border border-[#D9E0E6] text-left transition-all flex items-center justify-between cursor-pointer group shadow-3xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-xs text-[#123B5D] flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" />
                        <span>{t.quickStartLearn}</span>
                      </div>
                      <div className="text-[11px] text-[#52606D]">{t.quickStartLearnDesc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#123B5D] transition-colors shrink-0" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HOW RTI SAATHI HELPS (4 Concise Steps) */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#F7F8FA] border-b border-[#D9E0E6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-black text-[#17212B] tracking-tight">
              {t.howTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#52606D] mt-1 font-medium">
              {t.howSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Find the right authority',
                desc: 'Describe what you need. We match the correct Central Ministry or Public Information Officer (CPIO).'
              },
              {
                step: '02',
                title: 'Build your request',
                desc: 'Formulate precise, disclosable questions under Section 6(1) with automated Section 8 exemption screening.'
              },
              {
                step: '03',
                title: 'Track your application',
                desc: 'Monitor the 30-day statutory countdown from registration and payment confirmation to CPIO dispatch.'
              },
              {
                step: '04',
                title: 'Understand the response',
                desc: 'Review point-by-point disclosures, verify missing records, and file a First Appeal if information is withheld.'
              }
            ].map((s, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-[#123B5D] pl-4">
                <span className="text-xs font-black text-[#123B5D] tracking-widest">{s.step}</span>
                <h3 className="font-extrabold text-sm text-[#17212B]">{s.title}</h3>
                <p className="text-xs text-[#52606D] leading-relaxed font-normal">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTELLIGENT AUTHORITY FINDER SECTION */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white border-b border-[#D9E0E6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-2 mb-8">
            <h2 className="text-2xl font-black text-[#17212B] tracking-tight">
              {t.authFinderTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#52606D] font-normal leading-relaxed">
              {t.authFinderSub}
            </p>
          </div>

          <form onSubmit={handleFindAuthority} className="max-w-3xl space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={authorityQuery}
                  onChange={(e) => setAuthorityQuery(e.target.value)}
                  placeholder={t.authFinderPlaceholder}
                  className="w-full rounded-xl border border-[#D9E0E6] bg-slate-50 pl-10 pr-4 py-3 text-xs font-medium text-slate-800 outline-none focus:border-[#123B5D] focus:bg-white transition-all shadow-3xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSearchingAuth || !authorityQuery.trim()}
                className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-3 text-xs font-extrabold shadow-3xs cursor-pointer transition-all disabled:opacity-50 shrink-0"
              >
                {isSearchingAuth ? 'Searching...' : t.findBtn}
              </button>
            </div>

            {/* Suggestion Result Output */}
            {authorityResult && authorityResult.suggestedAuthority && (
              <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/60 p-5 space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#123B5D] text-white px-2 py-0.5 rounded-md">
                    Suggested Public Authority ({authorityResult.confidence}% Match)
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    Jurisdiction: {authorityResult.jurisdictionLevel}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-[#123B5D]">
                    {authorityResult.suggestedAuthority.name}
                  </h4>
                  <p className="text-xs text-slate-700 font-medium">
                    {authorityResult.reason}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-blue-200/80">
                  <span className="text-[11px] text-slate-600">
                    CPIO: <strong>{authorityResult.suggestedAuthority.cpioName}</strong> ({authorityResult.suggestedAuthority.department})
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveView('onboarding')}
                    className="text-xs font-black text-[#123B5D] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Draft Request for this Authority ➔
                  </button>
                </div>
              </div>
            )}
          </form>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEARCH RTI INFORMATION (Official vs Guidance vs Statutory) */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-black text-[#17212B] tracking-tight">
              {t.searchTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#52606D] font-normal leading-relaxed">
              {t.searchSub}
            </p>
          </div>

          <form onSubmit={handleInfoSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={infoQuery}
                onChange={(e) => setInfoQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border border-[#D9E0E6] bg-white pl-10 pr-4 py-3 text-xs font-medium text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
              />
            </div>
          </form>

          {/* Search Result Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {searchResults.map((item) => (
              <div 
                key={item.id}
                className="rounded-2xl border border-[#D9E0E6] bg-white p-5 shadow-3xs space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                    item.sourceType === 'Official Source' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                    item.sourceType === 'Statutory Rule' ? 'bg-purple-50 text-purple-800 border border-purple-200' :
                    'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}>
                    {item.sourceType}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">{item.category}</span>
                </div>

                <h3 className="font-extrabold text-xs sm:text-sm text-[#17212B]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#52606D] leading-relaxed">
                  {item.snippet}
                </p>

                <div className="pt-2 text-[11px] text-slate-400 font-medium border-t border-slate-100 flex justify-between items-center">
                  <span>Source: {item.sourceName}</span>
                  <button 
                    onClick={() => setActiveView('help')}
                    className="text-[#123B5D] font-bold hover:underline cursor-pointer"
                  >
                    Read Guide ➔
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
