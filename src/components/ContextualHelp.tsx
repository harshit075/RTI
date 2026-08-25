'use client';

import React, { useState } from 'react';
import { HelpCircle, X, Info, BookOpen, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContextualHelpProps {
  activeView: string;
  language: 'en' | 'hi';
}

export default function ContextualHelp({ activeView, language }: ContextualHelpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'context' | 'glossary'>('context');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const glossary = {
    CPIO: {
      title: 'CPIO',
      subtitle: 'Central Public Information Officer',
      simple: 'The designated officer responsible for handling and replying to RTI requests for a public authority.',
      official: 'Section 5(1) of the RTI Act, 2005 designates officers in all public authorities to provide information to persons requesting it.'
    },
    FAA: {
      title: 'FAA',
      subtitle: 'First Appellate Authority',
      simple: 'The senior officer who decides your First Appeal if the CPIO rejects your query, gives incomplete details, or fails to respond within 30 days.',
      official: 'Appointed under Section 19(1) of the RTI Act, 2005 to hear first appeals against CPIO decisions.'
    },
    'Section 6(1)': {
      title: 'Section 6(1)',
      subtitle: 'Filing the Request',
      simple: 'The statutory clause in the law under which you formally request information from any government department.',
      official: 'Section 6(1) outlines that a person who desires to obtain any information shall make a request in writing or through electronic media.'
    },
    'Section 19(1)': {
      title: 'Section 19(1)',
      subtitle: 'First Appeal Rule',
      simple: 'The legal clause under which you submit an appeal to the FAA if the CPIO replies late or gives unsatisfactory information.',
      official: 'Section 19(1) allows any person aggrieved by a CPIO decision, or lack thereof within 30 days, to appeal to the senior officer.'
    },
    'Second Appeal (CIC)': {
      title: 'Second Appeal (CIC)',
      subtitle: 'Central Information Commission',
      simple: 'The final appeal stage. If your First Appeal is rejected or ignored by the FAA officer after 45 days, file a Second Appeal directly with the Central Information Commission (CIC).',
      official: 'Filed under Section 19(3) of the RTI Act, 2005. The decision of the Commission is legally binding.'
    }
  };

  const helpTopics: Record<string, Array<{ q: string; a: string }>> = {
    landing: [
      { q: 'What is the cost of filing an RTI?', a: 'The standard statutory fee is ₹10. If you belong to the Below Poverty Line (BPL) category and upload a card copy, the fee is completely waived.' },
      { q: 'How long does the government take to respond?', a: 'By law, the CPIO must respond within 30 days of receiving your application (Section 7(1)).' },
      { q: 'What information cannot be disclosed?', a: 'National security records, cabinet deliberations, and third-party personal information with no public interest are exempt under Section 8(1).' }
    ],
    onboarding: [
      { q: 'I do not know which department to select', a: 'Use our AI Search box. Type what you need (e.g. "my passport is delayed") and the system automatically matches the public department.' },
      { q: 'Can I request information in Hindi?', a: 'Yes, you can write your request in Hindi. The assistant will parse it and draft formal questions.' }
    ],
    dashboard: [
      { q: 'What happens if 30 days pass with no response?', a: 'Under Section 7(2), failure to reply within 30 days is deemed a refusal. You are entitled to file a First Appeal immediately without paying any fee.' },
      { q: 'What does "Action Required" mean?', a: 'Action Required indicates that a CPIO response was received with missing or partial answers. Review the response to consider filing a First Appeal.' }
    ],
    detail: [
      { q: 'How do I escalate an incomplete response?', a: 'Click the "File First Appeal" button on this page. The system will pre-fill the grounds of appeal and generate a formal petition for the First Appellate Authority (FAA).' },
      { q: 'Can the CPIO charge for copies of documents?', a: 'Yes, ₹2 per page for standard A4 documents, provided the response was furnished within 30 days. If the reply is delayed past 30 days, all copies must be provided completely free of charge (Section 7(6)).' }
    ]
  };

  const currentTopics = helpTopics[activeView] || helpTopics.landing;

  return (
    <>
      {/* Compact Floating Help Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#123B5D] hover:bg-[#0A2540] text-white px-4 py-2.5 shadow-md transition-all hover:scale-105 cursor-pointer font-bold text-xs"
        aria-label="Need Help?"
      >
        <HelpCircle className="h-4 w-4 text-amber-400" />
        <span>Need help?</span>
      </button>

      {/* Slide-out Drawer Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="p-5 border-b border-[#D9E0E6] flex items-center justify-between bg-[#F7F8FA]">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#123B5D]" />
                <h3 className="font-black text-sm text-[#17212B]">
                  Citizen Help & Guidance
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-white hover:bg-slate-100 border border-[#D9E0E6] flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Tab switch */}
            <div className="flex border-b border-[#D9E0E6] bg-slate-50 px-4 pt-2">
              <button
                onClick={() => { setActiveTab('context'); setSelectedTopic(null); }}
                className={`py-2 px-3 text-xs font-bold border-b-2 cursor-pointer transition-all ${
                  activeTab === 'context'
                    ? 'border-[#123B5D] text-[#123B5D]'
                    : 'border-transparent text-[#52606D] hover:text-[#17212B]'
                }`}
              >
                Page Guidance
              </button>
              <button
                onClick={() => { setActiveTab('glossary'); setSelectedTopic(null); }}
                className={`py-2 px-3 text-xs font-bold border-b-2 cursor-pointer transition-all ${
                  activeTab === 'glossary'
                    ? 'border-[#123B5D] text-[#123B5D]'
                    : 'border-transparent text-[#52606D] hover:text-[#17212B]'
                }`}
              >
                Legal Terms Glossary
              </button>
            </div>

            {/* Body Content */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs">
              
              {activeTab === 'context' && (
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-[#52606D] tracking-wider block">
                    Frequently Asked Questions
                  </span>

                  <div className="space-y-2.5">
                    {currentTopics.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-xl border border-[#D9E0E6] bg-white p-3.5 space-y-1.5 shadow-3xs"
                      >
                        <h4 className="font-extrabold text-xs text-[#17212B] flex items-start gap-2">
                          <span className="text-[#123B5D]">Q:</span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-[#52606D] leading-relaxed pl-4 font-normal">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'glossary' && (
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-[#52606D] tracking-wider block">
                    Statutory Definitions in Plain Language
                  </span>

                  <div className="space-y-2">
                    {Object.entries(glossary).map(([key, item]) => (
                      <div 
                        key={key}
                        className="rounded-xl border border-[#D9E0E6] bg-white p-3.5 space-y-1.5 shadow-3xs"
                      >
                        <div className="font-extrabold text-xs text-[#123B5D] flex items-center justify-between">
                          <span>{item.title} ({item.subtitle})</span>
                        </div>
                        <p className="text-slate-800 leading-relaxed font-medium">
                          {item.simple}
                        </p>
                        <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-200">
                          <strong>Act Citation:</strong> {item.official}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#D9E0E6] bg-[#F7F8FA] text-center text-xs text-[#52606D]">
              Right to Information Act 2005 • Citizen Support
            </div>

          </div>
        </div>
      )}
    </>
  );
}
