'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, Clock, AlertCircle, CheckCircle2, ChevronRight, 
  ArrowRight, Search, Plus, Sparkles, Filter, Check, Scale, 
  Landmark, AlertTriangle, RefreshCw, BarChart3, Users, HelpCircle, 
  CornerDownRight, Upload, Download, Send, BookOpen, Inbox
} from 'lucide-react';
import { RTIApplication, RTIStatus } from '../services/types';
import { rtiService } from '../services/rtiService';
import { notificationService } from '../services/notificationService';
import { mockAuthorities } from '../data/mockData';

interface GovernmentPortalViewProps {
  language: 'en' | 'hi';
  setActiveView: (view: string) => void;
  rtis: RTIApplication[];
  onRefresh: () => void;
}

export default function GovernmentPortalView({
  language,
  setActiveView,
  rtis,
  onRefresh
}: GovernmentPortalViewProps) {
  // Tabs: 'nodal' | 'cpio' | 'faa' | 'analytics' | 'ai-assistant'
  const [activeTab, setActiveTab] = useState<'nodal' | 'cpio' | 'faa' | 'analytics' | 'ai-assistant'>('nodal');

  // Selected RTI application for CPIO/FAA details modal or inline action panel
  const [selectedApp, setSelectedApp] = useState<RTIApplication | null>(null);
  
  // Action details
  const [actionType, setActionType] = useState<'response' | 'fee' | 'doc' | 'transfer' | 'assign' | 'faa-decision' | null>(null);

  // Form input states
  const [responseText, setResponseText] = useState('');
  const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState(3);
  const [feeAmount, setFeeAmount] = useState('80');
  const [feeReason, setFeeReason] = useState('Photocopying charges for 40 pages of project blueprint records @ Rs 2 per page + postage charges.');
  const [docRequestReason, setDocRequestReason] = useState('Citizen identity confirmation (Aadhaar or Passport) or BPL Certificate required to proceed.');
  const [transferTargetId, setTransferTargetId] = useState('ugc');
  const [assignCpioName, setAssignCpioName] = useState('Shri Manoj Pandey');
  const [faaDecisionText, setFaaDecisionText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // AI Assistant command state
  const [aiCommand, setAiCommand] = useState('');
  const [aiResponses, setAiResponses] = useState<Array<{ q: string; a: string; timestamp: string }>>([
    {
      q: 'Show me applications that are approaching their response deadline.',
      a: 'There are currently 2 applications approaching their 30-day statutory response window: \n1. RTI-2026-001312 (Education Vacancy) - Due in 22 Days. Status: Response Pending.\n2. MEXTA/R/2026/08492 (Passport Delay) - Due in 5 Days. Status: Response Pending.',
      timestamp: 'Just now'
    }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Filter queues
  const nodalQueue = rtis.filter(r => r.status === 'Submitted');
  const cpioQueue = rtis.filter(r => r.status === 'Response Pending' || r.status === 'Processing' || r.status === 'Action Required');
  const faaQueue = rtis.filter(r => r.status === 'First Appeal Filed');

  const executeAction = async () => {
    if (!selectedApp) return;
    setIsSubmitting(true);

    try {
      if (actionType === 'assign') {
        // Nodal Officer assigns application to CPIO
        await rtiService.updateRTI(selectedApp.id, {
          status: 'Response Pending',
          notes: `Assigned to CPIO: ${assignCpioName} on ${new Date().toISOString().substring(0, 10)}.`
        });
        await notificationService.addNotification(
          `CPIO Assigned: CPIO ${assignCpioName} has been assigned to your RTI application ${selectedApp.registrationNumber}.`,
          'update',
          selectedApp.id
        );
      } 
      else if (actionType === 'transfer') {
        // Nodal Officer transfers application under Section 6(3)
        const targetAuth = mockAuthorities.find(a => a.id === transferTargetId) || mockAuthorities[0];
        const newReg = `TRANS-2026-${Math.floor(10000 + Math.random() * 90000)}`;
        await rtiService.updateRTI(selectedApp.id, {
          authorityId: transferTargetId,
          authorityName: targetAuth.name,
          registrationNumber: newReg,
          status: 'Submitted',
          notes: `Transferred under Section 6(3) to ${targetAuth.name}. Original Reg: ${selectedApp.registrationNumber}.`
        });
        await notificationService.addNotification(
          `Application Transferred: Your RTI request ${selectedApp.registrationNumber} has been transferred to ${targetAuth.name} under Section 6(3). New Reg No: ${newReg}`,
          'alert',
          selectedApp.id
        );
      } 
      else if (actionType === 'fee') {
        // CPIO requests additional fee
        await rtiService.updateRTI(selectedApp.id, {
          status: 'Action Required',
          notes: `Additional Fee of ₹${feeAmount} requested by CPIO. Reason: ${feeReason}.`,
          appealReason: `Fee requested: ₹${feeAmount}` // repurpose field for display
        });
        await notificationService.addNotification(
          `Action Required: CPIO requested additional fee of ₹${feeAmount} for application ${selectedApp.registrationNumber}. Reason: ${feeReason}`,
          'alert',
          selectedApp.id
        );
      } 
      else if (actionType === 'doc') {
        // CPIO requests additional supporting document
        await rtiService.updateRTI(selectedApp.id, {
          status: 'Action Required',
          notes: `Additional document requested by CPIO. Reason: ${docRequestReason}.`,
          appealReason: `Document requested` // repurpose field for display
        });
        await notificationService.addNotification(
          `Action Required: CPIO requested supporting documents for application ${selectedApp.registrationNumber}. Reason: ${docRequestReason}`,
          'alert',
          selectedApp.id
        );
      } 
      else if (actionType === 'response') {
        // CPIO uploads official response
        const mockBreakdown = selectedApp.questions.map((q, idx) => ({
          question: q,
          status: idx < answeredQuestionsCount ? 'Answered' as const : 'Needs Review' as const,
          note: idx < answeredQuestionsCount 
            ? 'Information furnished in official response disclosure Annexure.'
            : 'Information withheld/omitted. Exemption details not cited.'
        }));

        await rtiService.updateRTI(selectedApp.id, {
          status: 'Response Received',
          responseDate: new Date().toISOString().substring(0, 10),
          responseSummary: responseText || 'All requested public data regarding budget approvals and tenders has been dispatched.',
          answeredCount: answeredQuestionsCount,
          questionBreakdowns: mockBreakdown,
          aiAnalysis: answeredQuestionsCount < selectedApp.totalQuestions 
            ? `CPIO responded, but left ${selectedApp.totalQuestions - answeredQuestionsCount} queries unanswered. CPIO cited no Section 8 exemption reasons. Grounds for First Appeal are present.`
            : 'CPIO answered all requested points. The application is completely resolved.'
        });

        await notificationService.addNotification(
          `Response Dispatched: CPIO has uploaded the official response for your RTI request ${selectedApp.registrationNumber}.`,
          'update',
          selectedApp.id
        );
      } 
      else if (actionType === 'faa-decision') {
        // Appellate Authority resolves First Appeal
        await rtiService.updateRTI(selectedApp.id, {
          status: 'FAA Decision Received',
          notes: `FAA Appellate Decision: ${faaDecisionText || 'The Appellate Authority directed the CPIO to release all withheld documents within 10 days.'}`,
          responseSummary: `FAA Decision: ${faaDecisionText || 'Relief granted. CPIO instructed to release completion certificates.'}`
        });

        await notificationService.addNotification(
          `FAA Appeal Order: First Appellate Authority has issued a formal decision on appeal for ${selectedApp.registrationNumber}.`,
          'update',
          selectedApp.id
        );
      }

      onRefresh();
      setSelectedApp(null);
      setActionType(null);
      alert('Statutory Government Action Processed Successfully & Dispatched to Citizen Account.');
    } catch (e) {
      alert('Error updating application status.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAiCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiCommand.trim()) return;

    setIsAiLoading(true);
    setTimeout(() => {
      let reply = '';
      const cmd = aiCommand.toLowerCase();
      
      if (cmd.includes('deadline') || cmd.includes('overdue')) {
        reply = 'There are 2 pending applications close to statutory limits:\n1. MEXTA/R/2026/08492 (Consular/Passport Division) - 5 days remaining.\n2. RTI-2026-001312 (Education Ministry) - 22 days remaining.';
      } else if (cmd.includes('appeals') || cmd.includes('faa')) {
        reply = 'There is 1 active First Appeal currently awaiting review in the Appellate Authority queue: \n- File Ref: MORLY/R/2026/05931 (Jaipur platform upgrade). The citizen appealed under Section 19(1) claiming incomplete information on platform blueprints.';
      } else if (cmd.includes('transfer')) {
        reply = 'Transfer statistics report:\n- Current week transfers under Sec 6(3): 4 Requests.\n- Most frequent target: Ministry of Education / UGC (3 transfers).\n- Average transfer processing latency: 1.8 Days.';
      } else if (cmd.includes('summarize')) {
        reply = 'Daily Queue Summary:\n- Total Pending Requests: 3\n- Pending CPIO Action: 2\n- Pending FAA Appeal Action: 1\n- Statutory deadlines compromised: 0';
      } else {
        reply = `Government AI Agent Analysis: Query registered. All systems normal. There are currently ${nodalQueue.length} requests in Nodal triage and ${cpioQueue.length} items in CPIO review queues. Total portal resolution rate stands at 84%.`;
      }

      setAiResponses([
        { q: aiCommand, a: reply, timestamp: 'Just now' },
        ...aiResponses
      ]);
      setAiCommand('');
      setIsAiLoading(false);
    }, 1000);
  };

  return (
    <div className="flex-1 bg-[#F7F8FA] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Header with Switch Back to Citizen button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#D9E0E6]">
          <div>
            <div className="flex items-center gap-2">
              <Landmark className="h-6 w-6 text-[#123B5D]" />
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17212B]">
                {language === 'en' ? 'RTI Nodal & CPIO Operating Portal' : 'आरटीआई सरकारी पोर्टल'}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#52606D] mt-1 font-medium">
              Statutory dashboard for Public Information Officers (CPIO), Nodal triage, and Appellate Authorities.
            </p>
          </div>

          <button
            onClick={() => setActiveView('dashboard')}
            className="rounded-xl border border-blue-200 bg-blue-50 text-blue-900 px-4 py-2.5 text-xs font-black shadow-3xs cursor-pointer hover:bg-blue-100 transition-all flex items-center gap-1.5"
          >
            Switch to Citizen Portal ➔
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#D9E0E6] gap-2 overflow-x-auto">
          {[
            { id: 'nodal', label: `Nodal Triage (${nodalQueue.length})`, icon: Inbox },
            { id: 'cpio', label: `CPIO Queue (${cpioQueue.length})`, icon: Clock },
            { id: 'faa', label: `Appellate Court (${faaQueue.length})`, icon: Scale },
            { id: 'analytics', label: 'Gov Analytics', icon: BarChart3 },
            { id: 'ai-assistant', label: 'AI Admin Copilot', icon: Sparkles }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedApp(null);
                  setActionType(null);
                }}
                className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'border-[#123B5D] text-[#123B5D] font-extrabold' 
                    : 'border-transparent text-[#52606D] hover:text-[#17212B]'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-[#123B5D]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main queue columns (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* 1. NODAL TRIAGE QUEUE */}
            {activeTab === 'nodal' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white border border-[#D9E0E6] p-4 rounded-xl shadow-3xs">
                  <span className="text-xs text-slate-500 font-bold">Unassigned Central Applications</span>
                  <span className="text-xs font-black bg-[#123B5D] text-white px-2 py-0.5 rounded-full">Section 6(1) Receipt Queue</span>
                </div>

                {nodalQueue.length === 0 ? (
                  <div className="bg-white border border-[#D9E0E6] p-10 rounded-2xl text-center text-slate-400 text-xs font-bold">
                    No new applications in triage queue.
                  </div>
                ) : (
                  nodalQueue.map(app => (
                    <div 
                      key={app.id} 
                      onClick={() => {
                        setSelectedApp(app);
                        setActionType('assign');
                      }}
                      className={`bg-white border p-5 rounded-2xl shadow-3xs cursor-pointer transition-all ${
                        selectedApp?.id === app.id ? 'border-[#123B5D] ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] hover:border-slate-350'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                          {app.registrationNumber}
                        </span>
                        <span className="text-[10px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.2 rounded-md">
                          New Request
                        </span>
                      </div>

                      <h3 className="font-extrabold text-sm text-slate-900 mt-2 hover:text-[#123B5D]">
                        {app.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">{app.subject}</p>

                      <div className="pt-3 border-t border-slate-100 mt-3 flex justify-between items-center text-[10.5px] text-slate-400">
                        <span>Citizen: <strong>{app.notes || 'Aarav Sharma'}</strong></span>
                        <span>Due: {app.expectedDate}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* 2. CPIO QUEUE */}
            {activeTab === 'cpio' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white border border-[#D9E0E6] p-4 rounded-xl shadow-3xs">
                  <span className="text-xs text-slate-500 font-bold">My CPIO Allocation Queue</span>
                  <span className="text-xs font-black bg-amber-800 text-white px-2 py-0.5 rounded-full">Statutory 30 Days Clock</span>
                </div>

                {cpioQueue.length === 0 ? (
                  <div className="bg-white border border-[#D9E0E6] p-10 rounded-2xl text-center text-slate-400 text-xs font-bold">
                    No active applications assigned to you.
                  </div>
                ) : (
                  cpioQueue.map(app => (
                    <div 
                      key={app.id} 
                      onClick={() => {
                        setSelectedApp(app);
                        setActionType('response');
                      }}
                      className={`bg-white border p-5 rounded-2xl shadow-3xs cursor-pointer transition-all ${
                        selectedApp?.id === app.id ? 'border-[#123B5D] ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] hover:border-slate-350'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                          {app.registrationNumber}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.2 rounded-md ${
                          app.status === 'Action Required' ? 'bg-rose-50 text-rose-800 border border-rose-300' : 'bg-blue-50 text-blue-800 border border-blue-200'
                        }`}>
                          {app.status}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-sm text-slate-900 mt-2 hover:text-[#123B5D]">
                        {app.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">{app.subject}</p>

                      <div className="pt-3 border-t border-slate-100 mt-3 flex justify-between items-center text-[10.5px] text-slate-400">
                        <span>Questions: <strong>{app.totalQuestions} items</strong></span>
                        <span className="text-amber-800 font-bold">Due Date: {app.expectedDate}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* 3. APPELLATE AUTHORITY QUEUE */}
            {activeTab === 'faa' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white border border-[#D9E0E6] p-4 rounded-xl shadow-3xs">
                  <span className="text-xs text-slate-500 font-bold">First Appellate Court (Section 19-1)</span>
                  <span className="text-xs font-black bg-purple-700 text-white px-2 py-0.5 rounded-full">Legal Appeals Queue</span>
                </div>

                {faaQueue.length === 0 ? (
                  <div className="bg-white border border-[#D9E0E6] p-10 rounded-2xl text-center text-slate-400 text-xs font-bold">
                    No pending First Appeals on file.
                  </div>
                ) : (
                  faaQueue.map(app => (
                    <div 
                      key={app.id} 
                      onClick={() => {
                        setSelectedApp(app);
                        setActionType('faa-decision');
                      }}
                      className={`bg-white border p-5 rounded-2xl shadow-3xs cursor-pointer transition-all ${
                        selectedApp?.id === app.id ? 'border-[#123B5D] ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] hover:border-slate-350'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                          {app.registrationNumber}
                        </span>
                        <span className="text-[10px] font-bold text-purple-900 bg-purple-50 border border-purple-200 px-2 py-0.2 rounded-md">
                          Appeal Filed
                        </span>
                      </div>

                      <h3 className="font-extrabold text-sm text-slate-900 mt-2 hover:text-[#123B5D]">
                        {app.title}
                      </h3>
                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] mt-2 italic">
                        <strong>Citizen Claim:</strong> {app.appealReason || 'Incomplete records received from CPIO.'}
                      </p>

                      <div className="pt-3 border-t border-slate-100 mt-3 flex justify-between items-center text-[10.5px] text-slate-400">
                        <span>Original CPIO Response Date: {app.responseDate || 'N/A'}</span>
                        <span className="font-bold text-slate-800">Appeal Date: {app.appealDate || 'Today'}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* 4. ANALYTICS PANEL */}
            {activeTab === 'analytics' && (
              <div className="glass-card rounded-2xl p-6 border-slate-200/60 shadow-sm space-y-6">
                <div>
                  <h3 className="font-black text-base text-[#0f172a] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">Portal Transparency Analytics</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-semibold">Summary metrics of all incoming Right to Information requests.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-tr from-slate-55 to-blue-50/20 rounded-xl border border-slate-200/60">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">Average Resolution Time</span>
                    <span className="text-2xl font-black text-[#1e3a8a]">14.2 Days</span>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-slate-55 to-emerald-50/20 rounded-xl border border-slate-200/60">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">Appeal Disposal Rate</span>
                    <span className="text-2xl font-black text-emerald-800">91.5%</span>
                  </div>
                </div>

                {/* Simulated CSS Chart */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-slate-400">Incoming Requests by Ministry</h4>
                  
                  {[
                    { label: 'Ministry of Road Transport (MoRTH)', count: 42, pct: '42%' },
                    { label: 'Ministry of Railways (MORLY)', count: 28, pct: '28%' },
                    { label: 'Ministry of Education', count: 18, pct: '18%' },
                    { label: 'Ministry of External Affairs (MEA)', count: 12, pct: '12%' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>{item.label}</span>
                        <span>{item.count} ({item.pct})</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full" style={{ width: item.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. AI ADMIN ASSISTANT */}
            {activeTab === 'ai-assistant' && (
              <div className="glass-card rounded-2xl p-6 border-slate-200/60 shadow-sm space-y-6">
                <div>
                  <h3 className="font-black text-base text-[#0f172a] flex items-center gap-1.5 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
                    <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                    AI statutory Assistant
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-semibold">Ask questions about statutory deadlines, bottlenecks, or CPIO allocations.</p>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                  {aiResponses.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="bg-[#1e3a8a] text-white p-3 rounded-2xl rounded-tr-none text-xs font-bold text-right ml-10 shadow-3xs">
                        {item.q}
                      </div>
                      <div className="bg-white/80 border border-slate-200/50 p-3.5 rounded-2xl rounded-tl-none text-xs text-slate-700 leading-relaxed font-semibold shadow-3xs mr-10">
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAiCommandSubmit} className="flex gap-2 border-t border-slate-100 pt-3">
                  <input
                    type="text"
                    required
                    value={aiCommand}
                    onChange={(e) => setAiCommand(e.target.value)}
                    placeholder="Ask Admin Assistant (e.g. 'Show active appeals', 'daily summary')..."
                    className="flex-1 rounded-xl border border-slate-200 px-3.5 py-3 text-xs bg-slate-50 outline-none focus:border-[#1e3a8a] focus:bg-white shadow-3xs transition-all font-semibold"
                  />
                  <button
                    type="submit"
                    disabled={isAiLoading}
                    className="rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white px-5 py-3 text-xs font-black shadow-md cursor-pointer hover-lift"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}

          </div>

          {/* Action details column (1 col) */}
          <div className="space-y-4">
            
            {/* App Detail Action view */}
            {selectedApp ? (
              <div className="bg-white border border-[#D9E0E6] rounded-2xl p-5 shadow-3xs space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-500 block">SELECTED REQUEST</span>
                  <h3 className="font-extrabold text-[#17212B] text-sm truncate">{selectedApp.title}</h3>
                  <span className="text-[10.5px] text-slate-400 font-medium">Ref: {selectedApp.registrationNumber}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-extrabold text-[#123B5D] uppercase text-[10px]">Statutory Checklist</div>
                  <div className="rounded-xl bg-[#F7F8FA] border border-slate-200 p-3 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">BPL Status:</span>
                      <span className="font-bold">{selectedApp.paymentId?.includes('BPL') ? 'Yes (Fee Waived)' : 'No (Fee Paid)'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Days Remaining:</span>
                      <span className="font-bold text-rose-700">14 Days</span>
                    </div>
                  </div>
                </div>

                {/* Actions list based on tab */}
                <div className="space-y-3 pt-2">
                  <div className="font-extrabold text-[#123B5D] uppercase text-[10px]">Select Action</div>

                  {activeTab === 'nodal' && (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActionType('assign')}
                        className={`py-2 rounded-xl text-xs font-bold border ${
                          actionType === 'assign' ? 'bg-[#123B5D] border-[#123B5D] text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Assign CPIO
                      </button>
                      <button
                        onClick={() => setActionType('transfer')}
                        className={`py-2 rounded-xl text-xs font-bold border ${
                          actionType === 'transfer' ? 'bg-[#123B5D] border-[#123B5D] text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Transfer Sec 6(3)
                      </button>
                    </div>
                  )}

                  {activeTab === 'cpio' && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          onClick={() => setActionType('response')}
                          className={`py-2 rounded-xl text-[10.5px] font-bold border text-center ${
                            actionType === 'response' ? 'bg-[#123B5D] border-[#123B5D] text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          Upload Reply
                        </button>
                        <button
                          onClick={() => setActionType('fee')}
                          className={`py-2 rounded-xl text-[10.5px] font-bold border text-center ${
                            actionType === 'fee' ? 'bg-[#123B5D] border-[#123B5D] text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          Request Fee
                        </button>
                        <button
                          onClick={() => setActionType('doc')}
                          className={`py-2 rounded-xl text-[10.5px] font-bold border text-center ${
                            actionType === 'doc' ? 'bg-[#123B5D] border-[#123B5D] text-white' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          Req Doc
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'faa' && (
                    <button
                      onClick={() => setActionType('faa-decision')}
                      className="w-full py-2 rounded-xl text-xs font-bold bg-[#123B5D] text-white text-center"
                    >
                      Draft Appeal Order (FAA)
                    </button>
                  )}
                </div>

                {/* Form parameters for action */}
                <div className="border-t border-slate-100 pt-4 space-y-4">
                  {actionType === 'assign' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Select CPIO Officer</label>
                        <select
                          value={assignCpioName}
                          onChange={(e) => setAssignCpioName(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2 font-bold text-slate-800 bg-slate-50"
                        >
                          <option value="Shri Manoj Pandey">Shri Manoj Pandey (General Manager - Tech)</option>
                          <option value="Dr. Shakeel Ahmad">Dr. Shakeel Ahmad (Joint Secretary - Schooling)</option>
                          <option value="Shri Vikram Dev">Shri Vikram Dev (Under Secretary - CPV)</option>
                          <option value="Shri R. K. Saxena">Shri R. K. Saxena (Joint Director - Railways)</option>
                        </select>
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-[#123B5D] text-white py-2 text-xs font-black"
                      >
                        {isSubmitting ? 'Processing...' : 'Confirm CPIO Assignment'}
                      </button>
                    </div>
                  )}

                  {actionType === 'transfer' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Target Public Authority</label>
                        <select
                          value={transferTargetId}
                          onChange={(e) => setTransferTargetId(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2 font-bold text-slate-800 bg-slate-50"
                        >
                          {mockAuthorities.map(a => (
                            <option key={a.id} value={a.id}>{a.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="text-[10px] text-amber-800 bg-amber-50 p-2 rounded-lg leading-relaxed">
                        Under Section 6(3), transfer must occur within 5 statutory days of request reception.
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-[#123B5D] text-white py-2 text-xs font-black"
                      >
                        {isSubmitting ? 'Transferring...' : 'Execute Section 6(3) Transfer'}
                      </button>
                    </div>
                  )}

                  {actionType === 'fee' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Fee Amount (₹)</label>
                        <input
                          type="number"
                          value={feeAmount}
                          onChange={(e) => setFeeAmount(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2 font-bold text-slate-800 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Basis of Calculation</label>
                        <textarea
                          rows={3}
                          value={feeReason}
                          onChange={(e) => setFeeReason(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 bg-slate-50"
                        />
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-amber-700 text-white py-2 text-xs font-black"
                      >
                        {isSubmitting ? 'Dispatching...' : 'Request Additional Fee'}
                      </button>
                    </div>
                  )}

                  {actionType === 'doc' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Specific Document Description</label>
                        <textarea
                          rows={3}
                          value={docRequestReason}
                          onChange={(e) => setDocRequestReason(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2 text-slate-800 bg-slate-50"
                        />
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-amber-700 text-white py-2 text-xs font-black"
                      >
                        {isSubmitting ? 'Dispatching...' : 'Request Supporting Document'}
                      </button>
                    </div>
                  )}

                  {actionType === 'response' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Answered Questions Count</label>
                        <select
                          value={answeredQuestionsCount}
                          onChange={(e) => setAnsweredQuestionsCount(Number(e.target.value))}
                          className="w-full rounded-xl border border-slate-200 p-2 font-bold text-slate-800 bg-slate-50"
                        >
                          {selectedApp.questions.map((_, idx) => (
                            <option key={idx + 1} value={idx + 1}>{idx + 1} of {selectedApp.totalQuestions} Questions</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">CPIO Disclosure Response text</label>
                        <textarea
                          rows={4}
                          required
                          value={responseText}
                          onChange={(e) => setResponseText(e.target.value)}
                          placeholder="Draft of official letter contents..."
                          className="w-full rounded-xl border border-slate-200 p-2.5 text-slate-800 bg-slate-50"
                        />
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-emerald-700 text-white py-2.5 text-xs font-black"
                      >
                        {isSubmitting ? 'Uploading...' : 'Confirm & Dispatch Official Response'}
                      </button>
                    </div>
                  )}

                  {actionType === 'faa-decision' && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">Formal FAA Appellate Decision</label>
                        <textarea
                          rows={4}
                          required
                          value={faaDecisionText}
                          onChange={(e) => setFaaDecisionText(e.target.value)}
                          placeholder="Draft senior appellate decision..."
                          className="w-full rounded-xl border border-slate-200 p-2.5 text-slate-800 bg-slate-50"
                        />
                      </div>
                      <button
                        onClick={executeAction}
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-purple-700 text-white py-2.5 text-xs font-black"
                      >
                        {isSubmitting ? 'Dispatching Decision...' : 'Confirm & Issue Appellate Order'}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="bg-white border border-[#D9E0E6] rounded-2xl p-6 text-center text-slate-400 text-xs font-bold space-y-2">
                <HelpCircle className="h-8 w-8 text-slate-300 mx-auto" />
                <p>Select any application from the queue to view details and execute statutory government tasks.</p>
              </div>
            )}

            {/* Quick Policy Checklist Box */}
            <div className="bg-slate-800 text-white rounded-2xl p-5 space-y-3">
              <span className="text-[10px] font-black tracking-wider uppercase text-amber-400 block">RTI Act 2005 Directives</span>
              <ul className="text-[11px] text-slate-300 space-y-2 leading-relaxed">
                <li>• **Section 7(1)**: 30 days is the absolute deadline. Failure to comply invokes a ₹250/day personal penalty on CPIO.</li>
                <li>• **Section 8(1)**: Non-disclosure requires citing specific sub-exemptions (a to j).</li>
                <li>• **Section 6(3)**: Target department transfer must occur within 5 calendar days.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
