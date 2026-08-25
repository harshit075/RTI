'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, Clock, AlertCircle, CheckCircle2, ChevronRight, 
  ArrowRight, Search, Plus, Sparkles, Filter, Check, Scale, 
  Landmark, AlertTriangle, RefreshCw, FileQuestion
} from 'lucide-react';
import { RTIApplication, DashboardStats, RTIStatus, User } from '../services/types';
import { rtiService } from '../services/rtiService';
import { deadlineService } from '../services/deadlineService';

interface DashboardViewProps {
  rtis: RTIApplication[];
  setActiveView: (view: string) => void;
  setSelectedRtiId: (id: string) => void;
  language: 'en' | 'hi';
  currentUser?: User;
  onRefresh?: () => void;
}

export default function DashboardView({
  rtis,
  setActiveView,
  setSelectedRtiId,
  language,
  currentUser,
  onRefresh
}: DashboardViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [stats, setStats] = useState<DashboardStats>({
    activeCount: 3,
    actionRequiredCount: 1,
    awaitingResponseCount: 2,
    completedCount: 1,
    totalApplications: 5
  });

  useEffect(() => {
    rtiService.getDashboardStatistics().then(setStats);
  }, [rtis]);

  // Filter application list
  const filteredRtis = rtis.filter(rti => {
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = rti.title.toLowerCase().includes(q) || 
                    rti.subject.toLowerCase().includes(q) || 
                    rti.registrationNumber.toLowerCase().includes(q) ||
                    (rti.authorityName || '').toLowerCase().includes(q);
      if (!match) return false;
    }

    // Status category filter
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Active') {
      return rti.status === 'Submitted' || rti.status === 'Response Pending' || rti.status === 'Processing';
    }
    if (activeFilter === 'Action Required') {
      return rti.status === 'Action Required' || rti.status === 'Response Received';
    }
    if (activeFilter === 'Awaiting Response') {
      return rti.status === 'Response Pending' || rti.status === 'Processing';
    }
    if (activeFilter === 'Response Received') {
      return rti.status === 'Response Received';
    }
    if (activeFilter === 'Appeals') {
      return rti.status === 'First Appeal Filed' || rti.status === 'Second Appeal Filed';
    }
    if (activeFilter === 'Completed') {
      return rti.status === 'Completed' || rti.status === 'FAA Decision Received';
    }
    return true;
  });

  // Identify highest priority action required item
  const actionRequiredItem = rtis.find(r => r.status === 'Action Required' || r.status === 'Response Received');

  const getStatusBadge = (status: RTIStatus) => {
    switch (status) {
      case 'Action Required':
        return {
          icon: AlertCircle,
          label: 'Action required',
          className: 'bg-rose-50 text-rose-800 border-rose-300'
        };
      case 'Response Received':
        return {
          icon: CheckCircle2,
          label: 'Response received',
          className: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-extrabold'
        };
      case 'Response Pending':
      case 'Processing':
        return {
          icon: Clock,
          label: 'Awaiting response',
          className: 'bg-amber-50 text-amber-900 border-amber-300'
        };
      case 'First Appeal Filed':
        return {
          icon: Scale,
          label: 'First appeal pending',
          className: 'bg-purple-50 text-purple-800 border-purple-300'
        };
      case 'Second Appeal Filed':
        return {
          icon: Scale,
          label: 'Second appeal (CIC)',
          className: 'bg-red-50 text-red-800 border-red-300'
        };
      case 'Submitted':
        return {
          icon: FileText,
          label: 'Submitted to CPIO',
          className: 'bg-blue-50 text-blue-800 border-blue-200'
        };
      case 'Completed':
      case 'FAA Decision Received':
        return {
          icon: Check,
          label: 'Completed',
          className: 'bg-slate-100 text-slate-700 border-slate-300'
        };
      default:
        return {
          icon: FileText,
          label: status,
          className: 'bg-slate-50 text-slate-600 border-slate-200'
        };
    }
  };

  const firstName = currentUser?.name?.split(' ')[0] || 'Aarav';

  const t = {
    en: {
      greeting: `Good morning, ${firstName}`,
      sub: 'Here\'s what\'s happening with your RTIs across public authorities.',
      startRti: '+ Start an RTI',
      actionTitle: '1 Action required',
      actionReview: 'Review response →',
      allCaughtUp: 'You\'re all caught up. All active applications are within statutory timelines.',
      statActive: 'Active RTIs',
      statAction: 'Action required',
      statAwaiting: 'Awaiting response',
      statTotal: 'Total applications',
      tableHeading: 'Your RTIs',
      searchPlaceholder: 'Filter by subject, registration number, or authority...',
      filterAll: 'All',
      filterActive: 'Active',
      filterAction: 'Action Required',
      filterAwaiting: 'Awaiting Response',
      filterReceived: 'Response Received',
      filterAppeals: 'Appeals',
      emptyTitle: 'No applications match this filter.',
      emptyAction: 'Clear filter'
    },
    hi: {
      greeting: `नमस्ते, ${firstName}`,
      sub: 'यहाँ आपके आरटीआई आवेदनों की नवीनतम स्थिति है।',
      startRti: '+ नया आरटीआई शुरू करें',
      actionTitle: '1 कार्रवाई आवश्यक',
      actionReview: 'उत्तर देखें →',
      allCaughtUp: 'कोई लंबित कार्रवाई नहीं है। सभी आवेदन समयसीमा के भीतर हैं।',
      statActive: 'सक्रिय आरटीआई',
      statAction: 'कार्रवाई आवश्यक',
      statAwaiting: 'उत्तर की प्रतीक्षा',
      statTotal: 'कुल आवेदन',
      tableHeading: 'आपके आरटीआई आवेदन',
      searchPlaceholder: 'विषय, पंजीकरण संख्या या विभाग द्वारा खोजें...',
      filterAll: 'सभी',
      filterActive: 'सक्रिय',
      filterAction: 'कार्रवाई आवश्यक',
      filterAwaiting: 'उत्तर लंबित',
      filterReceived: 'उत्तर प्राप्त',
      filterAppeals: 'अपीलें',
      emptyTitle: 'इस फ़िल्टर से कोई आवेदन मेल नहीं खाता।',
      emptyAction: 'फ़िल्टर हटाएं'
    }
  }[language];

  return (
    <div className="flex-1 bg-[#F7F8FA] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* ========================================================================= */}
        {/* TOP HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#D9E0E6]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17212B]">
              {t.greeting}
            </h1>
            <p className="text-xs sm:text-sm text-[#52606D] mt-1 font-medium">
              {t.sub}
            </p>
          </div>

          <button
            onClick={() => setActiveView('onboarding')}
            className="inline-flex items-center justify-center rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-5 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all self-start sm:self-auto"
          >
            {t.startRti}
          </button>
        </div>

        {/* ========================================================================= */}
        {/* ACTION REQUIRED HIGHLIGHT CARD */}
        {/* ========================================================================= */}
        {actionRequiredItem ? (
          <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/70 p-5 sm:p-6 shadow-3xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-rose-700 text-white px-2 py-0.5 rounded-md">
                  {t.actionTitle}
                </span>
                <span className="text-xs font-mono font-bold text-slate-700">
                  {actionRequiredItem.registrationNumber}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#17212B]">
                {actionRequiredItem.title}
              </h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {actionRequiredItem.responseSummary || 'Response received from public authority. Review the disclosure to determine if all 5 requested items were furnished.'}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedRtiId(actionRequiredItem.id);
                setActiveView('detail');
              }}
              className="rounded-xl bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all shrink-0 self-end sm:self-auto"
            >
              {t.actionReview}
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-4 text-xs font-medium text-[#52606D] flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{t.allCaughtUp}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CLICKABLE STATISTICS CARDS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button
            onClick={() => setActiveFilter('Active')}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer shadow-3xs ${
              activeFilter === 'Active' ? 'border-[#123B5D] bg-white ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] bg-white hover:bg-slate-50'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52606D] block">
              {t.statActive}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#123B5D]">
                {stats.activeCount}
              </span>
              <span className="text-[11px] text-amber-700 font-semibold">Under processing</span>
            </div>
          </button>

          <button
            onClick={() => setActiveFilter('Action Required')}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer shadow-3xs ${
              activeFilter === 'Action Required' ? 'border-rose-600 bg-white ring-1 ring-rose-600' : 'border-[#D9E0E6] bg-white hover:bg-slate-50'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52606D] block">
              {t.statAction}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-rose-700">
                {stats.actionRequiredCount}
              </span>
              <span className="text-[11px] text-rose-700 font-semibold">Review needed</span>
            </div>
          </button>

          <button
            onClick={() => setActiveFilter('Awaiting Response')}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer shadow-3xs ${
              activeFilter === 'Awaiting Response' ? 'border-[#123B5D] bg-white ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] bg-white hover:bg-slate-50'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52606D] block">
              {t.statAwaiting}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-800">
                {stats.awaitingResponseCount}
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">CPIO assigned</span>
            </div>
          </button>

          <button
            onClick={() => setActiveFilter('All')}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer shadow-3xs ${
              activeFilter === 'All' ? 'border-[#123B5D] bg-white ring-1 ring-[#123B5D]' : 'border-[#D9E0E6] bg-white hover:bg-slate-50'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#52606D] block">
              {t.statTotal}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#123B5D]">
                {stats.totalApplications}
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">Filed across portal</span>
            </div>
          </button>

        </div>

        {/* ========================================================================= */}
        {/* RTI APPLICATIONS LIST & FILTER TABS */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h2 className="text-base font-black text-[#17212B] flex items-center gap-2">
              <FileText className="h-4.5 w-4.5 text-[#123B5D]" />
              <span>{t.tableHeading} ({filteredRtis.length})</span>
            </h2>

            <div className="w-full md:w-80 relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border border-[#D9E0E6] bg-white pl-9 pr-3 py-1.5 text-xs text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
              />
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'All', label: t.filterAll },
              { id: 'Active', label: t.filterActive },
              { id: 'Action Required', label: t.filterAction },
              { id: 'Awaiting Response', label: t.filterAwaiting },
              { id: 'Response Received', label: t.filterReceived },
              { id: 'Appeals', label: t.filterAppeals }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === f.id
                    ? 'bg-[#123B5D] text-white shadow-3xs'
                    : 'bg-white border border-[#D9E0E6] text-slate-600 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Applications Cards/Rows */}
          {filteredRtis.length === 0 ? (
            <div className="rounded-2xl border border-[#D9E0E6] bg-white p-10 text-center space-y-3">
              <FileQuestion className="h-8 w-8 text-slate-400 mx-auto" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-700">{t.emptyTitle}</h4>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#123B5D] hover:underline cursor-pointer"
              >
                {t.emptyAction}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredRtis.map((rti) => {
                const badge = getStatusBadge(rti.status);
                const BadgeIcon = badge.icon;
                const deadline = deadlineService.calculateDeadline(rti.submittedDate, rti.status);

                return (
                  <div
                    key={rti.id}
                    className="rounded-2xl border border-[#D9E0E6] bg-white p-5 shadow-3xs hover:border-slate-300 transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      
                      {/* Left: Info */}
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                            {rti.registrationNumber}
                          </span>

                          {/* Accessible Status Indicator (icon + label + color + text) */}
                          <span className={`inline-flex items-center gap-1 text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full border ${badge.className}`}>
                            <BadgeIcon className="h-3 w-3 shrink-0" />
                            <span>{badge.label}</span>
                          </span>

                          {rti.status === 'Response Pending' && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              deadline.urgency === 'due-soon' ? 'bg-amber-100 text-amber-900 font-extrabold' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {deadline.statusLabel}
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 
                            onClick={() => {
                              setSelectedRtiId(rti.id);
                              setActiveView('detail');
                            }}
                            className="text-sm sm:text-base font-extrabold text-[#17212B] hover:text-[#123B5D] cursor-pointer"
                          >
                            {rti.title}
                          </h3>
                          <p className="text-xs text-[#52606D] line-clamp-1 font-medium mt-0.5">
                            {rti.subject}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#52606D]">
                          <span>Authority: <strong className="text-slate-800">{rti.authorityName || 'Public Authority'}</strong></span>
                          <span>•</span>
                          <span>Filed: <strong className="text-slate-800">{rti.submittedDate}</strong></span>
                          <span>•</span>
                          <span>Questions: <strong className="text-slate-800">{rti.totalQuestions} ({rti.answeredCount} Answered)</strong></span>
                        </div>
                      </div>

                      {/* Right: Action Button */}
                      <div className="shrink-0 flex items-center pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                        <button
                          onClick={() => {
                            setSelectedRtiId(rti.id);
                            setActiveView('detail');
                          }}
                          className={`w-full lg:w-auto px-4 py-2 rounded-xl text-xs font-extrabold shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                            rti.status === 'Response Received' || rti.status === 'Action Required'
                              ? 'bg-[#123B5D] hover:bg-[#0A2540] text-white'
                              : 'bg-white border border-[#D9E0E6] hover:bg-slate-50 text-[#17212B]'
                          }`}
                        >
                          {rti.status === 'Response Received' && 'Review Response →'}
                          {rti.status === 'Action Required' && 'Review & Appeal →'}
                          {rti.status === 'Response Pending' && 'Track Application →'}
                          {rti.status === 'Submitted' && 'Track Application →'}
                          {rti.status === 'First Appeal Filed' && 'View Appeal Status →'}
                          {rti.status === 'Second Appeal Filed' && 'View CIC Status →'}
                          {rti.status === 'Completed' && 'View Case Archive →'}
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
