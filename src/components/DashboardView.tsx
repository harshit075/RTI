'use client';

import React from 'react';
import { 
  FileText, Clock, AlertCircle, CheckCircle2, ChevronRight, CornerDownRight, 
  HelpCircle, Calendar, Sparkles, Inbox, RefreshCw, Send, Play, Scale, 
  ArrowRight, ShieldCheck, Landmark 
} from 'lucide-react';
import { RTIApplication, mockAuthorities, defaultDemoUser, DemoUser } from '../data/mockData';

interface DashboardViewProps {
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  setSelectedRtiId: (id: string) => void;
  language: 'en' | 'hi';
  triggerMockResponse?: () => void;
  notifications?: any[];
  currentUser?: DemoUser;
  onOpenTour?: () => void;
}

export default function DashboardView({
  rtis,
  setActiveView,
  setSelectedRtiId,
  language,
  triggerMockResponse,
  notifications = [],
  currentUser = defaultDemoUser,
  onOpenTour
}: DashboardViewProps) {
  
  const activeRTIs = rtis.filter(r => r.status === 'Submitted' || r.status === 'Response Pending' || r.status === 'Processing');
  const receivedRTIs = rtis.filter(r => r.status === 'Response Received' || r.status === 'FAA Decision Received');
  const actionRequiredRTIs = rtis.filter(r => r.status === 'Action Required');
  const totalAppsCount = rtis.length;

  const getAuthorityName = (authId: string) => {
    const auth = mockAuthorities.find(a => a.id === authId);
    return auth ? auth.name : authId;
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Submitted':
      case 'Processing':
        return 'bg-blue-50 text-blue-700 border-blue-200 font-bold';
      case 'Response Pending':
        return 'bg-amber-50 text-amber-900 border-amber-300 font-extrabold';
      case 'Response Received':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-extrabold';
      case 'Action Required':
        return 'bg-rose-50 text-rose-800 border-rose-300 font-extrabold';
      case 'First Appeal Filed':
        return 'bg-purple-50 text-purple-700 border-purple-200 font-bold';
      case 'Second Appeal Filed':
        return 'bg-red-50 text-red-700 border-red-200 font-extrabold';
      case 'FAA Decision Received':
        return 'bg-slate-100 text-slate-700 border-slate-300 font-bold';
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
        'Action Required': 'Action Required',
        'First Appeal Filed': 'First Appeal Filed',
        'Second Appeal Filed': 'Second Appeal Filed',
        'FAA Decision Received': 'Appeal Final Decision'
      },
      hi: {
        'Submitted': 'जमा किया गया',
        'Processing': 'प्रोसेसिंग में',
        'Response Pending': 'उत्तर लंबित',
        'Response Received': 'उत्तर प्राप्त हुआ',
        'Action Required': 'कार्रवाई आवश्यक',
        'First Appeal Filed': 'प्रथम अपील दायर',
        'Second Appeal Filed': 'द्वितीय अपील दायर',
        'FAA Decision Received': 'अपील अंतिम निर्णय'
      }
    }[language];
    return (texts as any)[status] || status;
  };

  const firstName = currentUser?.name?.split(' ')[0] || 'Aarav';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header Banner with Personalized Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary-navy dark:text-white">
              Good morning, {firstName}
            </h2>
            <span className="text-[10px] font-black uppercase bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded-full">
              Demo Workspace
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            {language === 'en' 
              ? 'Here\'s what\'s happening with your RTIs across Central & State authorities.'
              : 'यहाँ केंद्रीय और राज्य प्राधिकरणों में आपके आरटीआई की नवीनतम स्थिति है।'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {onOpenTour && (
            <button
              onClick={onOpenTour}
              className="rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Play className="h-3.5 w-3.5 text-amber-600 fill-amber-500" />
              Take Product Tour
            </button>
          )}

          <button
            onClick={() => setActiveView('onboarding')}
            className="rounded-xl bg-primary-navy px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-blue transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            + File New RTI
          </button>
        </div>
      </div>

      {/* Product Tour Highlight Banner */}
      {onOpenTour && (
        <div className="rounded-2xl border-2 border-amber-250 bg-gradient-to-r from-amber-50/90 via-orange-50/60 to-amber-50/90 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-600 text-white px-2 py-0.5 rounded-md">
                  Hackathon Tour
                </span>
                <span className="text-xs font-black text-slate-900">Explore the 6-Step RTI Saathi Product Journey</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Experience authority discovery, AI drafting, quality check, 30-day tracking, response breakdown, and First Appeal.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTour}
            className="rounded-xl bg-[#0A2540] hover:bg-[#123B5D] text-white px-4 py-2 text-xs font-extrabold shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer transition-all self-end sm:self-auto"
          >
            <Play className="h-3 w-3 fill-white" />
            Start Interactive Tour ➔
          </button>
        </div>
      )}

      {/* 4-Stat Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Applications */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Applications</span>
            <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
              <FileText className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-primary-navy dark:text-white">
              {totalAppsCount}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Filed across portal</span>
          </div>
        </div>

        {/* Active / Response Pending */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active RTIs</span>
            <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-amber-800">
              {activeRTIs.length}
            </span>
            <span className="text-[11px] text-amber-700 font-bold">Awaiting CPIO reply</span>
          </div>
        </div>

        {/* Response Received */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Responses Received</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700">
              {receivedRTIs.length}
            </span>
            <span className="text-[11px] text-emerald-700 font-bold">Disclosures provided</span>
          </div>
        </div>

        {/* Action Required */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Action Required</span>
            <div className="h-8 w-8 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <AlertCircle className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-rose-700">
              {actionRequiredRTIs.length || 1}
            </span>
            <span className="text-[11px] text-rose-700 font-bold">First Appeal candidate</span>
          </div>
        </div>

      </div>

      {/* Main Applications Table / Cards List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="h-4.5 w-4.5 text-primary-navy" />
            Your RTI Applications ({rtis.length})
          </h3>
          <span className="text-[11px] text-slate-500 font-medium">
            Demo Environment • All records fictional for demonstration
          </span>
        </div>

        <div className="space-y-3">
          {rtis.map((rti) => {
            const isRoadDemo = rti.id === 'rti-road-jaipur-1245';
            const isSchoolDemo = rti.id === 'rti-school-1312';
            const isHospitalDemo = rti.id === 'rti-hospital-1355';

            return (
              <div 
                key={rti.id}
                className={`rounded-2xl border bg-white p-5 shadow-xs transition-all hover:shadow-md dark:bg-slate-900 ${
                  isHospitalDemo ? 'border-rose-200 bg-rose-50/20' : 
                  isRoadDemo ? 'border-emerald-200 bg-emerald-50/10' : 
                  'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left info column */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black text-primary-navy bg-slate-100 px-2.5 py-1 rounded-md">
                        {rti.registrationNumber || rti.id}
                      </span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10.5px] ${getStatusStyle(rti.status)}`}>
                        {getStatusText(rti.status)}
                      </span>
                      {isRoadDemo && (
                        <span className="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                          ★ Demo Story 1: Response Analysis
                        </span>
                      )}
                      {isSchoolDemo && (
                        <span className="text-[10px] font-extrabold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          ★ Demo Story 2: 30-Day Deadline Tracker
                        </span>
                      )}
                      {isHospitalDemo && (
                        <span className="text-[10px] font-extrabold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                          ★ Demo Story 3: First Appeal Flow
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 
                        onClick={() => {
                          setSelectedRtiId(rti.id);
                          setActiveView('detail');
                        }}
                        className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 hover:text-primary-navy cursor-pointer"
                      >
                        {rti.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-1 font-medium">
                        {rti.subject}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                      <span>Authority: <strong className="text-slate-700">{getAuthorityName(rti.authorityId)}</strong></span>
                      <span>•</span>
                      <span>Filed: <strong className="text-slate-700">{rti.submittedDate}</strong></span>
                      <span>•</span>
                      <span>Questions: <strong className="text-slate-700">{rti.totalQuestions} ({rti.answeredCount} Answered)</strong></span>
                    </div>

                    {/* Fictional AI Note snippet */}
                    {rti.aiAnalysis && (
                      <div className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 p-2.5 rounded-xl flex items-start gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong>AI Analysis:</strong> {rti.aiAnalysis}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Action column */}
                  <div className="flex sm:flex-col lg:flex-row items-center gap-2 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedRtiId(rti.id);
                        setActiveView('detail');
                      }}
                      className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        rti.status === 'Response Received'
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : rti.status === 'Action Required'
                          ? 'bg-rose-700 hover:bg-rose-800 text-white'
                          : 'bg-primary-navy hover:bg-primary-blue text-white'
                      }`}
                    >
                      {rti.status === 'Response Received' && 'Review Response ➔'}
                      {rti.status === 'Action Required' && 'Review & Consider First Appeal ➔'}
                      {rti.status === 'Response Pending' && 'Track Application ➔'}
                      {rti.status === 'First Appeal Filed' && 'View Appeal Status ➔'}
                      {rti.status === 'Submitted' && 'Track Application ➔'}
                      {rti.status === 'Second Appeal Filed' && 'Track CIC Appeal ➔'}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
