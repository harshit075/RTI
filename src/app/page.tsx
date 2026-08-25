'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingView from '../components/LandingView';
import OnboardingView from '../components/OnboardingView';
import BuilderView from '../components/BuilderView';
import DashboardView from '../components/DashboardView';
import RtiDetailView from '../components/RtiDetailView';
import AuthoritiesView from '../components/AuthoritiesView';
import HelpView from '../components/HelpView';
import ProfileView from '../components/ProfileView';
import ContextualHelp from '../components/ContextualHelp';
import ReconciliationView from '../components/ReconciliationView';
import AuthView from '../components/AuthView';
import ProductTourModal from '../components/ProductTourModal';

import { initialRTIs, RTIApplication, defaultDemoUser, DemoUser, mockNotifications, MockNotification } from '../data/mockData';

export default function Home() {
  // Navigation Routing States
  const [activeView, setActiveView] = useState<string>('landing');
  const [selectedRtiId, setSelectedRtiId] = useState<string>('rti-road-jaipur-1245');

  // Authenticated Demo User State
  const [currentUser, setCurrentUser] = useState<DemoUser>(defaultDemoUser);

  // Product Tour Modal State
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);

  // Accessibility & Localization States
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [lowBandwidth, setLowBandwidth] = useState<boolean>(false);
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
  const [helpCategory, setHelpCategory] = useState<'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'>('All');

  // RTI Applications Mock DB
  const [rtis, setRtis] = useState<RTIApplication[]>(initialRTIs);
  
  // Builder Temp Draft state
  const [draftRti, setDraftRti] = useState<any>(null);

  // System Notifications list
  const [notifications, setNotifications] = useState<MockNotification[]>(mockNotifications);

  // Fetch all RTIs with graceful fallback
  const fetchRtis = async () => {
    try {
      const res = await fetch('/api/rtis');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRtis(data);
        }
      }
    } catch {
      setRtis(prev => (prev && prev.length > 0 ? prev : initialRTIs));
    }
  };

  // Load from database & localStorage on mount
  useEffect(() => {
    fetchRtis();
    try {
      const savedUser = localStorage.getItem('rti_demo_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    // Ensure document never has .dark class
    document.documentElement.classList.remove('dark');
  }, []);

  const addNotification = (title: string, type: 'alert' | 'update' | 'deadline' | 'info') => {
    const newNotif: MockNotification = {
      id: `notif-${Date.now()}`,
      title,
      time: 'Just now',
      type,
      read: false
    };
    setNotifications([newNotif, ...notifications]);
  };

  const markNotificationsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
  };

  const handleLoginSuccess = (user: DemoUser, isDemo: boolean = true) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('rti_demo_user', JSON.stringify(user));
    } catch (e) {}
    setActiveView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(defaultDemoUser);
    try {
      localStorage.removeItem('rti_demo_user');
    } catch (e) {}
    setActiveView('auth');
  };

  // Scenario Quick Switcher Handler
  const handleSelectScenario = (scenario: string) => {
    if (scenario === 'onboarding') {
      setActiveView('onboarding');
    } else if (scenario === 'authorities') {
      setActiveView('authorities');
    } else if (scenario.startsWith('rti-')) {
      setSelectedRtiId(scenario);
      setActiveView('detail');
    } else {
      setActiveView(scenario);
    }
  };

  // Reset Demo Workspace Handler
  const handleResetDemo = () => {
    setRtis(initialRTIs);
    setNotifications(mockNotifications);
    setCurrentUser(defaultDemoUser);
    try {
      localStorage.removeItem('rti_demo_user');
    } catch (e) {}
    addNotification('Demo environment reset to initial fictional data.', 'info');
    alert('Demo workspace reset! All RTIs, notifications, and application statuses have been restored to initial demo state.');
  };

  const addNewRti = async (newApp: RTIApplication) => {
    try {
      const res = await fetch('/api/rtis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApp)
      });
      if (res.ok) {
        await fetchRtis();
      }
    } catch (err) {
      console.error('Failed to add new RTI:', err);
    }
  };

  // Hackathon demo mock response triggers
  const triggerMockResponse = async () => {
    const demoRti = rtis.find(r => r.registrationNumber?.includes('DEMO') && r.status === 'Submitted');
    if (!demoRti) return;

    try {
      const res = await fetch(`/api/rtis/${demoRti.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'Response Received',
          responseDate: '2026-08-25',
          responseSummary: 'The CPIO supplied the road project work orders and tender allocation figures. The escalator safety audits and inspector completion logs are omitted due to finalization delays.',
          answeredCount: 4,
          totalQuestions: 5
        })
      });
      if (res.ok) {
        await fetchRtis();
        addNotification('CPIO response letter received for Road Construction Inquiry', 'update');
        alert('Simulated Response Received! The RTI status has changed to "Response Received" on your dashboard. Open it to analyze the response.');
      }
    } catch (err) {
      console.error('Failed to trigger mock response:', err);
    }
  };

  // First Appeal submission handler
  const fileFirstAppeal = async (id: string, reason: string, appealText: string) => {
    try {
      const res = await fetch(`/api/rtis/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'First Appeal Filed',
          appealReason: reason,
          appealDate: '2026-08-25'
        })
      });
      if (res.ok) {
        await fetchRtis();
      }
    } catch (err) {
      console.error('Failed to file first appeal:', err);
    }
    
    // Update local state directly for immediate reactivity
    setRtis(prev => prev.map(r => r.id === id ? {
      ...r,
      status: 'First Appeal Filed',
      appealReason: reason,
      appealDate: '2026-08-25'
    } : r));
    addNotification(`First Appeal filed successfully (Case Ref: FAA-DEMO-2026-00421)`, 'update');
  };

  // Second Appeal submission handler
  const fileSecondAppeal = async (id: string, reason: string, appealText: string) => {
    const rand = Math.floor(10000 + Math.random() * 90000);
    const secRegNo = `CIC/MEXTA/A/2026/${rand}`;
    try {
      const res = await fetch(`/api/rtis/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'Second Appeal Filed',
          secondAppealReason: reason,
          secondAppealDate: new Date().toISOString().substring(0, 10),
          secondAppealText: appealText,
          secondAppealRegNo: secRegNo
        })
      });
      if (res.ok) {
        await fetchRtis();
      }
    } catch (err) {
      console.error('Failed to file second appeal:', err);
    }

    setRtis(prev => prev.map(r => r.id === id ? {
      ...r,
      status: 'Second Appeal Filed',
      secondAppealReason: reason,
      secondAppealDate: new Date().toISOString().substring(0, 10),
      secondAppealText: appealText,
      secondAppealRegNo: secRegNo
    } : r));
    addNotification(`Second Appeal filed with CIC successfully. Ref: ${secRegNo}`, 'update');
    alert(`Second Appeal successfully registered with Central Information Commission (CIC) under reference: ${secRegNo}.`);
  };

  return (
    <div className={`min-h-screen flex flex-col ${lowBandwidth ? 'low-data-mode' : ''} ${textSize === 'large' ? 'text-lg' : 'text-sm'}`}>
      
      {/* Top sticky navbar */}
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView}
        language={language}
        setLanguage={setLanguage}
        lowBandwidth={lowBandwidth}
        setLowBandwidth={setLowBandwidth}
        textSize={textSize}
        setTextSize={setTextSize}
        notifications={notifications}
        markNotificationsRead={markNotificationsRead}
        currentUser={currentUser}
        onOpenTour={() => setIsTourOpen(true)}
        onSelectScenario={handleSelectScenario}
        onResetDemo={handleResetDemo}
        onLogout={handleLogout}
      />

      {/* Sticky Top Scrolling Notice Bar */}
      <div className="bg-amber-50/90 text-amber-900 border-b border-amber-200 text-xs py-1.5 px-4 flex items-center gap-2.5 font-medium shadow-xs overflow-hidden">
        <span className="bg-amber-700 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md shrink-0 tracking-wider">
          Notice
        </span>
        <div className="marquee-container flex-1 overflow-hidden">
          <div className="marquee-content text-[11px] font-semibold text-slate-800">
            CIC Second Appeal Integration: The Central Information Commission (CIC) portal is integrated with DoPT RTI Online for streamlined Second Appeal retrieval under Section 19(3).
          </div>
        </div>
      </div>

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col bg-slate-50">
        {activeView === 'landing' && (
          <LandingView 
            setActiveView={setActiveView} 
            language={language} 
          />
        )}

        {activeView === 'auth' && (
          <AuthView 
            initialMode="login"
            setActiveView={setActiveView}
            onLoginSuccess={handleLoginSuccess}
            language={language}
          />
        )}
        
        {activeView === 'onboarding' && (
          <OnboardingView 
            setActiveView={setActiveView} 
            setDraftRti={setDraftRti}
            language={language} 
          />
        )}

        {activeView === 'builder' && (
          <BuilderView 
            draftRti={draftRti}
            setActiveView={setActiveView}
            language={language}
            addNewRti={addNewRti}
            addNotification={addNotification}
          />
        )}

        {activeView === 'dashboard' && (
          <DashboardView 
            rtis={rtis}
            setActiveView={setActiveView}
            setSelectedRtiId={setSelectedRtiId}
            language={language}
            triggerMockResponse={triggerMockResponse}
            notifications={notifications}
            currentUser={currentUser}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {activeView === 'detail' && (
          <RtiDetailView 
            rtiId={selectedRtiId}
            rtis={rtis}
            setActiveView={setActiveView}
            language={language}
            fileFirstAppeal={fileFirstAppeal}
            fileSecondAppeal={fileSecondAppeal}
          />
        )}

        {activeView === 'authorities' && (
          <AuthoritiesView 
            language={language} 
          />
        )}

        {activeView === 'help' && (
          <HelpView 
            language={language} 
            activeCategory={helpCategory}
            setActiveCategory={setHelpCategory}
          />
        )}

        {activeView === 'reconciliation' && (
          <ReconciliationView 
            setActiveView={setActiveView}
            language={language}
            rtis={rtis}
            fetchRtis={fetchRtis}
          />
        )}

        {activeView === 'profile' && (
          <ProfileView 
            language={language}
            lowBandwidth={lowBandwidth}
            setLowBandwidth={setLowBandwidth}
            textSize={textSize}
            setTextSize={setTextSize}
            setLanguage={setLanguage}
            currentUser={currentUser}
            onResetDemo={handleResetDemo}
            setActiveView={setActiveView}
          />
        )}
      </main>

      {/* Static Footer */}
      <Footer 
        language={language} 
        setActiveView={setActiveView} 
        setHelpCategory={setHelpCategory}
      />

      {/* Interactive 6-Step Product Tour Modal */}
      <ProductTourModal 
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onNavigateToScenario={handleSelectScenario}
      />

      {/* Floating Contextual Help Assistant */}
      <ContextualHelp activeView={activeView} language={language} />
    </div>
  );
}
