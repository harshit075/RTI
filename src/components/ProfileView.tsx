'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Phone, Shield, Bell, Smartphone, Key, Settings, 
  ToggleLeft, ClipboardList, Info, CircleDot, Sun, Moon
} from 'lucide-react';

interface ProfileViewProps {
  language: 'en' | 'hi';
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  textSize: 'normal' | 'large';
  setTextSize: (val: 'normal' | 'large') => void;
  setLanguage: (lang: 'en' | 'hi') => void;
  theme: 'light' | 'dark';
  toggleTheme: (theme: 'light' | 'dark') => void;
}

export default function ProfileView({
  language,
  lowBandwidth,
  setLowBandwidth,
  textSize,
  setTextSize,
  setLanguage,
  theme,
  toggleTheme
}: ProfileViewProps) {
  const [notifyAppUpdates, setNotifyAppUpdates] = useState(true);
  const [notifyReplies, setNotifyReplies] = useState(true);
  const [notifyDeadlines, setNotifyDeadlines] = useState(true);
  const [notifySms, setNotifySms] = useState(false);

  // Fictional Audit Logs (Section 20)
  const auditLogs = [
    { action: 'LOGIN_SUCCESS', details: 'User logged in successfully via Secure OTP', time: '2026-08-25 09:27:01', ip: '192.168.1.45' },
    { action: 'DOCUMENT_VIEWED', details: 'Viewed CPIO_Official_Response.pdf for RTI #2026/98765', time: '2026-08-25 09:14:22', ip: '192.168.1.45' },
    { action: 'PAYMENT_VERIFIED', details: 'NIC Payment reconciliation for MORLY/R/2026/05931 success', time: '2026-08-10 11:42:09', ip: '192.168.1.99' },
    { action: 'APPLICATION_SUBMITTED', details: 'Filed new application to CPV Passport Division', time: '2026-08-01 14:29:40', ip: '192.168.1.45' }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">Profile & Settings</h2>
          <p className="text-xs text-slate-500 mt-1">Manage personal details, accessibility settings, and view account audit security logs.</p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Personal and Notifications */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Details */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-4 dark:text-white flex items-center gap-1.5">
                <User className="h-5 w-5 text-secondary-saffron" />
                Personal Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-400 font-bold block text-[9.5px] uppercase mb-1">Full Name</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-2.5 bg-slate-50 font-semibold text-slate-700">
                      <User className="h-4 w-4 text-slate-450" />
                      Harshit Sharma
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[9.5px] uppercase mb-1">Identity Verification Status</span>
                    <div className="flex items-center gap-2 border border-emerald-250 bg-emerald-50 text-emerald-800 rounded-xl p-2.5 font-bold">
                      <Shield className="h-4 w-4 text-emerald-600" />
                      Verified (Aadhaar / Voter ID)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-400 font-bold block text-[9.5px] uppercase mb-1">Email ID</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-2.5 bg-slate-50 font-semibold text-slate-700">
                      <Mail className="h-4 w-4 text-slate-450" />
                      harshit.sharma@example.com
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[9.5px] uppercase mb-1">Mobile Number</span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-xl p-2.5 bg-slate-50 font-semibold text-slate-700">
                      <Phone className="h-4 w-4 text-slate-450" />
                      +91 98765 43210
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Preferences (Section 26) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-4 dark:text-white flex items-center gap-1.5">
                <Bell className="h-5 w-5 text-secondary-saffron" />
                Notification Preferences
              </h3>

              <div className="space-y-4 text-xs">
                
                {/* Email notify updates */}
                <label className="flex items-start justify-between cursor-pointer">
                  <div className="pr-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">RTI Application updates</span>
                    <span className="text-[10px] text-slate-400 leading-snug">Notify email when status changes from registered to processing.</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifyAppUpdates}
                    onChange={(e) => setNotifyAppUpdates(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-primary-blue focus:ring-primary-blue"
                  />
                </label>

                {/* Email notify replies */}
                <label className="flex items-start justify-between cursor-pointer border-t border-slate-100 pt-3">
                  <div className="pr-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">CPIO Official Responses</span>
                    <span className="text-[10px] text-slate-400 leading-snug">Alert immediately when responses or appeals decisions are uploaded.</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifyReplies}
                    onChange={(e) => setNotifyReplies(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-primary-blue focus:ring-primary-blue"
                  />
                </label>

                {/* Email notify deadlines */}
                <label className="flex items-start justify-between cursor-pointer border-t border-slate-100 pt-3">
                  <div className="pr-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">Deadline Countdown Reminders</span>
                    <span className="text-[10px] text-slate-400 leading-snug">Send emails 7 days, 3 days, and 24 hours before statutory limits expire.</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifyDeadlines}
                    onChange={(e) => setNotifyDeadlines(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-primary-blue focus:ring-primary-blue"
                  />
                </label>

                {/* SMS alerts */}
                <label className="flex items-start justify-between cursor-pointer border-t border-slate-100 pt-3">
                  <div className="pr-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">SMS Notification Alerts</span>
                    <span className="text-[10px] text-slate-400 leading-snug">Enable SMS alerts for critical deadline changes. (Sensitive documents are never sent on SMS).</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifySms}
                    onChange={(e) => setNotifySms(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-primary-blue focus:ring-primary-blue"
                  />
                </label>

              </div>
            </div>

          </div>

          {/* Right Column: Accessibility & Audit Security */}
          <div className="space-y-6">
            
            {/* Accessibility Settings (Section 35) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-850">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-3 dark:text-white flex items-center gap-1.5">
                <Settings className="h-5 w-5 text-secondary-saffron" />
                System Accessibility
              </h3>

              <div className="space-y-4 text-xs">
                
                {/* Language Select */}
                <div>
                  <span className="text-slate-450 font-bold block text-[9.5px] uppercase mb-1">Language Selection</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer ${
                        language === 'en' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage('hi')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer ${
                        language === 'hi' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                      }`}
                    >
                      हिंदी (Hindi)
                    </button>
                  </div>
                </div>

                {/* Text Size Scale */}
                <div>
                  <span className="text-slate-450 font-bold block text-[9.5px] uppercase mb-1">Text Scaling (WCAG AA)</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTextSize('normal')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer ${
                        textSize === 'normal' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                      }`}
                    >
                      A Normal
                    </button>
                    <button
                      onClick={() => setTextSize('large')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer ${
                        textSize === 'large' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                      }`}
                    >
                      A+ Large Text
                    </button>
                  </div>
                </div>

                {/* Theme Selection */}
                <div>
                  <span className="text-slate-450 font-bold block text-[9.5px] uppercase mb-1">Theme / Appearance</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTheme('light')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                        theme === 'light' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue font-extrabold' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50 dark:border-slate-800'
                      }`}
                    >
                      <Sun className="h-3.5 w-3.5" />
                      Light Theme
                    </button>
                    <button
                      onClick={() => toggleTheme('dark')}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                        theme === 'dark' 
                          ? 'border-primary-blue bg-blue-50 text-primary-blue font-extrabold' 
                          : 'border-slate-200 text-slate-650 hover:bg-slate-50 dark:border-slate-800'
                      }`}
                    >
                      <Moon className="h-3.5 w-3.5" />
                      Dark Theme
                    </button>
                  </div>
                </div>

                {/* Low Bandwidth */}
                <div className="border-t border-slate-100 pt-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">Low Data / Bandwidth Mode</span>
                      <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Disables non-essential scripts, animations and icons.</span>
                    </div>
                    <button
                      onClick={() => setLowBandwidth(!lowBandwidth)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                        lowBandwidth ? 'bg-blue-600' : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          lowBandwidth ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Audit Logs (Section 20) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-850">
              <h3 className="font-extrabold text-sm text-primary-navy border-b border-slate-100 pb-3 mb-3 dark:text-white flex items-center gap-1.5">
                <ClipboardList className="h-5 w-5 text-secondary-saffron" />
                Security Audit Log
              </h3>

              <div className="space-y-3">
                {auditLogs.map((log, idx) => (
                  <div key={idx} className="border border-slate-150 rounded-lg p-2.5 bg-slate-50/50 text-[10px] leading-snug">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <CircleDot className="h-2 w-2 text-primary-blue shrink-0" />
                        {log.action}
                      </span>
                      <span className="text-slate-450 font-semibold">{log.time}</span>
                    </div>
                    <p className="text-slate-500 font-medium">{log.details}</p>
                    <span className="text-[9px] text-slate-400 block mt-1">IP: {log.ip}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
