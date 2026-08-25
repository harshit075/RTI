'use client';

import React, { useState, useEffect } from 'react';
import { Info, X, ExternalLink, ArrowRight } from 'lucide-react';

interface NoticeBarProps {
  id?: string;
  badge?: string;
  message?: string;
  linkText?: string;
  onLinkClick?: () => void;
  language?: 'en' | 'hi';
}

export default function NoticeBar({
  id = 'cic-notice-2026',
  badge,
  message,
  linkText,
  onLinkClick,
  language = 'en'
}: NoticeBarProps) {
  const [isDismissed, setIsDismissed] = useState<boolean>(true);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(`notice_dismissed_${id}`);
      if (!dismissed) {
        setIsDismissed(false);
      }
    } catch (e) {
      setIsDismissed(false);
    }
  }, [id]);

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      localStorage.setItem(`notice_dismissed_${id}`, 'true');
    } catch (e) {}
  };

  if (isDismissed) return null;

  const defaultBadge = language === 'hi' ? 'महत्वपूर्ण सूचना' : 'Official Notice';
  const defaultMessage = language === 'hi'
    ? 'सीआईसी द्वितीय अपील पोर्टल को डीओपीटी आरटीआई ऑनलाइन के साथ एकीकृत किया गया है।'
    : 'CIC Second Appeal Filing Portal is now integrated with DoPT RTI Online for streamlined record retrieval under Section 19(3).';
  const defaultLinkText = language === 'hi' ? 'विवरण देखें' : 'Learn more';

  return (
    <aside 
      aria-label="Official Announcement"
      className="bg-amber-50/95 text-amber-950 border-b border-amber-200/80 px-4 py-2 text-xs transition-all animate-in fade-in"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="inline-flex items-center rounded-md bg-amber-700 text-white font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 shrink-0">
            {badge || defaultBadge}
          </span>
          <p className="text-slate-800 text-xs font-medium truncate sm:whitespace-normal">
            {message || defaultMessage}
          </p>
          {onLinkClick && (
            <button
              onClick={onLinkClick}
              className="hidden md:inline-flex items-center gap-1 font-bold text-amber-900 hover:text-amber-950 underline underline-offset-2 shrink-0 cursor-pointer text-xs"
            >
              <span>{linkText || defaultLinkText}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          )}
        </div>

        <button
          onClick={handleDismiss}
          className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-amber-200/50 transition-colors shrink-0 cursor-pointer"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
