'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Phone, Shield, Bell, Smartphone, Key, Settings, 
  ToggleLeft, ClipboardList, Info, CircleDot, Sun, Moon, MapPin, 
  RotateCcw, FolderOpen, Eye, Download, CheckCircle2, FileText, X 
} from 'lucide-react';
import { defaultDemoUser, DemoUser, mockDocuments, MockDocument } from '../data/mockData';

interface ProfileViewProps {
  language: 'en' | 'hi';
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  textSize: 'normal' | 'large';
  setTextSize: (val: 'normal' | 'large') => void;
  setLanguage: (lang: 'en' | 'hi') => void;
  currentUser?: DemoUser;
  onResetDemo?: () => void;
  setActiveView?: (view: string) => void;
}

export default function ProfileView({
  language,
  lowBandwidth,
  setLowBandwidth,
  textSize,
  setTextSize,
  setLanguage,
  currentUser = defaultDemoUser,
  onResetDemo,
  setActiveView
}: ProfileViewProps) {
  const [notifyAppUpdates, setNotifyAppUpdates] = useState(true);
  const [notifyReplies, setNotifyReplies] = useState(true);
  const [notifyDeadlines, setNotifyDeadlines] = useState(true);
  const [notifySms, setNotifySms] = useState(false);

  const [activeTab, setActiveTab] = useState<'profile' | 'vault' | 'audit'>('profile');
  const [viewingDoc, setViewingDoc] = useState<MockDocument | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Fictional Audit Logs
  const auditLogs = [
    { action: 'DEMO_LOGIN_SUCCESS', details: 'Aarav Sharma logged in via Demo Fast-Path', time: '2026-08-25 09:27:01', ip: '192.168.1.45' },
    { action: 'RESPONSE_ANALYZED', details: 'AI Quality Check generated for RTI #RTI-2026-001245', time: '2026-08-25 09:14:22', ip: '192.168.1.45' },
    { action: 'PAYMENT_SIMULATED', details: '₹10 fee simulated for RTI-2026-001312', time: '2026-08-18 11:42:09', ip: '192.168.1.99' },
    { action: 'APPLICATION_SUBMITTED', details: 'Filed application to MoRTH / NHAI', time: '2026-08-12 14:29:40', ip: '192.168.1.45' }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">
                Citizen Profile & Settings
              </h2>
              <span className="text-[10px] font-black uppercase bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded-full">
                Demo Account
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage personal details, view your central document vault, and configure accessibility.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowResetConfirm(true)}
              className="rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Demo Workspace
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 border-b border-slate-200 pb-2">
          {[
            { id: 'profile', label: 'Personal Information & Settings', icon: User },
            { id: 'vault', label: 'Central Document Vault (5)', icon: FolderOpen },
            { id: 'audit', label: 'System Security & Audit Trail', icon: Shield }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-primary-navy text-white shadow-xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: PERSONAL & PREFERENCES */}
        {/* ========================================================================= */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Col (2 cols): Personal Info */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Personal Details */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-4">
                <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 dark:text-white flex items-center gap-2">
                  <User className="h-4 w-4 text-amber-600" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-extrabold block text-[10px] uppercase mb-1">Full Name</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-3 bg-slate-50 font-bold text-slate-800">
                      <User className="h-4 w-4 text-slate-400" />
                      {currentUser?.name || 'Aarav Sharma'}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-extrabold block text-[10px] uppercase mb-1">Identity Verification</span>
                    <div className="flex items-center gap-2 border border-emerald-300 bg-emerald-50 text-emerald-800 rounded-xl p-3 font-bold">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      Verified Demo Citizen
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-extrabold block text-[10px] uppercase mb-1">Email ID</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-3 bg-slate-50 font-bold text-slate-800">
                      <Mail className="h-4 w-4 text-slate-400" />
                      {currentUser?.email || 'aarav.sharma.demo@example.com'}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-extrabold block text-[10px] uppercase mb-1">Mobile Number</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-3 bg-slate-50 font-bold text-slate-800">
                      <Phone className="h-4 w-4 text-slate-400" />
                      {currentUser?.mobile || '+91 90000 00000'}
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-slate-400 font-extrabold block text-[10px] uppercase mb-1">Residential Jurisdiction</span>
                  <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-3 bg-slate-50 font-bold text-slate-800">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    {currentUser?.location || 'Jaipur, Rajasthan (Ward 42)'}
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-4">
                <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 dark:text-white flex items-center gap-2">
                  <Bell className="h-4 w-4 text-primary-navy" />
                  Notification Preferences
                </h3>

                <div className="space-y-3">
                  {[
                    { label: 'CPIO Response & Disclosure Letters', desc: 'Instant email alert when official documents are uploaded', state: notifyReplies, set: setNotifyReplies },
                    { label: '30-Day Statutory Deadline Warnings', desc: 'Alerts at 7 days and 2 days before deemed refusal triggers', state: notifyDeadlines, set: setNotifyDeadlines },
                    { label: 'Application Status & Payment Receipts', desc: 'Dispatches transaction confirmations and registration numbers', state: notifyAppUpdates, set: setNotifyAppUpdates },
                    { label: 'SMS Alerts to Registered Mobile', desc: 'Direct text alerts on case progression', state: notifySms, set: setNotifySms }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="text-xs font-bold text-slate-800">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                      <input 
                        type="checkbox"
                        checked={item.state}
                        onChange={(e) => item.set(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-primary-navy cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Accessibility & Fast Actions */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-4">
                <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 dark:text-white flex items-center gap-2">
                  <Settings className="h-4 w-4 text-slate-500" />
                  Accessibility & Display
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Interface Language</span>
                    <button
                      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-bold hover:bg-slate-100"
                    >
                      {language === 'en' ? 'English (EN)' : 'हिंदी (HI)'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Text Scaling</span>
                    <button
                      onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-bold hover:bg-slate-100"
                    >
                      {textSize === 'normal' ? 'Normal (100%)' : 'Large (120%)'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Low-Bandwidth Mode</span>
                    <button
                      onClick={() => setLowBandwidth(!lowBandwidth)}
                      className={`px-3 py-1.5 rounded-lg border font-bold ${lowBandwidth ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 border-slate-200'}`}
                    >
                      {lowBandwidth ? 'Active' : 'Disabled'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Account Info Box */}
              <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 space-y-2 text-xs">
                <div className="font-extrabold text-amber-900 flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-amber-600" />
                  About Demo Profile
                </div>
                <p className="text-amber-800 leading-relaxed">
                  This fictional profile represents a citizen in Jaipur, Rajasthan tracking municipal road works and educational vacancies.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CENTRAL DOCUMENT VAULT */}
        {/* ========================================================================= */}
        {activeTab === 'vault' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Stored Official Documents ({mockDocuments.length})
              </h3>
              <span className="text-xs text-slate-500">All PDF records are encrypted in demo sandbox</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockDocuments.map((doc) => (
                <div key={doc.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 dark:bg-slate-900">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                        {doc.type}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">{doc.date}</span>
                    </div>
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{doc.title}</h4>
                    <div className="text-xs font-mono text-slate-500">{doc.fileName} • {doc.fileSize}</div>
                    <div className="text-[11px] text-slate-600">Case Ref: <strong>{doc.rtiRegNo}</strong></div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setViewingDoc(doc)}
                      className="flex-1 rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-2 text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" /> Preview
                    </button>
                    <button
                      onClick={() => alert(`Simulated downloading ${doc.fileName}`)}
                      className="rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-2 text-xs font-bold cursor-pointer"
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
        {/* TAB 3: AUDIT TRAIL */}
        {/* ========================================================================= */}
        {activeTab === 'audit' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:bg-slate-900 space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
              System Audit Logs & Verification Trail
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="pb-2">Event Action</th>
                    <th className="pb-2">Details</th>
                    <th className="pb-2">Timestamp</th>
                    <th className="pb-2">Client IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {auditLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2.5 font-bold font-mono text-primary-navy">{log.action}</td>
                      <td className="py-2.5 text-slate-700">{log.details}</td>
                      <td className="py-2.5 text-slate-500 font-mono text-[11px]">{log.time}</td>
                      <td className="py-2.5 text-slate-400 font-mono text-[11px]">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Document Viewer Modal */}
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
                  <p className="text-[11px] text-slate-500">{viewingDoc.fileName}</p>
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

            <div className="p-4 bg-slate-50 flex justify-end">
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

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mx-auto">
              <RotateCcw className="h-6 w-6" />
            </div>
            
            <h4 className="text-lg font-black text-slate-900">Reset Demo Workspace?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              This will restore all RTIs, notifications, and application statuses back to their original mock state for demonstration.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowResetConfirm(false);
                  if (onResetDemo) onResetDemo();
                }}
                className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5 text-xs font-bold shadow-sm cursor-pointer"
              >
                Reset Demo Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
