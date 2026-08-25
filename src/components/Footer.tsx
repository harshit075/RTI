'use client';

import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'hi';
  setActiveView: (view: string) => void;
  setHelpCategory?: (cat: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function Footer({ language, setActiveView, setHelpCategory }: FooterProps) {
  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Ask the Government. Track the Answer.',
      desc: 'RTI Saathi is a modern citizen digital gateway dedicated to making the Right to Information filing, deadline tracking, and appellate redressal experience clean, accessible, and citizen-friendly.',
      disclaimer: 'Disclaimer: RTI Saathi is an independent citizen service platform designed to assist citizens with Right to Information applications and appeals in compliance with the statutory rules of the RTI Act 2005.',
      col1Title: 'RTI Actions',
      col1Items: [
        { label: 'File an RTI', view: 'onboarding' },
        { label: 'Track Application', view: 'dashboard' },
        { label: 'File First Appeal', view: 'dashboard' },
        { label: 'Help Centre', view: 'help' }
      ],
      col2Title: 'Learn & Resources',
      col2Items: [
        { label: 'RTI Act Basics', view: 'help' },
        { label: 'Exempted Items (Sec 8)', view: 'help' },
        { label: 'Fee Schedule', view: 'help' },
        { label: 'Appeals Process', view: 'help' }
      ],
      col3Title: 'Official Portals',
      col3Links: [
        { label: 'Central RTI Online Portal', url: 'https://rtionline.gov.in' },
        { label: 'Central Information Commission', url: 'https://cic.gov.in' },
        { label: 'DoPT Official Website', url: 'https://dopt.gov.in' },
        { label: 'National Portal of India', url: 'https://india.gov.in' }
      ],
      col4Title: 'Legal & Accessibility',
      col4Items: [
        { label: 'Privacy Policy', view: 'profile' },
        { label: 'Terms of Service', view: 'profile' },
        { label: 'Accessibility Settings', view: 'profile' },
        { label: 'Support Desk', view: 'help' }
      ]
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'सरकार से पूछें। उत्तर ट्रैक करें।',
      desc: 'आरटीआई साथी एक आधुनिक नागरिक डिजिटल पोर्टल है जो सूचना का अधिकार (RTI) दाखिल करने, समयसीमा ट्रैक करने और प्रथम अपील समाधान को सुगम और नागरिक-अनुकूल बनाता है।',
      disclaimer: 'अस्वीकरण: आरटीआई साथी एक स्वतंत्र नागरिक डिजिटल पोर्टल है जो आरटीआई अधिनियम 2005 के सांविधिक नियमों के अनुपालन में नागरिकों को सूचना अनुरोध और अपील दाखिल करने में सहायता करता है।',
      col1Title: 'आरटीआई कार्य',
      col1Items: [
        { label: 'आरटीआई दाखिल करें', view: 'onboarding' },
        { label: 'आवेदन ट्रैक करें', view: 'dashboard' },
        { label: 'प्रथम अपील दायर करें', view: 'dashboard' },
        { label: 'सहायता केंद्र', view: 'help' }
      ],
      col2Title: 'सीखें और संसाधन',
      col2Items: [
        { label: 'आरटीआई कानून मूल बातें', view: 'help' },
        { label: 'छूट प्राप्त वस्तुएं (Sec 8)', view: 'help' },
        { label: 'शुल्क सूची', view: 'help' },
        { label: 'अपील प्रक्रिया', view: 'help' }
      ],
      col3Title: 'आधिकारिक पोर्टल',
      col3Links: [
        { label: 'केंद्रीय आरटीआई ऑनलाइन पोर्टल', url: 'https://rtionline.gov.in' },
        { label: 'केंद्रीय सूचना आयोग', url: 'https://cic.gov.in' },
        { label: 'डीओपीटी आधिकारिक वेबसाइट', url: 'https://dopt.gov.in' },
        { label: 'भारत का राष्ट्रीय पोर्टल', url: 'https://india.gov.in' }
      ],
      col4Title: 'कानूनी और पहुंच',
      col4Items: [
        { label: 'गोपनीयता नीति', view: 'profile' },
        { label: 'सेवा की शर्तें', view: 'profile' },
        { label: 'अभिगम्यता सेटिंग्स', view: 'profile' },
        { label: 'सहायता डेस्क', view: 'help' }
      ]
    }
  }[language];

  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-slate-800 pb-8">
        
        {/* Brand & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 text-white mb-4">
            <div className="flex h-9 w-8 items-center justify-center rounded bg-white p-0.5 shadow-sm border border-slate-700 shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="State Emblem of India" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">{t.brand}</span>
          </div>
          <p className="text-xs text-slate-400 mb-2 leading-relaxed max-w-sm">{t.desc}</p>
          <span className="text-[10px] bg-slate-800 text-slate-400 border border-slate-700 rounded px-2 py-0.5 font-medium inline-block">
            {t.tagline}
          </span>
          <div className="mt-4 text-[10.5px] text-slate-400 space-y-1 bg-slate-800/25 border border-slate-800 rounded-lg p-2.5 max-w-sm font-sans">
            <span className="font-bold text-slate-300 block mb-0.5">Official RTI Support Desk (DoPT):</span>
            <p>Phone: 011-24622461 (9:00 AM - 5:30 PM, Mon-Fri)</p>
            <p>Email: rtionline-dopt@nic.in</p>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">{t.col1Title}</h4>
          <ul className="space-y-2 text-xs">
            {t.col1Items.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveView(item.view)}
                  className="hover:text-secondary-gold text-left transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">{t.col2Title}</h4>
          <ul className="space-y-2 text-xs">
            {t.col2Items.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    if (setHelpCategory) {
                      const categoryMap: Record<string, 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'> = {
                        'RTI Act Basics': 'Basics',
                        'Exempted Items (Sec 8)': 'Exemptions',
                        'Fee Schedule': 'Fees',
                        'Appeals Process': 'Appeals',
                        'आरटीआई कानून मूल बातें': 'Basics',
                        'छूट प्राप्त वस्तुएं (Sec 8)': 'Exemptions',
                        'शुल्क सूची': 'Fees',
                        'अपील प्रक्रिया': 'Appeals'
                      };
                      setHelpCategory(categoryMap[item.label] || 'All');
                    }
                    setActiveView(item.view);
                  }}
                  className="hover:text-secondary-gold text-left transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 & 4 (Combined grid helper depending on space) */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">{t.col3Title}</h4>
          <ul className="space-y-2 text-xs">
            {t.col3Links.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-gold text-left transition-colors flex items-center gap-1"
                >
                  {item.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
        <div className="flex items-start gap-2 bg-slate-800/40 border border-slate-800 rounded-lg p-3 max-w-3xl">
          <ShieldAlert className="h-5 w-5 text-amber-500/80 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{t.disclaimer}</p>
        </div>
        <div className="text-center md:text-right shrink-0">
          <p className="font-bold text-slate-400">© 2026 {t.brand}.</p>
          <p className="text-[10px] mt-1 text-slate-500 font-medium">Version 2.0 Concept Redesign, DoPT Initiative</p>
        </div>
      </div>
    </footer>
  );
}
