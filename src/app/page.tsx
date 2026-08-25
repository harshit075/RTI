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

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('rtis_database');
    if (saved) {
      try {
        setRtis(JSON.parse(saved));
      } catch (e) {
        setRtis(initialRTIs);
      }
    } else {
      setRtis(initialRTIs);
    }
  }, []);

  // Sync to LocalStorage
  const syncRtis = (updatedList: RTIApplication[]) => {
    setRtis(updatedList);
    localStorage.setItem('rtis_database', JSON.stringify(updatedList));
  };

  const addNewRti = (newApp: RTIApplication) => {
    const updated = [newApp, ...rtis];
    syncRtis(updated);
  };

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

  // Hackathon demo mock response triggers (Section 55 / Scenario Steps)
  const triggerMockResponse = () => {
    const updated = rtis.map(r => {
      // Find the demo RTI that is submitted and change its status to Response Received
      if (r.registrationNumber?.includes('DEMO') && r.status === 'Submitted') {
        return {
          ...r,
          status: 'Response Received' as const,
          responseDate: '2026-08-25',
          responseSummary: 'The CPIO supplied the road project work orders and tender allocation figures. The escalator safety audits and inspector completion logs are omitted due to finalization delays.',
          answeredCount: 4,
          totalQuestions: 5
        };
      }
      return r;
    });
    
    syncRtis(updated);
    addNotification('CPIO response letter received for Road Construction Inquiry', 'update');
    
    // Alert browser simulation success
    alert('Simulated Response Received! The RTI status has changed to "Response Received" on your dashboard. Open it to analyze the response.');
  };

  // First Appeal submission handler
  const fileFirstAppeal = (id: string, reason: string, appealText: string) => {
    const updated = rtis.map(r => {
      if (r.id === id) {
        return {
          ...r,
          status: 'First Appeal Filed' as const,
          appealReason: reason,
          appealDate: '2026-08-25'
        };
      }
      return r;
    });
    
    syncRtis(updated);
    addNotification(`First Appeal filed successfully for ${id.includes('passport') ? 'Passport Delay' : 'Road Construction'}`, 'update');
    alert('First Appeal letter successfully filed and dispatched to the Appellate Authority (FAA). You can track status on the timeline.');
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

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950">
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
    </div>
  );
}
