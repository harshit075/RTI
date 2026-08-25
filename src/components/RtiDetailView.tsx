'use client';

import React, { useState } from 'react';
import { 
  FileText, Clock, AlertTriangle, CheckCircle2, ChevronRight, CornerDownRight, 
  HelpCircle, ArrowLeft, Send, Sparkles, Scale, Landmark, FileDown, FolderOpen, MessagesSquare, Check
} from 'lucide-react';
import { RTIApplication, mockAuthorities } from '../data/mockData';

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
  const [activeTab, setActiveTab] = useState<'timeline' | 'compare' | 'evidence' | 'notes' | 'appeal' | 'documents' | 'ask-ai'>('timeline');
  
  const rti = rtis.find(r => r.id === rtiId);

  // Note state helpers
  const [notesText, setNotesText] = useState(rti?.notes || '');
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSavedStatus, setNotesSavedStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSaveNotes = async () => {
    if (!rti) return;
    setSavingNotes(true);
    setNotesSavedStatus('idle');
    try {
      const res = await fetch(`/api/rtis/${rti.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: notesText })
      });
      if (res.ok) {
        setNotesSavedStatus('success');
        rti.notes = notesText;
      } else {
        setNotesSavedStatus('error');
      }
    } catch (err) {
      console.error(err);
      setNotesSavedStatus('error');
    } finally {
      setSavingNotes(false);
      setTimeout(() => setNotesSavedStatus('idle'), 3000);
    }
  };
  
  // Chat state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Hello! I have analyzed the response document. You can ask me to explain legal terms or verify which questions were answered.' }
  ]);
  const [userInput, setUserInput] = useState('');
  
  // Appeal flow state
  const [showAppealWizard, setShowAppealWizard] = useState(false);
  const [appealReason, setAppealReason] = useState('Information incomplete');
  const [appealText, setAppealText] = useState('');
  const [showOnlyMissing, setShowOnlyMissing] = useState(false);

  // Second Appeal flow state
  const [showSecondAppealWizard, setShowSecondAppealWizard] = useState(false);
  const [secondAppealReason, setSecondAppealReason] = useState('FAA did not respond within 45 days');
  const [secondAppealText, setSecondAppealText] = useState('');

  if (!rti) return <div>RTI not found</div>;

  const auth = mockAuthorities.find(a => a.id === rti.authorityId);

  const openSecondAppealWizard = () => {
    const authorityName = auth?.name || rti.authorityId;
    const template = `BEFORE THE CENTRAL INFORMATION COMMISSION
CIC Bhawan, Baba Gangnath Marg, Munirka, New Delhi - 110067

SECOND APPEAL UNDER SECTION 19(3) OF THE RIGHT TO INFORMATION ACT, 2005

In the matter of:
Harshit Sharma
VS
CPIO, ${authorityName}

1. Particulars of the Appellant:
   Name: Harshit Sharma
   Email: harshit.sharma@example.com
   Phone: 9876543210

2. Date of filing original RTI Application: ${rti.submittedDate}
3. Registration Number of original RTI: ${rti.registrationNumber || 'N/A'}
4. Date of filing First Appeal under Section 19(1): ${rti.appealDate || '2026-08-25'}
5. Grounds for Second Appeal:
   - ${secondAppealReason}
   - The First Appellate Authority (FAA) failed to provide the requested records or failed to decide the appeal within statutory timelines (30-45 days).

PRAYER:
I request the Hon'ble Commission to:
(a) Direct the CPIO/FAA of ${authorityName} to supply the complete records requested in the original application.
(b) Impose penalties under Section 20(1) for the delay in providing the records.

Date: ${new Date().toISOString().substring(0, 10)}
Place: New Delhi`;

    setSecondAppealText(template);
    setShowSecondAppealWizard(true);
  };

  const handleSecondAppealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fileSecondAppeal(rti.id, secondAppealReason, secondAppealText);
    setShowSecondAppealWizard(false);
  };

  // Generate appeal text dynamically
  const openAppealWizard = () => {
    const authorityName = auth?.name || rti.authorityId;
    const missingQText = rti.id === 'rti-passport-101' 
      ? 'Question 3: Copy of internal notes/remarks. (CPIO cited section 8(1)(j) without justifying public interest)' 
      : 'Question 3: Copy of completion certificate safety reports (CPIO omitted response stating it is under delay)';
      
    const template = `To,
First Appellate Authority (FAA)
${auth?.faaName || 'First Appellate Authority'}
${auth?.faaAddress || 'Department Address'}

Subject: First Appeal under Section 19(1) of the RTI Act, 2005 against CPIO reply.

Ref: Original RTI Application Registration No: ${rti.registrationNumber} dated ${rti.submittedDate}.

Dear Sir/Madam,

Being aggrieved by the response/information provided by the Central Public Information Officer (CPIO) under reply dated ${rti.responseDate || 'N/A'}, I submit this appeal on the following grounds:

1. The CPIO has failed to provide complete information in respect of:
   -> ${missingQText}

2. The CPIO\'s reliance on Section 8 exemptions is legally incorrect as no personal data is compromised, and the public has a right to verify project expenditure and delay notes.

Therefore, I request you to direct the CPIO to supply the complete documents at the earliest.

Yours faithfully,
Harshit Sharma
Mob: 9876543210`;

    setAppealText(template);
    setShowAppealWizard(true);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');

    setTimeout(() => {
      let reply = 'I am scanning the document. Can you specify which part you are referring to?';
      const inputLower = userInput.toLowerCase();
      
      if (rti.id === 'rti-passport-101') {
        if (inputLower.includes('why') || inputLower.includes('delay')) {
          reply = 'The letter states your passport printing is placed on hold because the spelling of your name in the passport application form does not match the spelling in your police verification/Aadhaar card details.';
        } else if (inputLower.includes('section') || inputLower.includes('exemption') || inputLower.includes('cite')) {
          reply = 'The CPIO cited Section 8(1)(j) of the RTI Act to deny copies of internal officer notes, claiming it relates to personal privacy.';
        } else if (inputLower.includes('what questions') || inputLower.includes('unanswered')) {
          reply = 'Question 3 (copies of internal remarks) was denied. Questions 1, 2, and 4 were answered by the CPIO.';
        }
      } else {
        if (inputLower.includes('safety') || inputLower.includes('completion')) {
          reply = 'The CPIO reports that the completion report and safety audit audit are currently delayed and not yet finalized, which is why they were not supplied.';
        } else if (inputLower.includes('unanswered') || inputLower.includes('missing')) {
          reply = 'Question 3 regarding escalator inspection reports is missing. The details for tender orders (Q1) and budgets (Q2) were supplied.';
        }
      }

      setChatMessages([...newMessages, { sender: 'ai' as const, text: reply }]);
    }, 1000);
  };

  const handleAppealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fileFirstAppeal(rti.id, appealReason, appealText);
    setShowAppealWizard(false);
    setActiveTab('timeline');
    // Notification will be triggered by app controller
  };

  const hasResponse = rti.status === 'Response Received' || rti.status === 'First Appeal Filed' || rti.status === 'FAA Decision Received';

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setActiveView('dashboard')}
            className="rounded-full p-2 bg-white border border-slate-200 text-slate-650 hover:bg-slate-50 focus-ring cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <span className="text-[10px] text-slate-600 font-mono font-bold">{rti.registrationNumber}</span>
            <h2 className="text-xl font-black text-primary-navy dark:text-white">{rti.title}</h2>
          </div>
        </div>

        {/* Tab Selection (Multi-tab Case Workspace) */}
        <div className="flex flex-wrap border-b border-slate-200 mb-6 bg-white p-1 rounded-xl shadow-sm gap-1">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-primary-navy text-white'
                : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
            }`}
          >
            Journey Timeline
          </button>
          
          <button
            onClick={() => {
              setActiveTab('notes');
              // Sync notes text with parent in case it updated
              if (rti) setNotesText(rti.notes || '');
            }}
            className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-primary-navy text-white'
                : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
            }`}
          >
            Private Notes
          </button>

          {hasResponse && (
            <>
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'compare'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
                }`}
              >
                Compare Response
              </button>
              <button
                onClick={() => setActiveTab('evidence')}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'evidence'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
                }`}
              >
                Evidence Mapping
              </button>
              <button
                onClick={() => setActiveTab('appeal')}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'appeal'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
                }`}
              >
                Appeal Assistant
              </button>
              <button
                onClick={() => setActiveTab('ask-ai')}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'ask-ai'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
                }`}
              >
                Ask Assistant (AI)
              </button>
            </>
          )}
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'documents'
                ? 'bg-primary-navy text-white'
                : 'text-slate-600 hover:text-primary-navy hover:bg-slate-50'
            }`}
          >
            Documents Vault
          </button>
        </div>

        {/* Tab 1: Timeline (Section 14) */}
        {activeTab === 'timeline' && !showAppealWizard && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h3 className="font-bold text-sm text-slate-800 mb-6 dark:text-slate-200">
                Application Journey Tracking
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6 text-xs">
                
                {/* Milestone 1: Registered */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white font-bold shadow-sm">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">APPLICATION SUBMITTED & REGISTERED</h4>
                    <p className="text-slate-600 mt-1">Submitted on {rti.submittedDate} via NIC Payment Gateway.</p>
                  </div>
                </div>

                {/* Milestone 2: Received by CPIO */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white font-bold shadow-sm">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      RECEIVED BY PUBLIC AUTHORITY
                      <span className="text-[9px] text-primary-blue bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-md cursor-help font-bold" title="CPIO: Central Public Information Officer. The specific departmental officer designated to process and reply to your RTI queries under Section 5(1).">CPIO Info</span>
                    </h4>
                    <p className="text-slate-600 mt-1">Routed to CPIO Office: {auth?.cpioName} ({auth?.cpioDesignation}).</p>
                  </div>
                </div>

                {/* Milestone 3: Response Pending/Received */}
                <div className="relative">
                  <span className={`absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full text-white font-bold shadow-sm ${
                    hasResponse ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                  }`}>
                    {hasResponse ? <Check className="h-2.5 w-2.5" /> : <Clock className="h-2.5 w-2.5 text-white" />}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">CPIO OFFICIAL REPLY</h4>
                    {hasResponse ? (
                      <p className="text-slate-600 mt-1">Response letter received on {rti.responseDate}.</p>
                    ) : (
                      <p className="text-slate-600 mt-1">Statutory answer period in progress. Deadline: {rti.expectedDate}.</p>
                    )}
                  </div>
                </div>

                {/* Milestone 4: First Appeal / Second Appeal */}
                {rti.status === 'First Appeal Filed' && (
                  <>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-purple-500 text-white font-bold shadow-sm">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          FIRST APPEAL FILED
                          <span className="text-[9px] text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded-md cursor-help font-bold" title="FAA: First Appellate Authority. The senior officer in the same department who hears first appeals if the CPIO rejects details or fails to reply within 30 days under Section 19(1).">FAA Info</span>
                        </h4>
                        <p className="text-slate-850 mt-1">
                          Appeal filed to First Appellate Authority: {auth?.faaName} ({auth?.faaDesignation}) on {rti.appealDate || '2026-08-25'}. Ground: {rti.appealReason}.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-50 shadow-xs border border-red-200 animate-pulse">
                        <Scale className="h-2.5 w-2.5 text-red-700" />
                      </span>
                      <div className="pt-2">
                        <h4 className="font-bold text-red-800 dark:text-red-300">NEXT STEP: SECOND APPEAL TO CIC</h4>
                        <p className="text-slate-500 mt-1">
                          If the FAA does not issue an order within 30-45 days, or if you are unsatisfied with their decision, you can escalate the matter by filing a **Second Appeal** under Section 19(3) of the RTI Act directly with the Central Information Commission (CIC).
                        </p>
                        <button 
                          onClick={openSecondAppealWizard} 
                          className="inline-flex items-center gap-1 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm cursor-pointer border-none"
                        >
                          File Second Appeal to CIC ↗
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {rti.status === 'Second Appeal Filed' && (
                  <>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-purple-500 text-white font-bold shadow-sm">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          FIRST APPEAL FILED
                          <span className="text-[9px] text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded-md cursor-help font-bold" title="FAA: First Appellate Authority. The departmental senior officer who reviews CPIO replies.">FAA Info</span>
                        </h4>
                        <p className="text-slate-800 mt-1">
                          Appeal filed to First Appellate Authority: {auth?.faaName} ({auth?.faaDesignation}) on {rti.appealDate || '2026-08-25'}. Ground: {rti.appealReason || 'Information incomplete'}.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-600 text-white font-bold shadow-sm">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <div>
                        <h4 className="font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5">
                          SECOND APPEAL FILED WITH CIC
                          <span className="text-[9px] text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-md cursor-help font-bold" title="CIC: Central Information Commission. The highest appellate body under the RTI Act, 2005. Decisions are legally binding on all departments.">CIC Info</span>
                        </h4>
                        <p className="text-slate-855 mt-1">
                          Second Appeal registered with Central Information Commission (CIC) on {rti.secondAppealDate || '2026-08-25'} under reference ID: <strong>{rti.secondAppealRegNo}</strong>.
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                          The CIC has linked this petition to your original case. Appellant hearings will be scheduled according to availability. Check cic.gov.in with your reference ID for scheduling.
                        </p>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>

            {/* Detailed System Audit Trail (Fulfilling View History / Audit Trail request) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h4 className="font-extrabold text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary-blue" />
                  Detailed System Audit Trail & History
                </h4>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">
                  ID: {rti.id}
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-slate-650 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-left font-bold text-slate-400">
                      <th className="pb-2 font-bold uppercase tracking-wider w-[140px] text-[10px]">Timestamp</th>
                      <th className="pb-2 font-bold uppercase tracking-wider w-[180px] text-[10px]">Event / Action</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-[10px]">Details</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-right text-[10px]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {/* Static & Dynamic History items based on RTI Status */}
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-2.5 font-mono text-slate-400">{rti.submittedDate} 10:14 AM</td>
                      <td className="py-2.5 font-bold text-slate-800">Application Drafted</td>
                      <td className="py-2.5 text-slate-500">Drafted via AI Assistant with {rti.questions.length} questions</td>
                      <td className="py-2.5 text-right"><span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-bold text-[10px]">DRAFT</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-2.5 font-mono text-slate-400">{rti.submittedDate} 10:15 AM</td>
                      <td className="py-2.5 font-bold text-slate-800">Fee Payment Completed</td>
                      <td className="py-2.5 text-slate-500">Amount ₹10.00 settled via simulated gateway. Token ID: {rti.paymentId || 'PAY_MOCK_99182'}</td>
                      <td className="py-2.5 text-right"><span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-md font-bold text-[10px]">PAID</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-2.5 font-mono text-slate-400">{rti.submittedDate} 10:16 AM</td>
                      <td className="py-2.5 font-bold text-slate-800">Dispatched & Filed</td>
                      <td className="py-2.5 text-slate-500">Official dispatch reference registered on DoPT Central Gateway</td>
                      <td className="py-2.5 text-right"><span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-md font-bold text-[10px]">SUBMITTED</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-2.5 font-mono text-slate-400">{rti.submittedDate} 04:30 PM</td>
                      <td className="py-2.5 font-bold text-slate-800">CPIO Routing Completed</td>
                      <td className="py-2.5 text-slate-500">Assigned CPIO: {auth?.cpioName || 'Shri A.K. Roy'} ({auth?.cpioDesignation || 'Director'})</td>
                      <td className="py-2.5 text-right"><span className="bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-md font-bold text-[10px]">ROUTED</span></td>
                    </tr>
                    
                    {/* CPIO Action status */}
                    {hasResponse && (
                      <tr className="hover:bg-slate-50/50">
                         <td className="py-2.5 font-mono text-slate-400">{rti.responseDate || rti.submittedDate} 11:20 AM</td>
                         <td className="py-2.5 font-bold text-slate-800">CPIO Reply Uploaded</td>
                         <td className="py-2.5 text-slate-500">CPIO uploaded response statement. Answered {rti.answeredCount}/{rti.totalQuestions} questions.</td>
                         <td className="py-2.5 text-right"><span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-md font-bold text-[10px]">REPLIED</span></td>
                      </tr>
                    )}
                    
                    {/* First Appeal action status */}
                    {(rti.status === 'First Appeal Filed' || rti.status === 'Second Appeal Filed') && (
                      <tr className="hover:bg-slate-50/50">
                         <td className="py-2.5 font-mono text-slate-400">{rti.appealDate || '2026-08-25'} 02:45 PM</td>
                         <td className="py-2.5 font-bold text-slate-800">First Appeal Registered</td>
                         <td className="py-2.5 text-slate-550">Appeal ground: "{rti.appealReason || 'Information incomplete'}". Routed to FAA: {auth?.faaName || 'First Appellate Officer'}.</td>
                         <td className="py-2.5 text-right"><span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-md font-bold text-[10px]">APPEALED</span></td>
                      </tr>
                    )}
                    
                    {/* Second Appeal action status */}
                    {rti.status === 'Second Appeal Filed' && (
                      <tr className="hover:bg-slate-50/50">
                         <td className="py-2.5 font-mono text-slate-400">{rti.secondAppealDate || '2026-08-25'} 04:10 PM</td>
                         <td className="py-2.5 font-bold text-slate-800">Second Appeal Dispatched</td>
                         <td className="py-2.5 text-slate-500">Filed petition to CIC Bhawan, New Delhi. Registration ID: {rti.secondAppealRegNo}</td>
                         <td className="py-2.5 text-right"><span className="bg-red-50 text-red-700 px-2.5 py-0.5 rounded-md font-bold text-[10px]">CIC_PENDING</span></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Next Action Box for Response Pending */}
            {!hasResponse && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-wider">Timeline Status</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Under Section 7(1) of the RTI Act 2005, the CPIO must reply within 30 days. If the reply is not received before {rti.expectedDate}, the application is deemed refused, and you can file a First Appeal for free.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Compare Response (Section 10) */}
        {activeTab === 'compare' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">Compare RTI Response</h3>
              <p className="text-xs text-slate-555">Cross-reference your original questions against the responses supplied by the CPIO officer.</p>
            </div>
            
            <div className="space-y-4">
              {rti.questions.map((q, idx) => {
                const isDenied = (rti.id === 'rti-passport-101' && idx === 2) || (rti.id === 'rti-railways-204' && idx === 2);
                const isPartial = (rti.id === 'rti-passport-101' && idx === 3) || (rti.id === 'rti-railways-204' && idx === 1);
                
                let statusBadge = <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">Answered</span>;
                let statusText = "Full administrative records and particulars supplied by the department.";
                
                if (isDenied) {
                  statusBadge = <span className="bg-red-50 text-red-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">Missing / Denied</span>;
                  statusText = "The CPIO has denied or completely ignored this question under Section 8(1) exemptions.";
                } else if (isPartial) {
                  statusBadge = <span className="bg-amber-50 text-amber-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">Partial Answer</span>;
                  statusText = "General summary was provided, but specific files, timelines, or documents were omitted.";
                }

                return (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4.5 space-y-3 bg-slate-50/30">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-xs text-slate-400">QUESTION {idx + 1}</span>
                      {statusBadge}
                    </div>
                    <p className="text-xs font-bold text-slate-800 leading-relaxed">"{q}"</p>
                    
                    <div className="border-t border-slate-100 pt-3 text-xs">
                      <span className="font-extrabold text-slate-500 block mb-1">CPIO Officer Response:</span>
                      <p className="text-slate-650 leading-relaxed">{statusText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Evidence Mapping (Section 11) */}
        {activeTab === 'evidence' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">Response Evidence Mapping</h3>
              <p className="text-xs text-slate-555">Map specific answers directly to the corresponding page numbers in the uploaded response document.</p>
            </div>

            <div className="space-y-4">
              {rti.questions.map((q, idx) => {
                const isDenied = (rti.id === 'rti-passport-101' && idx === 2) || (rti.id === 'rti-railways-204' && idx === 2);
                const pageNum = idx === 0 ? 1 : idx === 1 ? 1 : idx === 3 ? 2 : null;
                
                return (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <span className="font-extrabold text-[10px] text-slate-400 block">QUESTION {idx + 1}</span>
                      <p className="text-xs font-bold text-slate-800 line-clamp-1">{q}</p>
                    </div>
                    
                    <div className="shrink-0 flex items-center gap-2">
                      {isDenied ? (
                        <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-xl">
                          No page match (Denied)
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Mapped to Page {pageNum}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Private Notes (Section 9) */}
        {activeTab === 'notes' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6 animate-in fade-in duration-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">Personal Case Notes</h3>
                <p className="text-xs text-slate-555">Record private comments, evidence logs, or officer phone interactions. Saved in real time to the Neon DB.</p>
              </div>
              
              <button
                onClick={handleSaveNotes}
                disabled={savingNotes}
                className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2.5 text-xs font-bold shadow disabled:bg-slate-350 disabled:cursor-not-allowed cursor-pointer"
              >
                {savingNotes ? 'Saving...' : 'Save Notes'}
              </button>
            </div>

            {notesSavedStatus === 'success' && (
              <div className="bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs font-bold p-3 rounded-xl flex items-center gap-1.5 animate-in fade-in duration-200">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                Notes saved successfully to Neon Database!
              </div>
            )}
            
            {notesSavedStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 text-xs font-bold p-3 rounded-xl flex items-center gap-1.5 animate-in fade-in duration-200">
                <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                Failed to save notes. Please check connection and try again.
              </div>
            )}

            <textarea
              rows={12}
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              placeholder="Start drafting your notes for this case workspace here..."
              className="w-full rounded-xl border border-slate-300 p-4 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50 leading-relaxed font-medium"
            />
          </div>
        )}

        {/* Tab 5: Appeal Assistant (Section 12) */}
        {activeTab === 'appeal' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">Appeal Assistant</h3>
              <p className="text-xs text-slate-555">If CPIO response has gaps, check ground reasons and draft First Appeal grounds automatically.</p>
            </div>

            {rti.status === 'First Appeal Filed' ? (
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200 text-xs text-purple-900 space-y-3 leading-relaxed">
                <span className="font-extrabold block">First Appeal Already Filed</span>
                <p>You have submitted a First Appeal regarding this case. The department has up to 30-45 days to issue their FAA decision order.</p>
                <div className="bg-white p-3.5 rounded-xl border border-purple-300/50 font-mono text-[10.5px] whitespace-pre-wrap leading-relaxed text-slate-750">
                  {rti.appealReason ? `Ground: ${rti.appealReason}` : 'Grounds: Information incomplete'}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <span className="text-[10px] font-extrabold text-slate-400 block uppercase">Check Appeal Grounds</span>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 font-bold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        defaultChecked={true}
                        className="rounded text-primary-navy accent-primary-navy"
                      />
                      <span>CPIO reply is incomplete or critical files are missing</span>
                    </label>
                    <label className="flex items-center gap-2 font-bold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        defaultChecked={false}
                        className="rounded text-primary-navy accent-primary-navy"
                      />
                      <span>Section 8 exemptions incorrectly applied without public interest weight</span>
                    </label>
                    <label className="flex items-center gap-2 font-bold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        defaultChecked={false}
                        className="rounded text-primary-navy accent-primary-navy"
                      />
                      <span>Officer ignored statutory 30-day response limit window</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={openAppealWizard}
                    className="bg-primary-navy hover:bg-primary-blue text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Scale className="h-4 w-4 text-secondary-saffron" />
                    Open Appeal Draft Wizard
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Ask Assistant Chat (Section 18) */}
        {activeTab === 'ask-ai' && !showAppealWizard && (
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col h-[520px] dark:bg-slate-900 dark:border-slate-800">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex justify-between items-center dark:bg-slate-800 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 dark:text-white">
                <MessagesSquare className="h-4 w-4 text-secondary-saffron" />
                Response Assistant Chat
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
                AI Agent grounded in reply
              </span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary-navy text-white rounded-tr-none' 
                      : 'bg-slate-100 text-slate-750 border border-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat input form */}
            <form onSubmit={handleSendChat} className="border-t border-slate-150 p-3 bg-slate-50 flex gap-2 rounded-b-2xl">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask e.g. 'Which questions were ignored?', 'What is section 8(1)(j)?'..."
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-4 py-2.5 flex items-center justify-center cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: Documents Vault (Section 24) */}
        {activeTab === 'documents' && !showAppealWizard && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <h3 className="font-bold text-sm text-slate-800 mb-6 dark:text-slate-200 flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary-blue" />
              RTI Document Vault
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Document 1: Application */}
              <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center text-xs hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary-blue">
                    <FileText className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Original_Application.pdf</span>
                    <span className="text-[10px] text-slate-400">Uploaded: {rti.submittedDate} • 185 KB</span>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-primary-navy p-2 cursor-pointer">
                  <FileDown className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Document 2: Receipt */}
              <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center text-xs hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <FileText className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Payment_Receipt.pdf</span>
                    <span className="text-[10px] text-slate-400">Uploaded: {rti.submittedDate} • 94 KB</span>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-primary-navy p-2 cursor-pointer">
                  <FileDown className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Document 3: CPIO Response */}
              {hasResponse && (
                <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center text-xs hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-650">
                      <FileText className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">CPIO_Official_Response.pdf</span>
                      <span className="text-[10px] text-slate-400">Uploaded: {rti.responseDate} • 312 KB</span>
                    </div>
                  </div>
                  <button className="text-slate-500 hover:text-primary-navy p-2 cursor-pointer">
                    <FileDown className="h-4.5 w-4.5" />
                  </button>
                </div>
              )}

              {/* Document 4: Appeal */}
              {rti.status === 'First Appeal Filed' && (
                <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center text-xs hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FileText className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">FAA_First_Appeal.pdf</span>
                      <span className="text-[10px] text-slate-400">Uploaded: {rti.appealDate || '2026-08-25'} • 140 KB</span>
                    </div>
                  </div>
                  <button className="text-slate-500 hover:text-primary-navy p-2 cursor-pointer">
                    <FileDown className="h-4.5 w-4.5" />
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Appeal Form Wizard Overlay (Section 19) */}
        {showAppealWizard && (
          <div className="rounded-2xl border border-slate-250 bg-white p-6 shadow-md dark:bg-slate-900 dark:border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-extrabold text-sm text-primary-navy dark:text-white flex items-center gap-1.5">
                <Scale className="h-5 w-5 text-secondary-saffron" />
                First Appeal Wizard
              </h3>
              <button
                onClick={() => setShowAppealWizard(false)}
                className="text-xs font-bold text-slate-450 hover:text-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleAppealSubmit} className="space-y-4">
              
              {/* Info Pre-filled */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-3 rounded-xl text-xs border border-slate-150">
                <div>
                  <span className="text-slate-400 font-bold block text-[9.5px] uppercase">RTI Reg No</span>
                  <span className="font-semibold text-slate-750">{rti.registrationNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[9.5px] uppercase">FAA Designated Officer</span>
                  <span className="font-semibold text-slate-750">{auth?.faaName}</span>
                </div>
              </div>

              {/* Appeal Reason Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">What is the issue / ground of appeal?</label>
                <select
                  value={appealReason}
                  onChange={(e) => setAppealReason(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50 font-semibold"
                >
                  <option value="No response received within 30 days">No response received within 30 days</option>
                  <option value="Information incomplete">Information incomplete</option>
                  <option value="Information denied unreasonably">Information denied unreasonably</option>
                  <option value="Incorrect information provided">Incorrect information provided</option>
                </select>
              </div>

              {/* Appeal Letter Draft */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex justify-between">
                  <span>Appeal Letter Draft (Editable)</span>
                  <span className="text-[10px] text-secondary-saffron font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Auto-Generated
                  </span>
                </label>
                <textarea
                  rows={12}
                  value={appealText}
                  onChange={(e) => setAppealText(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-4 text-xs font-mono text-slate-800 outline-none focus:border-primary-blue bg-slate-50 leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAppealWizard(false)}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-2.5 text-xs font-bold shadow cursor-pointer"
                >
                  Submit Appeal Letter
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Second Appeal Form Wizard Overlay (Section 19(3) / CIC) */}
        {showSecondAppealWizard && (
          <div className="rounded-2xl border border-slate-250 bg-white p-6 shadow-md dark:bg-slate-900 dark:border-slate-800 mt-6 animate-in slide-in-from-bottom duration-250">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-extrabold text-sm text-red-600 dark:text-red-400 flex items-center gap-1.5">
                <Scale className="h-5 w-5" />
                CIC Second Appeal Wizard (Section 19(3))
              </h3>
              <button
                onClick={() => setShowSecondAppealWizard(false)}
                className="text-xs font-bold text-slate-455 hover:text-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSecondAppealSubmit} className="space-y-4">
              
              {/* Info Pre-filled */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-3.5 rounded-xl text-[11px] border border-slate-150">
                <div>
                  <span className="text-slate-400 font-bold block text-[9px] uppercase">Original Reg No</span>
                  <span className="font-semibold text-slate-755">{rti.registrationNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[9px] uppercase">First Appeal Date</span>
                  <span className="font-semibold text-slate-755">{rti.appealDate || '2026-08-25'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[9px] uppercase">Public Authority</span>
                  <span className="font-semibold text-slate-755">{auth?.name.split(' (')[0]}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[9px] uppercase">Jurisdiction</span>
                  <span className="font-bold text-primary-blue">Central (CIC)</span>
                </div>
              </div>

              {/* Appeal Reason Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Ground of Second Appeal</label>
                <select
                  value={secondAppealReason}
                  onChange={(e) => setSecondAppealReason(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50 font-semibold"
                >
                  <option value="FAA did not respond within 45 days limit">FAA did not respond within 45 days limit</option>
                  <option value="FAA order is unsatisfactory and withheld records">FAA order is unsatisfactory and withheld records</option>
                  <option value="CPIO and FAA both failed to cite Section 8 exemptions correctly">CPIO and FAA both failed to cite Section 8 exemptions correctly</option>
                  <option value="Information provided is willfully misleading or incomplete">Information provided is willfully misleading or incomplete</option>
                </select>
              </div>

              {/* Appeal Letter Draft */}
              <div>
                <label className="block text-xs font-bold text-slate-505 uppercase mb-1 flex justify-between">
                  <span>CIC Petition Draft (Editable)</span>
                  <span className="text-[10px] text-secondary-saffron font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Auto-Generated
                  </span>
                </label>
                <textarea
                  rows={12}
                  value={secondAppealText}
                  onChange={(e) => setSecondAppealText(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-4 text-xs font-mono text-slate-800 outline-none focus:border-primary-blue bg-slate-50 leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSecondAppealWizard(false)}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-xs font-bold shadow cursor-pointer transition-all"
                >
                  Submit Second Appeal to CIC
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
