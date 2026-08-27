'use client';

import React, { useState } from 'react';
import { 
  FileText, Bell, Globe, User, Shield, Sliders, Menu, X, 
  ChevronDown, LogOut, CheckCircle2, BookmarkCheck, Sparkles, 
  Eye, HelpCircle, BookOpen, Search 
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
  onLogout
}: NavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const t = {
    en: {
      brand: 'RTI Saathi',
      tagline: 'Citizen Right to Information Gateway',
      fileRti: 'File an RTI',
      dashboard: 'My RTIs',
      authorities: 'Find Authority',
      learn: 'Learn',
      help: 'Help',
      accessibility: 'Accessibility & Preferences',
      notificationsTitle: 'Notifications',
      noNotifications: 'No unread notifications',
      profile: 'My Profile',
      myRtis: 'My Applications',
      security: 'Security & Audit',
      logout: 'Sign Out',
      signIn: 'Sign In'
    },
    hi: {
      brand: 'आरटीआई साथी',
      tagline: 'नागरिक सूचना का अधिकार पोर्टल',
      fileRti: 'आरटीआई दाखिल करें',
      dashboard: 'मेरे आरटीआई',
      authorities: 'विभाग खोजें',
      learn: 'जानकारी',
      help: 'सहायता',
      accessibility: 'अभिगम्यता व सेटिंग्स',
      notificationsTitle: 'सूचनाएं',
      noNotifications: 'कोई नई सूचना नहीं',
      profile: 'मेरी प्रोफ़ाइल',
      myRtis: 'मेरे आवेदन',
      security: 'सुरक्षा व ऑडिट',
      logout: 'लॉग आउट',
      signIn: 'साइन इन'
    }
  }[language];

  return (
    <header className="glass-nav sticky top-0 z-50 w-full transition-all duration-300 shadow-2xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => {
              setActiveView('landing');
              setShowMobileMenu(false);
            }}
          >
            <div className="flex h-11 w-10 items-center justify-center rounded-xl bg-white p-1 border border-slate-200 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-xs shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="State Emblem of India" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-[#0f172a] group-hover:text-[#1e3a8a] transition-colors">
                  {t.brand}
                </h1>
                <span className="inline-flex items-center text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded shadow-3xs animate-pulse-slow">
                  DEMO PURPOSE
                </span>
              </div>
              <p className="text-[10px] text-slate-450 font-medium hidden sm:block leading-none mt-0.5">
                {t.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Primary Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          <button
            onClick={() => setActiveView('onboarding')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer hover-lift ${
              activeView === 'onboarding' || activeView === 'builder'
                ? 'bg-slate-100 text-[#1e3a8a] font-extrabold shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]'
            }`}
          >
            {t.fileRti}
          </button>
          
          
          {currentUser ? (
            <button
              onClick={() => setActiveView('dashboard')}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer hover-lift ${
                activeView === 'dashboard' || activeView === 'detail'
                  ? 'bg-slate-100 text-[#1e3a8a] font-extrabold shadow-sm border border-slate-200/50' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]'
              }`}
            >
              {t.dashboard}
            </button>
          ) : (
            <button
              onClick={() => setActiveView('status-lookup')}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer hover-lift ${
                ['status-lookup', 'appeal-lookup', 'history-lookup'].includes(activeView)
                  ? 'bg-slate-100 text-[#1e3a8a] font-extrabold shadow-sm border border-slate-200/50' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]'
              }`}
            >
              {language === 'en' ? 'Track Status' : 'स्टेटस ट्रैक करें'}
            </button>
          )}

          <button
            onClick={() => setActiveView('authorities')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer hover-lift ${
              activeView === 'authorities' 
                ? 'bg-slate-100 text-[#1e3a8a] font-extrabold shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]'
            }`}
          >
            {t.authorities}
          </button>

          <button
            onClick={() => setActiveView('help')}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer hover-lift ${
              activeView === 'help' 
                ? 'bg-slate-100 text-[#1e3a8a] font-extrabold shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a]'
            }`}
          >
            {t.learn}
          </button>

          <button
            onClick={() => setActiveView('government')}
            className={`rounded-xl px-4 py-2 text-xs font-black transition-all cursor-pointer hover-lift border ${
              activeView === 'government'
                ? 'bg-[#1e3a8a] text-white border-blue-900 shadow-md' 
                : 'text-rose-700 bg-rose-50/50 border-rose-200/30 hover:bg-rose-50 hover:border-rose-200/80 hover:text-rose-800'
            }`}
            title="Switch to Government/CPIO Admin Portal"
          >
            🏛️ Gov Portal
          </button>
        </nav>

        {/* Right Side Utility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Demo Purpose Indicator Pill */}
          <div className="hidden lg:flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-950 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-3xs">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>DEMO PURPOSE</span>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5 text-[#123B5D]" />
            <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* Accessibility & Preferences Popover */}
          <div className="relative">
            <button
              onClick={() => {
                setShowAccessibilityMenu(!showAccessibilityMenu);
                setShowNotifications(false);
                setShowUserMenu(false);
              }}
              className={`rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border ${
                showAccessibilityMenu ? 'border-[#123B5D] bg-slate-100 text-[#123B5D]' : 'border-transparent'
              }`}
              title={t.accessibility}
              aria-label={t.accessibility}
            >
              <Sliders className="h-4.5 w-4.5" />
            </button>

            {showAccessibilityMenu && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h3 className="font-extrabold text-xs text-[#123B5D] uppercase tracking-wider">
                    {t.accessibility}
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Text Size */}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Text Scaling</span>
                    <button
                      onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 font-bold hover:bg-slate-100 cursor-pointer"
                    >
                      {textSize === 'large' ? 'Large (120%)' : 'Normal (100%)'}
                    </button>
                  </div>

                  {/* Low Bandwidth / Data Saver */}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Data Saver Mode</span>
                    <button
                      onClick={() => setLowBandwidth(!lowBandwidth)}
                      className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer ${
                        lowBandwidth ? 'bg-[#123B5D] text-white border-[#123B5D]' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      {lowBandwidth ? 'Active' : 'Off'}
                    </button>
                  </div>

                  {/* Payment Reconcile shortcut */}
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-600">Payment Verification</span>
                    <button
                      onClick={() => {
                        setShowAccessibilityMenu(false);
                        setActiveView('reconciliation');
                      }}
                      className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
                    >
                      Reconcile Fee ➔
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowAccessibilityMenu(false);
                setShowUserMenu(false);
                if (!showNotifications) markNotificationsRead();
              }}
              className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications"}
              title={unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications"}
            >
              <Bell className="h-4.5 w-4.5" />
              {unreadCount > 0 && (
                <span 
                  className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#B7791F] text-[9px] font-black text-white"
                  aria-hidden="true"
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 px-2 py-1.5 flex justify-between items-center">
                  <h3 className="font-bold text-xs text-[#123B5D] uppercase tracking-wider">
                    {t.notificationsTitle}
                  </h3>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-amber-50 text-amber-900 border border-amber-300 font-bold px-2 py-0.5 rounded-full">
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
                          !notif.read ? 'bg-blue-50/40 border-l-3 border-[#123B5D]' : ''
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
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-semibold text-slate-800 leading-normal text-[11px]">{notif.title}</span>
                          <span className={`h-2 w-2 rounded-full shrink-0 mt-1 ${
                            notif.type === 'alert' ? 'bg-red-500' :
                            notif.type === 'deadline' ? 'bg-amber-500' :
                            notif.type === 'update' ? 'bg-[#123B5D]' : 'bg-slate-400'
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

          {/* User Profile Menu */}
          <div className="relative">
            {currentUser ? (
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                  setShowAccessibilityMenu(false);
                }}
                className={`flex items-center gap-1.5 rounded-full pl-2 pr-2.5 py-1 text-xs font-bold transition-all border cursor-pointer ${
                  activeView === 'profile' || showUserMenu
                    ? 'border-[#123B5D] bg-slate-100 text-[#123B5D]' 
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="h-6 w-6 rounded-full bg-[#123B5D] text-white flex items-center justify-center text-[11px] font-black">
                  {currentUser.name?.charAt(0) || 'A'}
                </div>
                <span className="hidden sm:inline text-xs font-extrabold max-w-[100px] truncate">
                  {currentUser.name.split(' ')[0]}
                </span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>
            ) : (
              <button
                onClick={() => setActiveView('auth')}
                className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-3.5 py-1.5 text-xs font-bold shadow-3xs cursor-pointer transition-all"
              >
                {t.signIn}
              </button>
            )}

            {/* Profile Dropdown */}
            {showUserMenu && currentUser && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="border-b border-slate-100 pb-3 mb-2 px-1">
                  <div className="font-extrabold text-xs text-slate-900">{currentUser.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{currentUser.email}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{currentUser.location}</div>
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
                    <span>{t.profile}</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveView('dashboard');
                    }}
                    className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span>{t.myRtis}</span>
                  </button>
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
                    <span>{t.logout}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 animate-in slide-in-from-top-2">
          <button 
            onClick={() => {
              setActiveView('onboarding');
              setShowMobileMenu(false);
            }} 
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
              activeView === 'onboarding' ? 'bg-slate-100 text-[#123B5D]' : 'text-slate-700'
            }`}
          >
            {t.fileRti}
          </button>
          {currentUser ? (
            <button 
              onClick={() => {
                setActiveView('dashboard');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
                activeView === 'dashboard' ? 'bg-slate-100 text-[#123B5D]' : 'text-slate-700'
              }`}
            >
              {t.dashboard}
            </button>
          ) : (
            <button 
              onClick={() => {
                setActiveView('status-lookup');
                setShowMobileMenu(false);
              }} 
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
                ['status-lookup', 'appeal-lookup', 'history-lookup'].includes(activeView) ? 'bg-slate-100 text-[#123B5D]' : 'text-slate-700'
              }`}
            >
              {language === 'en' ? 'Track Status' : 'स्टेटस ट्रैक करें'}
            </button>
          )}
          <button 
            onClick={() => {
              setActiveView('authorities');
              setShowMobileMenu(false);
            }} 
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
              activeView === 'authorities' ? 'bg-slate-100 text-[#123B5D]' : 'text-slate-700'
            }`}
          >
            {t.authorities}
          </button>
          <button 
            onClick={() => {
              setActiveView('help');
              setShowMobileMenu(false);
            }} 
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
              activeView === 'help' ? 'bg-slate-100 text-[#123B5D]' : 'text-slate-700'
            }`}
          >
            {t.learn}
          </button>
          <button 
            onClick={() => {
              setActiveView('government');
              setShowMobileMenu(false);
            }} 
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-700 ${
              activeView === 'government' ? 'bg-rose-50 font-black' : ''
            }`}
          >
            🏛️ Gov Portal
          </button>
        </div>
      )}
    </header>
  );
}
