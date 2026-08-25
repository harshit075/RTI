'use client';

import React from 'react';
import { ShieldCheck, ExternalLink, Globe, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setHelpCategory?: (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function Footer({ setActiveView, language, setHelpCategory }: FooterProps) {
  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Citizen Right to Information Gateway',
      desc: 'RTI Saathi is a digital citizen platform designed to facilitate transparent RTI drafting, 30-day statutory tracking, and appellate redressal in accordance with the Right to Information Act, 2005.',
      disclaimer: 'Practice & Demonstration Notice: RTI Saathi is an educational and civic practice gateway built in compliance with statutory RTI Act 2005 workflows. In this demonstration environment, all filing and payment steps are simulated for training and public awareness with zero real banking charges.',
      col1Title: 'RTI Actions',
      col1Items: [
        { label: 'File an RTI Request', view: 'onboarding' },
        { label: 'Track Application', view: 'dashboard' },
        { label: 'File First Appeal', view: 'dashboard' },
        { label: 'Help & Knowledge Center', view: 'help' }
      ],
      col2Title: 'Statutory Guidance',
      col2Items: [
        { label: 'RTI Act Basics', view: 'help', category: 'Basics' as const },
        { label: 'Exempted Items (Section 8)', view: 'help', category: 'Exemptions' as const },
        { label: 'Fee Schedule & Waiver', view: 'help', category: 'Fees' as const },
        { label: 'Appeals Process (FAA & CIC)', view: 'help', category: 'Appeals' as const }
      ],
      col3Title: 'Official Portals',
      col3Links: [
        { label: 'Central RTI Online Portal', url: 'https://rtionline.gov.in' },
        { label: 'Central Information Commission', url: 'https://cic.gov.in' },
        { label: 'DoPT Official Portal', url: 'https://dopt.gov.in' },
        { label: 'National Portal of India', url: 'https://india.gov.in' }
      ],
      col4Title: 'Tools & Utilities',
      col4Items: [
        { label: 'Payment Reconciliation', view: 'reconciliation' },
        { label: 'Public Authorities Directory', view: 'authorities' },
        { label: 'Certified Document Vault', view: 'profile' },
        { label: 'Citizen Support Desk', view: 'help' }
      ]
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'नागरिक सूचना का अधिकार पोर्टल',
      desc: 'आरटीआई साथी एक नागरिक डिजिटल पोर्टल है जो सूचना का अधिकार (RTI) दाखिल करने, समयसीमा ट्रैक करने और प्रथम अपील समाधान को सुगम और नागरिक-अनुकूल बनाता है।',
      disclaimer: 'अभ्यास व प्रदर्शन सूचना: आरटीआई साथी आरटीआई अधिनियम 2005 के सांविधिक नियमों के अनुपालन में बनाया गया एक शैक्षिक व अभ्यास पोर्टल है। इस प्रदर्शन वातावरण में सभी फाइलिंग और भुगतान अभ्यास के लिए हैं; कोई वास्तविक बैंक कटौती नहीं होती है।',
      col1Title: 'आरटीआई कार्य',
      col1Items: [
        { label: 'आरटीआई दाखिल करें', view: 'onboarding' },
        { label: 'आवेदन ट्रैक करें', view: 'dashboard' },
        { label: 'प्रथम अपील दायर करें', view: 'dashboard' },
        { label: 'सहायता केंद्र', view: 'help' }
      ],
      col2Title: 'कानूनी मार्गदर्शन',
      col2Items: [
        { label: 'आरटीआई कानून मूल बातें', view: 'help', category: 'Basics' as const },
        { label: 'छूट प्राप्त वस्तुएं (धारा 8)', view: 'help', category: 'Exemptions' as const },
        { label: 'शुल्क सूची व छूट', view: 'help', category: 'Fees' as const },
        { label: 'अपील प्रक्रिया (FAA व CIC)', view: 'help', category: 'Appeals' as const }
      ],
      col3Title: 'आधिकारिक पोर्टल',
      col3Links: [
        { label: 'केंद्रीय आरटीआई ऑनलाइन पोर्टल', url: 'https://rtionline.gov.in' },
        { label: 'केंद्रीय सूचना आयोग', url: 'https://cic.gov.in' },
        { label: 'डीओपीटी आधिकारिक वेबसाइट', url: 'https://dopt.gov.in' },
        { label: 'भारत का राष्ट्रीय पोर्टल', url: 'https://india.gov.in' }
      ],
      col4Title: 'उपकरण व सेवाएं',
      col4Items: [
        { label: 'भुगतान मिलान (Reconciliation)', view: 'reconciliation' },
        { label: 'लोक प्राधिकारी निर्देशिका', view: 'authorities' },
        { label: 'प्रमाणित दस्तावेज़ वॉल्ट', view: 'profile' },
        { label: 'नागरिक सहायता डेस्क', view: 'help' }
      ]
    }
  }[language];

  return (
    <footer className="bg-[#0A192F] text-slate-200 border-t-2 border-[#123B5D] relative z-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid: 5 Clean Columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Column 1: Brand Info & Support Box (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-md shrink-0">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="State Emblem of India" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-black text-white text-lg tracking-tight block">{t.brand}</span>
                <span className="text-[11px] text-amber-400 font-extrabold tracking-wide block">{t.tagline}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              {t.desc}
            </p>

            {/* Official Support Info Card */}
            <div className="text-[11px] text-slate-300 space-y-1.5 bg-[#122B48] border border-blue-400/30 rounded-xl p-3.5 max-w-sm shadow-3xs">
              <span className="font-black text-white text-xs block mb-1 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                Official RTI Support Desk (DoPT):
              </span>
              <p className="text-slate-200">Helpline: <strong className="text-white">011-24622461</strong> (9:00 AM - 5:30 PM, Mon-Fri)</p>
              <p className="text-slate-200">Email: <strong className="text-white">rtionline-dopt@nic.in</strong></p>
            </div>
          </div>

          {/* Column 2: RTI Actions (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-slate-700/80 pb-2">
              {t.col1Title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {t.col1Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveView(item.view)}
                    className="hover:text-amber-400 text-slate-200 text-left transition-colors cursor-pointer font-medium hover:translate-x-0.5 transform inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Statutory Guidance (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-slate-700/80 pb-2">
              {t.col2Title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {t.col2Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (setHelpCategory && item.category) {
                        setHelpCategory(item.category);
                      }
                      setActiveView(item.view);
                    }}
                    className="hover:text-amber-400 text-slate-200 text-left transition-colors cursor-pointer font-medium hover:translate-x-0.5 transform inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Portals (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-slate-700/80 pb-2">
              {t.col3Title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {t.col3Links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 text-slate-200 text-left transition-colors flex items-center gap-1 font-medium"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 text-slate-400 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Tools & Utilities (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-slate-700/80 pb-2">
              {t.col4Title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {t.col4Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveView(item.view)}
                    className="hover:text-amber-400 text-slate-200 text-left transition-colors cursor-pointer font-medium hover:translate-x-0.5 transform inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Practice & Demonstration Disclaimer Banner */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <div className="rounded-2xl border border-amber-400/30 bg-[#122B48]/80 p-4.5 text-xs text-slate-200 leading-relaxed shadow-3xs">
            <p className="font-normal">
              <strong className="text-amber-400 font-extrabold mr-1">Statutory Practice & Demonstration Portal:</strong>
              {t.disclaimer}
            </p>
          </div>

          {/* Bottom Copyright & Compliance Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 border-t border-slate-800/80 pt-4">
            <span className="font-medium text-slate-300">© 2026 RTI Saathi • Right to Information Citizen Gateway</span>
            <div className="flex flex-wrap items-center gap-3 text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                NIC Standards
              </span>
              <span>•</span>
              <span className="text-slate-300 font-medium">GIGW 3.0 Aligned</span>
              <span>•</span>
              <span className="text-slate-300 font-medium">WCAG 2.2 AA</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
