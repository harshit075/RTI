'use client';

import React from 'react';
import { 
  FileText, Clock, AlertCircle, CheckCircle2, ChevronRight, CornerDownRight, 
  HelpCircle, Calendar, Sparkles, Inbox, RefreshCw, Send
} from 'lucide-react';
import { RTIApplication, mockAuthorities } from '../data/mockData';

interface DashboardViewProps {
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  setSelectedRtiId: (id: string) => void;
  language: 'en' | 'hi';
  triggerMockResponse: () => void;
  notifications: any[];
}

export default function DashboardView({
  rtis,
  setActiveView,
  setSelectedRtiId,
  language,
  triggerMockResponse,
  notifications
}: DashboardViewProps) {
  
  const activeRTIs = rtis.filter(r => r.status === 'Submitted' || r.status === 'Response Pending' || r.status === 'Processing');
  const receivedRTIs = rtis.filter(r => r.status === 'Response Received' || r.status === 'First Appeal Filed' || r.status === 'FAA Decision Received');
  const actionRequiredRTIs = rtis.filter(r => r.status === 'Response Received'); // requires appeal review

  const getAuthorityName = (authId: string) => {
    const auth = mockAuthorities.find(a => a.id === authId);
    return auth ? auth.name : authId;
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Submitted':
      case 'Processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Response Pending':
        return 'bg-amber-50 text-amber-800 border-amber-250 font-extrabold';
      case 'Response Received':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-extrabold';
      case 'First Appeal Filed':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Second Appeal Filed':
        return 'bg-red-50 text-red-700 border-red-200 font-extrabold';
      case 'FAA Decision Received':
        return 'bg-slate-100 text-slate-700 border-slate-350';
      default:
        return 'bg-slate-50 text-slate-500 border-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    const texts = {
      en: {
        'Submitted': 'Submitted',
        'Processing': 'Processing',
        'Response Pending': 'Response Pending',
        'Response Received': 'Response Received',
        'First Appeal Filed': 'First Appeal Filed',
        'Second Appeal Filed': 'Second Appeal Filed',
        'FAA Decision Received': 'Appeal Final Decision'
      },
      hi: {
        'Submitted': 'जमा किया गया',
        'Processing': 'प्रोसेसिंग में',
        'Response Pending': 'उत्तर लंबित',
        'Response Received': 'उत्तर प्राप्त हुआ',
        'First Appeal Filed': 'प्रथम अपील दायर',
        'Second Appeal Filed': 'द्वितीय अपील दायर',
        'FAA Decision Received': 'अपील अंतिम निर्णय'
      }
    }[language];
    return (texts as any)[status] || status;
  };

  // Calculate days remaining
  const getDaysRemaining = (expectedDate: string) => {
    const expected = new Date(expectedDate);
    const today = new Date('2026-08-25'); // Anchored to local time in mock metadata
    const diffTime = expected.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const openRtiDetail = (id: string) => {
    setSelectedRtiId(id);
    setActiveView('detail');
  };

  // Bulk Exports
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rtis, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Rti_Applications_Export.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportCsv = () => {
    const csvRows = [
      ['ID', 'Registration Number', 'Title', 'Subject', 'Status', 'Submitted Date', 'Expected Date'],
      ...rtis.map(r => [r.id, r.registrationNumber || 'Pending', r.title, r.subject, r.status, r.submittedDate, r.expectedDate])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(",")).join("\n");
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", "Rti_Applications_Export.csv");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Check if we have our demo RTI in the list
  const hasDemoRtiPending = rtis.some(r => r.registrationNumber?.includes('DEMO') && r.status === 'Submitted');

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Top Welcome & CTA Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">
              {language === 'en' ? 'Your RTI Workspace' : 'आपके आरटीआई'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'en' 
                ? 'Track your requests, analyze officer responses, and manage correspondence in real time.'
                : 'वास्तविक समय में अपने अनुरोधों को ट्रैक करें, अधिकारी के जवाबों का विश्लेषण करें और पत्राचार का प्रबंधन करें।'}
            </p>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveView('onboarding')}
              className="flex-1 sm:flex-initial rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-3 text-xs font-bold shadow transition-all cursor-pointer text-center"
            >
              + File New RTI
            </button>
            
            {/* Hackathon Demo Helper Trigger Button */}
            {hasDemoRtiPending && (
              <button
                onClick={triggerMockResponse}
                className="flex-1 sm:flex-initial rounded-xl border border-secondary-saffron bg-blue-50 hover:bg-blue-100 text-secondary-saffron px-4 py-3 text-xs font-bold flex items-center justify-center gap-1.5 animate-pulse cursor-pointer"
                title="Simulates CPIO officer sending a response back to this portal for testing"
              >
                <RefreshCw className="h-4 w-4 animate-spin-slow" />
                Simulate Response
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Analytics Summary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/20 p-5 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Active Requests</span>
                <span className="text-2xl font-black text-blue-900 block mt-1">{activeRTIs.length}</span>
              </div>
              <div className="h-10 w-10 rounded-xl bg-blue-100/50 flex items-center justify-center text-blue-800 shrink-0">
                <FileText className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/15 p-5 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Responses Received</span>
                <span className="text-2xl font-black text-emerald-955 block mt-1">{receivedRTIs.length}</span>
              </div>
              <div className="h-10 w-10 rounded-xl bg-emerald-100/40 flex items-center justify-center text-emerald-800 shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-2xl border border-red-100 bg-red-50/20 p-5 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Action Required</span>
                <span className="text-2xl font-black text-red-955 block mt-1">{actionRequiredRTIs.length}</span>
              </div>
              <div className="h-10 w-10 rounded-xl bg-red-100/40 flex items-center justify-center text-red-800 shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Next Action Engine Banner (Section 15) */}
          <div className="rounded-2xl border border-secondary-saffron bg-blue-50/50 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-secondary-saffron shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-secondary-saffron uppercase tracking-wider block">Your Next Action</span>
                
                {actionRequiredRTIs.length > 0 ? (
                  <div className="mt-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 leading-snug dark:text-slate-100">
                        RTI response received for "{actionRequiredRTIs[0].title}"
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Our AI analysis detected that 1 requested question regarding inspection report may not have been fully answered.
                      </p>
                    </div>
                    <button
                      onClick={() => openRtiDetail(actionRequiredRTIs[0].id)}
                      className="bg-secondary-saffron hover:bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl shrink-0 shadow-sm cursor-pointer"
                    >
                      Review Response & File Appeal
                    </button>
                  </div>
                ) : (
                  <div className="mt-1">
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                      All filed RTIs are tracking within statutory timelines.
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      No immediate action required. We will alert you on SMS/Email as soon as any public authority uploads information.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RTIs List grid (Section 13) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200 pb-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">My Registered Applications</h3>
              
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-[10px] font-bold text-slate-500">Export:</span>
                <button
                  onClick={handleExportJson}
                  className="rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-2.5 py-1 text-[10px] transition-colors cursor-pointer"
                >
                  JSON
                </button>
                <button
                  onClick={handleExportCsv}
                  className="rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-2.5 py-1 text-[10px] transition-colors cursor-pointer"
                >
                  CSV
                </button>
              </div>
            </div>
            
            {rtis.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-200 border-dashed rounded-2xl">
                <Inbox className="h-10 w-10 text-slate-350 mx-auto mb-2" />
                <h4 className="font-bold text-slate-800 text-base">No RTIs Filed Yet</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Access public documents and make authorities answerable by starting your first application.
                </p>
                <button
                  onClick={() => setActiveView('onboarding')}
                  className="mt-4 rounded-xl bg-primary-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-primary-blue cursor-pointer"
                >
                  Start First RTI
                </button>
              </div>
            ) : (
              rtis.map(rti => {
                const daysLeft = getDaysRemaining(rti.expectedDate);
                const isPending = rti.status === 'Submitted' || rti.status === 'Response Pending';
                
                return (
                  <div 
                    key={rti.id} 
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center flex-wrap gap-2 animate-in fade-in duration-200">
                        {rti.status === 'Response Pending' || rti.status === 'Submitted' ? (
                          <span className="text-[10.5px] font-extrabold bg-amber-50 text-amber-850 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span>Response pending - {daysLeft > 0 ? `${daysLeft} days remaining` : 'Deadline Expired'}</span>
                          </span>
                        ) : (
                          <span className={`text-[10.5px] font-extrabold border px-3 py-1 rounded-full ${getStatusStyle(rti.status)} shadow-2xs`}>
                            {getStatusText(rti.status)}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-650 font-mono font-bold bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                          Reg No: {rti.registrationNumber || 'Pending'}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-extrabold text-base text-slate-850 dark:text-slate-100">{rti.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-snug">{getAuthorityName(rti.authorityId)}</p>
                        <p className="text-xs text-slate-600 mt-1.5 italic line-clamp-1">Subject: {rti.subject}</p>
                      </div>
                    </div>

                    {/* Right side: Countdown and CTA */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto gap-4 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0 shrink-0">
                      
                      {/* Countdown clock (Section 16) */}
                      {isPending && (
                        <div className="text-left md:text-right">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Expected Response</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Clock className={`h-4 w-4 ${daysLeft <= 7 ? 'text-red-500 animate-pulse' : 'text-slate-500'}`} />
                            <span className={`text-xs font-bold ${daysLeft <= 7 ? 'text-red-650' : 'text-slate-700'}`}>
                              {daysLeft > 0 ? `${daysLeft} Days Remaining` : 'Deadline Expired'}
                            </span>
                          </div>
                        </div>
                      )}

                      {!isPending && rti.responseDate && (
                        <div className="text-left md:text-right">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Closed Date</span>
                          <span className="text-xs font-semibold text-slate-700 block mt-0.5">{rti.responseDate}</span>
                        </div>
                      )}

                      <button
                        onClick={() => openRtiDetail(rti.id)}
                        className="rounded-xl border border-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue px-4.5 py-2 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {rti.status === 'Response Received' ? 'Read Response' : 'View Details'}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
