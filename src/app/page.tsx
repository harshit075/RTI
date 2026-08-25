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

import { initialRTIs, RTIApplication } from '../data/mockData';

export default function Home() {
  // Navigation Routing States
  const [activeView, setActiveView] = useState<string>('landing');
  const [selectedRtiId, setSelectedRtiId] = useState<string>('');



  // Accessibility & Localization States (Section 35)
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [lowBandwidth, setLowBandwidth] = useState<boolean>(false);
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');

  // RTI Applications Mock DB (prefilled with default data, persisted to LocalStorage)
  const [rtis, setRtis] = useState<RTIApplication[]>([]);
  
  // Builder Temp Draft state
  const [draftRti, setDraftRti] = useState<any>(null);

  // System Notifications list (Section 25)
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    title: string;
    time: string;
    type: 'alert' | 'update' | 'deadline' | 'info';
    read: boolean;
  }>>([
    {
      id: 'notif-1',
      title: 'First Appeal deadline approaching for Passport Delay Inquiry',
      time: '1 day ago',
      type: 'deadline',
      read: false
    },
    {
      id: 'notif-2',
      title: 'CPIO response letter received for Platform Upgrades Tender',
      time: '2 days ago',
      type: 'update',
      read: false
    },
    {
      id: 'notif-3',
      title: 'Welcome to RTI Saathi. Set up email OTP verification in Profile.',
      time: '3 days ago',
      type: 'info',
      read: true
    }
  ]);

  // Fetch all RTIs from database
  const fetchRtis = async () => {
    try {
      const res = await fetch('/api/rtis');
      if (res.ok) {
        const data = await res.json();
        setRtis(data);
      }
    } catch (err) {
      console.error('Failed to fetch RTIs from database:', err);
    }
  };

  // Load from database on mount
  useEffect(() => {
    fetchRtis();
    // Ensure document never has .dark class
    document.documentElement.classList.remove('dark');
  }, []);

  const addNotification = (title: string, type: 'alert' | 'update' | 'deadline' | 'info') => {
    const newNotif = {
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
        addNotification(`First Appeal filed successfully`, 'update');
        alert('First Appeal letter successfully filed and dispatched to the Appellate Authority (FAA). You can track status on the timeline.');
      }
    } catch (err) {
      console.error('Failed to file first appeal:', err);
    }
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
      />

      {/* Sticky Top Scrolling Marquee Warning */}
      <div className="bg-[#FAF9F5] text-[#B94A48] border-b border-[#E5E2D9] text-[10.5px] py-1.5 marquee-container select-none font-bold shadow-2xs">
        <div className="marquee-content">
          <span>
            The Central Information Commission (CIC) has integrated its Second Appeal Filing Portal with the Department of Personnel and Training (DoPT) RTI Online Portal. Now, while submitting a Second Appeal, appellants can input the First Appeal Registration Number, Email ID and Date of Filing the First Appeal, thereafter, the system will automatically retrieve related details of the RTI Application and First Appeal from the RTI Online Portal. This will ensure a smooth and more streamlined Second Appeal filing process.
          </span>
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
          />
        )}

        {activeView === 'detail' && (
          <RtiDetailView 
            rtiId={selectedRtiId}
            rtis={rtis}
            setActiveView={setActiveView}
            language={language}
            fileFirstAppeal={fileFirstAppeal}
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
          />
        )}
      </main>

      {/* Static Footer */}
      <Footer 
        language={language} 
        setActiveView={setActiveView} 
      />

      {/* Floating Contextual Help Assistant */}
      <ContextualHelp activeView={activeView} language={language} />
    </div>
  );
}
