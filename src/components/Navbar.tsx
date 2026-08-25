'use client';

import React, { useState } from 'react';
import { 
  FileText, Bell, Globe, Sparkles, User, Sun, Moon, ShieldCheck, 
  ChevronDown, RotateCcw, Compass, LogOut, CheckCircle2, Play, ExternalLink 
} from 'lucide-react';
import { defaultDemoUser, DemoUser } from '../data/mockData';

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
  currentUser?: DemoUser;
  onOpenTour?: () => void;
  onSelectScenario?: (scenario: string) => void;
  onResetDemo?: () => void;
  onLogout?: () => void;
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
  markNotificationsRead,
  currentUser = defaultDemoUser,
  onOpenTour,
  onSelectScenario,
  onResetDemo,
  onLogout
}: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDemoMenu, setShowDemoMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Ask the Government. Track the Answer.',
      fileRti: 'File RTI',
      dashboard: 'My RTIs',
      authorities: 'Find Authority',
      help: 'Help',
      lowData: 'Low Data',
      textSize: 'Text Size',
      notificationsTitle: 'Notifications',
      noNotifications: 'No new notifications',
      demoAlert: 'RTI Saathi — Concept Prototype · Demo Environment'
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'सरकार से पूछें। उत्तर ट्रैक करें।',
      fileRti: 'आरटीआई दाखिल करें',
      dashboard: 'मेरे आरटीआई',
      authorities: 'विभाग खोजें',
      help: 'सहायता',
      lowData: 'लो डेटा',
      textSize: 'टेक्स्ट साइज',
      notificationsTitle: 'सूचनाएं',
      noNotifications: 'कोई नई सूचना नहीं',
      demoAlert: 'आरटीआई साथी — प्रारूप प्रोटोटाइप · डेमो वातावरण'
    }
  }[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-900/95 dark:border-slate-800">
      
      {/* Top Banner indicating prototype */}
      <div className="bg-[#0A2540] py-1 px-4 text-center text-xs font-medium text-white flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-tight">{t.demoAlert}</span>
        </div>

        {/* Quick Demo Tour Action on Header */}
        {onOpenTour && (
          <button
            onClick={onOpenTour}
            className="hidden sm:inline-flex items-center gap-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/40 cursor-pointer transition-all"
          >
            <Play className="h-2.5 w-2.5 fill-amber-300" />
            Product Tour
          </button>
        )}
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Demo Mode Badge */}
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => setActiveView('landing')}
          >
            <div className="flex h-11 w-10 items-center justify-center rounded-lg bg-white p-0.5 shadow-xs border border-slate-200 transition-transform group-hover:scale-105 shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="State Emblem of India" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-primary-navy flex items-center gap-1.5">
                {t.brand}
                <span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-400/30 px-2 py-0.5 text-[9.5px] font-bold text-amber-800">
                  Concept
                </span>
              </h1>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">{t.tagline}</p>
            </div>
          </div>

          {/* Interactive DEMO MODE Badge */}
          <div className="relative">
            <button
              onClick={() => setShowDemoMenu(!showDemoMenu)}
              className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100/80 border border-amber-300 text-amber-900 text-[10.5px] font-extrabold px-2.5 py-1 rounded-full cursor-pointer transition-all shadow-2xs"
            >
              <Sparkles className="h-3 w-3 text-amber-600" />
              <span>DEMO MODE</span>
              <ChevronDown className="h-3 w-3 text-amber-700" />
            </button>

            {/* Demo Mode Dropdown Popover */}
            {showDemoMenu && (
              <div className="absolute left-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase bg-amber-600 text-white px-2 py-0.5 rounded-md">
                      Demo Environment
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    You're exploring fictional data created for this demonstration. No real personal information is used.
                  </p>
                </div>

                {/* Quick Demo Scenarios Menu */}
                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1.5">
                    Demo Scenarios:
                  </span>
                  
                  {[
                    { label: '1. File a new RTI (AI Drafting)', action: 'onboarding' },
                    { label: '2. Review Received Response (Ward 42)', action: 'rti-road-jaipur-1245' },
                    { label: '3. Track Pending RTI (30-day countdown)', action: 'rti-school-1312' },
                    { label: '4. File First Appeal (Hospital Equip)', action: 'rti-hospital-1355' },
                    { label: '5. Explore Authority Finder (770+ Dists)', action: 'authorities' }
                  ].map((sc, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowDemoMenu(false);
                        if (onSelectScenario) onSelectScenario(sc.action);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-blue-50 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{sc.label}</span>
                      <ChevronDown className="h-3 w-3 text-slate-400 -rotate-90" />
                    </button>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
                  {onOpenTour && (
                    <button
                      onClick={() => {
                        setShowDemoMenu(false);
                        onOpenTour();
                      }}
                      className="text-xs font-bold text-primary-navy hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Play className="h-3 w-3" /> Take Tour
                    </button>
                  )}
                  {onResetDemo && (
                    <button
                      onClick={() => {
                        setShowDemoMenu(false);
                        onResetDemo();
                      }}
                      className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="h-3 w-3" /> Reset Demo
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Primary Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setActiveView('onboarding')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus-ring cursor-pointer ${
              activeView === 'onboarding' || activeView === 'builder'
                ? 'bg-slate-100 text-primary-navy font-black shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.fileRti}
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus-ring cursor-pointer ${
              activeView === 'dashboard' || activeView === 'detail' || activeView === 'appeal'
                ? 'bg-slate-100 text-primary-navy font-black shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.dashboard}
          </button>
          <button
            onClick={() => setActiveView('authorities')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus-ring cursor-pointer ${
              activeView === 'authorities' 
                ? 'bg-slate-100 text-primary-navy font-black shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.authorities}
          </button>
          <button
            onClick={() => setActiveView('help')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus-ring cursor-pointer ${
              activeView === 'help' 
                ? 'bg-slate-100 text-primary-navy font-black shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {t.help}
          </button>
          <button
            onClick={() => setActiveView('reconciliation')}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all focus-ring cursor-pointer ${
              activeView === 'reconciliation'
                ? 'bg-slate-100 text-primary-navy font-black shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary-navy'
            }`}
          >
            {language === 'en' ? 'Reconcile' : 'भुगतान मिलान'}
          </button>
        </nav>

        {/* Accessibility, Localization and User Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors focus-ring cursor-pointer"
            aria-label="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5 text-primary-navy" />
            <span>
              <span className="sm:hidden">{language === 'en' ? 'हि' : 'EN'}</span>
              <span className="hidden sm:inline">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </span>
          </button>

          {/* Text Size Accessibility Toggle */}
          <button
            onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
            className={`rounded-full border px-2 sm:px-2.5 py-1 text-xs font-bold transition-colors focus-ring cursor-pointer ${
              textSize === 'large' 
                ? 'bg-primary-navy text-white border-primary-navy' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title={t.textSize}
          >
            A<span className="text-[10px] font-extrabold">+</span>
          </button>

          {/* Low Bandwidth Toggle */}
          <button
            onClick={() => setLowBandwidth(!lowBandwidth)}
            className={`rounded-full border px-2 sm:px-2.5 py-1 text-xs font-semibold transition-colors focus-ring cursor-pointer hidden md:inline-flex ${
              lowBandwidth 
                ? 'bg-blue-700 text-white border-blue-700 font-extrabold' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Optimizes site by removing animation, shadows and graphics"
          >
            {t.lowData}: {lowBandwidth ? 'ON' : 'OFF'}
          </button>

          {/* Notifications Bell Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (!showNotifications) markNotificationsRead();
              }}
              className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors focus-ring cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="h-4.5 w-4.5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-saffron text-[9px] font-black text-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Menu */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 px-3 py-2 flex justify-between items-center">
                  <h3 className="font-bold text-xs text-primary-navy uppercase tracking-wider">{t.notificationsTitle}</h3>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-secondary-saffron/10 text-secondary-saffron font-bold px-2 py-0.5 rounded-full">
                      {unreadCount} New
                    </span>
                  )}
                </div>
                <div className="max-h-72 overflow-y-auto py-1 space-y-1">
                  {notifications.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400">{t.noNotifications}</div>
                  ) : (
                    notifications.map(notif => (
                      <div 
                        key={notif.id} 
                        className={`flex flex-col rounded-xl px-3 py-2 text-xs transition-colors hover:bg-slate-50 cursor-pointer ${
                          !notif.read ? 'bg-blue-50/40 border-l-3 border-amber-500' : ''
                        }`}
                        onClick={() => {
                          setShowNotifications(false);
                          setActiveView('dashboard');
                        }}
                      >
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-semibold text-slate-800 leading-normal text-[11px]">{notif.title}</span>
                          <span className={`h-2 w-2 rounded-full shrink-0 mt-1 ${
                            notif.type === 'alert' ? 'bg-red-500' :
                            notif.type === 'deadline' ? 'bg-amber-500' :
                            notif.type === 'update' ? 'bg-blue-600' : 'bg-slate-400'
                          }`} />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 font-medium">{notif.time}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Profile / Auth Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={`flex items-center gap-1.5 rounded-full pl-2 pr-2.5 py-1 text-xs font-bold transition-all focus-ring border cursor-pointer ${
                activeView === 'profile' || showUserMenu
                  ? 'border-primary-navy bg-slate-100 text-primary-navy' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="h-6 w-6 rounded-full bg-primary-navy text-white flex items-center justify-center text-[11px] font-black">
                {currentUser?.name?.charAt(0) || 'A'}
              </div>
              <span className="hidden sm:inline text-xs font-extrabold max-w-[110px] truncate">
                {currentUser?.name || 'Aarav'}
              </span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 pb-3 mb-2 px-1">
                  <div className="font-extrabold text-xs text-slate-900">{currentUser?.name || 'Aarav Sharma'}</div>
                  <div className="text-[10.5px] text-slate-500 truncate">{currentUser?.email || 'aarav.sharma.demo@example.com'}</div>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[9.5px] font-black uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Demo Citizen Account
                  </div>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveView('profile');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <User className="h-4 w-4 text-slate-500" />
                    <span>My Profile & Settings</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveView('dashboard');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span>My RTI Applications</span>
                  </button>

                  {onOpenTour && (
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onOpenTour();
                      }}
                      className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="h-4 w-4 text-amber-600" />
                      <span>Take Product Tour</span>
                    </button>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-2 mt-2">
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      if (onLogout) onLogout();
                      else setActiveView('auth');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-red-50 text-xs font-bold text-red-600 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="h-4 w-4 text-red-500" />
                    <span>Sign Out / Switch Account</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Mobile nav indicator bar */}
      <div className="lg:hidden flex border-t border-slate-100 bg-slate-50 divide-x divide-slate-200">
        <button 
          onClick={() => setActiveView('onboarding')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'onboarding' || activeView === 'builder' ? 'text-primary-navy font-black bg-white' : 'text-slate-500'}`}
        >
          {t.fileRti}
        </button>
        <button 
          onClick={() => setActiveView('dashboard')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'dashboard' || activeView === 'detail' || activeView === 'appeal' ? 'text-primary-navy font-black bg-white' : 'text-slate-500'}`}
        >
          {t.dashboard}
        </button>
        <button 
          onClick={() => setActiveView('authorities')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'authorities' ? 'text-primary-navy font-black bg-white' : 'text-slate-500'}`}
        >
          {t.authorities}
        </button>
        <button 
          onClick={() => setActiveView('reconciliation')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'reconciliation' ? 'text-primary-navy font-black bg-white' : 'text-slate-500'}`}
        >
          {language === 'en' ? 'Reconcile' : 'मिलान'}
        </button>
        <button 
          onClick={() => setActiveView('help')} 
          className={`flex-1 py-2 text-center text-xs font-semibold ${activeView === 'help' ? 'text-primary-navy font-black bg-white' : 'text-slate-500'}`}
        >
          {t.help}
        </button>
      </div>
    </header>
  );
}
