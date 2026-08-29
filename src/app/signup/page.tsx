'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthView from '../../components/AuthView';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { seedNotifications, seedUser } from '../../services/seedData';
import { NotificationItem, User } from '../../services/types';

export default function SignupPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationItem[]>(seedNotifications);

  const handleLoginSuccess = (user: User) => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] font-sans text-slate-800">
      <Navbar 
        activeView="auth"
        setActiveView={() => router.push('/')}
        language="en"
        setLanguage={() => {}}
        lowBandwidth={false}
        setLowBandwidth={() => {}}
        textSize="normal"
        setTextSize={() => {}}
        notifications={notifications}
        markNotificationsRead={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
        currentUser={seedUser}
      />
      <main className="flex-1">
        <AuthView 
          initialMode="signup"
          setActiveView={() => router.push('/')}
          onLoginSuccess={handleLoginSuccess}
        />
      </main>
      <Footer language="en" setActiveView={() => router.push('/')} />
    </div>
  );
}
