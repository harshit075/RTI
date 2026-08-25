'use client';

import React, { useState } from 'react';
import { 
  Landmark, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, 
  Lock, Mail, Phone, User, KeyRound, HelpCircle, FileText, 
  Search, AlertCircle, Compass, ArrowLeft 
} from 'lucide-react';
import { defaultDemoUser } from '../data/mockData';

export type AuthMode = 'login' | 'signup' | 'forgot-password' | 'onboarding';

interface AuthViewProps {
  initialMode?: AuthMode;
  setActiveView: (view: string) => void;
  onLoginSuccess: (user: typeof defaultDemoUser, isDemo?: boolean) => void;
  language?: 'en' | 'hi';
}

export default function AuthView({
  initialMode = 'login',
  setActiveView,
  onLoginSuccess,
  language = 'en'
}: AuthViewProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  
  // Login fields
  const [loginIdentifier, setLoginIdentifier] = useState('aarav.sharma.demo@example.com');
  const [loginPassword, setLoginPassword] = useState('demo1234');
  
  // Signup fields
  const [signupName, setSignupName] = useState('');
  const [signupMobile, setSignupMobile] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Forgot password fields
  const [forgotEmail, setForgotEmail] = useState('');
  const [recoverySent, setRecoverySent] = useState(false);

  // Onboarding survey states
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>(['Filing RTIs', 'Tracking applications']);
  const [selectedLevel, setSelectedLevel] = useState<string>('Central Government');

  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Demo Login Fast-path (Under 2 seconds)
  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast(
        'Demo account loaded',
        'You\'re exploring a fictional citizen profile (Aarav Sharma) with realistic RTI activity.'
      );
      onLoginSuccess(defaultDemoUser, true);
      setActiveView('dashboard');
    }, 400);
  };

  // Normal Login
  const handleNormalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier || !loginPassword) {
      showToast('Credentials required', 'Please enter your email/mobile and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user = {
        ...defaultDemoUser,
        name: loginIdentifier.includes('@') ? loginIdentifier.split('@')[0] : 'Citizen User',
        email: loginIdentifier.includes('@') ? loginIdentifier : 'citizen@example.com',
        isDemo: true
      };
      showToast('Welcome back', 'Successfully logged in to RTI Saathi.');
      onLoginSuccess(user, false);
      setActiveView('dashboard');
    }, 600);
  };

  // Signup Submit ➔ Onboarding
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail) {
      showToast('Required fields', 'Please fill in your name and email address.');
      return;
    }
    if (signupPassword && signupPassword !== signupConfirmPassword) {
      showToast('Password mismatch', 'Password and Confirm Password do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Account created successfully', 'Let\'s set up your RTI workspace.');
      setMode('onboarding');
      setOnboardingStep(1);
    }, 600);
  };

  // Forgot password submit
  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) {
      showToast('Email required', 'Please enter your registered email address.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRecoverySent(true);
      showToast('Reset link dispatched', 'A password recovery link has been sent to ' + forgotEmail);
    }, 600);
  };

  // Finish Onboarding
  const handleFinishOnboarding = () => {
    const newUser = {
      ...defaultDemoUser,
      name: signupName || 'New Citizen',
      email: signupEmail || 'citizen@example.com',
      mobile: signupMobile || '+91 98765 43210',
      isDemo: true
    };
    onLoginSuccess(newUser, true);
    setActiveView('dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm rounded-2xl border border-emerald-300 bg-white p-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-black text-slate-900">{toastMessage.title}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{toastMessage.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Split Container */}
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Brand, Vision & 4-Step Lifecycle Journey (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0A2540] via-[#123B5D] to-[#0A2540] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Background Graphic */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div>
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1 shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="Emblem of India" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  RTI Saathi
                  <span className="text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                    Concept
                  </span>
                </h1>
                <p className="text-[11px] text-slate-300 font-medium">Citizen Information Gateway</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mt-4">
              Get the information you have a right to know.
            </h2>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-normal">
              RTI Saathi assists citizens through every stage of the Right to Information lifecycle — from finding public authorities to AI question drafting and First Appeals.
            </p>

            {/* 4-Step Visual Journey */}
            <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-3">
                Complete RTI Citizen Journey
              </span>
              
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px] text-amber-300 shrink-0">1</div>
                <div><strong>Ask:</strong> Natural-language question drafting with AI.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px] text-amber-300 shrink-0">2</div>
                <div><strong>Track:</strong> Live deadline countdowns & CPIO routing.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px] text-amber-300 shrink-0">3</div>
                <div><strong>Understand:</strong> Automated response breakdown & quality analysis.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px] text-amber-300 shrink-0">4</div>
                <div><strong>Act:</strong> 1-Click First Appeal & Second Appeal to CIC.</div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-[10.5px] text-slate-400 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Fictional Demonstration Environment • Hackathon Concept</span>
          </div>
        </div>

        {/* Right Column: Dynamic Auth & Onboarding Cards (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          
          {/* Back to Home Link */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setActiveView('landing')}
              className="text-xs font-bold text-slate-500 hover:text-primary-navy flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Homepage
            </button>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {mode === 'login' ? 'Citizen Sign In' : mode === 'signup' ? 'New Registration' : mode === 'forgot-password' ? 'Account Recovery' : 'Workspace Setup'}
            </span>
          </div>

          {/* ========================================================================= */}
          {/* SUBVIEW 1: LOGIN */}
          {/* ========================================================================= */}
          {mode === 'login' && (
            <div className="space-y-6">
              
              {/* JUDGE DEMO MODE CARD (Highlighted & Distinct) */}
              <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50/50 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider bg-amber-600 text-white px-2 py-0.5 rounded-md">
                          Judge Demo Mode
                        </span>
                        <span className="text-xs font-bold text-slate-700">Explore RTI Saathi</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Skip registration. Log in with our pre-populated citizen profile (<strong>Aarav Sharma</strong>) to test the end-to-end journey in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 flex justify-end">
                  <button
                    onClick={handleDemoLogin}
                    disabled={loading}
                    className="w-full sm:w-auto rounded-xl bg-[#0A2540] hover:bg-[#123B5D] text-white px-5 py-2.5 text-xs font-extrabold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 text-amber-400" />
                        Explore Demo Account ➔
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Normal Login Form */}
              <div className="border-t border-slate-200 pt-5">
                <div className="mb-5">
                  <h3 className="text-lg font-black text-slate-900">Welcome back</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Access your RTIs, responses and appeals in one place.
                  </p>
                </div>

                <form onSubmit={handleNormalLogin} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">
                      Mobile Number / Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        placeholder="aarav.sharma.demo@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-[10px] font-extrabold uppercase text-slate-600 block">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setMode('forgot-password')}
                        className="text-[11px] font-bold text-primary-navy hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-3 text-xs font-extrabold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Sign In to RTI Saathi'
                    )}
                  </button>
                </form>

                <div className="mt-5 text-center text-xs text-slate-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="font-extrabold text-primary-navy hover:underline cursor-pointer"
                  >
                    Create an account
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* SUBVIEW 2: SIGN UP */}
          {/* ========================================================================= */}
          {mode === 'signup' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-slate-900">Create your RTI Saathi account</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Track applications, manage documents, and stay informed about your RTIs.
                </p>
              </div>

              {/* Checklist strip */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10.5px] text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Save RTI drafts</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Track deadlines</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Receive updates</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Manage responses</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Prepare appeals</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> Document vault</div>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">Full Legal Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input 
                      type="text"
                      required
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="tel"
                        required
                        value={signupMobile}
                        onChange={(e) => setSignupMobile(e.target.value)}
                        placeholder="+91 90000 00000"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="aarav.sharma@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="password"
                        required
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">Confirm Password</label>
                    <div className="relative">
                      <KeyRound className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="password"
                        required
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-primary-navy"
                  />
                  <label htmlFor="terms" className="text-[11px] text-slate-600 font-medium">
                    I agree to the <span className="text-primary-navy font-bold">Terms of Service</span> and <span className="text-primary-navy font-bold">Privacy Policy</span>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-3 text-xs font-extrabold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:bg-slate-300"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Create Account & Set Up Workspace'
                  )}
                </button>
              </form>

              <div className="text-center text-xs text-slate-600 pt-2 border-t border-slate-150">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="font-extrabold text-primary-navy hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SUBVIEW 3: FORGOT PASSWORD */}
          {/* ========================================================================= */}
          {mode === 'forgot-password' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-900">Reset your password</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter your registered email address or mobile number to receive a secure recovery code.
                </p>
              </div>

              {recoverySent ? (
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Recovery link sent!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    We've dispatched a password reset link to <strong>{forgotEmail}</strong>. Please check your inbox and follow the instructions.
                  </p>
                  <button
                    onClick={() => {
                      setRecoverySent(false);
                      setMode('login');
                    }}
                    className="mt-2 inline-block rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 shadow-sm"
                  >
                    Return to Login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-slate-600 block mb-1">
                      Registered Email or Mobile
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input 
                        type="text"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="aarav.sharma.demo@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary-navy hover:bg-primary-blue text-white py-3 text-xs font-extrabold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Send Recovery Link'
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="text-xs font-bold text-slate-600 hover:text-primary-navy cursor-pointer"
                    >
                      ← Back to Login
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* SUBVIEW 4: ONBOARDING SURVEY (3 Steps) */}
          {/* ========================================================================= */}
          {mode === 'onboarding' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-primary-navy tracking-wider">
                    Step {onboardingStep} of 3
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-0.5">
                    {onboardingStep === 1 && 'What would you like to use RTI Saathi for?'}
                    {onboardingStep === 2 && 'Where are you looking for information?'}
                    {onboardingStep === 3 && 'Your Citizen Workspace is Ready!'}
                  </h3>
                </div>
                <div className="flex gap-1">
                  <span className={`h-2 w-6 rounded-full ${onboardingStep >= 1 ? 'bg-primary-navy' : 'bg-slate-200'}`} />
                  <span className={`h-2 w-6 rounded-full ${onboardingStep >= 2 ? 'bg-primary-navy' : 'bg-slate-200'}`} />
                  <span className={`h-2 w-6 rounded-full ${onboardingStep >= 3 ? 'bg-primary-navy' : 'bg-slate-200'}`} />
                </div>
              </div>

              {/* Step 1: Goals */}
              {onboardingStep === 1 && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600">Select all areas that interest you:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'Filing RTIs', label: 'Filing New RTIs', desc: 'Draft applications with AI guidance' },
                      { id: 'Tracking applications', label: 'Tracking Applications', desc: 'Monitor 30-day statutory deadlines' },
                      { id: 'Understanding responses', label: 'Understanding Responses', desc: 'Analyze CPIO disclosures & omissions' },
                      { id: 'Filing appeals', label: 'Filing Appeals', desc: 'First Appeal & CIC Second Appeal' },
                      { id: 'Research', label: 'Citizen Research', desc: 'Public records & Section 4 disclosures' }
                    ].map(item => {
                      const isSelected = selectedUseCases.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedUseCases(selectedUseCases.filter(x => x !== item.id));
                            } else {
                              setSelectedUseCases([...selectedUseCases, item.id]);
                            }
                          }}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected 
                              ? 'border-primary-navy bg-blue-50/70 text-slate-900' 
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="font-bold text-xs flex items-center justify-between">
                            {item.label}
                            {isSelected && <CheckCircle2 className="h-4 w-4 text-primary-navy" />}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      onClick={() => setOnboardingStep(2)}
                      className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      Continue <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Jurisdiction Focus */}
              {onboardingStep === 2 && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600">Which level of government do you query most often?</p>
                  <div className="space-y-2.5">
                    {[
                      { id: 'Central Government', title: 'Central Ministries & Departments', desc: 'Railways, Passports, UIDAI, EPFO, UGC, NHAI' },
                      { id: 'State Government', title: 'State Government Departments', desc: 'State Police, Revenue, Education, State Transport' },
                      { id: 'Local Municipal Bodies', title: 'Urban Local Bodies & Panchayats', desc: 'Municipal Corporations, Zilla Parishads, Town Planning' },
                      { id: 'All Public Authorities', title: 'All Public Authorities', desc: 'Comprehensive central and state coverage' }
                    ].map(item => {
                      const isSelected = selectedLevel === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedLevel(item.id)}
                          className={`w-full p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                            isSelected 
                              ? 'border-primary-navy bg-blue-50/70 text-slate-900' 
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs">{item.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                          {isSelected && <CheckCircle2 className="h-4 w-4 text-primary-navy shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <button
                      type="button"
                      onClick={() => setOnboardingStep(1)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setOnboardingStep(3)}
                      className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      Continue <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Complete */}
              {onboardingStep === 3 && (
                <div className="space-y-4 text-center py-4">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">Your Citizen Workspace is Configured!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    You can now draft applications with AI, track official 30-day statutory response deadlines, and manage your appeals.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs max-w-md mx-auto space-y-2 mt-4">
                    <div className="flex justify-between"><span className="text-slate-500">Citizen Name:</span> <strong className="text-slate-800">{signupName || 'Aarav Sharma'}</strong></div>
                    <div className="flex justify-between"><span className="text-slate-500">Primary Focus:</span> <strong className="text-slate-800">{selectedLevel}</strong></div>
                    <div className="flex justify-between"><span className="text-slate-500">Selected Features:</span> <strong className="text-slate-800">{selectedUseCases.length} Modules Active</strong></div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleFinishOnboarding}
                      className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-8 py-3 text-xs font-extrabold shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all hover:scale-105"
                    >
                      Go to Dashboard & Start Exploring ➔
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
