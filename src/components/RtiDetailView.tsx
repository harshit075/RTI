'use client';

import React, { useState } from 'react';
import { 
  FileText, Clock, AlertTriangle, CheckCircle2, ChevronRight, CornerDownRight, 
  HelpCircle, ArrowLeft, Send, Sparkles, Scale, Landmark, FileDown, FolderOpen, 
  MessagesSquare, Check, Eye, X, Download, ShieldCheck, ArrowRight, RefreshCw 
} from 'lucide-react';
import { RTIApplication, mockAuthorities, mockDocuments, MockDocument, defaultDemoUser } from '../data/mockData';

interface RtiDetailViewProps {
  rtiId: string;
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  fileFirstAppeal: (id: string, reason: string, appealText: string) => void;
  fileSecondAppeal: (id: string, reason: string, appealText: string) => void;
}

export default function RtiDetailView({
  rtiId,
  rtis,
  setActiveView,
  language,
  fileFirstAppeal,
  fileSecondAppeal
}: RtiDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'compare' | 'documents' | 'appeal' | 'notes'>('overview');
  
  const rti = rtis.find(r => r.id === rtiId) || rtis[0];

  // Document Viewer Modal State
  const [viewingDoc, setViewingDoc] = useState<MockDocument | null>(null);

  // Notes state
  const [notesText, setNotesText] = useState(rti?.notes || '');
  const [notesSavedStatus, setNotesSavedStatus] = useState<'idle' | 'success'>('idle');

  const handleSaveNotes = () => {
    if (!rti) return;
    rti.notes = notesText;
    setNotesSavedStatus('success');
    setTimeout(() => setNotesSavedStatus('idle'), 2500);
  };
  
  // First Appeal flow state
  const [showAppealWizard, setShowAppealWizard] = useState(false);
  const [appealReason, setAppealReason] = useState('Information incomplete / withheld without Section 8 citation');
  const [appealText, setAppealText] = useState('');
  const [appealSubmittedModal, setAppealSubmittedModal] = useState(false);

  // Second Appeal flow state
  const [showSecondAppealWizard, setShowSecondAppealWizard] = useState(false);
  const [secondAppealReason, setSecondAppealReason] = useState('FAA did not respond within 45 days limit');
  const [secondAppealText, setSecondAppealText] = useState('');

  if (!rti) return <div className="p-8 text-center text-slate-500 font-bold">RTI application record not found.</div>;

  const auth = mockAuthorities.find(a => a.id === rti.authorityId);

  const openFirstAppealWizard = () => {
    const authorityName = auth?.name || rti.authorityId;
    const template = `BEFORE THE FIRST APPELLATE AUTHORITY
(Under Section 19(1) of the Right to Information Act, 2005)

In the matter of:
Appellant: Aarav Sharma (Citizen of India)
Address: C-42, Malviya Nagar, Jaipur, Rajasthan - 302017
Mobile: +91 90000 00000 | Email: aarav.sharma.demo@example.com

VS

Respondent:
Central Public Information Officer (CPIO), ${authorityName}

1. PARTICULARS OF ORIGINAL APPLICATION:
   a. Original Registration Number: ${rti.registrationNumber || 'RTI-2026-001245'}
   b. Date of Filing: ${rti.submittedDate}
   c. Subject: ${rti.subject}

2. PARTICULARS OF CPIO RESPONSE:
   a. CPIO Response Date: ${rti.responseDate || '24 August 2026'}
   b. Defect / Reason: The CPIO failed to furnish records for Question #5 (Quality assurance audit & structural inspection report) without citing any exemption under Section 8(1).

3. GROUNDS FOR FIRST APPEAL:
   a. Under Section 7(1) of the RTI Act 2005, the CPIO is mandated to supply all requested records unless covered under explicit Section 8 exemptions.
   b. Public expenditure and safety inspections on civic works cannot be withheld under the pretext of "records under compilation".

4. PRAYER:
   The Appellant prays that the First Appellate Authority direct the CPIO to immediately furnish certified copies of the completion certificate and inspection report within 15 days.

Date: 25 August 2026
Place: Jaipur, Rajasthan
Appellant: Aarav Sharma`;

    setAppealText(template);
    setShowAppealWizard(true);
    setActiveTab('appeal');
  };

  const handleFirstAppealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fileFirstAppeal(rti.id, appealReason, appealText);
    setShowAppealWizard(false);
    setAppealSubmittedModal(true);
  };

  const openSecondAppealWizard = () => {
    const authorityName = auth?.name || rti.authorityId;
    const template = `BEFORE THE CENTRAL INFORMATION COMMISSION (CIC)
CIC Bhawan, Baba Gangnath Marg, Munirka, New Delhi - 110067

SECOND APPEAL UNDER SECTION 19(3) OF THE RTI ACT, 2005

In the matter of:
Appellant: Aarav Sharma
VS
CPIO & FAA, ${authorityName}

1. Particulars of Appellant:
   Name: Aarav Sharma
   Address: Jaipur, Rajasthan
   Email: aarav.sharma.demo@example.com | Mobile: +91 90000 00000

2. Case Details:
   - Original RTI Reg No: ${rti.registrationNumber || 'RTI-2026-001245'}
   - First Appeal Ref: FAA-DEMO-2026-00421
   - Ground: ${secondAppealReason}

3. Prayer:
   Issue summons under Section 19(8) and penalize the CPIO under Section 20(1) for willful non-disclosure.`;

    setSecondAppealText(template);
    setShowSecondAppealWizard(true);
  };

  const handleSecondAppealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fileSecondAppeal(rti.id, secondAppealReason, secondAppealText);
    setShowSecondAppealWizard(false);
  };

  // Questions breakdown items
  const questionsBreakdown = rti.questionBreakdowns || rti.questions.map((q, idx) => ({
    question: q,
    status: (idx < rti.answeredCount ? 'Answered' : idx === rti.answeredCount ? 'Partially Answered' : 'Needs Review') as any,
    note: idx < rti.answeredCount ? 'Information supplied in official response document.' : 'Record not clearly furnished in disclosure.'
  }));

  const answeredCount = questionsBreakdown.filter(q => q.status === 'Answered').length;
  const partialCount = questionsBreakdown.filter(q => q.status === 'Partially Answered').length;
  const needsReviewCount = questionsBreakdown.filter(q => q.status === 'Needs Review').length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <button
          onClick={() => setActiveView('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-600 hover:text-primary-navy transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
            Case Ref: {rti.registrationNumber || rti.id}
          </span>
          <span className="text-[10px] font-black uppercase bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-300">
            Status: {rti.status}
          </span>
        </div>
      </div>

      {/* Case Header Banner */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-primary-navy bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                {auth?.name || 'Public Authority'}
              </span>
              <span className="text-xs font-medium text-slate-500">Filed on {rti.submittedDate}</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {rti.title}
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-3xl leading-relaxed">
              {rti.subject}
            </p>
          </div>

          {/* Action CTAs based on status */}
          <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
            {rti.status === 'Response Received' && (
              <button
                onClick={openFirstAppealWizard}
                className="w-full sm:w-auto rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2.5 text-xs font-extrabold shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <Scale className="h-4 w-4 text-amber-400" />
                Review & File First Appeal ➔
              </button>
            )}

            {rti.status === 'Action Required' && (
              <button
                onClick={openFirstAppealWizard}
                className="w-full sm:w-auto rounded-xl bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 text-xs font-extrabold shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all animate-pulse"
              >
                <Scale className="h-4 w-4 text-white" />
                File First Appeal under Sec 19(1) ➔
              </button>
            )}

            {rti.status === 'First Appeal Filed' && (
              <button
                onClick={openSecondAppealWizard}
                className="w-full sm:w-auto rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-extrabold shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <Scale className="h-4 w-4 text-white" />
                Escalate to CIC (Second Appeal) ➔
              </button>
            )}

            <button
              onClick={() => setActiveTab('documents')}
              className="w-full sm:w-auto rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2.5 text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              View Case Documents (5)
            </button>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-bold block text-[10px] uppercase">Information Officer</span>
            <span className="font-extrabold text-slate-800">{auth?.cpioName || 'CPIO Officer'}</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-bold block text-[10px] uppercase">Statutory Limit</span>
            <span className="font-extrabold text-slate-800">30 Days (Sec 7(1))</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-bold block text-[10px] uppercase">Questions Total</span>
            <span className="font-extrabold text-slate-800">{rti.totalQuestions} Questions</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-bold block text-[10px] uppercase">Payment Ref</span>
            <span className="font-extrabold text-emerald-700">₹10 (Confirmed)</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto space-x-1 sm:space-x-4">
        {[
          { id: 'overview', label: 'Overview', icon: FileText },
          { id: 'compare', label: 'Response Analysis (AI)', icon: Sparkles },
          { id: 'timeline', label: 'Lifecycle Timeline', icon: Clock },
          { id: 'documents', label: 'Document Vault', icon: FolderOpen },
          { id: 'appeal', label: 'Appeals & Escalation', icon: Scale },
          { id: 'notes', label: 'My Notes', icon: MessagesSquare }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-3 px-3.5 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive 
                  ? 'border-primary-navy text-primary-navy dark:text-white' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-primary-navy' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              {tab.id === 'compare' && (
                <span className="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-1.5 py-0.2 rounded-full">
                  5 Qs
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: OVERVIEW */}
      {/* ========================================================================= */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Next Action Banner */}
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-black text-emerald-950">
                  {rti.status === 'Response Received' ? 'Official CPIO Response Available' : 
                   rti.status === 'Action Required' ? 'Action Required: Incomplete Information' : 
                   'Application Dispatched & Acknowledged'}
                </h4>
                <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed font-medium">
                  {rti.responseSummary || 'Your application has been registered with the Central Public Information Officer. The official response is due within 30 statutory days.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('compare')}
              className="rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 text-xs font-extrabold shadow-sm shrink-0 cursor-pointer transition-all"
            >
              View AI Analysis ➔
            </button>
          </div>

          {/* Original RTI Questions Box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-3">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>Original Questions Submitted ({rti.questions.length})</span>
              <span className="text-[10px] text-slate-500 font-medium">Section 6(1) Right to Information Act</span>
            </h3>
            
            <div className="space-y-2.5">
              {rti.questions.map((q, idx) => (
                <div key={idx} className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Public Authority Official Details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Landmark className="h-4 w-4 text-primary-navy" />
              Designated Information Officers (Statutory Contacts)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
                <span className="text-[10px] font-black uppercase text-blue-700 block">Central Public Information Officer (CPIO)</span>
                <div className="font-black text-sm text-slate-900">{auth?.cpioName || 'Shri Manoj Pandey'}</div>
                <div className="text-xs font-medium text-slate-600">{auth?.cpioDesignation || 'General Manager & CPIO'}</div>
                <div className="text-xs text-slate-500">{auth?.cpioAddress || 'Headquarters, New Delhi'}</div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
                <span className="text-[10px] font-black uppercase text-purple-700 block">First Appellate Authority (FAA)</span>
                <div className="font-black text-sm text-slate-900">{auth?.faaName || 'Shri Arvind Singh'}</div>
                <div className="text-xs font-medium text-slate-600">{auth?.faaDesignation || 'Chief General Manager & FAA'}</div>
                <div className="text-xs text-slate-500">{auth?.faaAddress || 'Headquarters, New Delhi'}</div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AI RESPONSE ANALYSIS (5 Questions Breakdown) */}
      {/* ========================================================================= */}
      {activeTab === 'compare' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Summary Scorecard */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:bg-slate-900 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-300 px-2.5 py-1 rounded-md">
                  AI Response Analyzer
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-2">
                  Disclosure Verification & Quality Breakdown
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated comparison of the 5 requested items against records furnished in the CPIO response letter.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Overall Score:</span>
                <span className="text-base font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-300">
                  {Math.round((answeredCount / questionsBreakdown.length) * 100)}% Answered
                </span>
              </div>
            </div>

            {/* Status Pills Summary */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <span className="text-2xl font-black text-emerald-800">{answeredCount}</span>
                <span className="block text-xs font-extrabold text-emerald-700 mt-0.5">Fully Answered</span>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <span className="text-2xl font-black text-amber-800">{partialCount}</span>
                <span className="block text-xs font-extrabold text-amber-700 mt-0.5">Partially Answered</span>
              </div>
              <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4">
                <span className="text-2xl font-black text-rose-800">{needsReviewCount}</span>
                <span className="block text-xs font-extrabold text-rose-700 mt-0.5">Needs Review / Withheld</span>
              </div>
            </div>

            {/* AI Analysis Advice Callout */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-5 space-y-2 text-xs text-amber-950 font-medium">
              <div className="flex items-center gap-2 font-black text-amber-900 text-sm">
                <Sparkles className="h-4.5 w-4.5 text-amber-600" />
                AI Legal Assessment:
              </div>
              <p className="leading-relaxed">
                {rti.aiAnalysis || 'Question 5 does not appear to have a corresponding document or clear response. Under Section 7(1) of the RTI Act, withholding inspection records without citing Section 8 exemptions is invalid. Strong legal grounds exist to file a First Appeal under Section 19(1).'}
              </p>
              <div className="pt-2">
                <button
                  onClick={openFirstAppealWizard}
                  className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2 text-xs font-extrabold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Scale className="h-3.5 w-3.5 text-amber-400" />
                  Draft First Appeal Petition for Question 5 ➔
                </button>
              </div>
            </div>
          </div>

          {/* Question by Question Detailed Cards */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider">
              Itemized Question-by-Question Review ({questionsBreakdown.length})
            </h4>

            {questionsBreakdown.map((item, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border bg-white p-5 shadow-xs transition-all dark:bg-slate-900 ${
                  item.status === 'Answered' ? 'border-emerald-200' :
                  item.status === 'Partially Answered' ? 'border-amber-200' :
                  'border-rose-300 bg-rose-50/10'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        Question #{idx + 1}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                        item.status === 'Answered' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                        item.status === 'Partially Answered' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                        'bg-rose-50 text-rose-800 border-rose-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {item.question}
                    </p>

                    <div className="text-[11.5px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span><strong>Disclosure Note:</strong> {item.note}</span>
                    </div>
                  </div>

                  {item.status === 'Needs Review' && (
                    <button
                      onClick={openFirstAppealWizard}
                      className="rounded-xl border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 px-3.5 py-2 text-xs font-extrabold shrink-0 cursor-pointer self-start transition-colors"
                    >
                      Appeal This Item ➔
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LIFECYCLE TIMELINE */}
      {/* ========================================================================= */}
      {activeTab === 'timeline' && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:bg-slate-900 space-y-6">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
              Official Application Lifecycle Timeline
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Statutory 30-day monitoring from filing through CPIO response upload.
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {[
              { date: '12 Aug 2026', title: 'Application Drafted', desc: 'RTI drafted using AI assistant and validated against Section 8 clauses.', completed: true },
              { date: '12 Aug 2026', title: 'Application Submitted', desc: 'Formal petition registered in the central system ledger.', completed: true },
              { date: '12 Aug 2026', title: 'Payment Confirmed', desc: 'Statutory ₹10 RTI application fee confirmed via Bharatkosh Gateway.', completed: true },
              { date: '13 Aug 2026', title: 'Application Acknowledged', desc: 'Unique Registration Number RTI-2026-001245 issued.', completed: true },
              { date: '18 Aug 2026', title: 'Application Received by Authority', desc: 'Assigned to Central Public Information Officer (CPIO).', completed: true },
              { date: '24 Aug 2026', title: 'Response Uploaded', desc: 'CPIO uploaded official response letter and project expenditure ledgers.', completed: rti.status === 'Response Received' },
              { date: '25 Aug 2026', title: 'AI Quality Analysis Ready', desc: 'Comparison complete: 3 Answered, 1 Partial, 1 Needs Review.', completed: rti.status === 'Response Received' }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                <div className={`absolute -left-6 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                  step.completed ? 'bg-emerald-600 border-white text-white' : 'bg-slate-100 border-slate-300 text-slate-400'
                }`}>
                  {step.completed && <Check className="h-3 w-3" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-900">{step.title}</span>
                    <span className="text-[10px] text-slate-500 font-semibold">{step.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: DOCUMENT VAULT */}
      {/* ========================================================================= */}
      {activeTab === 'documents' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                Case Document Vault
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                All certified PDFs and communications associated with Case {rti.registrationNumber || rti.id}.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
              5 Documents Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockDocuments.map((doc) => (
              <div 
                key={doc.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-all space-y-3 dark:bg-slate-900 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                      {doc.type}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">{doc.date}</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{doc.title}</h4>
                  <div className="text-xs font-mono text-slate-500">{doc.fileName} • {doc.fileSize}</div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setViewingDoc(doc)}
                    className="flex-1 rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-2 text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                  >
                    <Eye className="h-3.5 w-3.5" /> Preview PDF
                  </button>
                  <button
                    onClick={() => alert(`Simulated downloading ${doc.fileName}`)}
                    className="rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-2 text-xs font-bold cursor-pointer"
                    title="Download Copy"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: APPEALS WORKSPACE */}
      {/* ========================================================================= */}
      {activeTab === 'appeal' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:bg-slate-900 space-y-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-900 px-2.5 py-1 rounded-md">
                Section 19 Appellate Redressal
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-2">
                First Appeal & CIC Escalation
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                If information was partially withheld, refused, or 30 days have elapsed without response, file your appeal.
              </p>
            </div>

            {/* Appeal Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-primary-navy/20 bg-blue-50/50 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary-navy text-white flex items-center justify-center font-bold text-xs">1</span>
                  <h4 className="font-extrabold text-sm text-primary-navy">First Appeal (Section 19(1))</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submitted to the senior First Appellate Authority (FAA) within 30 days of the response date. No fee required.
                </p>
                <button
                  onClick={openFirstAppealWizard}
                  className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2.5 text-xs font-extrabold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  Launch First Appeal Wizard ➔
                </button>
              </div>

              <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                  <h4 className="font-extrabold text-sm text-red-900">Second Appeal to CIC (Section 19(3))</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If the FAA fails to decide within 45 days, escalate directly to the Central Information Commission.
                </p>
                <button
                  onClick={openSecondAppealWizard}
                  className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-extrabold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  File Second Appeal to CIC ➔
                </button>
              </div>
            </div>

            {/* If First Appeal Wizard is active */}
            {showAppealWizard && (
              <form onSubmit={handleFirstAppealSubmit} className="border-t border-slate-200 pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-black text-sm text-slate-900">Edit First Appeal Petition Draft</h4>
                  <button 
                    type="button" 
                    onClick={() => setShowAppealWizard(false)}
                    className="text-xs text-slate-500 font-bold hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 block mb-1">Ground of Appeal</label>
                  <select
                    value={appealReason}
                    onChange={(e) => setAppealReason(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-bold text-slate-800 bg-slate-50"
                  >
                    <option value="Information incomplete / withheld without Section 8 citation">Information incomplete / withheld without Section 8 citation</option>
                    <option value="CPIO did not respond within statutory 30-day limit">CPIO did not respond within statutory 30-day limit</option>
                    <option value="Unreasonable fee or document cost demanded">Unreasonable fee or document cost demanded</option>
                    <option value="False or misleading information provided">False or misleading information provided</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 block mb-1">Appeal Petition Body</label>
                  <textarea
                    rows={10}
                    value={appealText}
                    onChange={(e) => setAppealText(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-4 text-xs font-mono text-slate-800 bg-slate-50 leading-relaxed"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-2.5 text-xs font-extrabold shadow-sm cursor-pointer"
                  >
                    Submit Demo First Appeal ➔
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: CITIZEN NOTES */}
      {/* ========================================================================= */}
      {activeTab === 'notes' && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:bg-slate-900 space-y-4">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
            Citizen Case Notes & Reminders
          </h3>
          <p className="text-xs text-slate-500">
            Personal private notes for this application.
          </p>

          <textarea
            rows={5}
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="e.g. Discuss inspection notes with ward engineer on Friday..."
            className="w-full rounded-xl border border-slate-300 p-4 text-xs text-slate-800 bg-slate-50 outline-none focus:border-primary-blue font-medium"
          />

          <div className="flex items-center justify-between">
            {notesSavedStatus === 'success' ? (
              <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                <Check className="h-4 w-4" /> Notes saved successfully
              </span>
            ) : <span />}

            <button
              onClick={handleSaveNotes}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2 text-xs font-bold shadow-xs cursor-pointer"
            >
              Save Notes
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: DOCUMENT VIEWER */}
      {/* ========================================================================= */}
      {viewingDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
            
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-primary-navy text-white flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">{viewingDoc.title}</h4>
                  <p className="text-[11px] text-slate-500">{viewingDoc.fileName} • {viewingDoc.fileSize}</p>
                </div>
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

            <div className="p-4 bg-slate-50 flex justify-between items-center">
              <span className="text-[11px] text-slate-400 font-medium">Demo Document • Concept Prototype</span>
              <button
                onClick={() => setViewingDoc(null)}
                className="rounded-xl bg-primary-navy text-white px-5 py-2 text-xs font-bold"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: FIRST APPEAL SUBMITTED CONFIRMATION */}
      {/* ========================================================================= */}
      {appealSubmittedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            
            <h4 className="text-lg font-black text-slate-900">Demo Appeal Submitted</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your First Appeal has been simulated and assigned to the First Appellate Authority (FAA).
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5">
              <div className="flex justify-between"><span className="text-slate-500">Appeal Case No:</span> <strong className="text-primary-navy font-bold">FAA-DEMO-2026-00421</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Authority:</span> <strong className="text-slate-800">{auth?.name.split(' (')[0]}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Decision Deadline:</span> <strong className="text-slate-800">30 to 45 Days</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Statutory Fee:</span> <strong className="text-emerald-700">₹0 (Free)</strong></div>
            </div>

            <button
              onClick={() => setAppealSubmittedModal(false)}
              className="w-full rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-2.5 text-xs font-bold shadow-sm"
            >
              Continue Exploring Case
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
