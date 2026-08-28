'use client';

import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ChevronRight, CornerDownRight, Landmark, 
  AlertCircle, AlertTriangle, Edit2, ShieldCheck, QrCode, CreditCard, Lock, ArrowRight,
  TrendingUp, CircleDot, Info, UploadCloud, FileText, Check, ArrowLeft, Download
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
  const [step, setStep] = useState<'form' | 'editor' | 'review' | 'payment' | 'processing' | 'success'>('editor');

  const currentAuth = mockAuthorities.find(a => a.id === (draftRti?.authorityId || 'morth')) || mockAuthorities[0];
  const isState = currentAuth?.level === 'State' || draftRti?.isStateDept;
  
  // Form fields
  const [location, setLocation] = useState(draftRti?.location || 'Budgam, Jammu and Kashmir');
  const [timeFrom, setTimeFrom] = useState('2022-01-01');
  const [timeTo, setTimeTo] = useState('2025-12-31');
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['Expenditure', 'Work order', 'Inspection report']);
  
  // Edited questions
  const [subject, setSubject] = useState(
    draftRti?.topic === 'passport' 
      ? 'Status and delays in passport issuance' 
      : `Expenditure and sanction records for road project in ${draftRti?.location || location || 'Budgam, Jammu and Kashmir'}`
  );

  const initialGenerated = draftRti?.topic === 'passport' ? [
    'Provide the date on which police verification was requested and the date it was received by CPV office.',
    'Provide copies of all internal notes, verification reviews, and officer remarks regarding passport file DL2068472910.',
    'State the official reasons and policy rules under which the passport has not been dispatched yet.',
    'Provide the current status and expected dispatch date of the passport.'
  ] : [
    `Provide copies of the administrative and technical sanctions issued for the road project in ${draftRti?.location || location || 'Budgam, Jammu and Kashmir'} during 2022-2025.`,
    'Provide the total funds sanctioned, released, and actually spent on this specific project during the mentioned time period.',
    'Provide a copy of the contract agreement, tender awards, and work order issued to the contractor.',
    'Provide copies of all inspection reports, safety compliance logs, and completion certificates issued by the project auditors.',
    'Provide details of quality materials test reports conducted during road construction.'
  ];

  const [questions, setQuestions] = useState<string[]>(initialGenerated);
  
  // Applicant details
  const [name, setName] = useState('Aarav Sharma');
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [confirmEmail, setConfirmEmail] = useState('aarav.sharma@example.com');
  const [phone, setPhone] = useState('+91 90000 00000');
  const [gender, setGender] = useState('Male');
  const [addressLine1, setAddressLine1] = useState('Flat 402, Block C, Heritage Apartments');
  const [addressLine2, setAddressLine2] = useState('Siri Fort Area');
  const [addressLine3, setAddressLine3] = useState('New Delhi');
  const [pinCode, setPinCode] = useState('110049');
  const [country, setCountry] = useState('India');
  const [stateName, setStateName] = useState('Delhi');
  const [areaStatus, setAreaStatus] = useState('Urban');
  const [educationLevel, setEducationLevel] = useState('Literate');
  const [educationQual, setEducationQual] = useState('Graduate');
  const [phoneNo, setPhoneNo] = useState('');
  const [isIndianCitizen, setIsIndianCitizen] = useState(true);
  const [bplStatus, setBplStatus] = useState<boolean>(false);
  const [bplCardNo, setBplCardNo] = useState('');
  const [bplYear, setBplYear] = useState('');
  const [bplAuthority, setBplAuthority] = useState('');
  
  // Payment simulation state
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
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
        `Provide copies of the administrative and technical sanctions issued for the road project in ${location || 'Budgam, Jammu and Kashmir'} during ${timeFrom.substring(0,4)}-${timeTo.substring(0,4)}.`,
        'Provide the total funds sanctioned, released, and actually spent on this specific project during the mentioned time period.',
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
    if (bplStatus) {
      if (!bplCardNo.trim() || !bplYear.trim() || !bplAuthority.trim()) {
        alert("Please provide all BPL details (Card Number, Year of Issue, and Issuing Authority) to proceed with fee waiver.");
        return;
      }
      simulateSubmission();
    } else {
      setStep('payment');
    }
  };

  const simulateSubmission = () => {
    setStep('processing');
    
    const rand = Math.floor(10000 + Math.random() * 90000);
    const regNo = draftRti?.topic === 'passport' 
      ? `MEXTA/R/2026/${rand}` 
      : `RTI-2026-${rand}`;
    setGeneratedRegNo(regNo);

    setTimeout(() => {
      const newApp = {
        id: `rti-${Date.now()}`,
        title: draftRti?.topic === 'passport' ? 'Passport Issuance Delay Inquiry' : subject,
        authorityId: draftRti?.authorityId || 'morth',
        authorityName: draftRti?.authorityName || currentAuth.name,
        subject: subject,
        questions: questions,
        submittedDate: new Date().toISOString().substring(0, 10),
        expectedDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
        status: 'Submitted' as const,
        paymentStatus: 'Success' as const, // Fee waived counts as success/paid for submission
        registrationNumber: regNo,
        answeredCount: 0,
        totalQuestions: questions.length,
        // Persist demographics & BPL info
        applicantName: name,
        applicantEmail: email,
        applicantPhone: phone,
        gender,
        addressLine1,
        addressLine2,
        addressLine3,
        pinCode,
        stateName,
        areaStatus,
        educationLevel,
        educationQual,
        phoneNo,
        isIndianCitizen,
        bplStatus,
        bplCardNo: bplStatus ? bplCardNo : '',
        bplYear: bplStatus ? bplYear : '',
        bplAuthority: bplStatus ? bplAuthority : ''
      };
      
      addNewRti(newApp);
      addNotification(`RTI registered successfully. Reg No: ${regNo}`, 'update');
      
      setStep('success');
    }, 1800);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      
      {/* Visual Progress Stepper */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-[10.5px] sm:text-xs font-bold text-slate-400 gap-1 border-b border-[#D9E0E6] pb-3">
          <span className={step === 'form' ? 'text-[#123B5D] font-extrabold' : 'text-slate-500'}>
            1. AI Parameters
          </span>
          <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />
          <span className={step === 'editor' ? 'text-[#123B5D] font-extrabold' : 'text-slate-500'}>
            2. Draft Builder
          </span>
          <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />
          <span className={step === 'review' ? 'text-[#123B5D] font-extrabold' : 'text-slate-500'}>
            3. Quality Check
          </span>
          <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />
          <span className={step === 'payment' || step === 'processing' ? 'text-[#123B5D] font-extrabold' : 'text-slate-500'}>
            4. Pay ₹10
          </span>
          <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />
          <span className={step === 'success' ? 'text-emerald-700 font-extrabold' : 'text-slate-500'}>
            5. Filed
          </span>
        </div>
      </div>

      {/* STEP 1: FORM PARAMETERS */}
      {step === 'form' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
            <h3 className="font-extrabold text-sm text-[#17212B]">
              AI Request Parameters & Scope
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">
                  Location / Geographic Jurisdiction
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Budgam, Jammu and Kashmir"
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-[#123B5D] bg-[#F7F8FA] font-medium shadow-3xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">From Date</label>
                  <input
                    type="date"
                    value={timeFrom}
                    onChange={(e) => setTimeFrom(e.target.value)}
                    className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-[#123B5D] bg-[#F7F8FA] font-medium shadow-3xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">To Date</label>
                  <input
                    type="date"
                    value={timeTo}
                    onChange={(e) => setTimeTo(e.target.value)}
                    className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs text-slate-800 outline-none focus:border-[#123B5D] bg-[#F7F8FA] font-medium shadow-3xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-2">
                  Select Specific Records Required
                </label>
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
                            ? 'bg-[#123B5D] border-[#123B5D] text-white' 
                            : 'bg-white border-[#D9E0E6] text-slate-700 hover:bg-slate-50'
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

          <div className="flex justify-between items-center">
            <button
              onClick={() => setActiveView('onboarding')}
              className="rounded-xl border border-[#D9E0E6] bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              ← Back to Finder
            </button>
            <button
              onClick={generateDraft}
              className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center gap-1.5"
            >
              <span>Generate AI RTI Draft</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DRAFT BUILDER (EDITOR) */}
      {step === 'editor' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 sm:p-8 shadow-3xs space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-sm text-[#17212B]">
                RTI Application Draft Details
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#B7791F] bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5" /> AI Drafted
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">
                  Subject of Application
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#123B5D] bg-[#F7F8FA] shadow-3xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-2">
                  Information Requested (Edit If Required)
                </label>
                <div className="space-y-3">
                  {questions.map((q, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <span className="h-6 w-6 rounded-lg bg-[#123B5D] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">
                        {idx + 1}
                      </span>
                      <textarea
                        rows={2}
                        value={q}
                        onChange={(e) => handleQuestionChange(idx, e.target.value)}
                        className="flex-1 rounded-xl border border-[#D9E0E6] p-3 text-xs text-slate-800 outline-none focus:border-[#123B5D] bg-[#F7F8FA] leading-relaxed shadow-3xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep('form')}
              className="rounded-xl border border-[#D9E0E6] bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Edit parameters
            </button>
            <button
              onClick={submitToReview}
              className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center gap-1.5"
            >
              <span>Analyze Application Quality</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: QUALITY CHECK & APPLICANT DETAILS */}
      {step === 'review' && (
        <div className="space-y-6">
          
          {/* Quality Assessment Scorecard */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/40 p-6 shadow-3xs space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-sm text-emerald-900 flex items-center gap-1.5">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Statutory Quality & Compliance Check
              </h3>
              <span className="text-xs font-black bg-emerald-700 text-white px-3 py-1 rounded-full">
                Score: 95/100 (Strong)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-emerald-200">
                <span className="text-slate-500 font-bold block text-[10px] uppercase">Section 8 Exemption</span>
                <span className="font-extrabold text-emerald-800">Clear (0 Violations)</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-emerald-200">
                <span className="text-slate-500 font-bold block text-[10px] uppercase">Section 2(f) Suitability</span>
                <span className="font-extrabold text-emerald-800">100% Material Records</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-emerald-200">
                <span className="text-slate-500 font-bold block text-[10px] uppercase">Authority Match</span>
                <span className="font-extrabold text-emerald-800">{currentAuth.name}</span>
              </div>
            </div>
          </div>

          {/* Applicant Credentials */}
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4">
            <h3 className="font-extrabold text-sm text-[#17212B]">
              Applicant Details (Section 6(1) / G05 Compliance Checklist)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Applicant Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Email ID</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Confirm Email-ID</label>
                <input
                  type="email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Third Gender">Third Gender</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Mobile Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Citizenship</label>
                <div className="flex items-center gap-2 p-2.5 bg-[#F7F8FA] border border-[#D9E0E6] rounded-xl h-[38px]">
                  <input
                    type="checkbox"
                    checked={isIndianCitizen}
                    onChange={(e) => setIsIndianCitizen(e.target.checked)}
                    className="h-4 w-4 text-[#123B5D]"
                  />
                  <span className="text-slate-850 font-bold text-[11px]">Indian Citizen</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 1</label>
                <input
                  type="text"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  placeholder="House No, Street, Landmark"
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Pin Code</label>
                <input
                  type="text"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="6-digit PIN"
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-mono font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 2</label>
                <input
                  type="text"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 3</label>
                <input
                  type="text"
                  value={addressLine3}
                  onChange={(e) => setAddressLine3(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">State / UT</label>
                <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Area Status</label>
                <select
                  value={areaStatus}
                  onChange={(e) => setAreaStatus(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                >
                  <option value="Urban">Urban</option>
                  <option value="Rural">Rural</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Education Status</label>
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                >
                  <option value="Literate">Literate</option>
                  <option value="Illiterate">Illiterate</option>
                </select>
              </div>
              {educationLevel === 'Literate' && (
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Educational Qualification</label>
                  <select
                    value={educationQual}
                    onChange={(e) => setEducationQual(e.target.value)}
                    className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                  >
                    <option value="Below Primary">Below Primary</option>
                    <option value="Primary">Primary</option>
                    <option value="Middle">Middle</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Above Graduate">Above Graduate</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Phone (Landline)</label>
                <input
                  type="text"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] p-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA]"
                />
              </div>
            </div>
          </div>

            {/* BPL fee waiver toggle */}
            <div className="p-4 rounded-xl border border-slate-200 bg-[#F7F8FA] text-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800">Below Poverty Line (BPL) Fee Waiver</span>
                  <p className="text-[11px] text-slate-500">Statutory ₹10 fee is completely waived under Section 7(5).</p>
                </div>
                <input
                  type="checkbox"
                  checked={bplStatus}
                  onChange={(e) => setBplStatus(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-[#123B5D]"
                />
              </div>

              {bplStatus && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">BPL Card No.</label>
                    <input
                      type="text"
                      value={bplCardNo}
                      onChange={(e) => setBplCardNo(e.target.value)}
                      placeholder="Enter Card Number"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 text-xs font-bold text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Year of Issue</label>
                    <input
                      type="text"
                      value={bplYear}
                      onChange={(e) => setBplYear(e.target.value)}
                      placeholder="e.g. 2024"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 text-xs font-bold text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Issuing Authority</label>
                    <input
                      type="text"
                      value={bplAuthority}
                      onChange={(e) => setBplAuthority(e.target.value)}
                      placeholder="e.g. Tehsildar / Food Dept"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 text-xs font-bold text-slate-800 bg-white"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Supporting Document Upload drag/drop area */}
            <div className="p-4 rounded-xl border-2 border-dashed border-slate-300 hover:border-[#123B5D] transition-colors bg-slate-50/50 text-xs text-center space-y-2">
              <UploadCloud className="h-8 w-8 text-slate-400 mx-auto" />
              <div>
                <span className="font-bold text-slate-800">
                  Upload Supporting Document {bplStatus ? '(Compulsory BPL Proof)' : '(Optional)'}
                </span>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Drag and drop or click to browse. Only PDF is permitted, maximum 1 MB limit.
                </p>
              </div>
              
              {/* Mock upload success info */}
              <div className="flex items-center justify-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200 inline-block text-[11px] max-w-xs mx-auto">
                <FileText className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">supporting_evidence.pdf (142 KB) — Uploaded ✓</span>
              </div>
            </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep('editor')}
              className="rounded-xl border border-[#D9E0E6] bg-white px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Back to Draft
            </button>
            <button
              onClick={proceedToPayment}
              className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center gap-1.5"
            >
              <span>{bplStatus ? 'Submit Application (Fee Waived)' : 'Proceed to Payment (₹10)'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      )}

      {/* STEP 4: PAYMENT EXPERIENCE */}
      {step === 'payment' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#D9E0E6] bg-white p-6 sm:p-8 shadow-3xs space-y-6">
            <div className="text-center pb-4 border-b border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-[#123B5D] px-2.5 py-0.5 rounded-md">
                Bharatkosh Payment Gateway Simulation
              </span>
              <h3 className="font-black text-xl text-[#17212B] mt-2">Statutory RTI Application Fee</h3>
              <div className="text-3xl font-black text-[#123B5D] mt-2">₹ 10.00</div>
              <p className="text-xs text-slate-500 mt-1 font-medium">Rule 3, RTI (Regulation of Fee and Cost) Rules, 2012</p>
              <div className="mt-2 text-[11px] text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-2 max-w-md mx-auto">
                <strong>Demonstration Notice:</strong> All payment steps are simulated for practice and citizen education. No real banking charge is deducted.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'upi' ? 'border-[#123B5D] bg-blue-50/50 text-[#123B5D] font-extrabold' : 'border-[#D9E0E6] hover:bg-slate-50'
                }`}
              >
                <div className="text-xs">UPI / QR Code</div>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'card' ? 'border-[#123B5D] bg-blue-50/50 text-[#123B5D] font-extrabold' : 'border-[#D9E0E6] hover:bg-slate-50'
                }`}
              >
                <div className="text-xs">Debit / Credit Card</div>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'netbanking' ? 'border-[#123B5D] bg-blue-50/50 text-[#123B5D] font-extrabold' : 'border-[#D9E0E6] hover:bg-slate-50'
                }`}
              >
                <div className="text-xs">Internet Banking</div>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#D9E0E6] text-center space-y-4">
              <div className="h-36 w-36 mx-auto bg-white p-2 rounded-2xl border border-slate-200 flex items-center justify-center">
                <QrCode className="h-28 w-28 text-slate-800" />
              </div>
              <p className="text-xs font-bold text-slate-700">Simulate ₹10 Payment via UPI / QR</p>
              
              <button
                onClick={simulateSubmission}
                className="w-full max-w-sm mx-auto rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white py-3 text-xs font-black shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <Lock className="h-4 w-4" /> Confirm Simulated ₹10 Payment & Submit RTI ➔
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Secured by Bharatkosh / NIC Payment Gateway</span>
            <button
              onClick={() => setStep('review')}
              className="text-slate-600 font-bold hover:underline cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: PROCESSING ANIMATION */}
      {step === 'processing' && (
        <div className="rounded-3xl border border-[#D9E0E6] bg-white p-12 text-center shadow-3xs max-w-lg mx-auto space-y-4">
          <div className="h-12 w-12 rounded-full border-4 border-[#123B5D] border-t-transparent animate-spin mx-auto" />
          <h3 className="font-extrabold text-base text-[#17212B]">CONFIRMING STATUTORY SUBMISSION</h3>
          <p className="text-xs text-[#52606D] leading-relaxed">
            Verifying ₹10 fee transaction and assigning CPIO dispatch registration number.
          </p>
        </div>
      )}

      {/* STEP 6: SUBMISSION SUCCESS */}
      {step === 'success' && (
        <div className="rounded-3xl border border-emerald-300 bg-white p-8 sm:p-10 text-center shadow-3xs max-w-xl mx-auto space-y-5 animate-in fade-in">
          <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-3xs">
            <CheckCircle2 className="h-9 w-9 text-emerald-600" />
          </div>
          
          <h3 className="font-black text-xl text-[#17212B]">Application Submitted Successfully</h3>
          <p className="text-xs text-[#52606D]">
            Your RTI request has been registered and officially dispatched to the designated Public Authority.
          </p>

          <div className="bg-[#F7F8FA] border border-[#D9E0E6] rounded-2xl p-4 text-xs text-left space-y-2">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 font-bold">Registration Reference</span>
              <span className="font-mono font-black text-[#123B5D]">{generatedRegNo}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-500 font-bold">Public Authority</span>
              <span className="font-semibold text-slate-800">{draftRti?.authorityName || currentAuth.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-bold">Statutory 30-Day Deadline</span>
              <span className="font-semibold text-slate-800">Within 30 Days ({new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10)})</span>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setActiveView('dashboard')}
              className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-7 py-3 text-xs font-black shadow-3xs cursor-pointer transition-all"
            >
              Go to Dashboard to Track ➔
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
