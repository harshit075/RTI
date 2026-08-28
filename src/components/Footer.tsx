'use client';

import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setHelpCategory?: (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function Footer({ setActiveView, language, setHelpCategory }: FooterProps) {
  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Right to Information Act, 2005',
      desc: 'Empowering citizens to access information and promoting transparency and accountability in governance.',
      servicesTitle: 'RTI Services',
      learnTitle: 'Learn',
      supportTitle: 'Support',
      contactTitle: 'Contact Us',
      rights: '© 2026 RTI Saathi. All rights reserved.',
      disclaimer:
        'Practice & Demonstration Notice: RTI Saathi is an educational and civic practice gateway built in compliance with statutory RTI Act 2005 workflows. In this demonstration environment, submissions are simulated for citizen training purposes.',
      links: [
        { label: 'Privacy Policy', view: 'help' },
        { label: 'Terms of Use', view: 'help' },
        { label: 'Sitemap', view: 'help' },
      ],
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'सूचना का अधिकार अधिनियम, 2005',
      desc: 'नागरिकों को सूचना तक पहुँच प्रदान कर सशक्त बनाना और शासन में पारदर्शिता और जवाबदेही को बढ़ावा देना।',
      servicesTitle: 'आरटीआई सेवाएं',
      learnTitle: 'जानकारी',
      supportTitle: 'सहायता',
      contactTitle: 'हमसे संपर्क करें',
      rights: '© 2026 आरटीआई साथी। सर्वाधिकार सुरक्षित।',
      disclaimer:
        'अभ्यास व प्रदर्शन सूचना: आरटीआई साथी आरटीआई अधिनियम 2005 की प्रक्रियाओं के अनुरूप एक शैक्षिक और नागरिक अभ्यास प्लेटफ़ॉर्म है। इस डेमो वातावरण में सबमिशन प्रशिक्षण हेतु सिम्युलेटेड हैं।',
      links: [
        { label: 'गोपनीयता नीति', view: 'help' },
        { label: 'उपयोग की शर्तें', view: 'help' },
        { label: 'साइटमैप', view: 'help' },
      ],
    },
  } as const;

  const copy = t[language];

  const handleLearnClick = (
    category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'
  ) => {
    if (setHelpCategory) setHelpCategory(category);
    setActiveView('help');
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080d1a] text-slate-300 border-t border-slate-800 relative z-20">
      <div className="border-b border-slate-900 bg-[#0c1322] py-8">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white tracking-tight">
              {language === 'en'
                ? 'Access information. Understand your rights. Take action.'
                : 'सूचना तक पहुँचें। अपने अधिकार समझें। कार्रवाई करें।'}
            </h3>
            <p className="text-xs text-slate-400">
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

      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
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
                <span className="font-extrabold text-white text-base tracking-tight block">{copy.brand}</span>
                <span className="text-[10px] text-slate-400 font-medium block">{copy.tagline}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">{copy.desc}</p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{copy.servicesTitle}</h4>
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

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{copy.learnTitle}</h4>
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

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{copy.supportTitle}</h4>
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

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{copy.contactTitle}</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">011-24622461</p>
                  <p className="text-[10px] text-slate-500">9:00 AM - 5:30 PM, Mon-Fri</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300 break-all">rtionline-dopt@nic.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-6">
          <div className="rounded-lg bg-slate-950 p-4 border border-slate-900/60">
            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
              <strong className="text-slate-400 font-bold mr-1">Statutory Practice & Demonstration Portal:</strong>
              {copy.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-900 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-slate-500">
            <span>{copy.rights}</span>
            <div className="flex items-center gap-3">
              {copy.links.map((link, idx) => (
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
