'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, Clock, AlertCircle, CheckCircle2, ChevronRight, 
  ArrowLeft, Scale, Landmark, FileDown, FolderOpen, Eye, 
  X, Download, ShieldCheck, ArrowRight, Sparkles, Check, 
  FileCheck2, BookOpen, AlertTriangle, Send
} from 'lucide-react';
import { 
  RTIApplication, TimelineEvent, DocumentItem, ResponseAnalysis, QuestionBreakdownItem 
} from '../services/types';
import { timelineService } from '../services/timelineService';
import { documentService } from '../services/documentService';
import { aiService } from '../services/aiService';
import { appealService } from '../services/appealService';
import { authorityService } from '../services/authorityService';

interface RtiDetailViewProps {
  rtiId: string;
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  onApplicationUpdated?: (updated: RTIApplication) => void;
}

export default function RtiDetailView({
  rtiId,
  rtis,
  setActiveView,
  language,
  onApplicationUpdated
}: RtiDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'response' | 'timeline' | 'documents' | 'appeal'>('overview');
  
  const rti = rtis.find(r => r.id === rtiId || r.registrationNumber === rtiId) || rtis[0];

  // Dynamic services state
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [analysis, setAnalysis] = useState<ResponseAnalysis | null>(null);
  const [viewingDoc, setViewingDoc] = useState<DocumentItem | null>(null);

  // Appeal flow state
  const [appealReason, setAppealReason] = useState('Information incomplete / withheld without Section 8 citation');
  const [appealText, setAppealText] = useState('');
  const [isSubmittingAppeal, setIsSubmittingAppeal] = useState(false);
  const [appealSubmittedSuccess, setAppealSubmittedSuccess] = useState<{ ref: string } | null>(null);

  // Second Appeal flow state
  const [secondAppealReason, setSecondAppealReason] = useState('First Appellate Authority failed to respond within statutory 45 days limit');
  const [secondAppealText, setSecondAppealText] = useState('');
  const [isSubmittingSecondAppeal, setIsSubmittingSecondAppeal] = useState(false);
  const [secondAppealSubmittedSuccess, setSecondAppealSubmittedSuccess] = useState<{ ref: string } | null>(null);

  // Interactive Document Q&A state
  const [chatQuery, setChatQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    { sender: 'assistant', text: 'Hello! I am your RTI Saathi Document Assistant. Ask me anything about the official CPIO response or disclosed records.' }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  useEffect(() => {
    if (rti) {
      timelineService.getTimelineEvents(rti).then(setTimelineEvents);
      documentService.getDocuments(rti.registrationNumber).then(setDocuments);
      aiService.analyzeResponse(rti).then(setAnalysis);
    }
  }, [rti]);

  if (!rti) {
    return (
      <div className="flex-1 p-10 text-center text-slate-500 font-bold">
        Application record not found.
      </div>
    );
  }

  const handleOpenAppeal = () => {
    const defaultAppealPetition = `BEFORE THE FIRST APPELLATE AUTHORITY
(Under Section 19(1) of the Right to Information Act, 2005)

In the matter of:
Appellant: Aarav Sharma (Citizen of India)
Address: C-42, Malviya Nagar, Jaipur, Rajasthan - 302017
Mobile: +91 90000 00000 | Email: aarav.sharma@example.com

VS

Respondent:
Central Public Information Officer (CPIO), ${rti.authorityName || 'Public Authority'}

1. PARTICULARS OF ORIGINAL APPLICATION:
   a. Original Registration Number: ${rti.registrationNumber}
   b. Date of Filing: ${rti.submittedDate}
   c. Subject: ${rti.subject}

2. PARTICULARS OF CPIO RESPONSE:
   a. CPIO Response Date: ${rti.responseDate || '24 August 2026'}
   b. Reason for Appeal: The CPIO failed to furnish records for Question #5 without invoking statutory Section 8(1) exemption clauses.

3. GROUNDS FOR FIRST APPEAL:
   a. Under Section 7(1) of the RTI Act 2005, the CPIO is mandated to supply all requested records unless exempt.
   b. Public expenditure and safety inspections on civic works cannot be withheld under the pretext of "records under compilation".

4. PRAYER:
   The Appellant prays that the First Appellate Authority direct the CPIO to furnish certified copies of the completion certificate and inspection report within 15 days.

Date: 25 August 2026
Appellant: Aarav Sharma`;

    setAppealText(defaultAppealPetition);
    setActiveTab('appeal');
  };

  const handleFirstAppealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAppeal(true);
    const result = await appealService.fileFirstAppeal({
      rtiId: rti.id,
      reason: appealReason,
      petitionText: appealText,
      appellantName: 'Aarav Sharma'
    });
    setIsSubmittingAppeal(false);
    setAppealSubmittedSuccess({ ref: result.appealRef });
    if (onApplicationUpdated) onApplicationUpdated(result.application);
  };

  const handleOpenSecondAppeal = () => {
    const defaultSecondAppealPetition = `BEFORE THE CENTRAL INFORMATION COMMISSION (CIC)
(Second Appeal under Section 19(3) of the Right to Information Act, 2005)

In the matter of:
Appellant: Aarav Sharma (Citizen of India)
Address: C-42, Malviya Nagar, Jaipur, Rajasthan - 302017

VS

1. Central Public Information Officer (CPIO), ${rti.authorityName || 'Public Authority'}
2. First Appellate Authority (FAA), ${rti.authorityName || 'Public Authority'}

1. PARTICULARS OF ORIGINAL APPLICATION:
   a. Original Registration Number: ${rti.registrationNumber}
   b. Date of Filing: ${rti.submittedDate}

2. PARTICULARS OF FIRST APPEAL:
   a. Date of First Appeal: ${rti.appealDate || '2026-08-15'}
   b. First Appellate Authority Decision Date: None (Deemed Refusal/No order passed)

3. GROUNDS FOR SECOND APPEAL:
   a. The Appellant filed a First Appeal under Section 19(1) of the RTI Act 2005 on ${rti.appealDate || '2026-08-15'}.
   b. The First Appellate Authority (FAA) failed to decide the appeal or issue any directions to CPIO within the maximum statutory limit of 45 days.
   c. The CPIO continues to wrongfully withhold public records in violation of Section 7(1).

4. PRAYER:
   The Appellant prays that the Honorable Central Information Commission direct the CPIO to release all withheld completion certificates and inspect the road works, and impose personal statutory penalties under Section 20(1) on the delinquent officer.

Date: ${new Date().toISOString().substring(0, 10)}
Appellant: Aarav Sharma`;

    setSecondAppealText(defaultSecondAppealPetition);
    setActiveTab('appeal');
  };

  const handleSecondAppealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingSecondAppeal(true);
    const result = await appealService.fileSecondAppeal({
      rtiId: rti.id,
      reason: secondAppealReason,
      petitionText: secondAppealText,
      appellantName: 'Aarav Sharma'
    });
    setIsSubmittingSecondAppeal(false);
    setSecondAppealSubmittedSuccess({ ref: result.appealRef });
    if (onApplicationUpdated) onApplicationUpdated(result.application);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    const userMsg = chatQuery;
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatQuery('');
    setIsChatLoading(true);

    setTimeout(() => {
      let reply = '';
      const q = userMsg.toLowerCase();
      if (q.includes('summarize') || q.includes('summary')) {
        reply = `Summary of response document (${rti.registrationNumber}):\n- CPIO Manoj Pandey confirmed that a total of ₹1,42,50,000 was sanctioned for road development works.\n- Contract JPR/RD/2024/098 was awarded to the executing contractor.\n- Question #5 regarding safety completion audits and engineer structural inspection logs was withheld on the grounds of 'records under compilation'.`;
      } else if (q.includes('withheld') || q.includes('question 5') || q.includes('inspect')) {
        reply = `Regarding the safety and structural inspection logs (Question 5), the CPIO states: 'Records under compilation by the engineering wing.' No statutory Section 8(1) exemption is cited for withholding these records. Under Section 7(1) of the RTI Act, this constitutes an invalid withholding, forming strong grounds for appeal.`;
      } else if (q.includes('contract') || q.includes('agreement') || q.includes('tender')) {
        reply = `Yes, the CPIO response includes Annexure-B which contains a certified copy of the successful contractor work order #JPR/RD/2024/098.`;
      } else {
        reply = `Document Assistant Response: The CPIO letter references receipt of the statutory ₹10 fee under Transaction ID: ${rti.paymentId || 'TXN-2026-001245'} and provides asphalt vouchers in Annexure-A. Let me know if you would like me to draft a specific query or inspect other points.`;
      }

      setChatHistory(prev => [...prev, { sender: 'assistant', text: reply }]);
      setIsChatLoading(false);
    }, 800);
  };

  return (
    <div className="flex-1 bg-[#F7F8FA] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Top Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#D9E0E6]">
          <button
            onClick={() => setActiveView('dashboard')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#52606D] hover:text-[#123B5D] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Applications
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-white text-slate-700 px-3 py-1 rounded-lg border border-[#D9E0E6]">
              {rti.registrationNumber}
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-lg border bg-blue-50 text-[#123B5D] border-blue-200">
              {rti.status}
            </span>
          </div>
        </div>

        {/* Case Banner */}
        <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 sm:p-8 shadow-3xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#123B5D]">
                {rti.authorityName || 'Public Authority'}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#17212B] leading-tight">
                {rti.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#52606D] font-normal leading-relaxed max-w-3xl">
                {rti.subject}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              {(rti.status === 'Response Received' || rti.status === 'Action Required') && (
                <button
                  onClick={handleOpenAppeal}
                  className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-5 py-2.5 text-xs font-black shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <Scale className="h-4 w-4" />
                  File First Appeal ➔
                </button>
              )}

              {rti.status === 'First Appeal Filed' && (
                <button
                  onClick={handleOpenSecondAppeal}
                  className="rounded-xl bg-purple-700 hover:bg-purple-800 text-white px-5 py-2.5 text-xs font-black shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <Scale className="h-4 w-4" />
                  File Second Appeal (CIC) ➔
                </button>
              )}

              <button
                onClick={() => setActiveTab('documents')}
                className="rounded-xl bg-white border border-[#D9E0E6] hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-xs font-bold shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FolderOpen className="h-4 w-4" />
                Case Documents ({documents.length})
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-xs">
            <div className="bg-[#F7F8FA] p-3 rounded-xl border border-[#D9E0E6]">
              <span className="text-[#52606D] font-bold block text-[10px] uppercase">Filed Date</span>
              <span className="font-extrabold text-[#17212B]">{rti.submittedDate}</span>
            </div>
            <div className="bg-[#F7F8FA] p-3 rounded-xl border border-[#D9E0E6]">
              <span className="text-[#52606D] font-bold block text-[10px] uppercase">Decision Deadline</span>
              <span className="font-extrabold text-[#17212B]">{rti.expectedDate} (30 Days)</span>
            </div>
            <div className="bg-[#F7F8FA] p-3 rounded-xl border border-[#D9E0E6]">
              <span className="text-[#52606D] font-bold block text-[10px] uppercase">Questions Total</span>
              <span className="font-extrabold text-[#17212B]">{rti.totalQuestions} Questions</span>
            </div>
            <div className="bg-[#F7F8FA] p-3 rounded-xl border border-[#D9E0E6]">
              <span className="text-[#52606D] font-bold block text-[10px] uppercase">Application Fee</span>
              <span className="font-extrabold text-emerald-700">₹10.00 (Confirmed)</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#D9E0E6] gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Questions', icon: FileText },
            { id: 'response', label: 'Response & Analysis', icon: FileCheck2 },
            { id: 'timeline', label: 'Application Timeline', icon: Clock },
            { id: 'documents', label: 'Official Documents', icon: FolderOpen },
            { id: 'appeal', label: 'First Appeal Workspace', icon: Scale }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'border-[#123B5D] text-[#123B5D]' 
                    : 'border-transparent text-[#52606D] hover:text-[#17212B]'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-[#123B5D]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW & QUESTIONS */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Original Questions */}
            <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-3">
              <h2 className="text-sm font-black text-[#17212B] uppercase tracking-wider">
                Submitted Questions under Section 6(1) ({rti.questions.length})
              </h2>

              <div className="space-y-2.5">
                {rti.questions.map((q, idx) => (
                  <div key={idx} className="rounded-xl bg-[#F7F8FA] p-3.5 border border-[#D9E0E6] flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-[#123B5D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-semibold text-slate-800 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Authority CPIO details */}
            <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-3">
              <h2 className="text-sm font-black text-[#17212B] uppercase tracking-wider">
                Designated Public Information Officers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#D9E0E6] space-y-1">
                  <span className="text-[10px] font-black uppercase text-blue-700 block">Central Public Information Officer (CPIO)</span>
                  <div className="font-extrabold text-slate-900">Shri Manoj Pandey</div>
                  <div className="text-slate-600">General Manager (Tech) & CPIO</div>
                  <div className="text-slate-500">G-5 & 6, Sector-10, Dwarka, New Delhi - 110075</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#D9E0E6] space-y-1">
                  <span className="text-[10px] font-black uppercase text-purple-700 block">First Appellate Authority (FAA)</span>
                  <div className="font-extrabold text-slate-900">Shri Arvind Singh</div>
                  <div className="text-slate-600">Chief General Manager & First Appellate Authority</div>
                  <div className="text-slate-500">G-5 & 6, Sector-10, Dwarka, New Delhi - 110075</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: RESPONSE & AI ANALYSIS (OFFICIAL PRIMARY vs AI SECONDARY) */}
        {/* ========================================================================= */}
        {activeTab === 'response' && (
          <div className="space-y-6">
            
            {/* OFFICIAL RESPONSE SECTION (PRIMARY) */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/50 p-6 shadow-3xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-800 text-white px-2.5 py-0.5 rounded-md">
                  Official Public Authority Response
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Dispatched on {rti.responseDate || '24 August 2026'}
                </span>
              </div>

              <h2 className="text-base font-extrabold text-slate-900">
                Official CPIO Disclosure Summary
              </h2>

              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {rti.responseSummary || 'The Public Authority furnished project sanctioned financial ledgers and contractor work orders. Completion certificates and inspection logs were declared under compilation.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const doc = documents.find(d => d.type === 'response') || documents[0];
                    setViewingDoc(doc);
                  }}
                  className="rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 text-xs font-bold shadow-3xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" /> View Official Response Letter (PDF)
                </button>
              </div>
            </div>

            {/* RTI SAATHI ANALYSIS (SECONDARY ASSISTANCE) */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-3xs space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#123B5D]">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <span>RTI Saathi Analysis (AI-Assisted Explanation)</span>
                  </div>
                  <p className="text-[11px] text-[#52606D] mt-0.5">
                    Point-by-point verification of requested items against the official response document.
                  </p>
                </div>

                {analysis && (
                  <span className="text-xs font-extrabold text-[#123B5D] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    {analysis.answeredCount} of {rti.totalQuestions} Answered
                  </span>
                )}
              </div>

              {/* Question breakdown cards */}
              {analysis && (
                <div className="space-y-3">
                  {analysis.breakdown.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        item.status === 'Answered' ? 'border-emerald-200 bg-emerald-50/20' :
                        item.status === 'Partially Answered' ? 'border-amber-200 bg-amber-50/20' :
                        'border-rose-300 bg-rose-50/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase text-slate-500">
                              Question #{idx + 1}
                            </span>
                            <span className={`text-[10px] font-extrabold px-2 py-0.2 rounded-full border ${
                              item.status === 'Answered' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                              item.status === 'Partially Answered' ? 'bg-amber-50 text-amber-900 border-amber-300' :
                              'bg-rose-50 text-rose-800 border-rose-300'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-800">{item.question}</p>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.note}</p>
                        </div>

                        {item.status === 'Needs Review' && (
                          <button
                            onClick={handleOpenAppeal}
                            className="rounded-lg bg-rose-700 hover:bg-rose-800 text-white px-3 py-1.5 text-xs font-extrabold shadow-3xs shrink-0 cursor-pointer"
                          >
                            Appeal ➔
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ASK RESPONSE DOCUMENT CHAT ASSISTANT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-3xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-[#17212B] text-sm flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Ask Response Document Assistant
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Query disclosed official records and get instant summarized compliance answers.
                </p>
              </div>

              {/* Chat history display */}
              <div className="bg-[#F7F8FA] border border-[#D9E0E6] rounded-xl p-4 space-y-3 max-h-[220px] overflow-y-auto">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#123B5D] text-white rounded-br-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none text-xs text-slate-400 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span>Reading response PDF...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick suggestions */}
              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  onClick={() => { setChatQuery('Summarize this CPIO response'); }}
                  className="rounded-full border border-slate-200 px-3 py-1 bg-slate-50 text-slate-750 hover:bg-slate-100"
                >
                  "Summarize response"
                </button>
                <button
                  onClick={() => { setChatQuery('Why was Question 5 withheld?'); }}
                  className="rounded-full border border-slate-200 px-3 py-1 bg-slate-50 text-slate-755 hover:bg-slate-100"
                >
                  "Why is Q5 withheld?"
                </button>
                <button
                  onClick={() => { setChatQuery('Is the contract agreement included?'); }}
                  className="rounded-full border border-slate-200 px-3 py-1 bg-slate-50 text-slate-750 hover:bg-slate-100"
                >
                  "Is contract copy attached?"
                </button>
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  placeholder="Ask a question about this response document..."
                  className="flex-1 px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 outline-none focus:border-[#123B5D]"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !chatQuery.trim()}
                  className="px-3.5 rounded-xl bg-[#123B5D] text-white flex items-center justify-center cursor-pointer hover:bg-[#0A2540] disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLICATION TIMELINE */}
        {/* ========================================================================= */}
        {activeTab === 'timeline' && (
          <div className="glass-card rounded-2xl border border-slate-200/60 bg-white/80 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-base font-black text-[#0f172a] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-[#1e3a8a]">
                Official Event-Driven Lifecycle Timeline
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-semibold">
                Every statutory milestone from submission and fee verification to CPIO decisions.
              </p>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[3px] before:bg-gradient-to-b before:from-blue-600 before:via-blue-400/40 before:to-slate-200">
              {timelineEvents.map((evt) => (
                <div key={evt.id} className="relative flex items-start gap-4">
                  <div className={`absolute -left-6.5 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    evt.status === 'completed' 
                      ? 'bg-[#1e3a8a] border-white text-white shadow-md ring-4 ring-blue-55' 
                      : 'bg-white border-slate-300 text-slate-400 shadow-2xs'
                  }`}>
                    {evt.status === 'completed' ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xs font-extrabold ${evt.status === 'completed' ? 'text-[#0f172a]' : 'text-slate-500'}`}>{evt.title}</h3>
                      <span className="text-[10px] text-slate-400 font-bold bg-slate-50 px-1.5 py-0.5 rounded">{evt.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{evt.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: OFFICIAL CASE DOCUMENTS */}
        {/* ========================================================================= */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-black text-[#17212B]">
                Official Case Documents ({documents.length})
              </h2>
              <span className="text-xs text-[#52606D]">Certified statutory copies</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div 
                  key={doc.id}
                  className="rounded-2xl border border-[#D9E0E6] bg-white p-5 shadow-3xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-[#123B5D] px-2 py-0.5 rounded-md">
                        {doc.type}
                      </span>
                      <span className="text-[11px] text-slate-400">{doc.date}</span>
                    </div>
                    <h3 className="font-extrabold text-sm text-[#17212B]">{doc.title}</h3>
                    <p className="text-xs font-mono text-slate-500">{doc.fileName} • {doc.fileSize}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex gap-2">
                    <button
                      onClick={() => setViewingDoc(doc)}
                      className="flex-1 rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2 text-xs font-bold shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" /> View Document
                    </button>
                    <button
                      onClick={() => alert(`Downloading ${doc.fileName}`)}
                      className="rounded-xl border border-[#D9E0E6] hover:bg-slate-50 text-slate-700 px-3 py-2 text-xs font-bold cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'appeal' && (
          <div className="space-y-6">
            
            {/* If Second Appeal already filed */}
            {rti.status === 'Second Appeal Filed' && (
              <div className="rounded-2xl border border-red-300 bg-red-50/20 p-6 sm:p-8 shadow-3xs space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-red-700 text-white px-2 py-0.5 rounded-md">
                    Section 19(3) Second Appeal — Pending Hearing
                  </span>
                  <h2 className="text-lg font-black text-slate-900 mt-2">
                    Central Information Commission (CIC) Escalation
                  </h2>
                  <p className="text-xs text-slate-650 leading-relaxed mt-1">
                    Your Second Appeal is active. The CIC will schedule a quasi-judicial hearing with the CPIO and Appellate Authority.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-200 text-xs space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500 font-bold">CIC Registration No:</span> <strong className="text-red-800 font-mono">{rti.secondAppealRegNo || 'CIC/MEXTA/A/2026/92840'}</strong></div>
                  <div className="flex justify-between"><span className="text-slate-500 font-bold">Filing Date:</span> <strong className="text-slate-800">{rti.secondAppealDate || '2026-08-26'}</strong></div>
                  <div className="flex justify-between"><span className="text-slate-500 font-bold">Statutory Ground:</span> <strong className="text-slate-800">{rti.secondAppealReason}</strong></div>
                </div>

                <div className="text-xs font-mono bg-slate-50 border border-slate-200 p-4 rounded-xl max-h-48 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                  {rti.notes || rti.secondAppealText}
                </div>
              </div>
            )}

            {/* If First Appeal is active and user wants to file a Second Appeal */}
            {(rti.status === 'First Appeal Filed' || rti.status === 'FAA Decision Received') && (
              <div className="space-y-6">
                
                {/* First Appeal Details (Read Only) */}
                <div className="rounded-2xl border border-purple-200 bg-purple-50/20 p-6 shadow-3xs space-y-3">
                  <span className="text-[10px] font-black uppercase bg-purple-100 text-purple-900 px-2 py-0.5 rounded-md">
                    Active First Appeal under Section 19(1)
                  </span>
                  <h3 className="font-extrabold text-slate-950 text-sm">First Appeal Petition Details</h3>
                  <div className="text-xs text-slate-650 space-y-1">
                    <p>• Filed on: <strong>{rti.appealDate || '2026-08-15'}</strong></p>
                    <p>• Ground: <strong>{rti.appealReason || 'Incomplete records received.'}</strong></p>
                    <p>• Status: <strong>{rti.status}</strong></p>
                  </div>
                </div>

                {/* File Second Appeal Form */}
                <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 sm:p-8 shadow-3xs space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-red-50 text-red-800 border border-red-200 px-2 py-0.5 rounded-md">
                      Section 19(3) Second Appeal Wizard
                    </span>
                    <h2 className="text-base font-black text-slate-900 mt-2">
                      Escalate to Central Information Commission (CIC)
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      If the FAA did not issue a decision within the maximum 45-day statutory window, or if their order is unsatisfactory, you have a statutory right to appeal directly to the CIC.
                    </p>
                  </div>

                  <form onSubmit={handleSecondAppealSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="text-[10px] font-black uppercase text-[#52606D] block mb-1">
                        Statutory Ground for Second Appeal
                      </label>
                      <select
                        value={secondAppealReason}
                        onChange={(e) => setSecondAppealReason(e.target.value)}
                        className="w-full rounded-xl border border-[#D9E0E6] p-3 text-xs font-bold text-slate-850 bg-[#F7F8FA]"
                      >
                        <option value="First Appellate Authority failed to respond within statutory 45 days limit">FAA failed to respond within statutory 45 days limit (Deemed Refusal)</option>
                        <option value="First Appellate Authority order is unsatisfactory and violates disclosure rules">First Appellate Authority order is unsatisfactory and violates disclosure rules</option>
                        <option value="CPIO continues to withhold public records in defiance of Section 19(1) order">CPIO continues to withhold records in defiance of FAA order</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase text-[#52606D] block mb-1">
                        CIC Second Appeal Petition (Pre-filled from Case History)
                      </label>
                      <textarea
                        rows={8}
                        value={secondAppealText || `BEFORE THE CENTRAL INFORMATION COMMISSION (CIC)
(Second Appeal under Section 19(3) of the Right to Information Act, 2005)

Please click "Generate CIC Petition" or enter details.`}
                        onChange={(e) => setSecondAppealText(e.target.value)}
                        className="w-full rounded-xl border border-[#D9E0E6] p-4 text-xs font-mono text-slate-800 bg-[#F7F8FA] leading-relaxed"
                      />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={handleOpenSecondAppeal}
                        className="rounded-xl border border-[#D9E0E6] hover:bg-slate-50 text-slate-700 px-4 py-2 text-xs font-bold"
                      >
                        Autofill CIC Petition
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingSecondAppeal}
                        className="rounded-xl bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer"
                      >
                        {isSubmittingSecondAppeal ? 'Filing Second Appeal...' : 'Submit Second Appeal to CIC ➔'}
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            )}

            {/* Standard First Appeal if not appeal filed yet */}
            {rti.status !== 'First Appeal Filed' && rti.status !== 'FAA Decision Received' && rti.status !== 'Second Appeal Filed' && (
              <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 sm:p-8 shadow-3xs space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-md">
                    Section 19(1) First Appeal
                  </span>
                  <h2 className="text-lg font-black text-[#17212B] mt-2">
                    First Appellate Authority Redressal
                  </h2>
                  <p className="text-xs text-[#52606D] mt-0.5 leading-relaxed">
                    If the CPIO furnished incomplete information or failed to cite Section 8 exemptions, submit your First Appeal to senior department leadership. No additional fee is required.
                  </p>
                </div>

                <form onSubmit={handleFirstAppealSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-[#52606D] block mb-1">
                      Statutory Ground for First Appeal
                    </label>
                    <select
                      value={appealReason}
                      onChange={(e) => setAppealReason(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-3 text-xs font-bold text-slate-800 bg-[#F7F8FA] outline-none focus:border-[#123B5D]"
                    >
                      <option value="Information incomplete / withheld without Section 8 citation">Information incomplete / withheld without Section 8 citation</option>
                      <option value="CPIO did not respond within statutory 30-day limit">CPIO did not respond within statutory 30-day limit</option>
                      <option value="Unreasonable fee or document cost demanded">Unreasonable fee or document cost demanded</option>
                      <option value="False or misleading information provided">False or misleading information provided</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase text-[#52606D] block mb-1">
                      Appeal Petition Body (Pre-filled from Application)
                    </label>
                    <textarea
                      rows={10}
                      value={appealText}
                      onChange={(e) => setAppealText(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-4 text-xs font-mono text-slate-800 bg-[#F7F8FA] outline-none focus:border-[#123B5D] leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmittingAppeal}
                      className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all"
                    >
                      {isSubmittingAppeal ? 'Submitting...' : 'Submit First Appeal ➔'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Document Viewer Modal */}
      {viewingDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-extrabold text-sm text-slate-900">{viewingDoc.title}</h3>
                <p className="text-[11px] text-slate-500">{viewingDoc.fileName} • {viewingDoc.fileSize}</p>
              </div>
              <button
                onClick={() => setViewingDoc(null)}
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto font-mono text-xs text-slate-800 bg-slate-50/50 leading-relaxed whitespace-pre-wrap flex-1 border-b border-slate-100">
              {viewingDoc.previewContent}
            </div>

            <div className="p-4 bg-slate-50 flex justify-end">
              <button
                onClick={() => setViewingDoc(null)}
                className="rounded-xl bg-[#123B5D] text-white px-5 py-2 text-xs font-bold"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appeal Success Modal */}
      {appealSubmittedSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            
            <h3 className="text-lg font-black text-slate-900">First Appeal Submitted</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your First Appeal has been registered and forwarded to the designated First Appellate Authority (FAA).
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1">
              <div className="flex justify-between"><span className="text-slate-500">Appeal Ref:</span> <strong className="text-[#123B5D]">{appealSubmittedSuccess.ref}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Statutory Deadline:</span> <strong className="text-slate-800">30 to 45 Days</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Appeal Fee:</span> <strong className="text-emerald-700">₹0.00 (Exempt)</strong></div>
            </div>

            <button
              onClick={() => setAppealSubmittedSuccess(null)}
              className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2.5 text-xs font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Second Appeal Success Modal */}
      {secondAppealSubmittedSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-750 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-7 w-7 text-purple-600" />
            </div>
            
            <h3 className="text-lg font-black text-slate-900">Second Appeal Filed with CIC</h3>
            <p className="text-xs text-slate-650 leading-relaxed">
              Your Second Appeal has been formally registered with the Central Information Commission (CIC) under Section 19(3).
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1">
              <div className="flex justify-between"><span className="text-slate-500">CIC Ref No:</span> <strong className="text-[#123B5D]">{secondAppealSubmittedSuccess.ref}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Hearing Status:</span> <strong className="text-slate-850">Awaiting Board Allocation</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Appeal Fee:</span> <strong className="text-emerald-700">₹0.00 (Exempt)</strong></div>
            </div>

            <button
              onClick={() => setSecondAppealSubmittedSuccess(null)}
              className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2.5 text-xs font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
