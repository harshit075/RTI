'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, Search, Sparkles, Send, Inbox, AlertCircle, 
  MessageSquare, Compass, ShieldQuestion, Landmark
} from 'lucide-react';
import { FAQ } from '../data/mockData';

interface HelpViewProps {
  language: 'en' | 'hi';
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

export default function HelpView({ language }: HelpViewProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'>('All');
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
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  React.useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error('Failed to load FAQs:', err));
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
          
          {/* Left Column: FAQ Explorer */}
          <div className="lg:col-span-2 space-y-6">
            
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
                  <h4 className="font-extrabold text-slate-850 text-sm dark:text-slate-100">{faq.question}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed dark:text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>

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
