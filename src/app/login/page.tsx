'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AuthView from '../../components/AuthView';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { mockNotifications, defaultDemoUser } from '../../data/mockData';

export default function LoginPage() {
  const router = useRouter();
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const handleLoginSuccess = (user: any) => {
    localStorage.setItem('rti_demo_user', JSON.stringify(user));
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Navbar 
        activeView="login"
        setActiveView={(view) => {
          if (view === 'login') return;
          router.push('/');
        }}
        language="en"
        setLanguage={() => {}}
        lowBandwidth={false}
        setLowBandwidth={() => {}}
        textSize="normal"
        setTextSize={() => {}}
        notifications={notifications}
        markNotificationsRead={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
      />
      <main className="flex-1">
        <AuthView 
          initialMode="login"
          setActiveView={(view) => {
            if (view === 'landing') router.push('/');
            else if (view === 'dashboard') router.push('/');
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      </main>
      <Footer language="en" setActiveView={() => router.push('/')} />
    </div>
  );
}
