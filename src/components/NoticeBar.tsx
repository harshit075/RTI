'use client';

import React, { useState } from 'react';
import { Megaphone, X, ArrowRight, Sparkles } from 'lucide-react';

interface NoticeBarProps {
  id?: string;
  onLinkClick?: () => void;
  language?: 'en' | 'hi';
}

export default function NoticeBar({
  id = 'rti-ticker-2026',
  onLinkClick,
  language = 'en'
}: NoticeBarProps) {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (isDismissed) return null;

  const notices = language === 'hi' ? [
    'सीआईसी द्वितीय अपील पोर्टल को डीओपीटी आरटीआई ऑनलाइन के साथ एकीकृत किया गया है (धारा 19(3))।',
    'सांविधिक 30-दिवसीय समयसीमा: लोक सूचना अधिकारियों (CPIO) को आवेदन प्राप्ति के 30 दिनों के भीतर उत्तर देना अनिवार्य है।',
    'शुल्क छूट: गरीबी रेखा से नीचे (BPL) कार्डधारकों के लिए ₹10 का आवेदन शुल्क पूरी तरह से माफ है (धारा 7(5))।',
    'भुगतान समाधान: भारतकोश और यूपीआई लेनदेन की स्थिति 24 घंटे के भीतर स्वतः अपडेट हो जाती है।',
    'सक्रिय प्रकटीकरण: केंद्रीय मंत्रालय और विभाग वार्षिक बजट और कार्य आदेश धारा 4(1)(b) के तहत प्रकाशित करते हैं।'
  ] : [
    'CIC Second Appeal Filing Portal is integrated with DoPT RTI Online for streamlined record retrieval under Section 19(3).',
    'Statutory 30-Day Limit: Public Information Officers (CPIOs) must respond within 30 days of receipt under Section 7(1).',
    'Fee Waiver: Below Poverty Line (BPL) cardholders are exempt from the standard ₹10 RTI application fee under Section 7(5).',
    'Payment Reconciliation: Real-time status sync active for Bharatkosh, SBI e-Pay, and UPI transactions.',
    'Proactive Disclosures: Central Ministries publish annual budget allocations & work tenders under Section 4(1)(b).'
  ];

  // Duplicate for seamless infinite marquee loop
  const tickerItems = [...notices, ...notices];

  const badgeText = language === 'hi' ? 'ताज़ा अपडेट' : 'LATEST NOTICES';

  return (
    <aside 
      aria-label="Official Running Announcements"
      className="bg-amber-50/95 text-amber-950 border-b border-amber-200/80 px-3 py-2 text-xs overflow-hidden transition-all shadow-3xs"
    >
      <div className="mx-auto max-w-7xl flex items-center gap-3">
        
        {/* Pinned Badge on Left */}
        <div className="flex items-center gap-1.5 shrink-0 bg-amber-700 text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-3xs z-10">
          <Megaphone className="h-3 w-3 animate-bounce shrink-0" />
          <span>{badgeText}</span>
        </div>

        {/* Running Continuous Marquee Ticker */}
        <div className="flex-1 overflow-hidden relative select-none py-0.5">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {tickerItems.map((notice, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 text-xs font-semibold text-slate-800 shrink-0 cursor-pointer hover:text-[#123B5D]"
                onClick={onLinkClick}
              >
                <span>{notice}</span>
                <span className="text-amber-500 font-black">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Action & Dismiss */}
        <div className="flex items-center gap-2 shrink-0 z-10 pl-1 border-l border-amber-200">
          {onLinkClick && (
            <button
              onClick={onLinkClick}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold text-[#123B5D] hover:underline cursor-pointer"
            >
              <span>{language === 'hi' ? 'विवरण' : 'Details'}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          )}

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-amber-100/60 transition-colors cursor-pointer"
            title="Dismiss ticker"
            aria-label="Dismiss ticker"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
