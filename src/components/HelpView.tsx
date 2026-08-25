'use client';

import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, Search, Sparkles, Send, Inbox, AlertCircle, 
  MessageSquare, Compass, ShieldQuestion, Landmark, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { FAQ, mockFAQs } from '../data/mockData';

interface HelpViewProps {
  language: 'en' | 'hi';
  activeCategory?: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions';
  setActiveCategory?: (cat: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export interface Ticket {
  id: string;
  issue: string;
  rtiReg?: string;
  details: string;
  status: 'Open' | 'Resolved';
  date: string;
  reply?: string;
}

export default function HelpView({ 
  language,
  activeCategory: propActiveCategory,
  setActiveCategory: propSetActiveCategory
}: HelpViewProps) {
  const [localActiveCategory, localSetActiveCategory] = useState<'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'>('All');
  const [activeHelpTab, setActiveHelpTab] = useState<'faqs' | 'guide' | 'glossary'>('faqs');
  const [activeGuideStep, setActiveGuideStep] = useState(0);
  const [glossarySearch, setGlossarySearch] = useState('');
  
  const activeCategory = propActiveCategory !== undefined ? propActiveCategory : localActiveCategory;
  const setActiveCategory = propSetActiveCategory !== undefined ? propSetActiveCategory : localSetActiveCategory;
  const [ticketIssue, setTicketIssue] = useState('Payment completed but registration number missing');
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketRegNo, setTicketRegNo] = useState('RTI-2026-001245');
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 'TKT-9201',
      issue: 'Payment completed but registration number missing',
      rtiReg: 'RTI-2026-001245',
      details: 'My payment of ₹10 was successfully deducted from UPI, but the portal redirected to a blank screen and did not output a registration number. Transaction ID: TXN_83910482.',
      status: 'Resolved',
      date: '2026-08-24',
      reply: 'We have verified transaction TXN_83910482. Your payment is verified. The RTI has been registered under Reg No: MORLY/R/2026/05931. It is visible on your dashboard.'
    }
  ]);
  const [submittedTicketId, setSubmittedTicketId] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>(mockFAQs);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => (res.ok ? res.json() : mockFAQs))
      .then(data => setFaqs(Array.isArray(data) && data.length > 0 ? data : mockFAQs))
      .catch(() => setFaqs(mockFAQs));
  }, []);

  const categories = ['All', 'Basics', 'Fees', 'Process', 'Appeals', 'Exemptions'];

  const filteredFAQs = faqs.filter(faq => {
    return activeCategory === 'All' || faq.category === activeCategory;
  });

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketDetails.trim()) return;

    const newTicket: Ticket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      issue: ticketIssue,
      rtiReg: ticketRegNo,
      details: ticketDetails,
      status: 'Open',
      date: new Date().toISOString().substring(0, 10)
    };

    setTickets([newTicket, ...tickets]);
    setSubmittedTicketId(newTicket.id);
    setTicketDetails('');
  };

  const glossaryItems = [
    { term: 'CPIO (Central Public Information Officer)', desc: 'Designated nodal officer responsible for processing RTI requests and providing information under Section 5(1).' },
    { term: 'FAA (First Appellate Authority)', desc: 'Senior quasi-judicial officer within the same department who hears First Appeals filed under Section 19(1).' },
    { term: 'CIC (Central Information Commission)', desc: 'Highest statutory appellate body for Central RTI appeals filed under Section 19(3).' },
    { term: 'Deemed Refusal', desc: 'If no reply is received within 30 statutory days, the application is legally deemed rejected, allowing immediate free appeal.' },
    { term: 'Section 8(1) Exemptions', desc: 'Statutory clauses specifying non-disclosable items (national security, cabinet deliberations, trade secrets).' },
    { term: 'Section 4 Proactive Disclosure', desc: 'Mandatory publication of organization structures, budgets, employee salaries, and contact directories.' }
  ].filter(item => item.term.toLowerCase().includes(glossarySearch.toLowerCase()) || item.desc.toLowerCase().includes(glossarySearch.toLowerCase()));

  return (
    <div className="flex-1 bg-[#F7F8FA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="border-b border-[#D9E0E6] pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-[#17212B] tracking-tight">
            {language === 'en' ? 'Help & Knowledge Center' : 'सहायता व जानकारी केंद्र'}
          </h1>
          <p className="text-xs text-[#52606D] mt-1 font-medium">
            {language === 'en' 
              ? 'Statutory guidance, citizen handbook, plain-language glossary, and grievance desk.'
              : 'कानूनी नियम, अक्सर पूछे जाने वाले प्रश्न और सहायता डेस्क।'}
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: FAQ, Guide & Glossary Explorer (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Top-Level Help Tabs */}
            <div className="flex border border-[#D9E0E6] bg-white rounded-2xl p-1.5 shadow-3xs">
              <button
                onClick={() => setActiveHelpTab('faqs')}
                className={`flex-1 rounded-xl py-2 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'faqs' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
              </button>
              <button
                onClick={() => setActiveHelpTab('guide')}
                className={`flex-1 rounded-xl py-2 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'guide' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {language === 'en' ? 'Citizen Lifecycle Guide' : 'नागरिक गाइड'}
              </button>
              <button
                onClick={() => setActiveHelpTab('glossary')}
                className={`flex-1 rounded-xl py-2 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'glossary' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {language === 'en' ? 'Legal Terms Glossary' : 'कानूनी शब्दावली'}
              </button>
            </div>

            {/* TAB 1: FAQ PANEL */}
            {activeHelpTab === 'faqs' && (
              <div className="space-y-4">
                {/* Category tabs */}
                <div className="rounded-2xl border border-[#D9E0E6] bg-white p-2 flex flex-wrap gap-1 shadow-3xs">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c as any)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        activeCategory === c
                          ? 'bg-[#123B5D] text-white shadow-3xs'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* FAQs List */}
                <div className="space-y-3">
                  {filteredFAQs.map(faq => (
                    <div key={faq.id} className="rounded-2xl border border-[#D9E0E6] bg-white p-5 shadow-3xs space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] uppercase font-black text-[#123B5D] tracking-wider bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                          {faq.category}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">{faq.citation}</span>
                      </div>
                      <h4 className="font-extrabold text-[#17212B] text-sm">{faq.question}</h4>
                      <p className="text-xs text-[#52606D] leading-relaxed font-normal">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE CITIZEN GUIDE */}
            {activeHelpTab === 'guide' && (
              <div className="bg-white rounded-2xl border border-[#D9E0E6] p-6 shadow-3xs space-y-6">
                <div>
                  <h3 className="font-black text-sm text-[#17212B] uppercase tracking-wider">
                    Interactive Citizen Guide
                  </h3>
                  <p className="text-xs text-[#52606D] mt-0.5">
                    Follow the standard 5-step lifecycle of an RTI application under the Right to Information Act, 2005.
                  </p>
                </div>

                {/* Stepper Steps */}
                <div className="flex justify-between items-center relative gap-2 pb-2">
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#D9E0E6] -z-0" />
                  {[1, 2, 3, 4, 5].map((step, idx) => (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setActiveGuideStep(idx)}
                      className={`h-8 w-8 rounded-full font-black text-xs flex items-center justify-center border transition-all cursor-pointer z-10 ${
                        activeGuideStep === idx
                          ? 'bg-[#123B5D] text-white border-[#123B5D] scale-110 shadow-3xs'
                          : activeGuideStep > idx
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-400 border-[#D9E0E6] hover:bg-slate-50'
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                {/* Stepper Content */}
                <div className="bg-[#F7F8FA] border border-[#D9E0E6] rounded-2xl p-5 space-y-3 text-xs">
                  {activeGuideStep === 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#123B5D] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Step 1: Framing Specific Questions
                      </span>
                      <h4 className="font-extrabold text-sm text-[#17212B]">Requesting Material Records under Section 6(1)</h4>
                      <p className="text-[#52606D] leading-relaxed">
                        CPIO officers reject vague or philosophical requests such as <em>"Why was my road not built?"</em>. Under Section 2(f), you must request certified copies of pre-existing material records (e.g. sanction orders, disbursement ledgers, inspection certificates).
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 1 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#123B5D] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Step 2: Statutory Fee Payment
                      </span>
                      <h4 className="font-extrabold text-sm text-[#17212B]">Fee Exemption & Bharatkosh Payment</h4>
                      <p className="text-[#52606D] leading-relaxed">
                        Filing an RTI with a Central Public Authority requires a statutory fee of ₹10. If you possess a verified BPL card, the fee is completely waived under Section 7(5).
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 2 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#123B5D] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Step 3: The 30-Day Clock
                      </span>
                      <h4 className="font-extrabold text-sm text-[#17212B]">Statutory Response Deadlines</h4>
                      <p className="text-[#52606D] leading-relaxed">
                        Under Section 7(1), the CPIO is mandated to supply records within 30 calendar days. If no reply is provided by this deadline, it is treated as a <strong>Deemed Refusal</strong>, allowing you to file an appeal immediately for free.
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 3 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#123B5D] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Step 4: First Appeal to FAA
                      </span>
                      <h4 className="font-extrabold text-sm text-[#17212B]">Section 19(1) Appellate Redressal</h4>
                      <p className="text-[#52606D] leading-relaxed">
                        If the CPIO fails to respond within 30 days or provides incomplete answers without citing Section 8 exemptions, file a First Appeal to the designated First Appellate Authority (FAA).
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 4 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#123B5D] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Step 5: Second Appeal to CIC
                      </span>
                      <h4 className="font-extrabold text-sm text-[#17212B]">Central Information Commission</h4>
                      <p className="text-[#52606D] leading-relaxed">
                        If the FAA rejects your appeal or ignores the deadline, escalate by filing a Second Appeal under Section 19(3) to the Central Information Commission (CIC).
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between border-t border-slate-200 pt-3">
                    <button
                      type="button"
                      disabled={activeGuideStep === 0}
                      onClick={() => setActiveGuideStep(activeGuideStep - 1)}
                      className="px-3 py-1 text-xs font-bold text-slate-600 bg-white border border-[#D9E0E6] rounded-lg disabled:opacity-40 cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      disabled={activeGuideStep === 4}
                      onClick={() => setActiveGuideStep(activeGuideStep + 1)}
                      className="px-3 py-1 text-xs font-bold text-white bg-[#123B5D] rounded-lg disabled:opacity-40 cursor-pointer"
                    >
                      Next Step ➔
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: GLOSSARY */}
            {activeHelpTab === 'glossary' && (
              <div className="bg-white rounded-2xl border border-[#D9E0E6] p-6 shadow-3xs space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder="Search legal term (e.g. CPIO, FAA, Deemed Refusal, Section 8)..."
                    className="w-full pl-9 pr-4 py-2 border border-[#D9E0E6] rounded-xl text-xs bg-[#F7F8FA] outline-none focus:border-[#123B5D]"
                  />
                </div>

                <div className="space-y-3">
                  {glossaryItems.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] space-y-1">
                      <h4 className="font-extrabold text-xs text-[#123B5D]">{item.term}</h4>
                      <p className="text-xs text-[#52606D] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Support Ticket Submission */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#D9E0E6] p-6 shadow-3xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-sm text-[#17212B] flex items-center gap-1.5">
                  <MessageSquare className="h-4 w-4 text-[#123B5D]" />
                  Citizen Support Desk
                </h3>
                <p className="text-[11px] text-[#52606D] mt-0.5">
                  Facing an issue with payment, application numbers, or response uploads?
                </p>
              </div>

              {submittedTicketId && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Ticket Created: {submittedTicketId}
                  </div>
                  <p className="text-[11px] text-emerald-800">Our citizen support officer will review and update status shortly.</p>
                </div>
              )}

              <form onSubmit={handleTicketSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Issue Category</label>
                  <select
                    value={ticketIssue}
                    onChange={(e) => setTicketIssue(e.target.value)}
                    className="w-full rounded-xl border border-[#D9E0E6] p-2 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                  >
                    <option value="Payment completed but registration number missing">Payment completed but registration missing</option>
                    <option value="CPIO contact details invalid or outdated">CPIO contact details invalid or outdated</option>
                    <option value="Need assistance with First Appeal filing">Need assistance with First Appeal filing</option>
                    <option value="Document preview rendering issue">Document preview rendering issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Related Application ID (Optional)</label>
                  <input
                    type="text"
                    value={ticketRegNo}
                    onChange={(e) => setTicketRegNo(e.target.value)}
                    placeholder="e.g. RTI-2026-001245"
                    className="w-full rounded-xl border border-[#D9E0E6] p-2 text-xs font-mono font-bold text-slate-800 bg-[#F7F8FA]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Describe Your Issue</label>
                  <textarea
                    rows={4}
                    required
                    value={ticketDetails}
                    onChange={(e) => setTicketDetails(e.target.value)}
                    placeholder="Describe transaction references, dates, or what happened..."
                    className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs text-slate-800 bg-[#F7F8FA]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" /> Submit Support Ticket
                </button>
              </form>

              {/* Active Support Tickets List */}
              <div className="border-t border-slate-100 pt-3 space-y-2">
                <span className="text-[10px] font-black uppercase text-slate-400 block">Your Support Tickets</span>
                {tickets.map(tkt => (
                  <div key={tkt.id} className="p-3 rounded-xl bg-[#F7F8FA] border border-[#D9E0E6] text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-extrabold text-[#123B5D]">{tkt.id}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        tkt.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {tkt.status}
                      </span>
                    </div>
                    <p className="font-semibold text-slate-800 text-[11px]">{tkt.issue}</p>
                    {tkt.reply && (
                      <p className="text-[10.5px] text-slate-600 bg-white p-2 rounded-lg border border-slate-200 mt-1">
                        <strong>Reply:</strong> {tkt.reply}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
