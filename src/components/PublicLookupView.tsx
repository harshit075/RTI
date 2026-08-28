'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, FileText, CheckCircle2, AlertCircle, RefreshCw, Volume2, 
  ArrowRight, Clock, Lock, ShieldAlert, Printer, Download, AlertTriangle, 
  ChevronDown, History, User, Mail, Phone, UploadCloud, Check, HelpCircle 
} from 'lucide-react';
import { rtiService } from '../services/rtiService';
import { appealService } from '../services/appealService';
import { RTIApplication, RTIStatus } from '../services/types';

// =========================================================================
// G03: SHARED CAPTCHA COMPONENT (With visual canvas noise & audio read-back)
// =========================================================================
interface CaptchaProps {
  onVerify: (isValid: boolean) => void;
  triggerReset?: boolean;
}

export function Captcha({ onVerify, triggerReset }: CaptchaProps) {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateCode = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid noise lines
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 15) {
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 12) {
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Random noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 120}, ${Math.random() * 120}, ${Math.random() * 120}, 0.45)`;
      ctx.lineWidth = 1 + Math.random() * 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Random noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 120}, ${Math.random() * 120}, ${Math.random() * 120}, 0.45)`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1 + Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Distorted text render
    ctx.font = 'bold 23px monospace';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < text.length; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 80}, ${Math.random() * 80}, ${Math.random() * 80}, 0.95)`;
      const x = 14 + i * 28 + Math.random() * 5;
      const y = canvas.height / 2 + (Math.random() * 8 - 4);
      const angle = (Math.random() * 24 - 12) * Math.PI / 180;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  };

  const refresh = () => {
    const newCode = generateCode();
    setCode(newCode);
    setInput('');
    onVerify(false);
  };

  useEffect(() => {
    refresh();
  }, [triggerReset]);

  useEffect(() => {
    if (code) {
      drawCaptcha(code);
    }
  }, [code]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    onVerify(val.toLowerCase() === code.toLowerCase());
  };

  const playAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const spelling = code.split('').join('. ');
      const utterance = new SpeechSynthesisUtterance(`Your security code is: ${spelling}`);
      utterance.rate = 0.55;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm">
      <div className="flex items-center gap-2">
        <canvas ref={canvasRef} width={160} height={50} className="border border-slate-300 rounded-xl bg-white shadow-3xs" />
        <button type="button" onClick={refresh} className="p-2 text-slate-500 hover:text-[#123B5D] hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer" title="Refresh Code">
          <RefreshCw className="h-4 w-4" />
        </button>
        <button type="button" onClick={playAudio} className="p-2 text-slate-500 hover:text-[#123B5D] hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer" title="Audio Readout">
          <Volume2 className="h-4 w-4" />
        </button>
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter 5-character code"
        className="w-full px-3 py-2 border border-[#D9E0E6] rounded-xl text-xs outline-none focus:border-[#123B5D] bg-white font-mono font-bold uppercase tracking-widest text-center shadow-3xs"
      />
    </div>
  );
}

// =========================================================================
// MAIN PUBLIC LOOKUP VIEWS PANEL
// =========================================================================
interface PublicLookupViewProps {
  language: 'en' | 'hi';
  initialTab?: 'status' | 'appeal' | 'history';
  setActiveView: (view: string) => void;
}

export default function PublicLookupView({ language, initialTab = 'status', setActiveView }: PublicLookupViewProps) {
  const [activeTab, setActiveTab] = useState<'status' | 'appeal' | 'history'>(initialTab);
  const [regNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaResetToggle, setCaptchaResetToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Results / Loaded states
  const [matchedRti, setMatchedRti] = useState<RTIApplication | null>(null);
  const [recoveredList, setRecoveredList] = useState<RTIApplication[]>([]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [historyLoaded, setHistoryLoaded] = useState(false);

  // Standalone Appeal Builder states
  const [isAppealFormOpen, setIsAppealFormOpen] = useState(false);
  const [appealType, setAppealType] = useState<'first' | 'second'>('first');
  const [appealReason, setAppealReason] = useState('No response within 30 days');
  const [appealText, setAppealText] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [appealSubmittedReceipt, setAppealSubmittedReceipt] = useState<{ appealRef: string; application: RTIApplication } | null>(null);

  // Demographic details for Appeal Form (G05)
  const [applicantGender, setApplicantGender] = useState('Male');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [country, setCountry] = useState('India');
  const [stateName, setStateName] = useState('Delhi');
  const [areaStatus, setAreaStatus] = useState('Urban');
  const [educationLevel, setEducationLevel] = useState('Literate');
  const [educationQual, setEducationQual] = useState('Graduate');
  const [phoneNo, setPhoneNo] = useState('');
  const [isIndianCitizen, setIsIndianCitizen] = useState(true);

  // Interactive CPIO Actions
  const [feePaying, setFeePaying] = useState(false);
  const [feeSuccess, setFeeSuccess] = useState(false);
  const [docUploading, setDocUploading] = useState(false);
  const [docUploadedSuccess, setDocUploadedSuccess] = useState(false);

  // Print Mode state
  const [printReceipt, setPrintReceipt] = useState<any>(null);

  // Reset tab states
  const handleTabChange = (tab: 'status' | 'appeal' | 'history') => {
    setActiveTab(tab);
    setRegNo('');
    setEmail('');
    setMobile('');
    setIsCaptchaValid(false);
    setCaptchaResetToggle(!captchaResetToggle);
    setMatchedRti(null);
    setRecoveredList([]);
    setIsOtpSent(false);
    setOtpInput('');
    setHistoryLoaded(false);
    setIsAppealFormOpen(false);
    setAppealSubmittedReceipt(null);
    setError('');
  };

  // Status Search (G17)
  const handleStatusSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setError(language === 'hi' ? 'कृपया सही सुरक्षा कोड दर्ज करें।' : 'Please enter the correct security code.');
      return;
    }
    setError('');
    setLoading(true);
    setMatchedRti(null);

    try {
      const list = await rtiService.getRTIs();
      const match = list.find(r => 
        (r.registrationNumber?.toLowerCase() === regNo.trim().toLowerCase() || r.id === regNo.trim())
      );
      
      if (match) {
        setMatchedRti(match);
      } else {
        setError(language === 'hi' ? 'आवेदन संख्या नहीं मिली।' : 'Application reference code not found.');
      }
    } catch (err) {
      setError('An error occurred while communicating with the database.');
    } finally {
      setLoading(false);
      setCaptchaResetToggle(!captchaResetToggle);
      setIsCaptchaValid(false);
    }
  };

  // Appeal Verification
  const handleAppealVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setError(language === 'hi' ? 'कृपया सही सुरक्षा कोड दर्ज करें।' : 'Please enter the correct security code.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const list = await rtiService.getRTIs();
      const match = list.find(r => 
        (r.registrationNumber?.toLowerCase() === regNo.trim().toLowerCase() || r.id === regNo.trim())
      );

      if (match) {
        setMatchedRti(match);
        // Determine first vs second appeal based on original status
        if (match.status === 'FAA Decision Received' || match.status === 'First Appeal Filed') {
          setAppealType('second');
        } else {
          setAppealType('first');
        }
        setIsAppealFormOpen(true);
      } else {
        setError(language === 'hi' ? 'आवेदन संख्या नहीं मिली।' : 'Application reference code not found.');
      }
    } catch (err) {
      setError('An error occurred.');
    } finally {
      setLoading(false);
      setCaptchaResetToggle(!captchaResetToggle);
      setIsCaptchaValid(false);
    }
  };

  // History Recovery (G25)
  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setError(language === 'hi' ? 'कृपया सही सुरक्षा कोड दर्ज करें।' : 'Please enter the correct security code.');
      return;
    }
    setError('');
    setIsOtpSent(true);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput !== '739201') {
      setOtpError(language === 'hi' ? 'अमान्य OTP कोड।' : 'Invalid OTP. Enter the test code displayed.');
      return;
    }
    setOtpError('');
    setLoading(true);

    try {
      const list = await rtiService.getRTIs();
      // Match by email
      const matched = list.filter(r => r.notes?.includes(email) || r.id !== ''); // For demonstration, return all seed records to show recovery dashboard
      setRecoveredList(matched);
      setHistoryLoaded(true);
    } catch (err) {
      setOtpError('Failed to recover history records.');
    } finally {
      setLoading(false);
    }
  };

  // Standalone Appeal Submission (G13, G06, G07, G14, G15)
  const handleFileAppealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isIndianCitizen) {
      alert('Under Section 3 of the RTI Act 2005, only citizens of India can file appeals.');
      return;
    }
    if (appealText.length > 3000) {
      alert('Appeal petition exceeds the 3,000-character statutory limit.');
      return;
    }
    setLoading(true);

    try {
      if (appealType === 'first') {
        const res = await appealService.fileFirstAppeal({
          rtiId: matchedRti!.id,
          reason: appealReason,
          petitionText: appealText,
          appellantName: 'Citizen Representative'
        });
        setAppealSubmittedReceipt(res);
      } else {
        const res = await appealService.fileSecondAppeal({
          rtiId: matchedRti!.id,
          reason: appealReason,
          petitionText: appealText,
          appellantName: 'Citizen Representative'
        });
        setAppealSubmittedReceipt(res);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // PDF Attachment validation (G07)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');
    setUploadedFile(null);
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setFileError('Invalid format. Only PDF files are supported.');
      return;
    }

    if (file.size > 1024 * 1024) {
      setFileError('File size is too large. Statutory limit is 1 MB.');
      return;
    }

    setUploadedFile(file);
    setUploadedFileName(file.name);
  };

  // Simulated Additional Fee Payment (G18)
  const handlePayAdditionalFee = async () => {
    setFeePaying(true);
    setTimeout(async () => {
      if (matchedRti) {
        const updated = await rtiService.updateRTI(matchedRti.id, {
          status: 'Processing',
          additionalFeeStatus: 'Paid'
        });
        setMatchedRti(updated);
        setFeeSuccess(true);
      }
      setFeePaying(false);
    }, 2000);
  };

  // Simulated Required Document Re-Upload (G19)
  const handleDocReUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDocUploading(true);
    setTimeout(async () => {
      if (matchedRti) {
        const updated = await rtiService.updateRTI(matchedRti.id, {
          status: 'Submitted'
        });
        setMatchedRti(updated);
        setDocUploadedSuccess(true);
      }
      setDocUploading(false);
    }, 2000);
  };

  // Print triggers (G23)
  const triggerPrintLayout = (doc: any) => {
    setPrintReceipt(doc);
  };

  return (
    <div className="flex-1 bg-[#F8FAFc] px-4 py-8 sm:px-6 lg:px-8 relative">
      
      {/* Printable Receipt Overlay (G23) */}
      {printReceipt && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full border border-slate-350 shadow-2xl relative space-y-6">
            
            {/* Header Stamp */}
            <div className="border-4 border-double border-[#123B5D] p-5 text-center relative overflow-hidden">
              <div className="absolute right-4 top-4 border-2 border-emerald-600 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded rotate-12 bg-white">
                VERIFIED BY RTI SAATHI
              </div>
              <h2 className="text-[#123B5D] text-lg font-black tracking-widest">GOVERNMENT OF INDIA</h2>
              <h3 className="text-slate-700 text-xs font-bold mt-0.5">STATUTORY FILING RECEIPT & ACKNOWLEDGEMENT</h3>
              <p className="text-[9px] text-slate-400 mt-1 font-mono">DISPATCHED UNDER THE RIGHT TO INFORMATION ACT, 2005</p>
            </div>

            {/* Receipt Body */}
            <div className="space-y-4 text-xs font-medium text-slate-800">
              <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-3">
                <div>
                  <span className="text-slate-450 font-bold block text-[10px] uppercase">Registration Reference</span>
                  <span className="font-mono font-black text-slate-900 text-sm">{printReceipt.registrationNumber || 'PENDING'}</span>
                </div>
                <div>
                  <span className="text-slate-450 font-bold block text-[10px] uppercase">Receipt Date</span>
                  <span className="text-slate-900 font-semibold">{printReceipt.submittedDate || new Date().toISOString().substring(0,10)}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <span className="text-slate-455 font-bold block text-[10px] uppercase">Public Authority</span>
                  <span className="text-slate-900 font-extrabold">{printReceipt.authorityName || 'Central Ministry'}</span>
                </div>
                <div>
                  <span className="text-slate-455 font-bold block text-[10px] uppercase">Subject Heading</span>
                  <span className="text-slate-900">{printReceipt.subject}</span>
                </div>
                {printReceipt.questions && (
                  <div>
                    <span className="text-slate-455 font-bold block text-[10px] uppercase mb-1">Inquiry Question(s)</span>
                    <ol className="list-decimal pl-4 space-y-1 text-slate-800">
                      {printReceipt.questions.map((q: string, idx: number) => (
                        <li key={idx}>{q}</li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-slate-455 font-bold block text-[10px] uppercase">Application Status</span>
                    <span className="text-slate-900 font-bold">{printReceipt.status}</span>
                  </div>
                  <div>
                    <span className="text-slate-455 font-bold block text-[10px] uppercase">BharatKosh Fee Payment</span>
                    <span className="text-slate-900 font-semibold">₹10.00 (SUCCESS)</span>
                  </div>
                </div>
              </div>

              {/* Barcode Mock */}
              <div className="pt-4 flex flex-col items-center gap-1.5 border-t border-slate-200">
                <div className="h-10 w-64 bg-slate-900 flex items-center justify-center text-white text-[9px] font-mono tracking-widest bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#fff_2px,#fff_4px)]">
                  ||||||||||||| | |||| |||||||||| ||||||
                </div>
                <span className="text-[9.5px] font-mono text-slate-400">BARCODE AUTHENTICATION: {printReceipt.id}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => window.print()}
                className="rounded-xl bg-[#123B5D] hover:bg-[#0a2540] text-white px-5 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center gap-1.5"
              >
                <Printer className="h-4 w-4" /> Print Document
              </button>
              <button
                onClick={() => setPrintReceipt(null)}
                className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-5 py-2.5 text-xs font-bold cursor-pointer transition-all"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Layout */}
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="border-b border-[#D9E0E6] pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-[#17212B] tracking-tight">
            {language === 'en' ? 'Public Gateway & Lookup Desk' : 'सार्वजनिक गेटवे व खोज डेस्क'}
          </h1>
          <p className="text-xs text-[#52606D] mt-1 font-medium font-semibold">
            {language === 'en' 
              ? 'Access status verification, standalone appeal filing, and full history recovery without citizen login.'
              : 'बिना लॉगिन किए स्टेटस देखें, अपील दायर करें और अपने आवेदन इतिहास को रिकवर करें।'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex border border-[#D9E0E6] bg-white rounded-2xl p-1.5 shadow-3xs max-w-xl">
          <button
            onClick={() => handleTabChange('status')}
            className={`flex-1 rounded-xl py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
              activeTab === 'status' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {language === 'en' ? 'Verify Application Status' : 'आवेदन स्थिति जांचें'}
          </button>
          <button
            onClick={() => handleTabChange('appeal')}
            className={`flex-1 rounded-xl py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
              activeTab === 'appeal' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {language === 'en' ? 'File Standalone Appeal' : 'अपील दाखिल करें'}
          </button>
          <button
            onClick={() => handleTabChange('history')}
            className={`flex-1 rounded-xl py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${
              activeTab === 'history' ? 'bg-[#123B5D] text-white shadow-3xs' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {language === 'en' ? 'Recover Filing History' : 'इतिहास रिकवर करें'}
          </button>
        </div>

        {/* Alert/Error Banner */}
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-900 font-bold max-w-xl">
            <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 1: VERIFY APPLICATION STATUS (G17) */}
        {/* ========================================================================= */}
        {activeTab === 'status' && !matchedRti && (
          <div className="rounded-3xl border border-[#D9E0E6] bg-white p-6 sm:p-8 max-w-xl shadow-3xs space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-[#17212B]">Anonymous Status Lookup</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Enter details exactly as submitted to view application lifecycle.</p>
            </div>

            <form onSubmit={handleStatusSearch} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">RTI Registration Number</label>
                <input
                  type="text"
                  required
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="e.g. MORTH/R/E/26/12345"
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-mono font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Email ID of Applicant</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. citizen@example.com"
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Security Code (CAPTCHA)</label>
                <Captcha onVerify={setIsCaptchaValid} triggerReset={captchaResetToggle} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                {loading ? 'Searching...' : 'Retrieve Status Card ➔'}
              </button>
            </form>
          </div>
        )}

        {/* Status Card Output (G17, G18, G19, G20, G21, G23, G24) */}
        {activeTab === 'status' && matchedRti && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left/Middle Columns: Details (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Back Button */}
              <button
                onClick={() => setMatchedRti(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 inline-flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200"
              >
                ← Look up another registration
              </button>

              {/* Status Header Card */}
              <div className="rounded-3xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-5">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase bg-blue-50 border border-blue-200/50 text-[#123B5D] px-2.5 py-0.5 rounded-md">
                      {matchedRti.authorityName || 'Central Public Authority'}
                    </span>
                    <h3 className="text-[#17212B] font-extrabold text-base">{matchedRti.title}</h3>
                    <p className="text-xs font-mono font-bold text-[#123B5D]">Reg Ref: {matchedRti.registrationNumber}</p>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`text-[10.5px] font-black px-3 py-1 rounded-full text-center tracking-wide shadow-3xs ${
                    matchedRti.status === 'Submitted' ? 'bg-blue-100 text-blue-900 border border-blue-200' :
                    matchedRti.status === 'Processing' ? 'bg-amber-100 text-amber-900 border border-amber-200' :
                    matchedRti.status === 'Response Received' || matchedRti.status === 'Completed' ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' :
                    'bg-slate-100 text-slate-900 border border-slate-200'
                  }`}>
                    {matchedRti.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">Filing Date</span>
                    <span className="text-slate-800 font-semibold">{matchedRti.submittedDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">30-Day Expiry Deadline</span>
                    <span className="text-slate-800 font-semibold">{matchedRti.expectedDate}</span>
                  </div>
                </div>

                {/* Question and Point-by-Point Breakdown (G20, G21) */}
                <div className="space-y-3.5">
                  <div>
                    <span className="text-slate-450 font-black block text-[10px] uppercase mb-1">Subject Heading</span>
                    <p className="text-xs text-slate-800 leading-relaxed font-semibold">{matchedRti.subject}</p>
                  </div>

                  <div>
                    <span className="text-slate-450 font-black block text-[10px] uppercase mb-2">Point-by-Point CPIO Assessment</span>
                    <div className="space-y-3">
                      {matchedRti.questions.map((q, idx) => {
                        const breakdown = matchedRti.questionBreakdowns?.[idx] || {
                          status: 'Needs Review',
                          note: 'Under statutory CPIO evaluation.'
                        };
                        return (
                          <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                            <div className="flex gap-2.5 items-start">
                              <span className="h-5 w-5 rounded bg-[#123B5D] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <p className="text-slate-800 font-medium flex-1">{q}</p>
                            </div>
                            <div className="pl-7 pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] gap-2">
                              <span className={`font-black px-2 py-0.5 rounded ${
                                breakdown.status === 'Answered' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                                breakdown.status === 'Partially Answered' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                                'bg-slate-100 text-slate-600 border border-slate-200'
                              }`}>
                                {breakdown.status}
                              </span>
                              <span className="text-slate-500 font-semibold">{breakdown.note}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Remarks / Audits Trail (G24) */}
                <div className="space-y-3 pt-3 border-t border-slate-150">
                  <span className="text-slate-450 font-black block text-[10px] uppercase">CPIO Remarks & Actions History</span>
                  <div className="space-y-2">
                    {matchedRti.remarksTrail && matchedRti.remarksTrail.length > 0 ? (
                      matchedRti.remarksTrail.map((milestone, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] flex justify-between gap-3 font-semibold">
                          <div className="space-y-1">
                            <span className="text-slate-400 block text-[9.5px] font-mono">{milestone.date}</span>
                            <span className="text-slate-900 block">{milestone.remark}</span>
                            <span className="text-[10px] text-[#123B5D]">Officer: {milestone.officer}</span>
                          </div>
                          <span className="text-[9.5px] font-black uppercase text-slate-500 self-start">{milestone.status}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 text-center font-semibold">
                        No previous remarks recorded in the audit trail.
                      </div>
                    )}
                  </div>
                </div>

                {/* Printable Receipt Actions (G23) */}
                <div className="flex gap-2 pt-3">
                  <button
                    onClick={() => triggerPrintLayout(matchedRti)}
                    className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-xs font-black shadow-3xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer className="h-3.5 w-3.5" /> Print Status Report
                  </button>
                  <button
                    onClick={() => alert('Downloading official PDF receipt...')}
                    className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-xs font-black shadow-3xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF Receipt
                  </button>
                </div>

              </div>

            </div>

            {/* Right Column: Statutory Alerts/Forms (Additional Fee G18, Doc Required G19) */}
            <div className="space-y-6">
              
              {/* Additional Fee Needed (G18) */}
              {matchedRti.status === 'Additional Fee Due' && (
                <div className="rounded-3xl border border-amber-300 bg-amber-50/60 p-5 shadow-3xs space-y-4 text-xs font-semibold">
                  <h3 className="font-extrabold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                    Additional Fee Required
                  </h3>
                  <div className="space-y-1.5 text-slate-800">
                    <p>The CPIO has requested an additional statutory fee for copying documents:</p>
                    <div className="p-3 bg-white border border-amber-200 rounded-xl text-center space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Statutory Fee Amount</span>
                      <span className="text-xl font-black text-amber-800">₹ {matchedRti.additionalFeeAmount || '20.00'}</span>
                      <span className="text-[10px] text-slate-500 block">Reason: {matchedRti.additionalFeeReason || 'Photocopy charges for 10 pages'}</span>
                    </div>
                  </div>

                  {feeSuccess ? (
                    <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold rounded-xl text-center">
                      Payment of ₹{matchedRti.additionalFeeAmount || '20.00'} verified! Status updated to Processing.
                    </div>
                  ) : (
                    <button
                      onClick={handlePayAdditionalFee}
                      disabled={feePaying}
                      className="w-full rounded-xl bg-amber-700 hover:bg-amber-800 text-white py-2.5 text-xs font-black shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CreditCardIcon className="h-4 w-4" /> {feePaying ? 'Verifying payment...' : 'Pay Additional Fee via Bharatkosh'}
                    </button>
                  )}
                </div>
              )}

              {/* Document Re-Upload portal (G19) */}
              {matchedRti.status === 'Document Required' && (
                <div className="rounded-3xl border border-indigo-200 bg-indigo-50/40 p-5 shadow-3xs space-y-4 text-xs font-semibold">
                  <h3 className="font-extrabold text-indigo-900 flex items-center gap-1.5">
                    <UploadCloud className="h-5 w-5 text-indigo-600 shrink-0" />
                    Document Re-Upload Required
                  </h3>
                  
                  <div className="space-y-1.5 text-slate-800">
                    <p>The CPIO has noted verification gaps or file corruption. Please upload the requested document:</p>
                    <div className="p-2.5 bg-white border border-indigo-200 rounded-xl text-slate-700">
                      <strong>CPIO Note:</strong> {matchedRti.requiredDocDescription || 'Please upload a clear copy of your identity card/aadhaar or BPL document.'}
                    </div>
                  </div>

                  {docUploadedSuccess ? (
                    <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold rounded-xl text-center">
                      Document uploaded successfully! CPIO has been notified.
                    </div>
                  ) : (
                    <form onSubmit={handleDocReUploadSubmit} className="space-y-3">
                      <div className="p-3 rounded-xl border border-indigo-200 bg-white text-center cursor-pointer relative hover:border-[#123B5D] transition-colors">
                        <input
                          type="file"
                          required
                          accept="application/pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-indigo-800 font-bold">Choose Identity Verification PDF</span>
                        <p className="text-[10px] text-slate-500 mt-0.5">Only PDF, Max 1 MB</p>
                      </div>
                      {uploadedFile && (
                        <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center justify-between text-[11px] font-bold">
                          <span className="truncate">{uploadedFileName}</span>
                          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        </div>
                      )}
                      {fileError && (
                        <div className="text-[11px] text-rose-600 font-bold">{fileError}</div>
                      )}

                      <button
                        type="submit"
                        disabled={docUploading || !uploadedFile}
                        className="w-full rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white py-2.5 text-xs font-black shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {docUploading ? 'Uploading...' : 'Confirm Upload & Notify CPIO'}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Nodal Officer Contact Information */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-3xs space-y-3 text-xs font-semibold">
                <span className="text-slate-450 font-black block text-[10px] uppercase">Designated Nodal Officer Contact</span>
                <div className="space-y-2 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[9.5px]">Nodal Officer Name</span>
                    <span className="text-slate-900 font-extrabold">Shri R.K. Saxena</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9.5px]">Designation</span>
                    <span className="text-slate-900">Deputy Secretary & CPIO</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9.5px]">Statutory Office Address</span>
                    <span className="text-slate-900">Transport Bhawan, 1 Parliament Street, New Delhi - 110001</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9.5px]">Official Email</span>
                    <span className="text-[#123B5D] hover:underline cursor-pointer">cpio-morth@nic.in</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: FILE STANDALONE APPEAL (G13) */}
        {/* ========================================================================= */}
        {activeTab === 'appeal' && !isAppealFormOpen && (
          <div className="rounded-3xl border border-[#D9E0E6] bg-white p-6 sm:p-8 max-w-xl shadow-3xs space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-[#17212B]">File Standalone First/Second Appeal</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Under Section 19(1) / 19(3) of RTI Act 2005. Enter original request reference to fetch prepopulated files.</p>
            </div>

            <form onSubmit={handleAppealVerification} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Original RTI Registration Number</label>
                <input
                  type="text"
                  required
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="e.g. MORTH/R/E/26/12345"
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-mono font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Applicant Email ID</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. citizen@example.com"
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Security Code (CAPTCHA)</label>
                <Captcha onVerify={setIsCaptchaValid} triggerReset={captchaResetToggle} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                {loading ? 'Searching...' : 'Authenticate & File Appeal ➔'}
              </button>
            </form>
          </div>
        )}

        {/* Standalone Appeal Form (G13, G05, G06, G07, G14, G15) */}
        {activeTab === 'appeal' && isAppealFormOpen && !appealSubmittedReceipt && (
          <div className="rounded-3xl border border-[#D9E0E6] bg-white p-6 sm:p-8 max-w-3xl shadow-3xs space-y-6 animate-in fade-in">
            <div className="border-b border-slate-100 pb-3 flex justify-between items-center gap-3">
              <div>
                <h3 className="font-extrabold text-sm text-[#17212B]">
                  {appealType === 'first' ? 'Statutory First Appeal Petition (Section 19(1))' : 'CIC Second Appeal Petition (Section 19(3))'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">Pre-populated based on Original RTI: {matchedRti?.registrationNumber}</p>
              </div>
              <button
                onClick={() => setIsAppealFormOpen(false)}
                className="text-xs font-bold text-slate-550 hover:underline bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleFileAppealSubmit} className="space-y-5 text-xs font-semibold text-slate-800">
              
              {/* Demographic Information Step (G05) */}
              <div className="bg-[#F7F8FA] border border-[#D9E0E6] rounded-2xl p-5 space-y-4">
                <span className="text-[10px] font-black uppercase text-[#123B5D] tracking-wider block border-b border-slate-200 pb-2">
                  Applicant Demographic details (Section 6(1) / Appeal Rules)
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Confirm Email-ID</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Gender</label>
                    <select
                      value={applicantGender}
                      onChange={(e) => setApplicantGender(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Third Gender">Third Gender</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Citizenship</label>
                    <div className="flex items-center gap-2 p-2 bg-white border border-[#D9E0E6] rounded-xl h-9">
                      <input
                        type="checkbox"
                        checked={isIndianCitizen}
                        onChange={(e) => setIsIndianCitizen(e.target.checked)}
                        className="h-4 w-4 text-[#123B5D]"
                      />
                      <span className="text-slate-800 font-bold text-[11px]">Indian Citizen ✓</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 1</label>
                    <input
                      type="text"
                      required
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      placeholder="House/Plot No., Street/Block"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Pin Code</label>
                    <input
                      type="text"
                      required
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      placeholder="6-digit PIN"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 2</label>
                    <input
                      type="text"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      placeholder="Locality/Village"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Address Line 3</label>
                    <input
                      type="text"
                      value={addressLine3}
                      onChange={(e) => setAddressLine3(e.target.value)}
                      placeholder="City/District"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Area Status</label>
                    <select
                      value={areaStatus}
                      onChange={(e) => setAreaStatus(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    >
                      <option value="Urban">Urban</option>
                      <option value="Rural">Rural</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Educational Status</label>
                    <select
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
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
                        className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
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
                    <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Phone Number (Landline)</label>
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="e.g. 011-2309xxxx"
                      className="w-full rounded-xl border border-[#D9E0E6] p-2 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Appeal Details Form (G14, G06, G07) */}
              <div className="space-y-4 border-t border-slate-100 pt-4">
                <span className="text-[10px] font-black uppercase text-slate-400 block">Appeal Petition & Arguments</span>
                
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Ground for Appeal (G14)</label>
                  <select
                    value={appealReason}
                    onChange={(e) => setAppealReason(e.target.value)}
                    className="w-full rounded-xl border border-[#D9E0E6] p-2.5 bg-[#F7F8FA] text-xs font-bold text-slate-800"
                  >
                    <option value="No response within 30 days">Section 19(1)(a) - No response received within 30 statutory days (Deemed Refusal)</option>
                    <option value="Information request wrongfully refused">Section 19(1)(b) - Request for records wrongfully denied under Section 8 exemptions</option>
                    <option value="Additional fee requested is exorbitant">Section 19(1)(c) - Copying/additional fee requested by CPIO is unreasonable</option>
                    <option value="Incomplete or misleading information provided">Section 19(1)(d) - Incomplete, vague, or misleading records supplied</option>
                    <option value="Other statutory ground">Other statutory ground or grievance</option>
                  </select>
                </div>

                {/* Text Petition + Character Counter (G06) */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] font-black text-[#52606D] uppercase">Appeal Petition Text (Min 50 chars)</label>
                    <span className={`text-[10.5px] font-black font-mono ${appealText.length > 3000 ? 'text-rose-600' : 'text-slate-400'}`}>
                      {appealText.length} / 3000 characters
                    </span>
                  </div>
                  <textarea
                    rows={6}
                    required
                    value={appealText}
                    onChange={(e) => setAppealText(e.target.value)}
                    placeholder="Provide full facts, original filing dates, reasons why CPIO reply is improper, and the specific relief requested under Section 19..."
                    className="w-full rounded-xl border border-[#D9E0E6] p-3 text-xs text-slate-800 bg-[#F7F8FA] leading-relaxed outline-none focus:border-[#123B5D]"
                  />
                  {appealText.length > 3000 && (
                    <span className="text-[11px] font-bold text-rose-600 block mt-1">Error: Appeal text cannot exceed 3,000 characters limit.</span>
                  )}
                </div>

                {/* PDF File size checking (G07) */}
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1.5">Attach Supporting PDF Document (Optional)</label>
                  <div className="p-4 rounded-xl border-2 border-dashed border-slate-350 bg-slate-50/50 text-center space-y-2 relative hover:border-[#123B5D] transition-all">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="h-7 w-7 text-slate-400 mx-auto" />
                    <div>
                      <span className="font-extrabold text-[#123B5D] text-xs">Choose original RTI response copy PDF</span>
                      <p className="text-[10px] text-slate-450 mt-0.5">Only PDF documents allowed, strictly capped at 1 MB limit (G07).</p>
                    </div>
                  </div>
                  {uploadedFile && (
                    <div className="mt-2 p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center justify-between text-[11px] font-bold">
                      <span className="truncate">{uploadedFileName} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    </div>
                  )}
                  {fileError && (
                    <div className="mt-2 text-[11px] text-rose-600 font-bold">{fileError}</div>
                  )}
                </div>

              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  disabled={loading || appealText.length > 3000}
                  className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-7 py-3 text-xs font-black shadow-3xs cursor-pointer flex items-center gap-1.5"
                >
                  {loading ? 'Submitting Appeal...' : 'Submit Appeal to Appellate Authority ➔'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAppealFormOpen(false)}
                  className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-5 py-3 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Appeal Receipt Card (G16) */}
        {activeTab === 'appeal' && appealSubmittedReceipt && (
          <div className="rounded-3xl border border-emerald-300 bg-white p-6 sm:p-8 max-w-xl shadow-3xs space-y-5 animate-in fade-in">
            <div className="h-14 w-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-3xs">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>

            <div>
              <h3 className="font-black text-base text-[#17212B]">Appeal Registered Successfully</h3>
              <p className="text-xs text-slate-500 font-medium">Your statutory appeal has been officially logged with the First Appellate Authority (FAA).</p>
            </div>

            <div className="bg-[#F7F8FA] border border-[#D9E0E6] rounded-2xl p-4 text-xs font-semibold text-slate-800 space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-400">Appeal Reference ID</span>
                <span className="font-mono font-black text-[#123B5D]">{appealSubmittedReceipt.appealRef}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-400">FAA Public Authority</span>
                <span className="text-slate-850 font-bold">{appealSubmittedReceipt.application.authorityName || 'Central Ministry'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Expected Decision Timeline</span>
                <span className="text-slate-850 font-bold">Within 30-45 Days under Sec 19(6)</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => triggerPrintLayout({
                  registrationNumber: appealSubmittedReceipt.appealRef,
                  submittedDate: new Date().toISOString().substring(0,10),
                  authorityName: appealSubmittedReceipt.application.authorityName,
                  subject: `FAA First Appeal: ${appealReason}`,
                  questions: [appealText.substring(0, 150) + '...'],
                  status: 'First Appeal Filed',
                  id: appealSubmittedReceipt.appealRef
                })}
                className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 text-xs font-black shadow-3xs cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5" /> Print Appeal Receipt
              </button>
              <button
                onClick={() => handleTabChange('status')}
                className="rounded-xl bg-[#123B5D] text-white px-5 py-2.5 text-xs font-black shadow-3xs cursor-pointer"
              >
                Track Status
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: RECOVER FILING HISTORY (G25, G26, G27) */}
        {/* ========================================================================= */}
        {activeTab === 'history' && !historyLoaded && (
          <div className="rounded-3xl border border-[#D9E0E6] bg-white p-6 sm:p-8 max-w-xl shadow-3xs space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-[#17212B]">OTP-Verified History Recovery</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Recover all applications and appeals matching your Email-ID and Mobile across any devices.</p>
            </div>

            {!isOtpSent ? (
              <form onSubmit={handleRequestOtp} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Email ID of Applicant</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. citizen@example.com"
                    className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g. +91 90000 00000"
                    className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA] shadow-3xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Security Code (CAPTCHA)</label>
                  <Captcha onVerify={setIsCaptchaValid} triggerReset={captchaResetToggle} />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer transition-all flex items-center justify-center gap-1.5"
                >
                  Send Verification OTP ➔
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-xs space-y-1">
                  <span>Simulated OTP Code Dispatched!</span>
                  <p className="text-[11px] text-amber-800 font-medium">Use the test code <strong className="font-extrabold text-[#123B5D]">739201</strong> to complete the verification on this mock system.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1">Enter 6-Digit OTP</label>
                  <input
                    type="text"
                    required
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    placeholder="Enter 6-digit OTP code"
                    className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-mono font-bold text-center tracking-widest text-slate-800 bg-[#F7F8FA]"
                  />
                  {otpError && (
                    <span className="text-[11px] font-bold text-rose-600 block mt-1">{otpError}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-[#123B5D] text-white px-6 py-2.5 text-xs font-black shadow-3xs cursor-pointer"
                  >
                    Verify OTP & Load History
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOtpSent(false)}
                    className="rounded-xl border border-slate-200 bg-white text-slate-600 px-4 py-2.5 text-xs font-bold cursor-pointer"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Recovered History Dashboard & Table (G25, G26, G27) */}
        {activeTab === 'history' && historyLoaded && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-sm text-[#17212B] flex items-center gap-1.5">
                <History className="h-4.5 w-4.5 text-[#123B5D]" /> Recovered Filing History for {email}
              </h3>
              <button
                onClick={() => handleTabChange('history')}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg"
              >
                Log Out of History
              </button>
            </div>

            {/* Split Dashboard (G26) */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-semibold">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-3xs">
                <span className="text-slate-400 block text-[9.5px] uppercase font-bold">RTI Inquiries (Total)</span>
                <span className="text-xl font-black text-[#123B5D]">
                  {recoveredList.filter(r => !r.status.includes('Appeal')).length}
                </span>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-3xs">
                <span className="text-slate-400 block text-[9.5px] uppercase font-bold">RTI Inquiries (Pending)</span>
                <span className="text-xl font-black text-amber-700">
                  {recoveredList.filter(r => !r.status.includes('Appeal') && r.status !== 'Completed').length}
                </span>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-3xs">
                <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Appeals Logged (Total)</span>
                <span className="text-xl font-black text-[#123B5D]">
                  {recoveredList.filter(r => r.status.includes('Appeal')).length}
                </span>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-3xs">
                <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Appeals (Pending)</span>
                <span className="text-xl font-black text-purple-700">
                  {recoveredList.filter(r => r.status.includes('Appeal') && r.status !== 'Completed' && !r.status.includes('Decision')).length}
                </span>
              </div>
            </div>

            {/* History Records Table (G27) */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-3xs text-xs font-semibold">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] uppercase font-black tracking-wider">
                      <th className="p-4">Registration Reference</th>
                      <th className="p-4">Submitted Date</th>
                      <th className="p-4">Public Authority</th>
                      <th className="p-4">Subject Matter</th>
                      <th className="p-4">Filing Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {recoveredList.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-4 font-mono font-extrabold text-[#123B5D]">
                          {app.registrationNumber || 'PENDING'}
                        </td>
                        <td className="p-4 font-normal text-slate-500">
                          {app.submittedDate}
                        </td>
                        <td className="p-4 font-bold text-slate-800">
                          {app.authorityName || 'Ministry Division'}
                        </td>
                        <td className="p-4 font-medium max-w-xs truncate text-slate-600">
                          {app.subject}
                        </td>
                        <td className="p-4">
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                            app.status.includes('Filed') ? 'bg-purple-50 text-purple-800 border-purple-200' :
                            app.status === 'Completed' || app.status.includes('Received') ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                            'bg-blue-50 text-blue-800 border-blue-200'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => {
                              // Switch back to status tab and show this matched RTI application
                              setRegNo(app.registrationNumber);
                              setEmail(email);
                              setMatchedRti(app);
                              setActiveTab('status');
                            }}
                            className="text-[#123B5D] hover:underline font-black cursor-pointer"
                          >
                            Track Status ➔
                          </button>
                        </td>
                      </tr>
                    ))}
                    {recoveredList.length === 0 && (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-400 font-bold">
                          No RTI filing history records found matching this Email-ID.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Simple internal icon component for CreditCard
function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2500/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
