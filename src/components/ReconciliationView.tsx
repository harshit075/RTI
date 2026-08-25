'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, CheckCircle2, AlertTriangle, 
  HelpCircle, CreditCard, Lock, Sparkles, Database, Search
} from 'lucide-react';
import { RTIApplication } from '../data/mockData';

interface ReconciliationViewProps {
  setActiveView: (view: string) => void;
  language: 'en' | 'hi';
  rtis: RTIApplication[];
  fetchRtis: () => Promise<void>;
}

export default function ReconciliationView({
  setActiveView,
  language,
  rtis,
  fetchRtis
}: ReconciliationViewProps) {
  const [utrNumber, setUtrNumber] = useState('');
  const [selectedRtiId, setSelectedRtiId] = useState('');
  const [paymentMode, setPaymentMode] = useState('upi');
  const [reconciling, setReconciling] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<'success' | 'not-found' | null>(null);
  const [reconciledRegNo, setReconciledRegNo] = useState('');

  // Steps for reconciliation animation
  const steps = [
    'Connecting to SBI ePay secure gateway...',
    'Syncing ledger entries with National Informatics Centre (NIC) treasury...',
    'Searching database for matching payment reference keys...',
    'Authenticating transaction authorization token...'
  ];

  const t = {
    en: {
      title: 'Payment Reconciliation Portal',
      subtitle: 'Did money get deducted but your RTI registration is pending? Reconcile it below.',
      utrLabel: 'Enter Transaction ID or Bank UTR Number',
      utrPlaceholder: 'e.g. TXN_83910482910 or SBI82910492810',
      modeLabel: 'Payment Gateway Mode',
      selectRtiLabel: 'Select Draft / Pending RTI to link:',
      noDrafts: 'No pending draft RTIs found. We will auto-create a verified application for you.',
      btnReconcile: 'Verify & Reconcile Payment',
      btnBack: 'Back to Homepage',
      reconcilingText: 'Verifying Transaction with Bank...',
      successTitle: 'Sync Successful! Payment Reconciled',
      successDesc: 'We verified your payment of ₹10 with treasury servers. The application is now officially registered.',
      regNo: 'NIC Registration Number',
      status: 'Current Status',
      dashboardBtn: 'Go to My RTIs Dashboard',
      reconcileAnother: 'Reconcile Another Payment'
    },
    hi: {
      title: 'भुगतान मिलान पोर्टल (Reconciliation)',
      subtitle: 'क्या पैसे कट गए लेकिन आरटीआई पंजीकरण लंबित है? नीचे उसका मिलान करें।',
      utrLabel: 'लेनदेन आईडी (Transaction ID) या बैंक यूटीआर नंबर दर्ज करें',
      utrPlaceholder: 'जैसे TXN_83910482910 या SBI82910492810',
      modeLabel: 'भुगतान का प्रकार',
      selectRtiLabel: 'लिंक करने के लिए ड्राफ्ट / लंबित आरटीआई चुनें:',
      noDrafts: 'कोई लंबित ड्राफ्ट आरटीआई नहीं मिला। हम आपके लिए एक सत्यापित आवेदन स्वतः बना देंगे।',
      btnReconcile: 'सत्यापित करें और भुगतान मिलान करें',
      btnBack: 'मुख्य पृष्ठ पर वापस जाएँ',
      reconcilingText: 'बैंक के साथ लेनदेन का सत्यापन किया जा रहा है...',
      successTitle: 'मिलान सफल! भुगतान सत्यापित',
      successDesc: 'हमने ट्रेजरी सर्वर के साथ आपके ₹10 के भुगतान का सत्यापन कर लिया है। आवेदन अब आधिकारिक रूप से पंजीकृत है।',
      regNo: 'एनआईसी पंजीकरण संख्या',
      status: 'वर्तमान स्थिति',
      dashboardBtn: 'मेरे आरटीआई डैशबोर्ड पर जाएं',
      reconcileAnother: 'दूसरा भुगतान मिलान करें'
    }
  }[language];

  // Eligible RTIs that need reconciliation (either in Draft, or Mock ones)
  const draftRtis = rtis.filter(r => r.status === 'Draft' || !r.registrationNumber);

  const startReconciliation = () => {
    if (!utrNumber.trim()) return;

    setReconciling(true);
    setResult(null);
    setStepIndex(0);

    // Simulate multi-step check
    const interval = setInterval(() => {
      setStepIndex(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          finishReconciliation();
          return prev;
        }
      });
    }, 900);
  };

  const finishReconciliation = async () => {
    setReconciling(false);
    
    // Generate official registration number
    const rand = Math.floor(10000 + Math.random() * 90000);
    const regNo = `MEXTA/R/2026/${rand}`;
    setReconciledRegNo(regNo);

    try {
      if (selectedRtiId) {
        // Find the selected draft and mark it as submitted in the database
        await fetch(`/api/rtis/${selectedRtiId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            status: 'Submitted',
            paymentStatus: 'Success',
            paymentId: utrNumber,
            registrationNumber: regNo
          })
        });
      } else {
        // Create a mock application that is now reconciled in the database
        const newApp = {
          id: `rti-reconciled-${Date.now()}`,
          title: 'Reconciled Service Inquiry',
          authorityId: 'uidai',
          subject: 'Reconciled application regarding biometric logs and updates database',
          questions: [
            'Provide the logs of update attempts and failure codes for biometric correction requested in June 2026.',
            'Provide administrative circulars governing biometric update retry exemptions.'
          ],
          submittedDate: new Date().toISOString().substring(0, 10),
          expectedDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
          status: 'Submitted',
          paymentStatus: 'Success',
          paymentId: utrNumber,
          registrationNumber: regNo,
          answeredCount: 0,
          totalQuestions: 2
        };
        await fetch('/api/rtis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newApp)
        });
      }
      
      await fetchRtis();
      setResult('success');
    } catch (err) {
      console.error('Failed to reconcile payment:', err);
    }
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl bg-white rounded-2xl border border-slate-200 p-6 shadow-md dark:bg-slate-900 dark:border-slate-800 animate-in fade-in duration-300">
        
        {/* Back Button */}
        <button 
          onClick={() => setActiveView('landing')}
          className="text-xs font-bold text-slate-500 hover:text-primary-navy mb-6 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> {t.btnBack}
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-primary-navy tracking-tight dark:text-white flex items-center gap-2">
            <RefreshCw className={`h-5 w-5 text-secondary-saffron ${reconciling ? 'animate-spin' : ''}`} />
            {t.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">{t.subtitle}</p>
        </div>

        {/* Alert Box explaining common failure reason */}
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-xs text-slate-700 leading-relaxed dark:bg-slate-950 dark:border-slate-880 dark:text-slate-350">
          <span className="font-bold block text-primary-blue mb-1">What is payment reconciliation?</span>
          During peak hours, banking networks might fail to return success tokens to the NIC portal immediately, resulting in a "Pending" application status even though money was deducted. 
          Reconciliation forces a query update against bank treasury ledgers to register your application instantly.
        </div>

        {!reconciling && !result && (
          <div className="space-y-4">
            
            {/* Input fields */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t.utrLabel}</label>
              <div className="relative flex items-center border border-slate-350 rounded-xl bg-slate-50 focus-within:border-primary-blue shadow-2xs">
                <Search className="h-4 w-4 text-slate-400 absolute left-3" />
                <input
                  type="text"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  placeholder={t.utrPlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 outline-none bg-transparent font-mono font-bold uppercase"
                />
              </div>
            </div>

            {/* Payment Mode */}
            <div className="grid grid-cols-3 gap-2">
              {['upi', 'card', 'netbanking'].map(mode => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setPaymentMode(mode)}
                  className={`rounded-xl p-2.5 text-xs font-bold border transition-colors cursor-pointer text-center ${
                    paymentMode === mode 
                      ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                      : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100'
                  }`}
                >
                  {mode.toUpperCase()}
                </button>
              ))}
            </div>

            {/* RTI Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t.selectRtiLabel}</label>
              {draftRtis.length > 0 ? (
                <select
                  value={selectedRtiId}
                  onChange={(e) => setSelectedRtiId(e.target.value)}
                  className="w-full rounded-xl border border-slate-350 px-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-50 outline-none focus:border-primary-blue"
                >
                  <option value="">-- Auto-create new application from receipt --</option>
                  {draftRtis.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.title} ({r.subject.substring(0, 40)}...)
                    </option>
                  ))}
                </select>
              ) : (
                <div className="text-[10.5px] text-slate-450 italic bg-slate-50 p-3 rounded-xl border border-slate-150">
                  {t.noDrafts}
                </div>
              )}
            </div>

            {/* Helpline Hours Notice */}
            <div className="bg-slate-50 border border-slate-205 p-3 rounded-xl flex gap-2 items-start text-[10px] text-slate-500 leading-normal">
              <div>
                <span className="font-bold text-slate-700 block">Official Support Contact Desk:</span>
                011-24622461 (Office Hours: 9:00 AM – 5:30 PM, Mon-Fri) | rtionline-dopt@nic.in
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={startReconciliation}
              disabled={!utrNumber.trim()}
              className="w-full bg-primary-navy hover:bg-primary-blue text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md disabled:bg-slate-200 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer mt-4 transition-all animate-pulse-slow"
            >
              <RefreshCw className="h-4 w-4" />
              {t.btnReconcile}
            </button>

          </div>
        )}

        {/* Reconciling Loading state */}
        {reconciling && (
          <div className="py-10 text-center space-y-6 animate-in fade-in duration-200">
            <div className="h-12 w-12 rounded-full border-4 border-primary-blue border-t-transparent animate-spin mx-auto" />
            
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-800 dark:text-white">{t.reconcilingText}</h4>
              <p className="text-xs text-slate-450 font-mono italic animate-pulse-slow">
                {steps[stepIndex]}
              </p>
            </div>

            {/* Simulated progress indicators */}
            <div className="flex justify-center gap-1">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 w-10 rounded-full transition-all duration-300 ${
                    idx <= stepIndex ? 'bg-primary-blue' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Success / Failure Result view */}
        {result === 'success' && (
          <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-250">
            <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-full border-2 border-emerald-500 shadow flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-1">
              <h3 className="font-black text-lg text-primary-navy dark:text-white">{t.successTitle}</h3>
              <p className="text-xs text-slate-500 leading-normal max-w-md mx-auto">{t.successDesc}</p>
            </div>

            {/* Official details card */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 text-xs text-left space-y-2 max-w-md mx-auto dark:bg-slate-850 dark:border-slate-800">
              <div className="flex justify-between border-b border-slate-200/50 pb-2">
                <span className="text-slate-450 font-bold">Transaction Reference</span>
                <span className="font-extrabold text-slate-800 font-mono uppercase dark:text-slate-100">{utrNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/50 pb-2">
                <span className="text-slate-450 font-bold">{t.regNo}</span>
                <span className="font-extrabold text-slate-850 font-mono dark:text-slate-100">{reconciledRegNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-450 font-bold">{t.status}</span>
                <span className="font-extrabold text-emerald-600">Registered & Submitted</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
              <button
                onClick={() => {
                  setUtrNumber('');
                  setResult(null);
                }}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-650 hover:bg-slate-50 cursor-pointer"
              >
                {t.reconcileAnother}
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-5 py-2.5 text-xs font-bold shadow-md cursor-pointer"
              >
                {t.dashboardBtn}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
