'use client';

import React from 'react';
import { 
  Phone, Mail, ArrowUp
} from 'lucide-react';

interface FooterProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setHelpCategory?: (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function Footer({ setActiveView, language, setHelpCategory }: FooterProps) {
  const t = {
    en: {
      brand: 'ParDarshi',
      tagline: 'Right to Information Act, 2005',
      desc: 'Empowering citizens to access information and promoting transparency and accountability in governance.',
      servicesTitle: 'RTI Services',
      learnTitle: 'Learn',
      supportTitle: 'Support',
      contactTitle: 'Contact Us',
      rights: '© 2026 ParDarshi. All rights reserved.',
      disclaimer: 'Practice & Demonstration Notice: ParDarshi is an educational and civic practice gateway built in compliance with statutory RTI Act 2005 workflows. In this demonstration environment, all filing and payment steps are simulated for training and public awareness with zero real banking charges.',
      links: [
        { label: 'Privacy Policy', view: 'help' },
        { label: 'Terms of Use', view: 'help' },
        { label: 'Sitemap', view: 'help' }
      ]
    },
    hi: {
      brand: 'पारदर्शी',
      tagline: 'सूचना का अधिकार अधिनियम, 2005',
      desc: 'नागरिकों को सूचना तक पहुँच प्रदान कर सशक्त बनाना और शासन में पारदर्शिता व जवाबदेही को बढ़ावा देना।',
      servicesTitle: 'आरटीआई सेवाएं',
      learnTitle: 'जानकारी',
      supportTitle: 'सहायता',
      contactTitle: 'हमसे संपर्क करें',
      rights: '© 2026 पारदर्शी। सर्वाधिकार सुरक्षित।',
      disclaimer: 'अभ्यास व प्रदर्शन सूचना: पारदर्शी आरटीआई अधिनियम 2005 के सांविधिक नियमों के अनुपालन में बनाया गया एक शैक्षिक व अभ्यास पोर्टल है। इस प्रदर्शन वातावरण में सभी भुगतान और फाइलिंग सिमुलेटेड हैं; कोई वास्तविक बैंक कटौती नहीं होती है।',
      links: [
        { label: 'गोपनीयता नीति', view: 'help' },
        { label: 'उपयोग की शर्तें', view: 'help' },
        { label: 'साइटमैप', view: 'help' }
      ]
    }
  }[language];

  const handleLearnClick = (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => {
    if (setHelpCategory) {
      setHelpCategory(category);
    }
    setActiveView('help');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d1a] text-slate-300 border-t border-slate-850 relative z-20">
      
      {/* Footer Top Accent Strip */}
      <div className="border-b border-slate-900 bg-[#0c1322] py-8">
        <div className="mx-auto max-w-[1360px] px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white tracking-tight">
              {language === 'en' ? 'Access information. Understand your rights. Take action.' : 'सूचना तक पहुँचें। अपने अधिकारों को समझें। कदम उठाएं।'}
            </h3>
            <p className="text-xs text-slate-450">
              {language === 'en' 
                ? 'Empowering citizens to drive transparency and good governance.' 
                : 'नागरिकों को सशक्त बनाना, पारदर्शिता और सुशासन को बढ़ावा देना।'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveView('onboarding')}
              className="bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              {language === 'en' ? 'File an RTI Now ➔' : 'अभी आरटीआई दाखिल करें ➔'}
            </button>
            <button
              onClick={() => setActiveView('help')}
              className="bg-transparent border border-slate-700 hover:bg-slate-800/60 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all cursor-pointer"
            >
              {language === 'en' ? 'Read RTI FAQ' : 'आरटीआई एफएक्यू पढ़ें'}
            </button>
          </div>
        </div>
      </div>

      {/* 1. Main Footer Grid */}
      <div className="mx-auto max-w-[1360px] px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand details and Social links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1 shrink-0">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="State Emblem of India" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">{t.brand}</span>
                <span className="text-[10px] text-slate-400 font-medium block">{t.tagline}</span>
              </div>
            </div>

            <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
              {t.desc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 0 0-2.11 2.107C0 8.046 0 12 0 12s0 3.954.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.954 24 12 24 12s0-3.954-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: RTI Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveView('onboarding')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'File an RTI' : 'आरटीआई दाखिल करें'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('status-lookup')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Track Application' : 'आवेदन ट्रैक करें'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('authorities')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Find Authority' : 'विभाग खोजें'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('appeal-lookup')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'File First Appeal' : 'प्रथम अपील दायर करें'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('dashboard')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'My RTIs' : 'मेरे आरटीआई'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.learnTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLearnClick('Basics')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'RTI Act, 2005' : 'आरटीआई अधिनियम, 2005'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLearnClick('Fees')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Rules & Fees' : 'नियम व शुल्क'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLearnClick('Appeals')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Appeals Process' : 'अपील प्रक्रिया'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLearnClick('Exemptions')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Exempted Items (Sec 8)' : 'छूट प्राप्त वस्तुएं (Sec 8)'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLearnClick('All')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'FAQs' : 'अक्सर पूछे जाने वाले प्रश्न'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.supportTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveView('help')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Help Center' : 'सहायता केंद्र'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('help')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('help')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'RTI Assistance' : 'आरटीआई सहायता'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('help')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Feedback' : 'प्रतिक्रिया'}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('profile')} className="hover:text-white text-slate-400 text-left transition-colors cursor-pointer font-medium">
                  {language === 'en' ? 'Accessibility' : 'अभिगम्यता'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-350">011-24622461</p>
                  <p className="text-[10px] text-slate-500">9:00 AM - 5:30 PM, Mon-Fri</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-350 break-all">rtionline-dopt@nic.in</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Practice/Demo Banner */}
        <div className="mt-8 border-t border-slate-900 pt-6">
          <div className="rounded-lg bg-slate-950 p-4 border border-slate-900/60">
            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
              <strong className="text-slate-400 font-bold mr-1">Statutory Practice & Demonstration Portal:</strong>
              {t.disclaimer}
            </p>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="mt-6 border-t border-slate-900 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-slate-500">
            <span>{t.rights}</span>
            <div className="flex items-center gap-3">
              {t.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveView(link.view)}
                  className="hover:text-white transition-colors cursor-pointer font-medium text-slate-500"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
            <span className="text-slate-400 font-medium">GIGW 3.0 Aligned</span>
            <span>|</span>
            <span className="text-slate-400 font-medium">WCAG 2.2 AA</span>
            <button 
              onClick={scrollToTop} 
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
