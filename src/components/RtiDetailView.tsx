'use client';

import React, { useState } from 'react';
import { 
  FileText, Clock, AlertTriangle, CheckCircle2, ChevronRight, CornerDownRight, 
  HelpCircle, ArrowLeft, Send, Sparkles, Scale, Landmark, FileDown, FolderOpen, MessagesSquare
} from 'lucide-react';
import { RTIApplication, mockAuthorities } from '../data/mockData';

interface RtiDetailViewProps {
  rtiId: string;
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  fileFirstAppeal: (id: string, reason: string, appealText: string) => void;
}

export default function RtiDetailView({
  rtiId,
  rtis,
  setActiveView,
  language,
  fileFirstAppeal
}: RtiDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'timeline' | 'response' | 'documents' | 'ask-ai'>('timeline');
  
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

  const rti = rtis.find(r => r.id === rtiId);
  if (!rti) return <div>RTI not found</div>;

  const auth = mockAuthorities.find(a => a.id === rti.authorityId);

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
            <span className="text-[10px] text-slate-400 font-mono font-bold">{rti.registrationNumber}</span>
            <h2 className="text-xl font-black text-primary-navy dark:text-white">{rti.title}</h2>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 mb-6 bg-white p-1 rounded-xl shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-primary-navy text-white'
                : 'text-slate-500 hover:text-primary-navy'
            }`}
          >
            Journey Timeline
          </button>
          {hasResponse && (
            <>
              <button
                onClick={() => setActiveTab('response')}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'response'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-500 hover:text-primary-navy'
                }`}
              >
                Response Reader & Summary
              </button>
              <button
                onClick={() => setActiveTab('ask-ai')}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'ask-ai'
                    ? 'bg-primary-navy text-white'
                    : 'text-slate-500 hover:text-primary-navy'
                }`}
              >
                Ask Assistant (AI)
              </button>
            </>
          )}
          <button
            onClick={() => setActiveTab('documents')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'documents'
                ? 'bg-primary-navy text-white'
                : 'text-slate-500 hover:text-primary-navy'
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
                  <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-[9px] shadow-sm">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">APPLICATION SUBMITTED & REGISTERED</h4>
                    <p className="text-slate-500 mt-1">Submitted on {rti.submittedDate} via NIC Payment Gateway.</p>
                  </div>
                </div>

                {/* Milestone 2: Received by CPIO */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-[9px] shadow-sm">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">RECEIVED BY PUBLIC AUTHORITY</h4>
                    <p className="text-slate-500 mt-1">Routed to CPIO Office: {auth?.cpioName} ({auth?.cpioDesignation}).</p>
                  </div>
                </div>

                {/* Milestone 3: Response Pending/Received */}
                <div className="relative">
                  <span className={`absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full text-white font-bold text-[9px] shadow-sm ${
                    hasResponse ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                  }`}>
                    {hasResponse ? '✓' : '⌛'}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">CPIO OFFICIAL REPLY</h4>
                    {hasResponse ? (
                      <p className="text-slate-500 mt-1">Response letter received on {rti.responseDate}.</p>
                    ) : (
                      <p className="text-slate-500 mt-1">Statutory answer period in progress. Deadline: {rti.expectedDate}.</p>
                    )}
                  </div>
                </div>

                {/* Milestone 4: First Appeal */}
                {rti.status === 'First Appeal Filed' && (
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-purple-500 text-white font-bold text-[9px] shadow-sm">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">FIRST APPEAL FILED</h4>
                      <p className="text-slate-500 mt-1">
                        Appeal filed to First Appellate Authority: {auth?.faaName} ({auth?.faaDesignation}) on {rti.appealDate || '2026-08-25'}. Ground: {rti.appealReason}.
                      </p>
                    </div>
                  </div>
                )}

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

        {/* Tab 2: Response Reader (Section 17) */}
        {activeTab === 'response' && !showAppealWizard && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left side: Simulated Official Document */}
            <div className="rounded-2xl border border-slate-300 bg-white shadow-sm overflow-hidden flex flex-col h-[520px] dark:bg-slate-900 dark:border-slate-800">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex justify-between items-center dark:bg-slate-800 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-slate-400" />
                  Official_CPIO_Reply.pdf
                </span>
                <button className="text-slate-650 hover:text-primary-navy p-1 rounded hover:bg-slate-200 flex items-center gap-1 text-[10px] font-bold cursor-pointer">
                  <FileDown className="h-3.5 w-3.5" /> Download
                </button>
              </div>

              {/* Scrollable Letter Mockup */}
              <div className="flex-1 overflow-y-auto p-6 font-serif text-[11px] text-slate-800 leading-relaxed bg-slate-50 dark:bg-slate-950 dark:text-slate-350">
                <div className="text-center font-bold mb-6 text-xs uppercase tracking-wide border-b border-slate-200 pb-4 text-slate-900 dark:text-white">
                  {auth?.name}<br />
                  GOVERNMENT OF INDIA
                </div>
                
                <div className="flex justify-between mb-4">
                  <span>Letter No: {rti.registrationNumber}/CPIO-26</span>
                  <span>Date: {rti.responseDate}</span>
                </div>

                <div className="mb-4">
                  To,<br />
                  Shri Harshit Sharma,<br />
                  Alwar, Rajasthan.
                </div>

                <div className="font-bold mb-4">
                  Subject: Information sought under Right to Information Act, 2005.
                </div>

                <p className="mb-3">
                  Reference your RTI application dated {rti.submittedDate} seeking information under the RTI Act, 2005.
                </p>

                {rti.id === 'rti-passport-101' ? (
                  <div className="space-y-3">
                    <p>
                      The item-wise reply to your query is provided below:
                    </p>
                    <p>
                      <strong>Query 1 & 2:</strong> Police verification request was sent to local police station on 03/08/2026. The Police verification report was received in this office on 09/08/2026.
                    </p>
                    <p>
                      <strong>Query 3:</strong> Copies of internal file sheets, remarks, and signatures of verification officers are third-party personal details and cannot be supplied as per exemptions under Section 8(1)(j) of the RTI Act.
                    </p>
                    <p>
                      <strong>Query 4:</strong> The passport printing was placed on hold due to name spelling mismatches. The name in application is "Harshit Sharma" whereas in police verification it is spelled "Harsit Sharma". The applicant is requested to visit the Regional Passport Office with spelling rectification certificates.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p>
                      The item-wise reply to your queries regarding tender work is provided below:
                    </p>
                    <p>
                      <strong>Query 1:</strong> Copies of tender notice and work order issued for escalators (No. JPR-ESC-2025) are enclosed as Annexure-A. The successful bidder was M/s Escalates India Ltd.
                    </p>
                    <p>
                      <strong>Query 2:</strong> The total funds sanctioned for this project was ₹40,00,000. Out of this, ₹35,00,000 has been released and incurred till date.
                    </p>
                    <p>
                      <strong>Query 3:</strong> The escalator completion inspection and safety auditor reports have not been finalized yet. Hence, no records are available.
                    </p>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-slate-200">
                  Yours sincerely,<br />
                  <span className="font-bold">{auth?.cpioName}</span><br />
                  {auth?.cpioDesignation}
                </div>
              </div>
            </div>

            {/* Right side: AI Response Analyzer (Section 17) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col h-[520px] dark:bg-slate-900 dark:border-slate-800">
              <div className="flex items-center gap-2 text-primary-navy border-b border-slate-100 pb-4 mb-4 dark:text-white">
                <Sparkles className="h-5 w-5 text-secondary-saffron animate-pulse" />
                <h3 className="font-bold text-sm">AI Response Analysis</h3>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4">
                
                {/* Score Summary */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-150 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">Answer Resolution</span>
                    <span className="text-[10px] text-slate-450 block">Comparing original questions vs reply</span>
                    <button 
                      onClick={() => setShowOnlyMissing(!showOnlyMissing)}
                      className="text-primary-blue font-bold hover:underline mt-1 cursor-pointer block text-left"
                    >
                      {showOnlyMissing ? 'Show all questions' : 'Show me what is missing'}
                    </button>
                  </div>
                  <span className="font-black text-sm bg-blue-100 text-secondary-saffron px-3 py-1 rounded-lg shrink-0">
                    {rti.id === 'rti-passport-101' ? '3 of 4 Answered' : '2 of 3 Answered'}
                  </span>
                </div>

                {/* Question Breakdown List */}
                <div className="space-y-3">
                  {rti.questions.map((q, idx) => {
                    const isDenied = (rti.id === 'rti-passport-101' && idx === 2) || (rti.id === 'rti-railways-204' && idx === 2);
                    if (showOnlyMissing && !isDenied) return null;
                    
                    return (
                      <div key={idx} className="rounded-xl border border-slate-150 p-3 text-xs bg-slate-50/50 animate-in fade-in duration-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[10px] text-slate-400 uppercase">Question {idx + 1}</span>
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            isDenied ? 'bg-red-50 text-red-705' : 'bg-emerald-50 text-success-green'
                          }`}>
                            {isDenied ? '⚠ Omitted / Denied' : '✓ Addressed'}
                          </span>
                        </div>
                        <p className="text-slate-755 font-medium mt-1 leading-snug">{q}</p>
                        
                        {isDenied && (
                          <div className="mt-2 text-[10.5px] bg-red-50/50 text-red-800 p-2 rounded-lg border border-red-100">
                            <span className="font-bold">AI Exemption check:</span>{' '}
                            {rti.id === 'rti-passport-101' 
                              ? 'CPIO cited Sec 8(1)(j) Privacy, but internal workflow logs on police verify concern public administrative delays and may be appealable.' 
                              : 'CPIO claims report is not finalized. However, under Section 4, intermediate drafts or inspections should be disclosable once submitted.'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Appeal Trigger (Section 19) */}
              {rti.status !== 'First Appeal Filed' ? (
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <div className="bg-purple-50 rounded-xl p-3 border border-purple-250 text-xs text-purple-800 mb-3 leading-relaxed">
                    <span className="font-bold">First Appeal Available:</span> If you are dissatisfied because critical documents were omitted or denied, you can submit a first appeal to the FAA officer for resolution.
                  </div>
                  
                  <button
                    onClick={openAppealWizard}
                    className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white font-extrabold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Scale className="h-4 w-4 text-secondary-saffron" />
                    One-Click First Appeal (Free)
                  </button>
                </div>
              ) : (
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <div className="bg-red-50 rounded-xl p-3 border border-red-200 text-xs text-red-800 mb-3 leading-relaxed animate-in fade-in duration-200">
                    <span className="font-bold block mb-1">⚖️ Unsatisfied with First Appeal?</span>
                    If the First Appellate Authority (FAA) decision is unsatisfactory or you do not receive a reply within 30-45 days, you can file a **Second Appeal** or **Complaint** to the Central Information Commission (CIC) under Section 19(3) of the RTI Act.
                  </div>
                  
                  <a
                    href="https://cic.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-650 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <Scale className="h-4 w-4 text-white" />
                    Go to Official CIC Portal (cic.gov.in) ↗
                  </a>
                </div>
              )}
            </div>

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
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-xl text-xs border border-slate-150">
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

      </div>
    </div>
  );
}
