'use client';

import React, { useState } from 'react';
import { FileText, Bell, Globe, Sparkles, User, Sun, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  textSize: 'normal' | 'large';
  setTextSize: (val: 'normal' | 'large') => void;
  notifications: Array<{
    id: string;
    title: string;
    time: string;
    type: 'alert' | 'update' | 'deadline' | 'info';
    read: boolean;
  }>;
  markNotificationsRead: () => void;
}

export default function Navbar({
  activeView,
  setActiveView,
  language,
  setLanguage,
  lowBandwidth,
  setLowBandwidth,
  textSize,
  setTextSize,
  notifications,
  markNotificationsRead
}: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Ask the Government. Track the Answer.',
      home: 'Home',
      dashboard: 'My RTIs',
      authorities: 'Explore Authorities',
      help: 'Help Centre',
      lowData: 'Low Data',
      textSize: 'Text Size',
      notificationsTitle: 'Notifications',
      noNotifications: 'No new notifications',
      login: 'Login / Profile',
      demoAlert: 'Concept Prototype - Not Official Gov Portal'
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'सरकार से पूछें। उत्तर ट्रैक करें।',
      home: 'मुख्य पृष्ठ',
      dashboard: 'मेरे आरटीआई',
      authorities: 'विभाग खोजें',
      help: 'सहायता केंद्र',
      lowData: 'लो डेटा',
      textSize: 'टेक्स्ट साइज',
      notificationsTitle: 'सूचनाएं',
      noNotifications: 'कोई नई सूचना नहीं',
      login: 'लॉगिन / प्रोफ़ाइल',
      demoAlert: 'प्रारूप प्रोटोटाइप - आधिकारिक सरकारी पोर्टल नहीं है'
    }
  }[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-900/95 dark:border-slate-800">
      {/* Top Banner indicating prototype */}
      <div className="bg-primary-navy py-1 px-4 text-center text-xs font-medium text-white flex items-center justify-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-secondary-gold" />
        <span>{t.demoAlert}</span>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => setActiveView('landing')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-navy text-white transition-transform group-hover:scale-105">
            <FileText className="h-5.5 w-5.5 text-secondary-gold" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-primary-navy flex items-center gap-1">
              {t.brand}
              <span className="inline-flex items-center rounded-full bg-secondary-saffron/10 px-1.5 py-0.5 text-[10px] font-semibold text-secondary-saffron">
                Concept
              </span>
            </h1>
            <p className="text-[10px] text-slate-500 font-medium">{t.tagline}</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1.5">
          <button
            onClick={() => setActiveView('landing')}
            className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors focus-ring ${
              activeView === 'landing' 
                ? 'bg-slate-100 text-primary-navy' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.home}
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors focus-ring ${
              activeView === 'dashboard' || activeView === 'detail' || activeView === 'appeal'
                ? 'bg-slate-100 text-primary-navy' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.dashboard}
          </button>
          <button
            onClick={() => setActiveView('authorities')}
            className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors focus-ring ${
              activeView === 'authorities' 
                ? 'bg-slate-100 text-primary-navy' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.authorities}
          </button>
          <button
            onClick={() => setActiveView('help')}
            className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors focus-ring ${
              activeView === 'help' 
                ? 'bg-slate-100 text-primary-navy' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.help}
          </button>
        </nav>

        {/* Accessibility, Localization and User Icons */}
        <div className="flex items-center gap-3">
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors focus-ring"
            aria-label="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5 text-primary-blue" />
            <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* Text Size Accessibility Toggle */}
          <button
            onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
            className={`rounded-full border px-2.5 py-1 text-xs font-bold transition-colors focus-ring ${
              textSize === 'large' 
                ? 'bg-primary-blue text-white border-primary-blue' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title={t.textSize}
          >
            A<span className="text-[10px] font-extrabold">+</span>
          </button>

          {/* Low Bandwidth Toggle */}
          <button
            onClick={() => setLowBandwidth(!lowBandwidth)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus-ring ${
              lowBandwidth 
                ? 'bg-blue-600 text-white border-blue-600 font-extrabold' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Optimizes site by removing animation, shadows and graphics"
          >
            ⚡ {t.lowData}: {lowBandwidth ? 'ON' : 'OFF'}
          </button>

          {/* Notifications Bell Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (!showNotifications) markNotificationsRead();
              }}
              className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors focus-ring"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-secondary-saffron text-[9px] font-extrabold text-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 px-3 py-2 flex justify-between items-center">
                  <h3 className="font-bold text-sm text-primary-navy">{t.notificationsTitle}</h3>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-secondary-saffron/10 text-secondary-saffron font-bold px-2 py-0.5 rounded-full">
                      {unreadCount} New
                    </span>
                  )}
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {notifications.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400">{t.noNotifications}</div>
                  ) : (
                    notifications.map(notif => (
                      <div 
                        key={notif.id} 
                        className={`flex flex-col rounded-lg px-3 py-2 text-xs transition-colors hover:bg-slate-50 cursor-pointer ${
                          !notif.read ? 'bg-slate-50/50 border-l-2 border-secondary-saffron' : ''
                        }`}
                        onClick={() => {
                          setShowNotifications(false);
                          setActiveView('dashboard');
                        }}
                      >
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-semibold text-slate-800 leading-normal">{notif.title}</span>
                          <span className={`h-2 w-2 rounded-full shrink-0 mt-1 ${
                            notif.type === 'alert' ? 'bg-red-500' :
                            notif.type === 'deadline' ? 'bg-amber-500' :
                            notif.type === 'update' ? 'bg-primary-blue' : 'bg-slate-400'
                          }`} />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1">{notif.time}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Profile Button */}
          <button
            onClick={() => setActiveView('profile')}
            className={`rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors focus-ring border ${
              activeView === 'profile' ? 'border-primary-blue bg-slate-50' : 'border-transparent'
            }`}
            title={t.login}
          >
            <User className="h-5 w-5 text-primary-navy" />
          </button>
        </div>
      </div>
      
      {/* Mobile nav indicator bar */}
      <div className="md:hidden flex border-t border-slate-100 bg-slate-50 divide-x divide-slate-200">
        <button 
          onClick={() => setActiveView('landing')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'landing' ? 'text-primary-navy font-bold bg-white' : 'text-slate-500'}`}
        >
          {t.home}
        </button>
        <button 
          onClick={() => setActiveView('dashboard')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'dashboard' || activeView === 'detail' || activeView === 'appeal' ? 'text-primary-navy font-bold bg-white' : 'text-slate-500'}`}
        >
          {t.dashboard}
        </button>
        <button 
          onClick={() => setActiveView('authorities')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'authorities' ? 'text-primary-navy font-bold bg-white' : 'text-slate-500'}`}
        >
          {t.authorities}
        </button>
        <button 
          onClick={() => setActiveView('help')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'help' ? 'text-primary-navy font-bold bg-white' : 'text-slate-500'}`}
        >
          {t.help}
        </button>
      </div>
    </header>
  );
}
