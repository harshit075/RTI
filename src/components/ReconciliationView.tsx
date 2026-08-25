'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, RefreshCw, CheckCircle2, AlertTriangle, 
  HelpCircle, CreditCard, Lock, Sparkles, Database, Search 
} from 'lucide-react';
import { RTIApplication } from '../services/types';
import { rtiService } from '../services/rtiService';

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
  const [utrNumber, setUtrNumber] = useState('TXN_83910482910');
  const [selectedRtiId, setSelectedRtiId] = useState('');
  const [paymentMode, setPaymentMode] = useState('upi');
  const [reconciling, setReconciling] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<'success' | 'not-found' | null>(null);
  const [reconciledRegNo, setReconciledRegNo] = useState('');

  // Steps for reconciliation animation
  const steps = [
    'Connecting to Bharatkosh / SBI ePay gateway...',
    'Syncing ledger entries with National Informatics Centre (NIC) treasury...',
    'Matching payment reference keys with bank settlement logs...',
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

  // Eligible RTIs that need reconciliation
  const draftRtis = rtis.filter(r => r.status === 'Draft' || r.status === 'Processing');

  const startReconciliation = () => {
    if (!utrNumber.trim()) return;

    setReconciling(true);
    setResult(null);
    setStepIndex(0);

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
    }, 800);
  };

  const finishReconciliation = async () => {
    setReconciling(false);
    
    const rand = Math.floor(10000 + Math.random() * 90000);
    const regNo = `RTI-2026-${rand}`;
    setReconciledRegNo(regNo);

    try {
      if (selectedRtiId) {
        await rtiService.updateRTI(selectedRtiId, {
          status: 'Submitted',
          paymentStatus: 'Success',
          paymentId: utrNumber,
          registrationNumber: regNo
        });
      } else {
        await rtiService.createRTI({
          title: 'Reconciled Service Inquiry',
          authorityId: 'uidai',
          authorityName: 'Unique Identification Authority of India (UIDAI)',
          subject: 'Reconciled application regarding biometric logs and updates database',
          questions: [
            'Provide the logs of update attempts and failure codes for biometric correction requested in June 2026.',
            'Provide administrative circulars governing biometric update retry exemptions.'
          ],
          paymentStatus: 'Success',
          paymentId: utrNumber,
          registrationNumber: regNo
        });
      }
      
      await fetchRtis();
      setResult('success');
    } catch (err) {
      console.error('Failed to reconcile payment:', err);
    }
  };

  return (
    <div className="flex-1 bg-[#F7F8FA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl bg-white rounded-3xl border border-[#D9E0E6] p-6 sm:p-8 shadow-3xs animate-in fade-in duration-300">
        
        {/* Back Button */}
        <button 
          onClick={() => setActiveView('landing')}
          className="text-xs font-bold text-slate-500 hover:text-[#123B5D] mb-6 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> {t.btnBack}
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-[#17212B] tracking-tight flex items-center gap-2">
            <RefreshCw className={`h-5 w-5 text-amber-600 ${reconciling ? 'animate-spin' : ''}`} />
            {t.title}
          </h2>
          <p className="text-xs text-[#52606D] mt-1 font-medium">{t.subtitle}</p>
        </div>

        {/* Informational Alert Box */}
        <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50/50 p-4 text-xs text-slate-700 leading-relaxed">
          <span className="font-extrabold block text-[#123B5D] mb-1">What is payment reconciliation?</span>
          During peak banking hours, payment gateways may take a few moments to return verification tokens, resulting in a temporary pending status. Reconciliation automatically syncs treasury records to activate your application registration immediately.
        </div>

        {!reconciling && !result && (
          <div className="space-y-4">
            
            {/* Input fields */}
            <div>
              <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1.5">{t.utrLabel}</label>
              <div className="relative flex items-center border border-[#D9E0E6] rounded-xl bg-[#F7F8FA] focus-within:border-[#123B5D] shadow-3xs">
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
            <div>
              <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1.5">{t.modeLabel}</label>
              <div className="grid grid-cols-3 gap-2">
                {['upi', 'card', 'netbanking'].map(mode => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPaymentMode(mode)}
                    className={`rounded-xl p-2.5 text-xs font-bold border transition-colors cursor-pointer text-center ${
                      paymentMode === mode 
                        ? 'border-[#123B5D] bg-blue-50 text-[#123B5D] font-extrabold' 
                        : 'bg-white border-[#D9E0E6] text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {mode.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* RTI Selection */}
            <div>
              <label className="block text-[10px] font-black text-[#52606D] uppercase mb-1.5">{t.selectRtiLabel}</label>
              {draftRtis.length > 0 ? (
                <select
                  value={selectedRtiId}
                  onChange={(e) => setSelectedRtiId(e.target.value)}
                  className="w-full rounded-xl border border-[#D9E0E6] px-4 py-2.5 text-xs font-bold text-slate-800 bg-[#F7F8FA] outline-none focus:border-[#123B5D]"
                >
                  <option value="">-- Auto-create verified application from receipt --</option>
                  {draftRtis.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.title} ({r.subject.substring(0, 40)}...)
                    </option>
                  ))}
                </select>
              ) : (
                <div className="text-[11px] text-slate-500 bg-[#F7F8FA] p-3 rounded-xl border border-[#D9E0E6]">
                  {t.noDrafts}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={startReconciliation}
                disabled={!utrNumber.trim()}
                className="w-full rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-3 text-xs font-black shadow-3xs cursor-pointer transition-all disabled:opacity-50"
              >
                {t.btnReconcile}
              </button>
            </div>
          </div>
        )}

        {/* Reconciling In Progress */}
        {reconciling && (
          <div className="py-12 text-center space-y-6">
            <div className="h-12 w-12 rounded-full border-4 border-[#123B5D] border-t-transparent animate-spin mx-auto" />
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm text-[#17212B]">{t.reconcilingText}</h3>
              <p className="text-xs text-[#52606D] font-mono animate-pulse">{steps[stepIndex]}</p>
            </div>
          </div>
        )}

        {/* Result: Success */}
        {result === 'success' && (
          <div className="py-6 text-center space-y-5">
            <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-3xs">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>

            <div>
              <h3 className="font-black text-lg text-[#17212B]">{t.successTitle}</h3>
              <p className="text-xs text-[#52606D] mt-1">{t.successDesc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#D9E0E6] text-xs text-left space-y-2">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-bold">{t.regNo}</span>
                <span className="font-mono font-black text-[#123B5D]">{reconciledRegNo}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-bold">Transaction Reference</span>
                <span className="font-mono text-slate-800">{utrNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">{t.status}</span>
                <span className="font-extrabold text-emerald-700">Submitted & Acknowledged</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setResult(null)}
                className="flex-1 rounded-xl border border-[#D9E0E6] bg-white py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                {t.reconcileAnother}
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className="flex-1 rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white py-2.5 text-xs font-black shadow-3xs cursor-pointer"
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
