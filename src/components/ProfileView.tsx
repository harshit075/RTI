'use client';

import React, { useState, useEffect } from 'react';
import { 
  User as UserIcon, Mail, Phone, Shield, Bell, Smartphone, Key, Settings, 
  MapPin, FolderOpen, Eye, Download, CheckCircle2, FileText, X, RotateCcw 
} from 'lucide-react';
import { User, DocumentItem } from '../services/types';
import { documentService } from '../services/documentService';
import { authService } from '../services/authService';

interface ProfileViewProps {
  language: 'en' | 'hi';
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  textSize: 'normal' | 'large';
  setTextSize: (val: 'normal' | 'large') => void;
  setLanguage: (lang: 'en' | 'hi') => void;
  currentUser?: User;
  onResetData?: () => void;
  setActiveView?: (view: string) => void;
}

export default function ProfileView({
  language,
  lowBandwidth,
  setLowBandwidth,
  textSize,
  setTextSize,
  setLanguage,
  currentUser,
  onResetData,
  setActiveView
}: ProfileViewProps) {
  const [notifyAppUpdates, setNotifyAppUpdates] = useState(true);
  const [notifyReplies, setNotifyReplies] = useState(true);
  const [notifyDeadlines, setNotifyDeadlines] = useState(true);
  const [notifySms, setNotifySms] = useState(false);

  const [activeTab, setActiveTab] = useState<'profile' | 'vault' | 'audit'>('profile');
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [viewingDoc, setViewingDoc] = useState<DocumentItem | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    documentService.getDocuments().then(setDocuments);
  }, []);

  const auditLogs = [
    { action: 'LOGIN_SUCCESS', details: 'Citizen logged in securely', time: '2026-08-25 09:27:01', ip: '192.168.1.45' },
    { action: 'RESPONSE_VIEWED', details: 'Viewed CPIO Response for RTI-2026-001245', time: '2026-08-25 09:14:22', ip: '192.168.1.45' },
    { action: 'PAYMENT_VERIFIED', details: 'Statutory ₹10 fee verified via Bharatkosh', time: '2026-08-18 11:42:09', ip: '192.168.1.99' },
    { action: 'APPLICATION_SUBMITTED', details: 'Filed application to MoRTH / NHAI', time: '2026-08-12 14:29:40', ip: '192.168.1.45' }
  ];

  return (
    <div className="flex-1 bg-[#F7F8FA] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#D9E0E6]">
          <div>
            <h1 className="text-2xl font-black text-[#17212B] tracking-tight">
              Citizen Profile & Settings
            </h1>
            <p className="text-xs text-[#52606D] mt-0.5">
              Manage your personal credentials, central document vault, and communication preferences.
            </p>
          </div>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 text-xs font-bold shadow-3xs flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Seed Data
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 border-b border-[#D9E0E6] pb-2">
          {[
            { id: 'profile', label: 'Personal Details & Preferences', icon: UserIcon },
            { id: 'vault', label: `Document Vault (${documents.length})`, icon: FolderOpen },
            { id: 'audit', label: 'Security & Audit Log', icon: Shield }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#123B5D] text-white shadow-3xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-[#D9E0E6]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PROFILE */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
                <h2 className="text-sm font-black text-[#17212B] border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-[#123B5D]" />
                  Citizen Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#52606D] font-bold block text-[10px] uppercase mb-1">Full Legal Name</span>
                    <div className="border border-[#D9E0E6] rounded-xl p-3 bg-[#F7F8FA] font-bold text-slate-800">
                      {currentUser?.name || 'Aarav Sharma'}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#52606D] font-bold block text-[10px] uppercase mb-1">Identity Verification</span>
                    <div className="border border-emerald-300 bg-emerald-50 text-emerald-800 rounded-xl p-3 font-bold flex items-center gap-1.5">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      Verified Citizen Account
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#52606D] font-bold block text-[10px] uppercase mb-1">Email ID</span>
                    <div className="border border-[#D9E0E6] rounded-xl p-3 bg-[#F7F8FA] font-bold text-slate-800">
                      {currentUser?.email || 'aarav.sharma@example.com'}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#52606D] font-bold block text-[10px] uppercase mb-1">Mobile Number</span>
                    <div className="border border-[#D9E0E6] rounded-xl p-3 bg-[#F7F8FA] font-bold text-slate-800">
                      {currentUser?.mobile || '+91 90000 00000'}
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-[#52606D] font-bold block text-[10px] uppercase mb-1">Registered Address</span>
                  <div className="border border-[#D9E0E6] rounded-xl p-3 bg-[#F7F8FA] font-bold text-slate-800">
                    {currentUser?.location || 'C-42, Malviya Nagar, Jaipur, Rajasthan - 302017'}
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
                <h2 className="text-sm font-black text-[#17212B] border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[#123B5D]" />
                  Notification Preferences
                </h2>

                <div className="space-y-3">
                  {[
                    { label: 'CPIO Response & Disclosure Letters', desc: 'Email alerts when official response documents are uploaded', state: notifyReplies, set: setNotifyReplies },
                    { label: '30-Day Statutory Deadline Warnings', desc: 'Alerts at 7 days and 2 days before deemed refusal triggers', state: notifyDeadlines, set: setNotifyDeadlines },
                    { label: 'Application Status Updates', desc: 'Dispatches registration numbers and fee receipts', state: notifyAppUpdates, set: setNotifyAppUpdates },
                    { label: 'SMS Alerts to Mobile', desc: 'Direct text alerts on case progression', state: notifySms, set: setNotifySms }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50">
                      <div>
                        <div className="text-xs font-bold text-slate-800">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                      <input 
                        type="checkbox"
                        checked={item.state}
                        onChange={(e) => item.set(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-[#123B5D] cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Accessibility Controls */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
                <h2 className="text-sm font-black text-[#17212B] border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2">
                  <Settings className="h-4 w-4 text-slate-500" />
                  Accessibility & Display
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Language</span>
                    <button
                      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                      className="px-3 py-1.5 rounded-lg border border-[#D9E0E6] bg-[#F7F8FA] font-bold hover:bg-slate-100 cursor-pointer"
                    >
                      {language === 'en' ? 'English (EN)' : 'हिंदी (HI)'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Text Scaling</span>
                    <button
                      onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
                      className="px-3 py-1.5 rounded-lg border border-[#D9E0E6] bg-[#F7F8FA] font-bold hover:bg-slate-100 cursor-pointer"
                    >
                      {textSize === 'normal' ? 'Normal (100%)' : 'Large (120%)'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Data Saver</span>
                    <button
                      onClick={() => setLowBandwidth(!lowBandwidth)}
                      className={`px-3 py-1.5 rounded-lg border font-bold cursor-pointer ${
                        lowBandwidth ? 'bg-[#123B5D] text-white border-[#123B5D]' : 'bg-[#F7F8FA] border-[#D9E0E6]'
                      }`}
                    >
                      {lowBandwidth ? 'Active' : 'Off'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DOCUMENT VAULT */}
        {activeTab === 'vault' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-black text-[#17212B]">
                Stored Case Documents ({documents.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div key={doc.id} className="rounded-2xl border border-[#D9E0E6] bg-white p-5 shadow-3xs flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-[#123B5D] px-2 py-0.5 rounded-md">
                        {doc.type}
                      </span>
                      <span className="text-[11px] text-slate-400">{doc.date}</span>
                    </div>
                    <h3 className="font-extrabold text-sm text-[#17212B]">{doc.title}</h3>
                    <p className="text-xs font-mono text-slate-500">{doc.fileName} • {doc.fileSize}</p>
                    <p className="text-[11px] text-slate-600">Case Ref: <strong>{doc.rtiRegNo}</strong></p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setViewingDoc(doc)}
                      className="flex-1 rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2 text-xs font-bold shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" /> Preview Document
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

        {/* TAB 3: AUDIT TRAIL */}
        {activeTab === 'audit' && (
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
            <h2 className="text-sm font-black text-[#17212B] uppercase tracking-wider">
              System Audit Logs & Security History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D9E0E6] text-slate-400 font-bold uppercase text-[10px]">
                    <th className="pb-2">Event Action</th>
                    <th className="pb-2">Details</th>
                    <th className="pb-2">Timestamp</th>
                    <th className="pb-2">IP Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {auditLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2.5 font-mono font-bold text-[#123B5D]">{log.action}</td>
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
              <div>
                <h3 className="font-extrabold text-sm text-slate-900">{viewingDoc.title}</h3>
                <p className="text-[11px] text-slate-500">{viewingDoc.fileName}</p>
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

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mx-auto">
              <RotateCcw className="h-6 w-6" />
            </div>
            
            <h3 className="text-lg font-black text-slate-900">Reset Application Seed Data?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This will restore all RTIs, notifications, and application statuses back to the default seed state.
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
                  if (onResetData) onResetData();
                }}
                className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5 text-xs font-bold shadow-3xs cursor-pointer"
              >
                Reset Data Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
