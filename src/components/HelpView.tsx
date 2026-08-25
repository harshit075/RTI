'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, Search, Sparkles, Send, Inbox, AlertCircle, 
  MessageSquare, Compass, ShieldQuestion, Landmark
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
  const [ticketRegNo, setTicketRegNo] = useState('RTI-2026-DEMO-001');
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 'TKT-9201',
      issue: 'Payment completed but registration number missing',
      rtiReg: 'RTI-2026-DEMO-001',
      details: 'My payment of ₹10 was successfully deducted from UPI, but the portal redirected to a blank screen and did not output a registration number. Transaction ID: TXN_83910482.',
      status: 'Resolved',
      date: '2026-08-24',
      reply: 'We have verified transaction TXN_83910482. Your payment is verified. The RTI has been registered under Reg No: MORLY/R/2026/05931. It is visible on your dashboard.'
    }
  ]);
  const [submittedTicketId, setSubmittedTicketId] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>(mockFAQs);

  React.useEffect(() => {
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

  const getStuckOptions = (stage: string) => {
    switch (stage) {
      case 'payment':
        return [
          { q: 'Money deducted but registration number not generated?', a: 'Under the official process, payment reconciliation can take up to 24-48 hours. Do not pay again. Submit a support ticket containing your bank transaction ID, and our administrator will manual-verify and register your RTI.' },
          { q: 'UPI QR code not loading?', a: 'Ensure you are not in low-bandwidth mode. You can try shifting to Credit Card / Netbanking, or clear cache and try again.' }
        ];
      case 'authority':
        return [
          { q: 'Unsure if Central or State government department?', a: 'Central ministries cover Railways, Passports, Aadhaar (UIDAI), Income Tax, EPFO, and National Highways. Land, police, municipalities, and local village roads are managed by State departments. Open our state router or consult the department directory.' },
          { q: 'What is a CPIO?', a: 'The Central Public Information Officer (CPIO) is the designated nodal officer in every government authority responsible for processing RTI requests and providing information.' }
        ];
      default:
        return [
          { q: 'CPIO has rejected my RTI. What should I do?', a: 'If the rejection cites Section 8 exemptions, review if the denied details concern private third-party data. If not, file a First Appeal. If it was rejected without citing any sections, appeal immediately as it violates Section 7(8).' },
          { q: 'Information provided is incomplete. How to request missing items?', a: 'Do not file a new RTI. Open the RTI details page, launch the First Appeal Wizard, and draft an appeal requesting the FAA to direct the CPIO to release the remaining records.' }
        ];
    }
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">Help & Support Centre</h2>
          <p className="text-xs text-slate-500 mt-1">FAQ lookup, context-aware instructions, and system support tickets.</p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: FAQ, Guide & Glossary Explorer */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Top-Level Help Tabs */}
            <div className="flex border border-slate-200 bg-white rounded-xl p-1 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <button
                onClick={() => setActiveHelpTab('faqs')}
                className={`flex-1 rounded-lg py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'faqs' ? 'bg-primary-navy text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50/50'
                }`}
              >
                {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
              </button>
              <button
                onClick={() => setActiveHelpTab('guide')}
                className={`flex-1 rounded-lg py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'guide' ? 'bg-primary-navy text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50/50'
                }`}
              >
                {language === 'en' ? 'Citizen Guide Stepper' : 'नागरिक गाइड'}
              </button>
              <button
                onClick={() => setActiveHelpTab('glossary')}
                className={`flex-1 rounded-lg py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
                  activeHelpTab === 'glossary' ? 'bg-primary-navy text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50/50'
                }`}
              >
                {language === 'en' ? 'Legal Jargon Glossary' : 'कानूनी शब्दावली'}
              </button>
            </div>

            {/* TAB 1: FAQ PANEL */}
            {activeHelpTab === 'faqs' && (
              <div className="space-y-6">
                {/* Category tabs */}
                <div className="rounded-xl border border-slate-200 bg-white p-2 flex flex-wrap gap-1 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c as any)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        activeCategory === c
                          ? 'bg-primary-navy text-white'
                          : 'text-slate-550 hover:bg-slate-50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* FAQs List */}
                <div className="space-y-4">
                  {filteredFAQs.map(faq => (
                    <div key={faq.id} className="rounded-2xl border border-slate-250 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                      <div className="flex justify-between items-start gap-2 border-b border-slate-100 pb-2 mb-3">
                        <span className="text-[10px] uppercase font-bold text-secondary-saffron tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 font-mono">{faq.citation}</span>
                      </div>
                      <h4 className="font-extrabold text-slate-855 text-sm dark:text-slate-100">{faq.question}</h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed dark:text-slate-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE STEPPER CITIZEN GUIDE */}
            {activeHelpTab === 'guide' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-855 dark:text-white uppercase tracking-wider mb-1">
                    Interactive Citizen Guide & User Manual
                  </h3>
                  <p className="text-xs text-slate-500">
                    Follow the standard 5-step lifecycle of an RTI application under the Right to Information Act, 2005.
                  </p>
                </div>

                {/* Stepper Steps Indicators */}
                <div className="flex justify-between items-center relative gap-2 pb-2">
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
                  {[1, 2, 3, 4, 5].map((step, idx) => (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setActiveGuideStep(idx)}
                      className={`h-8 w-8 rounded-full font-bold text-xs flex items-center justify-center border transition-all cursor-pointer z-10 ${
                        activeGuideStep === idx
                          ? 'bg-primary-navy text-white border-primary-navy scale-110 shadow'
                          : activeGuideStep > idx
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                {/* Stepper Content */}
                <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5 space-y-4">
                  {activeGuideStep === 0 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-black uppercase text-secondary-saffron tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Step 1: Drafting with AI Nudges
                      </span>
                      <h4 className="font-bold text-sm text-slate-800">Framing Specific RTI Questions</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        CPIO officers often reject vague or interrogative requests such as <em>"Why are roads broken?"</em>. 
                        Under the Act, you must request <strong>specific official records</strong> (e.g. work orders, bills, inspection reports, maps). 
                        Our AI Assistant scans your description and converts it into precise queries targeting actual documents.
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 1 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-black uppercase text-secondary-saffron tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Step 2: Statutory Fee Payment
                      </span>
                      <h4 className="font-bold text-sm text-slate-800">Fee Exemption & Gateway Checkout</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Filing an RTI with a Central Authority requires a statutory fee of <strong>₹10</strong>. 
                        If you belong to the Below Poverty Line (BPL) category, select the BPL waiver and upload a scan of your BPL card; the fee will be waived. 
                        For simulated purposes, our portal provides transaction tokens instantly.
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 2 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-black uppercase text-secondary-saffron tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Step 3: The 30-Day Clock
                      </span>
                      <h4 className="font-bold text-sm text-slate-800">Statutory Response Windows</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Section 7(1) of the Act, the CPIO must either supply the information or reject the request with grounds within <strong>30 calendar days</strong>. 
                        If no reply is received by this deadline, it is legally treated as a <strong>Deemed Refusal</strong>, allowing you to file an appeal immediately for free.
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 3 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-black uppercase text-secondary-saffron tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Step 4: First Appeal to FAA
                      </span>
                      <h4 className="font-bold text-sm text-slate-800">Escalating to Appellate Officers</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the CPIO fails to respond within 30 days, or if they provide incomplete or misleading answers, you can file a <strong>First Appeal</strong> under Section 19(1). 
                        This appeal is routed to the department's senior <strong>First Appellate Authority (FAA)</strong>, who has 30 to 45 days to issue a deciding order.
                      </p>
                    </div>
                  )}

                  {activeGuideStep === 4 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-black uppercase text-secondary-saffron tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full">
                        Step 5: Second Appeal to CIC
                      </span>
                      <h4 className="font-bold text-sm text-slate-800">Central Information Commission</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the FAA rejects your appeal, ignores the deadline, or issues an unsatisfactory decision, you can escalate by filing a <strong>Second Appeal</strong> under Section 19(3) to the Central Information Commission (CIC). 
                        Our system provides an automated CIC wizard to compile the petition for filing.
                      </p>
                    </div>
                  )}

                  {/* Navigation buttons inside stepper */}
                  <div className="flex justify-between border-t border-slate-200/60 pt-4 mt-2">
                    <button
                      type="button"
                      disabled={activeGuideStep === 0}
                      onClick={() => setActiveGuideStep(activeGuideStep - 1)}
                      className="px-3.5 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 bg-white border border-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      disabled={activeGuideStep === 4}
                      onClick={() => setActiveGuideStep(activeGuideStep + 1)}
                      className="px-3.5 py-1.5 text-xs font-bold text-white bg-primary-navy hover:bg-primary-blue rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LEGAL JARGON GLOSSARY LOOKUP */}
            {activeHelpTab === 'glossary' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-855 dark:text-white uppercase tracking-wider mb-1">
                      Legal Jargon Explained
                    </h3>
                    <p className="text-xs text-slate-500">
                      Translate complex RTI legal definitions into simple plain-language terms.
                    </p>
                  </div>
                  {/* Glossary Search Box */}
                  <div className="relative w-full sm:w-[200px]">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={glossarySearch}
                      onChange={(e) => setGlossarySearch(e.target.value)}
                      placeholder="Search glossary..."
                      className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded-lg text-xs outline-none bg-slate-50 focus:border-primary-blue focus:bg-white"
                    />
                  </div>
                </div>

                {/* Glossary Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      term: 'CPIO',
                      full: 'Central Public Information Officer',
                      definition: 'The nodal officer designated in every government department to receive, process, and answer incoming RTI requests.',
                      sec: 'Section 5(1)'
                    },
                    {
                      term: 'FAA',
                      full: 'First Appellate Authority',
                      definition: 'A senior departmental officer designated to review appeals if the CPIO refuses or ignores your original RTI request.',
                      sec: 'Section 19(1)'
                    },
                    {
                      term: 'Section 4 Disclosures',
                      full: 'Proactive Information Publishing',
                      definition: 'The statutory requirement for government departments to pre-emptively publish budgets, structure, and salary details online so citizens do not need to file requests.',
                      sec: 'Section 4(1)(b)'
                    },
                    {
                      term: 'Section 8 Exemptions',
                      full: 'Withheld Information Clauses',
                      definition: 'Clauses under which CPIOs can refuse info (e.g. security, privacy, cabinet notes), provided there is no larger public interest.',
                      sec: 'Section 8(1)'
                    },
                    {
                      term: 'Deemed Refusal',
                      full: 'Implied Rejection due to Delay',
                      definition: 'If the CPIO fails to reply within 30 days, the law assumes the request was refused, enabling appeals immediately for free.',
                      sec: 'Section 7(2)'
                    },
                    {
                      term: 'CIC',
                      full: 'Central Information Commission',
                      definition: 'The supreme oversight body that hears Second Appeals. Their decisions are binding and carry penalty powers against officers.',
                      sec: 'Section 12 / 19(3)'
                    }
                  ]
                  .filter(item => 
                    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) || 
                    item.full.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                    item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
                  )
                  .map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group border border-slate-200 hover:border-primary-blue bg-slate-50/50 hover:bg-white rounded-xl p-4.5 transition-all shadow-3xs flex flex-col justify-between"
                      title={`Statutory Reference: ${item.sec}`}
                    >
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-extrabold text-sm text-primary-navy group-hover:text-primary-blue">{item.term}</span>
                          <span className="text-[9px] bg-slate-200/60 font-bold px-1.5 py-0.5 rounded text-slate-500 font-mono">{item.sec}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold block mt-0.5">{item.full}</span>
                        <p className="text-xs text-slate-600 leading-relaxed mt-2.5">{item.definition}</p>
                      </div>
                      <div className="border-t border-slate-200/60 pt-2 mt-3 flex justify-between items-center text-[10px] text-slate-400 font-bold">
                        <span>Translate: Citizens English</span>
                        <span className="text-primary-blue group-hover:underline">Section Details →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Stuck Helper & Ticket Support */}
          <div className="space-y-6">
            
            {/* Context Stuck helper */}
            <div className="rounded-2xl border border-slate-205 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-850">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-3 dark:text-white flex items-center gap-1.5">
                <Compass className="h-5 w-5 text-secondary-saffron" />
                I'm Stuck - Instant Guides
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Category: Payments</span>
                  <div className="space-y-2">
                    {getStuckOptions('payment').map((o, idx) => (
                      <details key={idx} className="group border border-slate-100 rounded-lg p-2.5 bg-slate-50/50 cursor-pointer">
                        <summary className="text-[11px] font-bold text-slate-700 list-none flex justify-between items-center select-none">
                          {o.q}
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-[10.5px] text-slate-550 mt-2 leading-relaxed border-t border-slate-100 pt-2">{o.a}</p>
                      </details>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Category: Authority & Laws</span>
                  <div className="space-y-2">
                    {getStuckOptions('authority').map((o, idx) => (
                      <details key={idx} className="group border border-slate-100 rounded-lg p-2.5 bg-slate-50/50 cursor-pointer">
                        <summary className="text-[11px] font-bold text-slate-700 list-none flex justify-between items-center select-none">
                          {o.q}
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-[10.5px] text-slate-550 mt-2 leading-relaxed border-t border-slate-100 pt-2">{o.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Official support desk contact info */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white p-5 shadow-sm">
              <h3 className="font-extrabold text-sm border-b border-slate-850 pb-3 mb-3">
                Official Help Desk (DoPT)
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                For technical issues, payment sync issues, or enquiries on the official government portals, contact the Central Helpline:
              </p>
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between border-b border-slate-850 pb-2">
                  <span className="text-slate-400">Helpline Phone</span>
                  <span className="font-extrabold text-slate-200 font-mono">011-24622461</span>
                </div>
                <div className="flex justify-between border-b border-slate-850 pb-2">
                  <span className="text-slate-400">Working Hours</span>
                  <span className="font-semibold text-slate-200">9:00 AM – 5:30 PM (Mon-Fri)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Support Email</span>
                  <span className="font-extrabold text-secondary-saffron font-mono">rtionline-dopt@nic.in</span>
                </div>
              </div>
            </div>

            {/* Support Ticket Submission */}
            <div className="rounded-2xl border border-slate-205 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-850">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-3 dark:text-white flex items-center gap-1.5">
                <MessageSquare className="h-5 w-5 text-secondary-saffron" />
                Submit Support Ticket
              </h3>

              <form onSubmit={handleTicketSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Issue Category</label>
                  <select
                    value={ticketIssue}
                    onChange={(e) => setTicketIssue(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 bg-slate-50 outline-none"
                  >
                    <option value="Payment completed but registration number missing">Payment failed / missing Reg No</option>
                    <option value="Document upload error">Document upload failure</option>
                    <option value="Department suggestion incorrect">Department selection query</option>
                    <option value="Other portal problem">Other technical issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Associated RTI Reg No (Optional)</label>
                  <input
                    type="text"
                    value={ticketRegNo}
                    onChange={(e) => setTicketRegNo(e.target.value)}
                    placeholder="e.g. MORLY/R/2026/05931"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 bg-slate-50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-450 uppercase mb-1">Describe the problem</label>
                  <textarea
                    rows={3}
                    value={ticketDetails}
                    onChange={(e) => setTicketDetails(e.target.value)}
                    placeholder="Include transaction ID, timestamp, and details..."
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-800 bg-slate-50 outline-none focus:border-primary-blue"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!ticketDetails.trim()}
                  className="w-full rounded-xl bg-primary-navy hover:bg-primary-blue text-white font-bold py-2.5 disabled:bg-slate-200 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="h-3.5 w-3.5" /> Submit Support Request
                </button>
              </form>

              {/* Submitted Confirmation */}
              {submittedTicketId && (
                <div className="mt-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] p-2.5 rounded-lg flex items-start gap-1.5 animate-in fade-in">
                  <AlertCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Ticket Submitted: {submittedTicketId}</span>
                    <p className="opacity-90 mt-0.5">Admin will review transaction notes and update in 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Tickets History List */}
              <div className="border-t border-slate-100 mt-4 pt-4 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ticket History</span>
                
                {tickets.map(tkt => (
                  <div key={tkt.id} className="border border-slate-200 rounded-lg p-2.5 bg-slate-50/50 text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-800">{tkt.id}</span>
                      <span className={`font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase ${
                        tkt.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                      }`}>
                        {tkt.status}
                      </span>
                    </div>
                    <p className="font-semibold text-slate-700 mt-1 leading-snug">{tkt.issue}</p>
                    <p className="text-slate-600 mt-1 line-clamp-2 italic">{tkt.details}</p>
                    
                    {tkt.reply && (
                      <div className="mt-2 bg-white border border-slate-200 p-2 rounded-lg text-[10.5px] text-slate-700 leading-snug">
                        <span className="font-bold text-primary-navy block mb-0.5">Admin Response:</span>
                        {tkt.reply}
                      </div>
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
