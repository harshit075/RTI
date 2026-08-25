'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoticeBar from '../components/NoticeBar';
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

import { 
  User, RTIApplication, NotificationItem 
} from '../services/types';
import { authService } from '../services/authService';
import { rtiService } from '../services/rtiService';
import { notificationService } from '../services/notificationService';

export default function Home() {
  // Navigation Routing State
  const [activeView, setActiveView] = useState<string>('landing');
  const [selectedRtiId, setSelectedRtiId] = useState<string>('rti-road-jaipur-1245');

  // Authenticated Citizen State
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  // Accessibility & Localization States
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [lowBandwidth, setLowBandwidth] = useState<boolean>(false);
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [helpCategory, setHelpCategory] = useState<'All' | 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions'>('All');

  // RTI Applications DB State
  const [rtis, setRtis] = useState<RTIApplication[]>([]);
  const [draftRti, setDraftRti] = useState<any>(null);

  // System Notifications
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // Initialize data on mount
  useEffect(() => {
    authService.getCurrentUser().then(user => {
      setCurrentUser(user);
      if (user.preferences) {
        setLanguage(user.preferences.language || 'en');
        setLowBandwidth(user.preferences.lowBandwidth || false);
        setTextSize(user.preferences.textSize || 'normal');
      }
    });

    rtiService.getRTIs().then(setRtis);
    notificationService.getNotifications().then(setNotifications);

    // Remove any dark class
    document.documentElement.classList.remove('dark');
  }, []);

  const refreshApplications = async () => {
    const list = await rtiService.getRTIs();
    setRtis(list);
  };

  const markNotificationsRead = async () => {
    await notificationService.markAllAsRead();
    const updated = await notificationService.getNotifications();
    setNotifications(updated);
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setActiveView('dashboard');
  };

  const handleLogout = async () => {
    await authService.logout();
    setCurrentUser(undefined);
    setActiveView('auth');
  };

  const handleResetData = async () => {
    await rtiService.resetToSeedData();
    await refreshApplications();
    const user = await authService.getCurrentUser();
    setCurrentUser(user);
    alert('Application seed data reset successfully.');
  };

  const addNewRti = async (newApp: any) => {
    const created = await rtiService.createRTI(newApp);
    await refreshApplications();
    await notificationService.addNotification(
      `Application registered successfully: ${created.registrationNumber}`,
      'update',
      created.id
    );
    const updatedNotifs = await notificationService.getNotifications();
    setNotifications(updatedNotifs);
  };

  const addNotification = async (title: string, type: 'alert' | 'update' | 'deadline' | 'info') => {
    await notificationService.addNotification(title, type);
    const updated = await notificationService.getNotifications();
    setNotifications(updated);
  };

  return (
    <div className={`min-h-screen flex flex-col ${lowBandwidth ? 'low-data-mode' : ''} ${textSize === 'large' ? 'text-lg' : 'text-sm'}`}>
      
      {/* Top sticky navbar */}
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView}
        language={language}
        setLanguage={setLanguage}
        textSize={textSize}
        setTextSize={setTextSize}
        lowBandwidth={lowBandwidth}
        setLowBandwidth={setLowBandwidth}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
        notifications={notifications}
        markNotificationsRead={markNotificationsRead}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Dismissible Official Notice Bar */}
      <NoticeBar 
        id="cic-appeal-integration-2026"
        language={language}
        onLinkClick={() => setActiveView('help')}
      />

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col bg-[#F7F8FA]">
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
            currentUser={currentUser}
            onRefresh={refreshApplications}
          />
        )}

        {activeView === 'detail' && (
          <RtiDetailView 
            rtiId={selectedRtiId}
            rtis={rtis}
            setActiveView={setActiveView}
            language={language}
            onApplicationUpdated={refreshApplications}
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
            fetchRtis={refreshApplications}
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
            onResetData={handleResetData}
            setActiveView={setActiveView}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        language={language} 
        setActiveView={setActiveView} 
        setHelpCategory={setHelpCategory}
      />

      {/* Floating Contextual Help Assistant */}
      <ContextualHelp activeView={activeView} language={language} />
    </div>
  );
}
