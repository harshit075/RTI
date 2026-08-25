'use client';

import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ChevronRight, ChevronLeft, 
  X, Landmark, Search, FileText, Clock, Scale, ShieldCheck, 
  ArrowRight, Eye, AlertTriangle, Check
} from 'lucide-react';

interface ProductTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToScenario?: (scenario: string) => void;
}

export default function ProductTourModal({ isOpen, onClose, onNavigateToScenario }: ProductTourModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const tourSteps = [
    {
      stepNumber: 1,
      title: 'Find the Right Public Authority',
      tagline: 'Precision routing across Central & State ministries',
      icon: Landmark,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Search over 2,000+ registered public authorities, Central Ministries, and all 770+ Indian district local bodies. Automated jurisdiction guards warn if a state department is selected to avoid filing rejections.',
      highlights: [
        'Central Ministries & Departments (Railways, Passport, UIDAI, EPFO)',
        '36 States/UTs & 770+ District Municipal Corporations',
        'Direct State RTI Portal redirects & warnings'
      ],
      actionLabel: 'Explore Authorities',
      targetView: 'authorities'
    },
    {
      stepNumber: 2,
      title: 'Build an RTI with AI Copilot',
      tagline: 'Translate plain language into legally precise questions',
      icon: Sparkles,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Citizens simply type what they need in plain English or Hindi. The AI Copilot formalizes the inquiry under Section 6(1) and drafts structured, material questions requesting existing records.',
      highlights: [
        'Converts vague queries into specific record requests',
        'Standard Template Library for Roads, Police, & Schools',
        'Real-time Specificity & Timeframe suggestions'
      ],
      actionLabel: 'Try RTI Builder',
      targetView: 'onboarding'
    },
    {
      stepNumber: 3,
      title: 'Statutory Quality Check & Section 8 Guard',
      tagline: 'Prevent application rejections before payment',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'Every draft undergoes automated screening against statutory Section 8(1) exemption clauses (national security, cabinet deliberations, third-party privacy) and detects philosophical "Why" questions.',
      highlights: [
        'Real-time RTI Health Score percentage',
        'Detects and remedies "Why" question pitfalls',
        'Simulated ₹10 fee payment (BPL fee-waiver supported)'
      ],
      actionLabel: 'Review Quality Checks',
      targetView: 'onboarding'
    },
    {
      stepNumber: 4,
      title: 'Track Application Lifecycle & Deadlines',
      tagline: '30-day statutory countdown & audit trail',
      icon: Clock,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      description: 'Monitor every stage from filing and payment confirmation to CPIO dispatch. A dynamic countdown warns when the statutory 30-day deadline is approaching or deemed refusal occurs.',
      highlights: [
        'Visual journey timeline with official CPIO milestones',
        'Detailed system audit trail with discrete timestamps',
        'Active notification alerts for status updates'
      ],
      actionLabel: 'View Active RTIs',
      targetView: 'dashboard'
    },
    {
      stepNumber: 5,
      title: 'Understand & Analyze Responses',
      tagline: 'AI question-by-question disclosure breakdown',
      icon: Eye,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'When a CPIO uploads a reply letter, RTI Saathi compares each original question against disclosed documents to highlight what was answered, partially provided, or withheld.',
      highlights: [
        'Question-by-question status cards (Answered / Partial / Needs Review)',
        'Identifies missing attachments and inspection notes',
        'Integrated PDF Document Vault previewer'
      ],
      actionLabel: 'Open Sample Response',
      targetView: 'rti-road-jaipur-1245'
    },
    {
      stepNumber: 6,
      title: '1-Click First Appeal & CIC Second Appeal',
      tagline: 'Streamlined escalation to senior appellate authorities',
      icon: Scale,
      color: 'text-red-600 bg-red-50 border-red-200',
      description: 'If information is incomplete, misleading, or overdue after 30 days, auto-generate a First Appeal petition under Section 19(1). If unresolved after 45 days, escalate directly to the Central Information Commission (CIC).',
      highlights: [
        'Pre-fills grounds of appeal and original registration numbers',
        'Generates formal petitions for the First Appellate Authority (FAA)',
        'Direct Second Appeal to CIC integration'
      ],
      actionLabel: 'Explore Appeals',
      targetView: 'rti-hospital-1355'
    }
  ];

  const current = tourSteps[currentStep];
  const StepIcon = current.icon;
  const isLast = currentStep === tourSteps.length - 1;

  const handleNext = () => {
    if (isLast) {
      onClose();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleTakeAction = () => {
    onClose();
    if (onNavigateToScenario) {
      onNavigateToScenario(current.targetView);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider bg-primary-navy text-white px-2.5 py-1 rounded-md">
              Product Tour
            </span>
            <span className="text-xs font-bold text-slate-500">
              Step {current.stepNumber} of {tourSteps.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8 space-y-5 flex-1">
          
          <div className="flex items-start gap-4">
            <div className={`h-14 w-14 rounded-2xl border flex items-center justify-center shrink-0 ${current.color}`}>
              <StepIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 leading-snug">
                {current.title}
              </h3>
              <p className="text-xs font-bold text-primary-navy mt-0.5">
                {current.tagline}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {current.description}
          </p>

          {/* Highlights checklist */}
          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider block">
              Key Capabilities:
            </span>
            {current.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 pt-2">
            {tourSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentStep ? 'w-8 bg-primary-navy' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-5 sm:px-8 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTakeAction}
              className="px-4 py-2 text-xs font-bold text-primary-navy hover:underline cursor-pointer hidden sm:inline-flex items-center gap-1"
            >
              {current.actionLabel} ↗
            </button>

            <button
              onClick={handleNext}
              className="rounded-xl bg-primary-navy hover:bg-primary-blue text-white px-6 py-2.5 text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer transition-all"
            >
              {isLast ? (
                <>
                  Start Exploring ➔
                </>
              ) : (
                <>
                  Next Step
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
