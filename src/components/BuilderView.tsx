'use client';

import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ChevronRight, CornerDownRight, Landmark, 
  AlertCircle, Edit2, ShieldCheck, QrCode, CreditCard, Lock, ArrowRight,
  TrendingUp, CircleDot, Info, UploadCloud
} from 'lucide-react';
import { mockAuthorities, Authority } from '../data/mockData';

interface BuilderViewProps {
  draftRti: any;
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  addNewRti: (rti: any) => void;
  addNotification: (title: string, type: 'alert' | 'update' | 'deadline' | 'info') => void;
}

export default function BuilderView({
  draftRti,
  setActiveView,
  language,
  addNewRti,
  addNotification
}: BuilderViewProps) {
  // Wizard steps: 'form' | 'editor' | 'review' | 'payment' | 'processing' | 'success'
  const [step, setStep] = useState<'form' | 'editor' | 'review' | 'payment' | 'processing' | 'success'>('form');
  
  // Form fields
  const [location, setLocation] = useState(draftRti?.location || '');
  const [timeFrom, setTimeFrom] = useState('2022-01-01');
  const [timeTo, setTimeTo] = useState('2025-12-31');
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['Expenditure', 'Work order', 'Inspection report']);
  
  // Edited questions
  const [subject, setSubject] = useState(
    draftRti?.topic === 'passport' 
      ? 'Status and delays in passport issuance' 
      : `Expenditure and sanction records for road project in ${draftRti?.location || 'Rampur village'}`
  );
  const [questions, setQuestions] = useState<string[]>([]);
  
  // Applicant details
  const [name, setName] = useState('Harshit Sharma');
  const [email, setEmail] = useState('harshit.sharma@example.com');
  const [phone, setPhone] = useState('9876543210');
  const [bplStatus, setBplStatus] = useState<boolean>(false);
  const [bplCardNo, setBplCardNo] = useState('');
  
  // Payment simulation state
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [generatedRegNo, setGeneratedRegNo] = useState('');

  const docChips = [
    'Orders & Circulars', 'Expenditure & Audits', 'Sanction details', 
    'Work order copy', 'Inspection report', 'File movements', 
    'Contracts & Tenders', 'Beneficiary list', 'Official Statistics'
  ];

  const handleDocToggle = (chip: string) => {
    if (selectedDocs.includes(chip)) {
      setSelectedDocs(selectedDocs.filter(d => d !== chip));
    } else {
      setSelectedDocs([...selectedDocs, chip]);
    }
  };

  const generateDraft = () => {
    // Generate mock questions based on topic and selections (Section 9)
    let generated: string[] = [];
    if (draftRti?.topic === 'passport') {
      generated = [
        'Provide the date on which police verification was requested and the date it was received by CPV office.',
        'Provide copies of all internal notes, verification reviews, and officer remarks regarding passport file DL2068472910.',
        'State the official reasons and policy rules under which the passport has not been dispatched yet.',
        'Provide the current status and expected dispatch date of the passport.'
      ];
    } else {
      generated = [
        `Provide copies of the administrative and technical sanctions issued for the road project in ${location || 'Rampur village'} during ${timeFrom.substring(0,4)}-${timeTo.substring(0,4)}.`,
        `Provide the total funds sanctioned, released, and actually spent on this specific project during the mentioned time period.`,
        'Provide a copy of the contract agreement, tender awards, and work order issued to the contractor.',
        'Provide copies of all inspection reports, safety compliance logs, and completion certificates issued by the project auditors.',
        'Provide details of quality materials test reports conducted during road construction.'
      ];
    }
    setQuestions(generated);
    setStep('editor');
  };

  const handleQuestionChange = (index: number, val: string) => {
    const updated = [...questions];
    updated[index] = val;
    setQuestions(updated);
  };

  const submitToReview = () => {
    setStep('review');
  };

  const proceedToPayment = () => {
    if (bplStatus && bplCardNo.trim()) {
      // Waiver applies - skip payment directly to submission processing
      simulateSubmission();
    } else {
      setStep('payment');
    }
  };

  const simulateSubmission = () => {
    setStep('processing');
    
    // Create random registration number
    const rand = Math.floor(10000 + Math.random() * 90000);
    const regNo = draftRti?.topic === 'passport' 
      ? `MEXTA/R/2026/${rand}` 
      : `MORLY/R/2026/${rand}`;
    setGeneratedRegNo(regNo);

    setTimeout(() => {
      // Write to mock DB (add to the top of list)
      const newApp = {
        id: `rti-demo-${Date.now()}`,
        title: draftRti?.topic === 'passport' ? 'Passport Issuance Delay' : 'Road Construction Inquiry',
        authorityId: draftRti?.authorityId || 'morth',
        subject: subject,
        questions: questions,
        submittedDate: new Date().toISOString().substring(0, 10),
        expectedDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
        status: 'Submitted' as const,
        paymentStatus: bplStatus ? 'Success' as const : 'Success' as const,
        registrationNumber: regNo,
        answeredCount: 0,
        totalQuestions: questions.length
      };
      
      addNewRti(newApp);
      addNotification(`RTI registered successfully. Reg No: ${regNo}`, 'update');
      
      setStep('success');
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      
      {/* Visual Progress Stepper (Section 42) */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-[10.5px] sm:text-xs font-bold text-slate-400 gap-1">
          <span className={step === 'form' ? 'text-primary-blue' : 'text-slate-500'}>
            1.<span className="hidden sm:inline"> AI parameters</span>
          </span>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className={step === 'editor' ? 'text-primary-blue' : 'text-slate-500'}>
            2.<span className="hidden sm:inline"> Draft builder</span>
          </span>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className={step === 'review' ? 'text-primary-blue' : 'text-slate-500'}>
            3.<span className="hidden sm:inline"> Quality Check</span>
          </span>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className={step === 'payment' ? 'text-primary-blue' : 'text-slate-500'}>
            4.<span className="hidden sm:inline"> Pay ₹10</span>
          </span>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className={step === 'success' ? 'text-emerald-600' : 'text-slate-500'}>
            5.<span className="hidden sm:inline"> Filed</span>
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
          <div 
            className="h-full bg-primary-blue transition-all duration-500" 
            style={{
              width: 
                step === 'form' ? '20%' :
                step === 'editor' ? '40%' :
                step === 'review' ? '60%' :
                step === 'payment' ? '80%' : '100%'
            }}
          />
        </div>
      </div>

      {/* STEP 1: Builder Form (Section 9) */}
      {step === 'form' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <h3 className="font-bold text-sm text-slate-800 mb-4 dark:text-slate-200">
              AI Request Planner
            </h3>

            <div className="space-y-4">
              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Place / Location Jurisdiction</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Rampur Village, Alwar District, Rajasthan"
                  className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                />
              </div>

              {/* Time period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">From Date</label>
                  <input
                    type="date"
                    value={timeFrom}
                    onChange={(e) => setTimeFrom(e.target.value)}
                    className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">To Date</label>
                  <input
                    type="date"
                    value={timeTo}
                    onChange={(e) => setTimeTo(e.target.value)}
                    className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                  />
                </div>
              </div>

              {/* Documents selection */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Select files/records needed</label>
                <div className="flex flex-wrap gap-2">
                  {docChips.map(chip => {
                    const selected = selectedDocs.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleDocToggle(chip)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-bold border transition-colors cursor-pointer ${
                          selected 
                            ? 'bg-primary-blue border-primary-blue text-white' 
                            : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100'
                        }`}
                      >
                        {selected ? '✓ ' : '+ '} {chip}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setActiveView('onboarding')}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={generateDraft}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white shadow-sm cursor-pointer"
            >
              Generate AI RTI Draft
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Draft Editor (Section 9/11) */}
      {step === 'editor' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                RTI Application Draft Details
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary-saffron">
                <Sparkles className="h-3.5 w-3.5" /> AI Drafted
              </span>
            </div>

            <div className="space-y-4">
              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Subject of Application</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                />
              </div>

              {/* Questions List */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Information Requested (Edit if required)</label>
                <div className="space-y-3">
                  {questions.map((q, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                        {idx + 1}
                      </span>
                      <textarea
                        rows={2}
                        value={q}
                        onChange={(e) => handleQuestionChange(idx, e.target.value)}
                        className="flex-1 rounded-xl border border-slate-300 px-3 py-1.5 text-xs text-slate-750 outline-none focus:border-primary-blue bg-slate-50/50"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep('form')}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-650 hover:bg-slate-50 cursor-pointer"
            >
              Edit parameters
            </button>
            <button
              onClick={submitToReview}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white shadow cursor-pointer"
            >
              Analyze Application Quality
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Quality Check & Applicant Details (Section 10/11) */}
      {step === 'review' && (
        <div className="space-y-6">
          
          {/* Quality check widget */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 animate-in fade-in duration-200">
            <h3 className="font-bold text-sm text-slate-800 mb-4 dark:text-slate-200 flex items-center gap-1.5">
              <TrendingUp className="h-5 w-5 text-success-green" />
              APPLICATION CHECK
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Score circle */}
              <div className="text-center p-4 border-b md:border-b-0 md:border-r border-border-slate pb-6 md:pb-4">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-emerald-50 text-success-green border-4 border-success-green">
                  <div>
                    <span className="text-2xl font-black">Strong</span>
                    <span className="text-[10px] text-success-green block font-bold">RATING</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 block mt-2">Your RTI is ready for review.</span>
                <span className="text-[9.5px] text-slate-450 block mt-0.5">Well-formed according to Section 6(1) guidelines.</span>
              </div>

              {/* Checklist */}
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Authority selection check: Strong Match</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Time-period: Explicitly provided</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Record-based format: Valid (no opinion requests)</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <AlertCircle className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">Scope suggestion: Could be narrowed</span>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                      Your query spans 3 years. Specifying exact project sections or tenders makes responses faster.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Applicant Details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <h3 className="font-bold text-sm text-slate-800 mb-4 dark:text-slate-200">
              Applicant Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email ID</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mobile Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                />
              </div>
            </div>

            {/* BPL Toggle */}
            <div className="border-t border-slate-100 mt-6 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-850">Below Poverty Line (BPL) Fee Waiver?</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">BPL citizens are exempt from paying the ₹10 application fee.</p>
                </div>
                <button
                  onClick={() => setBplStatus(!bplStatus)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                    bplStatus ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      bplStatus ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {bplStatus && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">BPL Card/Certificate Number</label>
                    <input
                      type="text"
                      value={bplCardNo}
                      onChange={(e) => setBplCardNo(e.target.value)}
                      placeholder="e.g. BPL-RJ-829104"
                      className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Upload BPL Certificate Proof (PDF/JPG)</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-3 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 cursor-pointer text-slate-500">
                      <UploadCloud className="h-5 w-5 mb-1 text-slate-400" />
                      <span className="text-[9.5px] font-bold">Upload BPL_Proof.pdf</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep('editor')}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-650 hover:bg-slate-50 cursor-pointer"
            >
              Back to Draft
            </button>
            <button
              onClick={proceedToPayment}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue px-6 py-2.5 text-xs font-bold text-white shadow flex items-center gap-1 cursor-pointer"
            >
              {bplStatus ? 'Submit Application (Free)' : 'Proceed to Payment (₹10)'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Payment Experience (Section 12) */}
      {step === 'payment' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="text-center mb-6">
              <h3 className="font-extrabold text-lg text-primary-navy dark:text-white">RTI Application Fee</h3>
              <p className="text-xs text-slate-400 mt-1">Central Government Statutory Fee</p>
              <div className="mt-4 text-3xl font-black text-slate-900 dark:text-white">₹ 10.00</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-100 pt-6">
              {/* Payment Methods tabs */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex items-center gap-2 rounded-xl p-3 text-xs font-bold border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'border-primary-blue bg-blue-50 text-primary-blue'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="h-4 w-4" />
                  UPI (QR Code / App)
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center gap-2 rounded-xl p-3 text-xs font-bold border text-left transition-colors cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-primary-blue bg-blue-50 text-primary-blue'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Credit / Debit Card
                </button>
              </div>

              {/* Payment Panel Display */}
              <div className="md:col-span-2 border-l border-slate-150 pl-0 md:pl-6">
                {paymentMethod === 'upi' && (
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-slate-100 p-4 border border-slate-200 rounded-xl">
                      <QrCode className="h-32 w-32 text-slate-800" />
                      <span className="text-[10px] font-bold text-slate-400 block mt-2">Scan QR using BHIM, GPay, PayTM</span>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Or Choose UPI App:</span>
                      <div className="flex justify-center gap-2">
                        <button 
                          onClick={simulateSubmission}
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          GPay
                        </button>
                        <button 
                          onClick={simulateSubmission}
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          PhonePe
                        </button>
                        <button 
                          onClick={simulateSubmission}
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          PayTM / BHIM
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CVV</label>
                        <input
                          type="password"
                          placeholder="***"
                          className="w-full rounded-xl border border-slate-350 px-4 py-2 text-xs text-slate-800 outline-none focus:border-primary-blue bg-slate-50"
                        />
                      </div>
                    </div>

                    <button
                      onClick={simulateSubmission}
                      className="w-full mt-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Lock className="h-4 w-4 text-emerald-100" />
                      Pay ₹10.00 Securely
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className="flex justify-between text-xs text-slate-400 items-center">
            <span>Secured by NIC Payment Gateway</span>
            <button
              onClick={() => setStep('review')}
              className="rounded-xl border border-slate-200 px-4 py-2 text-slate-650 hover:bg-slate-50 font-bold cursor-pointer"
            >
              Cancel Payment
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Payment Processing & Submission (Section 12) */}
      {step === 'processing' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm max-w-lg mx-auto dark:bg-slate-900 dark:border-slate-800">
          <div className="h-14 w-14 rounded-full border-4 border-primary-blue border-t-transparent animate-spin mx-auto mb-6" />
          <h3 className="font-extrabold text-base text-primary-navy mb-2 dark:text-white">PAYMENT RECEIVED</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Transaction ID: TXN_83910482910<br />
            We are confirming your payment with the public bank network.<br />
            <span className="font-bold text-slate-700 dark:text-slate-300 mt-2 block">Do not refresh or pay again.</span>
          </p>
        </div>
      )}

      {/* STEP 6: Submission Success (Section 12) */}
      {step === 'success' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm max-w-xl mx-auto dark:bg-slate-900 dark:border-slate-800">
          <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500 shadow">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          
          <h3 className="font-black text-xl text-primary-navy dark:text-white">✓ Payment Confirmed & RTI Registered</h3>
          <p className="text-xs text-slate-500 mt-1">Your application is filed and officially dispatched to the CPIO officer.</p>

          <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 my-6 text-xs text-left space-y-2 dark:bg-slate-850 dark:border-slate-800">
            <div className="flex justify-between border-b border-slate-200/50 pb-2">
              <span className="text-slate-450 font-bold">Registration Number</span>
              <span className="font-extrabold text-slate-850 font-mono dark:text-slate-100">{generatedRegNo}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/50 pb-2">
              <span className="text-slate-450 font-bold">Public Authority</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">{draftRti?.authorityName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-450 font-bold">Statutory Expected Response</span>
              <span className="font-semibold text-slate-850 dark:text-slate-100">Within 30 Days (Expected: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10)})</span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveView('dashboard')}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-3 text-xs font-bold shadow-md cursor-pointer"
            >
              Go to Dashboard to Track
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
