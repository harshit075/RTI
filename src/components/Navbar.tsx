'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  FileText, Bell, Globe, User, Shield, Sliders, Menu, X, 
  ChevronDown, LogOut, CheckCircle2, BookmarkCheck, Sparkles, 
  Eye, HelpCircle, BookOpen, Search, Landmark, Scale, AlertTriangle
} from 'lucide-react';
import { User as UserModel, NotificationItem } from '../services/types';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  textSize: 'normal' | 'large';
  setTextSize: (val: 'normal' | 'large') => void;
  lowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
  highContrast?: boolean;
  setHighContrast?: (val: boolean) => void;
  reducedMotion?: boolean;
  setReducedMotion?: (val: boolean) => void;
  notifications: NotificationItem[];
  markNotificationsRead: () => void;
  currentUser?: UserModel;
  onLogout?: () => void;
  setHelpCategory?: (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => void;
}

export default function Navbar({
  activeView,
  setActiveView,
  language,
  setLanguage,
  textSize,
  setTextSize,
  lowBandwidth,
  setLowBandwidth,
  highContrast = false,
  setHighContrast,
  reducedMotion = false,
  setReducedMotion,
  notifications,
  markNotificationsRead,
  currentUser,
  onLogout,
  setHelpCategory
}: NavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLearnMenu, setShowLearnMenu] = useState(false);

  const learnMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const accessibilityMenuRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (learnMenuRef.current && !learnMenuRef.current.contains(event.target as Node)) {
        setShowLearnMenu(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (accessibilityMenuRef.current && !accessibilityMenuRef.current.contains(event.target as Node)) {
        setShowAccessibilityMenu(false);
      }
      if (notificationsMenuRef.current && !notificationsMenuRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Right to Information Act, 2005',
      fileRti: 'File an RTI',
      trackApp: 'Track Application',
      findAuth: 'Find Authority',
      firstAppeal: 'First Appeal',
      learn: 'Learn',
      govPortal: 'Gov Portal',
      screenReader: 'Screen Reader Access',
      brandBadge: 'DEMO PURPOSE',
      signIn: 'Login / Sign up',
      accessibility: 'Accessibility Options',
      notificationsTitle: 'Notifications',
      noNotifications: 'No unread notifications'
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'सूचना का अधिकार अधिनियम, 2005',
      fileRti: 'आरटीआई दाखिल करें',
      trackApp: 'आवेदन ट्रैक करें',
      findAuth: 'विभाग खोजें',
      firstAppeal: 'प्रथम अपील',
      learn: 'जानकारी',
      govPortal: 'गवर्नमेंट पोर्टल',
      screenReader: 'स्क्रीन रीडर एक्सेस',
      brandBadge: 'डेमो उद्देश्य',
      signIn: 'लॉगिन / साइन अप',
      accessibility: 'अभिगम्यता विकल्प',
      notificationsTitle: 'सूचनाएं',
      noNotifications: 'कोई नई सूचना नहीं'
    }
  }[language];

  const handleLearnItemClick = (category: 'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions') => {
    if (setHelpCategory) {
      setHelpCategory(category);
    }
    setActiveView('help');
    setShowLearnMenu(false);
    setShowMobileMenu(false);
  };

  return (
    <div className="w-full flex flex-col z-50 bg-white">
      {/* 1. Top Accessibility Dark Bar */}
      <div className="w-full bg-[#172B5B] text-white py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#0f1d3e] text-[11px] font-medium hidden md:block">
        <div className="mx-auto max-w-[1360px] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>{language === 'en' ? 'Citizen Right to Information Gateway' : 'नागरिक सूचना का अधिकार प्रवेशद्वार'}</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => {
                // Focus main element for screen reader accessibility
                const mainEl = document.querySelector('main');
                if (mainEl) mainEl.focus();
              }}
              className="hover:underline text-slate-350 cursor-pointer flex items-center gap-1"
            >
              <Eye className="h-3 w-3" />
              <span>{t.screenReader}</span>
            </button>
            <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
              <button 
                onClick={() => setTextSize('large')} 
                className={`hover:text-amber-400 px-1 font-bold ${textSize === 'large' ? 'text-amber-400' : 'text-slate-300'}`}
                title="Increase Text Size"
              >
                A+
              </button>
              <button 
                onClick={() => setTextSize('normal')} 
                className={`hover:text-amber-400 px-1 font-bold ${textSize === 'normal' ? 'text-amber-400' : 'text-slate-300'}`}
                title="Normal Text Size"
              >
                A
              </button>
              <button 
                onClick={() => setTextSize('normal')} 
                className="hover:text-amber-400 px-1 font-bold text-slate-400"
                title="Decrease Text Size"
              >
                A-
              </button>
            </div>
            <div className="flex items-center gap-1 border-l border-slate-700 pl-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="hover:text-amber-400 cursor-pointer flex items-center gap-1 text-slate-300 font-semibold"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky White Navbar */}
      <header className="sticky top-0 w-full bg-white border-b border-[#E2E8F0] shadow-xs h-[72px] flex items-center z-45">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left: Brand Logo & Title */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            onClick={() => {
              setActiveView('landing');
              setShowMobileMenu(false);
            }}
          >
            <div className="flex h-11 w-10 items-center justify-center rounded-lg bg-[#F8FAFC] p-1 border border-slate-200 transition-all duration-200 group-hover:scale-102">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="State Emblem of India" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-[#172B5B] group-hover:text-blue-600 transition-colors leading-none">
                  {t.brand}
                </span>
                <span className="inline-flex items-center text-[8px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded leading-none shrink-0">
                  {t.brandBadge}
                </span>
              </div>
              <p className="text-[10px] text-slate-450 mt-1 font-medium leading-none">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Center: Redesigned Nav Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveView('onboarding')}
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeView === 'onboarding' || activeView === 'builder'
                  ? 'bg-[#EFF6FF] text-[#2563EB]' 
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              {t.fileRti}
            </button>

            <button
              onClick={() => setActiveView('status-lookup')}
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                ['status-lookup', 'history-lookup'].includes(activeView)
                  ? 'bg-[#EFF6FF] text-[#2563EB]' 
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              {t.trackApp}
            </button>

            <button
              onClick={() => setActiveView('authorities')}
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeView === 'authorities'
                  ? 'bg-[#EFF6FF] text-[#2563EB]' 
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              {t.findAuth}
            </button>

            <button
              onClick={() => setActiveView('appeal-lookup')}
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeView === 'appeal-lookup'
                  ? 'bg-[#EFF6FF] text-[#2563EB]' 
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              {t.firstAppeal}
            </button>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnMenuRef}>
              <button
                onClick={() => setShowLearnMenu(!showLearnMenu)}
                className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  activeView === 'help'
                    ? 'bg-[#EFF6FF] text-[#2563EB]' 
                    : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <span>{t.learn}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${showLearnMenu ? 'rotate-180' : ''}`} />
              </button>

              {showLearnMenu && (
                <div className="absolute left-0 mt-2.5 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg ring-1 ring-black/5 z-55 animate-in fade-in slide-in-from-top-1">
                  <button
                    onClick={() => handleLearnItemClick('Basics')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>{language === 'en' ? 'RTI Act Basics' : 'आरटीआई कानून मूल बातें'}</span>
                  </button>
                  <button
                    onClick={() => handleLearnItemClick('Exemptions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Shield className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{language === 'en' ? 'Exempted Items (Sec 8)' : 'छूट प्राप्त वस्तुएं (धारा 8)'}</span>
                  </button>
                  <button
                    onClick={() => handleLearnItemClick('Fees')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>{language === 'en' ? 'Fee Schedule & Waiver' : 'शुल्क अनुसूची व छूट'}</span>
                  </button>
                  <button
                    onClick={() => handleLearnItemClick('Appeals')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Scale className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>{language === 'en' ? 'Appeals Process (FAA & CIC)' : 'अपील प्रक्रिया (FAA व CIC)'}</span>
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={() => handleLearnItemClick('All')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50/40 text-xs font-extrabold text-blue-600 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{language === 'en' ? 'Browse All Guides' : 'सभी गाइड्स देखें'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Gov Portal Button */}
            <button
              onClick={() => setActiveView('government')}
              className={`rounded-lg px-3 py-2 text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1 border border-transparent ${
                activeView === 'government'
                  ? 'bg-rose-600 text-white shadow-xs' 
                  : 'text-rose-600 bg-rose-50 hover:bg-rose-100/70'
              }`}
              title="Switch to Government/CPIO Admin Portal"
            >
              <Landmark className="h-3.5 w-3.5 shrink-0" />
              <span>{t.govPortal}</span>
            </button>
          </nav>

          {/* Right Side Tools */}
          <div className="flex items-center gap-2.5">
            
            {/* Lang toggle (visible on mobile only) */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="md:hidden flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Language"
            >
              <Globe className="h-3 w-3 text-[#123B5D]" />
              <span>{language === 'en' ? 'HI' : 'EN'}</span>
            </button>

            {/* Accessibility Settings Popover */}
            <div className="relative" ref={accessibilityMenuRef}>
              <button
                onClick={() => {
                  setShowAccessibilityMenu(!showAccessibilityMenu);
                  setShowNotifications(false);
                  setShowUserMenu(false);
                }}
                className={`rounded-lg p-2 text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer border ${
                  showAccessibilityMenu ? 'border-[#E2E8F0] bg-slate-50 text-[#0F172A]' : 'border-transparent'
                }`}
                title={t.accessibility}
                aria-label={t.accessibility}
              >
                <Sliders className="h-4.5 w-4.5" />
              </button>

              {showAccessibilityMenu && (
                <div className="absolute right-0 mt-2.5 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-lg ring-1 ring-black/5 z-55 animate-in fade-in slide-in-from-top-1">
                  <div className="border-b border-slate-100 pb-2 mb-3">
                    <h3 className="font-extrabold text-xs text-[#172B5B] uppercase tracking-wider">
                      {t.accessibility}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    {/* Text Size */}
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">{language === 'en' ? 'Text Size' : 'टेक्स्ट का आकार'}</span>
                      <button
                        onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
                        className="px-2 py-1 rounded border border-slate-200 bg-slate-50 font-bold hover:bg-slate-100 cursor-pointer"
                      >
                        {textSize === 'large' ? (language === 'en' ? 'Large' : 'बड़ा') : (language === 'en' ? 'Normal' : 'सामान्य')}
                      </button>
                    </div>

                    {/* Low Bandwidth */}
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">{language === 'en' ? 'Low Bandwidth' : 'कम बैंडविड्थ'}</span>
                      <button
                        onClick={() => setLowBandwidth(!lowBandwidth)}
                        className={`px-2 py-1 rounded border font-bold cursor-pointer ${
                          lowBandwidth ? 'bg-[#2563EB] text-white border-blue-600' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        {lowBandwidth ? (language === 'en' ? 'Active' : 'सक्रिय') : (language === 'en' ? 'Off' : 'बंद')}
                      </button>
                    </div>

                    {/* Reconciliation link */}
                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                      <span className="font-semibold text-slate-650">{language === 'en' ? 'Fee Reconciliation' : 'शुल्क मिलान'}</span>
                      <button
                        onClick={() => {
                          setShowAccessibilityMenu(false);
                          setActiveView('reconciliation');
                        }}
                        className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                      >
                        {language === 'en' ? 'Verify payment ➔' : 'भुगतान सत्यापित करें ➔'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notificationsMenuRef}>
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowAccessibilityMenu(false);
                  setShowUserMenu(false);
                  if (!showNotifications) markNotificationsRead();
                }}
                className="relative rounded-lg p-2 text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                aria-label={unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications"}
                title={unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications"}
              >
                <Bell className="h-4.5 w-4.5" />
                {unreadCount > 0 && (
                  <span 
                    className="absolute top-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white ring-2 ring-white"
                  >
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2.5 w-80 rounded-xl border border-slate-200 bg-white p-3 shadow-lg ring-1 ring-black/5 z-55 animate-in fade-in slide-in-from-top-1">
                  <div className="border-b border-slate-100 px-2 py-1.5 flex justify-between items-center mb-1">
                    <h3 className="font-bold text-xs text-[#172B5B] uppercase tracking-wider">
                      {t.notificationsTitle}
                    </h3>
                  </div>

                  <div className="max-h-72 overflow-y-auto py-1 space-y-1">
                    {notifications.length === 0 ? (
                      <div className="py-8 text-center text-xs text-slate-400">{t.noNotifications}</div>
                    ) : (
                      notifications.map(notif => (
                        <div 
                          key={notif.id} 
                          className={`flex flex-col rounded-lg px-2.5 py-2 text-xs transition-colors hover:bg-slate-50 cursor-pointer ${
                            !notif.read ? 'bg-blue-50/30 border-l-2 border-blue-600' : ''
                          }`}
                          onClick={() => {
                            setShowNotifications(false);
                            if (notif.rtiId) {
                              setActiveView('detail');
                            } else {
                              setActiveView('dashboard');
                            }
                          }}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <span className="font-semibold text-slate-800 leading-normal">{notif.title}</span>
                            <span className={`h-1.5 w-1.5 rounded-full shrink-0 mt-1.5 ${
                              notif.type === 'alert' ? 'bg-red-500' :
                              notif.type === 'deadline' ? 'bg-amber-500' :
                              notif.type === 'update' ? 'bg-[#2563EB]' : 'bg-slate-400'
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

            {/* Profile Menu / Sign In */}
            <div className="relative" ref={userMenuRef}>
              {currentUser ? (
                <button
                  onClick={() => {
                    setShowUserMenu(!showUserMenu);
                    setShowNotifications(false);
                    setShowAccessibilityMenu(false);
                  }}
                  className={`flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-bold transition-all border cursor-pointer ${
                    activeView === 'profile' || showUserMenu
                      ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]' 
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="h-6 w-6 rounded-md bg-[#172B5B] text-white flex items-center justify-center text-[10px] font-black">
                    {currentUser.name?.charAt(0) || 'A'}
                  </div>
                  <span className="hidden sm:inline text-xs font-bold max-w-[80px] truncate text-[#0F172A]">
                    {currentUser.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveView('auth')}
                  className="rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white px-4.5 py-2 text-xs font-bold shadow-xs cursor-pointer transition-all"
                >
                  {t.signIn}
                </button>
              )}

              {/* Profile Dropdown */}
              {showUserMenu && currentUser && (
                <div className="absolute right-0 mt-2.5 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg ring-1 ring-black/5 z-55 animate-in fade-in slide-in-from-top-1">
                  <div className="px-2 py-1.5 border-b border-slate-100 mb-1.5">
                    <div className="font-extrabold text-xs text-slate-900">{currentUser.name}</div>
                    <div className="text-[11px] text-slate-500 truncate">{currentUser.email}</div>
                  </div>

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveView('profile');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <User className="h-4 w-4 text-slate-500" />
                    <span>{language === 'en' ? 'My Profile' : 'मेरी प्रोफ़ाइल'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveView('dashboard');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span>{language === 'en' ? 'My Applications' : 'मेरे आवेदन'}</span>
                  </button>

                  <div className="border-t border-slate-100 my-1 pt-1">
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        if (onLogout) onLogout();
                        else setActiveView('auth');
                      }}
                      className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-red-50 text-xs font-bold text-red-650 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4 text-red-500" />
                      <span>{language === 'en' ? 'Sign Out' : 'साइन आउट'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-[#F8FAFC] cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Drawer */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-[72px] left-0 w-full border-t border-[#E2E8F0] bg-white px-4 py-3 space-y-1.5 shadow-md z-40 animate-in slide-in-from-top-2">
            <button 
              onClick={() => {
                setActiveView('onboarding');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
                activeView === 'onboarding' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              {t.fileRti}
            </button>
            <button 
              onClick={() => {
                setActiveView('status-lookup');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
                ['status-lookup', 'history-lookup'].includes(activeView) ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              {t.trackApp}
            </button>
            <button 
              onClick={() => {
                setActiveView('authorities');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
                activeView === 'authorities' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              {t.findAuth}
            </button>
            <button 
              onClick={() => {
                setActiveView('appeal-lookup');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
                activeView === 'appeal-lookup' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              {t.firstAppeal}
            </button>
            <button 
              onClick={() => handleLearnItemClick('All')} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
                activeView === 'help' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              {t.learn}
            </button>
            <button 
              onClick={() => {
                setActiveView('government');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-black text-rose-600 bg-rose-50 ${
                activeView === 'government' ? 'bg-rose-100' : ''
              }`}
            >
              🏛️ {t.govPortal}
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
