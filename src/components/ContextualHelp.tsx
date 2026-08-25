'use client';

import React, { useState } from 'react';
import { HelpCircle, X, Info, HelpCircle as HelpIcon, BookOpen, AlertCircle } from 'lucide-react';

interface ContextualHelpProps {
  activeView: string;
  language: 'en' | 'hi';
}

export default function ContextualHelp({ activeView, language }: ContextualHelpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'stuck' | 'glossary'>('stuck');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const glossary = {
    CPIO: {
      title: 'CPIO',
      subtitle: 'Central Public Information Officer',
      simple: 'This is the specific officer responsible for handling and replying to RTI requests for a public authority.',
      official: 'Section 5(1) of the RTI Act, 2005 designates officers in all public authorities to provide information to persons requesting it.'
    },
    FAA: {
      title: 'FAA',
      subtitle: 'First Appellate Authority',
      simple: 'The senior officer in the same department who hears and decides your First Appeal if the CPIO rejects your query, gives incomplete details, or does not respond within 30 days.',
      official: 'Appointed under Section 19(1) of the RTI Act, 2005 to hear first appeals against CPIO decisions.'
    },
    BPL: {
      title: 'BPL Fee Waiver',
      subtitle: 'Below Poverty Line',
      simple: 'If you possess a verified BPL card, the standard ₹10 filing fee is waived completely. You must upload a copy of your card as proof during submission.',
      official: 'Proviso to Section 7(5) of the RTI Act states that no fee shall be charged from persons who are below the poverty line.'
    },
    'Section 6(1)': {
      title: 'Section 6(1)',
      subtitle: 'Filing the Request',
      simple: 'The clause in the law under which you formally request information from any government department.',
      official: 'Section 6(1) outlines that a person who desires to obtain any information shall make a request in writing or through electronic media.'
    },
    'Section 19(1)': {
      title: 'Section 19(1)',
      subtitle: 'First Appeal Rule',
      simple: 'The legal clause under which you submit an appeal to the FAA if the CPIO replies late or gives unsatisfactory information.',
      official: 'Section 19(1) allows any person who does not receive a decision within the specified time, or is aggrieved by a CPIO decision, to appeal to the senior officer.'
    },
    'Second Appeal (CIC)': {
      title: 'Second Appeal (CIC)',
      subtitle: 'Central Information Commission',
      simple: 'The final appeal stage under the RTI Act. If your First Appeal is rejected or ignored by the FAA officer, you file a Second Appeal directly with the Central Information Commission (CIC).',
      official: 'Filed under Section 19(3) of the RTI Act, 2005. The decision of the Commission is legally binding.'
    },
    'Payment Reconciliation': {
      title: 'Payment Reconciliation',
      subtitle: 'Failed Transactions Sync',
      simple: 'If your ₹10 payment was deducted but the status shows pending, it means the transaction needs reconciliation. The portal automatically syncs status with SBI/NIC payment gateways within 24 hours.',
      official: 'DoPT guidelines specify automatic verification of payments through the bank reconciliation portal.'
    }
  };

  const helpTopics: Record<string, Array<{ q: string; a: string }>> = {
    landing: [
      { q: 'Is my information kept private?', a: 'Yes. RTI Saathi is a prototype that stores applications locally in your browser storage (localStorage). It is not sent to official government portals unless you submit it yourself.' },
      { q: 'What is the cost of filing an RTI?', a: 'The standard statutory fee is ₹10. If you belong to the Below Poverty Line (BPL) category and upload a card copy, the fee is completely waived.' },
      { q: 'How long does the government take to respond?', a: 'By law, the CPIO must respond within 30 days of receiving your application (35 days if filed via an assistant portal).' }
    ],
    onboarding: [
      { q: 'I do not know which department to select', a: 'Use our AI Search box! Type what you want to know (e.g. "my passport is delayed") and the system automatically matches the public department (like Ministry of External Affairs).' },
      { q: 'Can I request information in Hindi?', a: 'Yes, you can write your request in Hindi or Hinglish. The AI Assistant will parse it and draft formal questions.' },
      { q: 'What is a State vs Central routing?', a: 'Some departments belong to state governments (like Rajasthan School PWD) which cannot be processed on the Central RTI site. We will display a warning and a link to the Rajasthan Portal if we detect state keywords.' }
    ],
    builder: [
      { q: 'How does the AI draft my questions?', a: 'Based on the location, dates, and files you select, the AI structures 4-5 precise queries. CPIOs often reject vague open questions like "Why has my road not been built?". Asking for "Work orders" or "Sanction records" is legally binding.' },
      { q: 'What if I want to edit the drafted questions?', a: 'In Step 2 of the builder (Draft Builder), you can directly click inside any question textbox to rewrite, add, or delete questions before finalizing.' },
      { q: 'My document upload failed', a: 'Make sure your document is in PDF format and less than 2MB. Ensure your network is active. If you face persistent errors, check if low-data mode is on.' }
    ],
    dashboard: [
      { q: 'Why is my RTI status not updating?', a: 'For demo purposes, you can simulate a CPIO response. Go to your dashboard and look for the RTI labeled "Road Construction Inquiry" with a pending status. Click the "Simulate Response" banner to receive a mock official reply.' },
      { q: 'What do the status colors mean?', a: 'Response Pending: Awaiting CPIO reply. Completed: Response received. Action Required: CPIO reply received, which you should review to see if answers are missing.' },
      { q: 'Where are my submitted files?', a: 'Every RTI has its own record folder. Click on "View Details" to open the Document Vault where you can preview and download applications, receipts, and reply letters.' }
    ],
    detail: [
      { q: 'The government response omitted my questions', a: 'If a CPIO fails to answer, you can file a First Appeal. Use our "One-Click First Appeal" button. It will carry forward all files and details, requiring you to only write the reason for appealing.' },
      { q: 'How do I know what was answered?', a: 'Open the "AI Response Analyzer" tab on the detail screen. It compares original questions to the reply letter and flags what was Answered, Partially Answered, or Omitted.' },
      { q: 'Where is the original CPIO reply document?', a: 'You can view the unchanged CPIO letter in the "Official CPIO Reply" document vault panel. It is preserved exactly as supplied.' }
    ],
    help: [
      { q: 'What is a CPIO?', a: 'The Central Public Information Officer is the specific official in a government department designated to process and reply to RTI requests.' },
      { q: 'How do I check if my payment went through?', a: 'Check the Security Audit Logs in your Profile page or open the RTI details vault to view your Payment Receipt.' }
    ]
  };

  const currentHelp = helpTopics[activeView] || helpTopics['landing'];

  const t = {
    en: {
      btnLabel: "I'm Stuck",
      title: "Contextual Help & Explainers",
      stuckTab: "Roadblocks",
      glossaryTab: "RTI Terms",
      backBtn: "Back to Topics",
      closeBtn: "Close Help",
      stuckDesc: "Here are solutions based on the page you are viewing:",
      glossaryDesc: "Click any term to understand it in simple language:"
    },
    hi: {
      btnLabel: "मदद चाहिए",
      title: "सहायता और स्पष्टीकरण",
      stuckTab: "समस्याएं",
      glossaryTab: "आरटीआई शब्दावली",
      backBtn: "वापस जाएँ",
      closeBtn: "सहायता बंद करें",
      stuckDesc: "आप जिस पेज पर हैं उसके अनुसार समाधान:",
      glossaryDesc: "सरल भाषा में समझने के लिए किसी भी शब्द पर क्लिक करें:"
    }
  }[language];

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setSelectedTopic(null);
        }}
        className="fixed bottom-6 right-6 z-40 bg-error-red text-white font-extrabold text-xs px-4.5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-1.5 focus-ring cursor-pointer animate-in fade-in"
        aria-label="Get Help / Stuck"
      >
        <HelpCircle className="h-4 w-4" />
        <span>{t.btnLabel}</span>
      </button>

      {/* Sidebar Panel Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-bg-warm h-full shadow-2xl flex flex-col p-6 border-l border-border-slate animate-in slide-in-from-right duration-250">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-border-slate pb-4 mb-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5.5 w-5.5 text-primary-navy" />
                <h3 className="font-extrabold text-sm text-primary-navy">{t.title}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border-slate mb-4">
              <button
                onClick={() => {
                  setActiveTab('stuck');
                  setSelectedTopic(null);
                }}
                className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'stuck' ? 'border-primary-navy text-primary-navy font-extrabold' : 'border-transparent text-slate-500'
                }`}
              >
                {t.stuckTab}
              </button>
              <button
                onClick={() => {
                  setActiveTab('glossary');
                  setSelectedTopic(null);
                }}
                className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'glossary' ? 'border-primary-navy text-primary-navy font-extrabold' : 'border-transparent text-slate-500'
                }`}
              >
                {t.glossaryTab}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto pr-1">
              {selectedTopic ? (
                // Detailed Answer view
                <div className="space-y-4 animate-in fade-in duration-200">
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="text-xs font-bold text-primary-navy hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    ← {t.backBtn}
                  </button>

                  {activeTab === 'stuck' ? (
                    // Help Question Answer
                    <div className="bg-white p-5 rounded-2xl border border-border-slate shadow-xs space-y-3">
                      <h4 className="font-bold text-xs text-primary-navy uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="h-4.5 w-4.5 text-secondary-saffron" />
                        Roadblock Solution
                      </h4>
                      <p className="font-bold text-sm text-text-primary leading-snug">
                        {currentHelp.find(h => h.q === selectedTopic)?.q}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed bg-bg-warm p-3 rounded-xl border border-border-slate">
                        {currentHelp.find(h => h.q === selectedTopic)?.a}
                      </p>
                    </div>
                  ) : (
                    // Glossary Explainer
                    <div className="bg-white p-5 rounded-2xl border border-border-slate shadow-xs space-y-4">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-secondary-saffron bg-secondary-saffron/10 px-2 py-0.5 rounded-full">
                          Glossary Term
                        </span>
                        <h4 className="font-black text-xl text-primary-navy mt-2 leading-none">
                          {(glossary as any)[selectedTopic]?.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-400 mt-1">
                          {(glossary as any)[selectedTopic]?.subtitle}
                        </p>
                      </div>

                      <div className="space-y-3 bg-bg-warm p-4 rounded-xl border border-border-slate">
                        <div>
                          <span className="text-[9.5px] font-bold text-slate-450 uppercase block mb-1">In Simple Terms</span>
                          <p className="text-xs text-text-primary leading-relaxed">
                            {(glossary as any)[selectedTopic]?.simple}
                          </p>
                        </div>
                        <div className="border-t border-border-slate pt-3 mt-3">
                          <span className="text-[9.5px] font-bold text-slate-450 uppercase block mb-1">Official Legal Rule</span>
                          <p className="text-[11px] text-text-secondary leading-relaxed italic">
                            {(glossary as any)[selectedTopic]?.official}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // List views
                <div className="space-y-4">
                  {activeTab === 'stuck' ? (
                    <>
                      <p className="text-xs text-text-secondary">{t.stuckDesc}</p>
                      <div className="space-y-2">
                        {currentHelp.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedTopic(item.q)}
                            className="w-full text-left bg-white border border-border-slate rounded-xl p-3.5 hover:bg-slate-50 transition-colors text-xs font-bold text-text-primary flex justify-between items-center gap-2 shadow-2xs cursor-pointer"
                          >
                            <span>{item.q}</span>
                            <span className="text-slate-400">→</span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-text-secondary">{t.glossaryDesc}</p>
                      <div className="space-y-2">
                        {Object.keys(glossary).map((term) => (
                          <button
                            key={term}
                            onClick={() => setSelectedTopic(term)}
                            className="w-full text-left bg-white border border-border-slate rounded-xl p-3.5 hover:bg-slate-50 transition-colors text-xs font-bold text-primary-navy flex items-center justify-between shadow-2xs cursor-pointer"
                          >
                            <div className="flex flex-col">
                              <span>{term}</span>
                              <span className="text-[10px] text-slate-450 font-normal">{(glossary as any)[term].subtitle}</span>
                            </div>
                            <span className="text-slate-400">→</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-border-slate pt-4 mt-4 flex flex-col gap-2">
              <div className="bg-primary-navy/5 border border-primary-navy/10 rounded-xl p-3 flex gap-2 items-start text-[11px] leading-relaxed text-primary-navy">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-primary-blue" />
                <div>
                  <span className="font-bold block">Official Government Help Desk</span>
                  If you are blocked on technical errors, call the national RTI support helpline at <span className="font-bold text-text-primary">011-24622461</span> (Office Hours: 9:00 AM – 5:30 PM, Mon-Fri) or email <span className="font-bold text-text-primary">rtionline-dopt@nic.in</span>.
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
