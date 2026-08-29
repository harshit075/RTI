'use client';

import React, { useState } from 'react';
import { 
  Landmark, ShieldCheck, ArrowRight, CheckCircle2, 
  Lock, Mail, Phone, User, KeyRound, HelpCircle, FileText, 
  Search, ArrowLeft 
} from 'lucide-react';
import { User as UserModel } from '../services/types';
import { authService } from '../services/authService';

export type AuthMode = 'login' | 'signup' | 'forgot-password' | 'onboarding';

interface AuthViewProps {
  initialMode?: AuthMode;
  setActiveView: (view: string) => void;
  onLoginSuccess: (user: UserModel) => void;
  language?: 'en' | 'hi';
}

export default function AuthView({
  initialMode = 'login',
  setActiveView,
  onLoginSuccess,
  language = 'en'
}: AuthViewProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  
  // Login fields (prefilled for development convenience)
  const [loginIdentifier, setLoginIdentifier] = useState('aarav.sharma@example.com');
  const [loginPassword, setLoginPassword] = useState('citizen1234');
  
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

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await authService.login(loginIdentifier, loginPassword);
    setLoading(false);
    onLoginSuccess(user);
    setActiveView('dashboard');
  };

  // Signup Submit ➔ Onboarding
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMode('onboarding');
      setOnboardingStep(1);
    }, 400);
  };

  // Forgot password submit
  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRecoverySent(true);
    }, 400);
  };

  // Finish Onboarding
  const handleFinishOnboarding = async () => {
    const newUser = await authService.signup({
      name: signupName || 'Aarav Sharma',
      email: signupEmail || 'aarav.sharma@example.com',
      mobile: signupMobile || '+91 90000 00000'
    });
    onLoginSuccess(newUser);
    setActiveView('dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#F7F8FA] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Main Split Container */}
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-[#D9E0E6] bg-white shadow-3xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Brand & Citizen Journey (5 cols) */}
        <div className="lg:col-span-5 bg-[#123B5D] text-white p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-9 items-center justify-center rounded-lg bg-white p-0.5 shadow-3xs">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="Emblem of India" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-white">
                  ParDarshi
                </h1>
                <p className="text-[11px] text-slate-300 font-medium">Citizen Information Gateway</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mt-4">
              Get the information you have a right to know.
            </h2>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              File, track, and manage your Right to Information requests through one clear, guided journey.
            </p>

            {/* 4-Step Journey */}
            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-2">
                The RTI Citizen Journey
              </span>
              
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-amber-300 shrink-0">1</div>
                <div><strong>Ask:</strong> Natural-language question drafting.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-amber-300 shrink-0">2</div>
                <div><strong>Track:</strong> 30-day statutory countdown & CPIO routing.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-amber-300 shrink-0">3</div>
                <div><strong>Understand:</strong> Point-by-point response breakdown.</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-amber-300 shrink-0">4</div>
                <div><strong>Act:</strong> First Appeal to senior appellate authorities.</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Secure Citizen Authentication • RTI Act 2005</span>
          </div>
        </div>

        {/* Right Column: Dynamic Auth Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setActiveView('landing')}
              className="text-xs font-bold text-slate-500 hover:text-[#123B5D] flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </button>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {mode === 'login' ? 'Citizen Sign In' : mode === 'signup' ? 'New Registration' : mode === 'forgot-password' ? 'Account Recovery' : 'Workspace Setup'}
            </span>
          </div>

          {/* LOGIN */}
          {mode === 'login' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-[#17212B]">Welcome back</h3>
                <p className="text-xs text-[#52606D] mt-0.5">
                  Access your RTIs, responses, and appeals in one place.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">
                    Mobile Number or Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input 
                      type="text"
                      required
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      placeholder="aarav.sharma@example.com"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] focus:bg-white shadow-3xs"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode('forgot-password')}
                      className="text-[11px] font-bold text-[#123B5D] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input 
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] focus:bg-white shadow-3xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-3 text-xs font-black shadow-3xs cursor-pointer transition-all"
                >
                  {loading ? 'Signing in...' : 'Sign In to ParDarshi'}
                </button>
              </form>

              <div className="text-center text-xs text-[#52606D] pt-2 border-t border-slate-100">
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="font-extrabold text-[#123B5D] hover:underline cursor-pointer"
                >
                  Create an account
                </button>
              </div>
            </div>
          )}

          {/* SIGNUP */}
          {mode === 'signup' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-black text-[#17212B]">Create your ParDarshi account</h3>
                <p className="text-xs text-[#52606D] mt-0.5">
                  Track applications, manage documents, and stay informed about your RTIs.
                </p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div>
                  <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">Full Legal Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input 
                      type="text"
                      required
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="tel"
                        required
                        value={signupMobile}
                        onChange={(e) => setSignupMobile(e.target.value)}
                        placeholder="+91 90000 00000"
                        className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="aarav.sharma@example.com"
                        className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] pl-10 pr-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">Password</label>
                    <input 
                      type="password"
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] px-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">Confirm Password</label>
                    <input 
                      type="password"
                      required
                      value={signupConfirmPassword}
                      onChange={(e) => setSignupConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] px-4 py-2 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-[#123B5D]"
                  />
                  <label htmlFor="terms" className="text-[11px] text-slate-600">
                    I agree to the <span className="text-[#123B5D] font-bold">Terms of Service</span> and <span className="text-[#123B5D] font-bold">Privacy Policy</span>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-3 text-xs font-black shadow-3xs cursor-pointer transition-all disabled:opacity-50"
                >
                  Create Account & Continue
                </button>
              </form>

              <div className="text-center text-xs text-[#52606D] pt-2 border-t border-slate-100">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="font-extrabold text-[#123B5D] hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}

          {/* FORGOT PASSWORD */}
          {mode === 'forgot-password' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-black text-[#17212B]">Reset your password</h3>
                <p className="text-xs text-[#52606D] mt-0.5">
                  Enter your registered email address or mobile to receive recovery instructions.
                </p>
              </div>

              {recoverySent ? (
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Recovery link sent</h4>
                  <p className="text-xs text-emerald-800">
                    Instructions have been sent to <strong>{forgotEmail}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setRecoverySent(false);
                      setMode('login');
                    }}
                    className="rounded-xl bg-emerald-800 text-white px-5 py-2 text-xs font-bold"
                  >
                    Return to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-extrabold uppercase text-[#52606D] block mb-1">
                      Email or Mobile
                    </label>
                    <input 
                      type="text"
                      required
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="aarav.sharma@example.com"
                      className="w-full rounded-xl border border-[#D9E0E6] bg-[#F7F8FA] px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] shadow-3xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-3 text-xs font-black shadow-3xs cursor-pointer"
                  >
                    Send Recovery Link
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="text-xs font-bold text-slate-600 hover:text-[#123B5D]"
                    >
                      ← Back to Sign In
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ONBOARDING SURVEY */}
          {mode === 'onboarding' && (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-black uppercase text-[#123B5D] tracking-wider">
                  Step {onboardingStep} of 3
                </span>
                <h3 className="text-lg font-black text-[#17212B] mt-0.5">
                  {onboardingStep === 1 && 'What would you like to use ParDarshi for?'}
                  {onboardingStep === 2 && 'Where are you looking for information?'}
                  {onboardingStep === 3 && 'Your Citizen Workspace is Ready!'}
                </h3>
              </div>

              {onboardingStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'Filing RTIs', label: 'Filing New RTIs', desc: 'Draft applications with AI guidance' },
                      { id: 'Tracking applications', label: 'Tracking Applications', desc: 'Monitor 30-day statutory deadlines' },
                      { id: 'Understanding responses', label: 'Understanding Responses', desc: 'Analyze CPIO disclosures & omissions' },
                      { id: 'Filing appeals', label: 'Filing Appeals', desc: 'First Appeal & CIC Second Appeal' }
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
                              ? 'border-[#123B5D] bg-blue-50/60 text-slate-900' 
                              : 'border-[#D9E0E6] hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="font-bold text-xs flex items-center justify-between">
                            {item.label}
                            {isSelected && <CheckCircle2 className="h-4 w-4 text-[#123B5D]" />}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setOnboardingStep(2)}
                      className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-3xs"
                    >
                      Continue <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {onboardingStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    {[
                      { id: 'Central Government', title: 'Central Ministries & Public Authorities', desc: 'Railways, Passports, UIDAI, EPFO, Education, NHAI' },
                      { id: 'State Government', title: 'State Government Departments', desc: 'State Police, Revenue, Urban Development' },
                      { id: 'All Authorities', title: 'All Public Authorities', desc: 'Comprehensive central and state coverage' }
                    ].map(item => {
                      const isSelected = selectedLevel === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedLevel(item.id)}
                          className={`w-full p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                            isSelected 
                              ? 'border-[#123B5D] bg-blue-50/60 text-slate-900' 
                              : 'border-[#D9E0E6] hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs">{item.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                          {isSelected && <CheckCircle2 className="h-4 w-4 text-[#123B5D] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center pt-2">
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
                      className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-3xs"
                    >
                      Continue <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {onboardingStep === 3 && (
                <div className="space-y-4 text-center py-2">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-black text-[#17212B]">Your Citizen Portal is Configured</h4>
                  <p className="text-xs text-[#52606D] max-w-sm mx-auto">
                    You can now draft applications, monitor statutory 30-day deadlines, and manage responses.
                  </p>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={handleFinishOnboarding}
                      className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-7 py-3 text-xs font-black shadow-3xs transition-all hover:scale-105"
                    >
                      Go to Dashboard ➔
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
