'use client';

import React from 'react';
import { ShieldCheck, ExternalLink, Globe } from 'lucide-react';

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
      desc: 'RTI Saathi is a digital citizen gateway designed to facilitate transparent RTI drafting, 30-day statutory tracking, and appellate redressal in accordance with the Right to Information Act, 2005.',
      disclaimer: 'Practice & Demonstration Notice: RTI Saathi is an educational and practice citizen gateway built in compliance with statutory RTI Act 2005 workflows. In this demonstration environment, all filing and payment simulations are for training and civic awareness; no real banking charges are incurred.',
      col1Title: 'RTI Actions',
      col1Items: [
        { label: 'File an RTI', view: 'onboarding' },
        { label: 'Track Application', view: 'dashboard' },
        { label: 'File First Appeal', view: 'dashboard' },
        { label: 'Help & Knowledge Center', view: 'help' }
      ],
      col2Title: 'Learn & Resources',
      col2Items: [
        { label: 'RTI Act Basics', view: 'help', category: 'Basics' as const },
        { label: 'Exempted Items (Sec 8)', view: 'help', category: 'Exemptions' as const },
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
      col4Title: 'Legal & Tools',
      col4Items: [
        { label: 'Payment Reconciliation', view: 'reconciliation' },
        { label: 'Public Authorities Directory', view: 'authorities' },
        { label: 'Profile & Document Vault', view: 'profile' },
        { label: 'Support & Grievance Desk', view: 'help' }
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
      col2Title: 'सीखें और संसाधन',
      col2Items: [
        { label: 'आरटीआई कानून मूल बातें', view: 'help', category: 'Basics' as const },
        { label: 'छूट प्राप्त वस्तुएं (Sec 8)', view: 'help', category: 'Exemptions' as const },
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
      col4Title: 'कानूनी व उपकरण',
      col4Items: [
        { label: 'भुगतान मिलान (Reconciliation)', view: 'reconciliation' },
        { label: 'लोक प्राधिकारी निर्देशिका', view: 'authorities' },
        { label: 'दस्तावेज़ वॉल्ट व प्रोफ़ाइल', view: 'profile' },
        { label: 'सहायता व शिकायत डेस्क', view: 'help' }
      ]
    }
  }[language];

  return (
    <footer className="bg-[#17212B] text-slate-300 border-t border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Info (2 cols on large) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-0.5 shadow-3xs">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="State Emblem of India" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-black text-white text-base tracking-tight">{t.brand}</span>
                <span className="text-[10px] text-amber-400 font-bold block">{t.tagline}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.desc}
            </p>

            <div className="text-[10px] text-slate-400 space-y-0.5 bg-slate-800/40 border border-slate-700/60 rounded-xl p-3 max-w-sm">
              <span className="font-extrabold text-slate-200 block">Official RTI Support (DoPT):</span>
              <p>Helpline: 011-24622461 (9:00 AM - 5:30 PM, Mon-Fri)</p>
              <p>Email: rtionline-dopt@nic.in</p>
            </div>
          </div>

          {/* Column 1: Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">{t.col1Title}</h4>
            <ul className="space-y-2 text-xs">
              {t.col1Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveView(item.view)}
                    className="hover:text-amber-400 text-left transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Learn */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">{t.col2Title}</h4>
            <ul className="space-y-2 text-xs">
              {t.col2Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (setHelpCategory && item.category) {
                        setHelpCategory(item.category);
                      }
                      setActiveView(item.view);
                    }}
                    className="hover:text-amber-400 text-left transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">{t.col4Title}</h4>
            <ul className="space-y-2 text-xs">
              {t.col4Items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveView(item.view)}
                    className="hover:text-amber-400 text-left transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-1.5">{t.col3Title}</span>
              <div className="space-y-1 text-[11px]">
                {t.col3Links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 text-slate-400 transition-colors flex items-center gap-1"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="rounded-xl border border-amber-400/20 bg-amber-500/5 p-4 text-[11px] text-slate-400 leading-relaxed">
            <p>{t.disclaimer}</p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span>© 2026 RTI Saathi • Right to Information Citizen Gateway</span>
            <div className="flex items-center gap-4">
              <span>National Informatics Centre (NIC) Compliance Standards</span>
              <span>•</span>
              <span>WCAG 2.2 AA Accessible</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
