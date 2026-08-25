'use client';

import React, { useState, useEffect } from 'react';
import { Landmark, Search, Globe, User, MapPin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Authority } from '../services/types';
import { authorityService } from '../services/authorityService';

interface AuthoritiesViewProps {
  language: 'en' | 'hi';
  setActiveView?: (view: string) => void;
  setDraftRti?: (data: any) => void;
}

export default function AuthoritiesView({ language, setActiveView, setDraftRti }: AuthoritiesViewProps) {
  const [search, setSearch] = useState('');
  const [filterMinistry, setFilterMinistry] = useState('All');
  const [authorities, setAuthorities] = useState<Authority[]>([]);

  useEffect(() => {
    authorityService.getAuthorities().then(setAuthorities);
  }, []);

  const ministries = ['All', ...new Set(authorities.map(a => a.ministry))];

  const filteredAuthorities = authorities.filter(auth => {
    const matchesSearch = (auth.name?.toLowerCase().includes(search.toLowerCase()) || 
                          auth.description?.toLowerCase().includes(search.toLowerCase()) ||
                          auth.cpioName?.toLowerCase().includes(search.toLowerCase()));
    const matchesMinistry = filterMinistry === 'All' || auth.ministry === filterMinistry;
    return matchesSearch && matchesMinistry;
  });

  const handleStartRtiForAuth = (auth: Authority) => {
    if (setDraftRti) {
      setDraftRti({
        authorityId: auth.id,
        authorityName: auth.name,
        topic: auth.id === 'passport' ? 'passport' : 'general',
        location: 'National / Central'
      });
    }
    if (setActiveView) {
      setActiveView('onboarding');
    }
  };

  return (
    <div className="flex-1 bg-[#F7F8FA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="border-b border-[#D9E0E6] pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-[#17212B] tracking-tight">
            {language === 'en' ? 'Public Authorities Directory' : 'लोक प्राधिकारी निर्देशिका'}
          </h1>
          <p className="text-xs text-[#52606D] mt-1 font-medium">
            {language === 'en' 
              ? 'Find designated Central Public Information Officers (CPIOs) and First Appellate Authorities across Indian public bodies.'
              : 'केंद्रीय मंत्रालयों और सार्वजनिक विभागों में नामित सीपीआईओ (CPIO) और प्रथम अपील अधिकारियों को खोजें।'}
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search bar */}
          <div className="sm:col-span-2 flex items-center gap-2 px-3 py-2 border border-[#D9E0E6] rounded-xl bg-white focus-within:border-[#123B5D] shadow-3xs">
            <Search className="h-4 w-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search department, keyword, or officer..."
              className="flex-1 bg-transparent text-xs font-semibold text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Ministry select */}
          <div className="px-3 py-2 border border-[#D9E0E6] rounded-xl bg-white shadow-3xs flex items-center">
            <select
              value={filterMinistry}
              onChange={(e) => setFilterMinistry(e.target.value)}
              className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none"
            >
              {ministries.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* List of Authorities */}
        <div className="space-y-4">
          {filteredAuthorities.length === 0 ? (
            <div className="text-center py-16 bg-white border border-[#D9E0E6] rounded-2xl">
              <Landmark className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <h4 className="font-bold text-slate-800 text-xs sm:text-sm">No Authorities Found</h4>
              <p className="text-xs text-slate-500 mt-1">Try broadening your search term or selecting "All Ministries".</p>
            </div>
          ) : (
            filteredAuthorities.map(auth => (
              <div 
                key={auth.id} 
                className="rounded-2xl border border-[#D9E0E6] bg-white p-6 shadow-3xs space-y-4"
              >
                {/* Main Heading */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-black text-[#17212B] text-base">{auth.name}</h3>
                    <p className="text-xs text-[#123B5D] font-bold mt-0.5">
                      {auth.ministry} • {auth.level} Jurisdiction
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <a 
                      href={auth.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#123B5D] font-bold cursor-pointer"
                    >
                      <Globe className="h-3.5 w-3.5" /> Official Website ↗
                    </a>
                  </div>
                </div>

                <p className="text-xs text-[#52606D] leading-relaxed font-normal">{auth.description}</p>

                {/* Details Accordion style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                  
                  {/* CPIO Info */}
                  <div className="bg-[#F7F8FA] rounded-xl p-3.5 border border-[#D9E0E6]">
                    <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider block mb-1">Central Public Information Officer (CPIO)</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-900 font-extrabold">
                        <User className="h-3.5 w-3.5 text-[#123B5D] shrink-0" />
                        {auth.cpioName}
                      </div>
                      <span className="text-slate-600 font-medium pl-5 block text-[11px]">{auth.cpioDesignation}</span>
                      <div className="flex items-start gap-1.5 text-slate-500 mt-1 pl-5 leading-snug text-[11px]">
                        <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 -ml-5 mt-0.5" />
                        {auth.cpioAddress}
                      </div>
                    </div>
                  </div>

                  {/* FAA Info */}
                  <div className="bg-[#F7F8FA] rounded-xl p-3.5 border border-[#D9E0E6]">
                    <span className="text-[10px] font-black text-purple-700 uppercase tracking-wider block mb-1">First Appellate Authority (FAA)</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-900 font-extrabold">
                        <User className="h-3.5 w-3.5 text-purple-700 shrink-0" />
                        {auth.faaName}
                      </div>
                      <span className="text-slate-600 font-medium pl-5 block text-[11px]">{auth.faaDesignation}</span>
                      <div className="flex items-start gap-1.5 text-slate-500 mt-1 pl-5 leading-snug text-[11px]">
                        <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 -ml-5 mt-0.5" />
                        {auth.faaAddress}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => handleStartRtiForAuth(auth)}
                    className="rounded-xl bg-[#123B5D] hover:bg-[#0A2540] text-white px-4 py-2 text-xs font-black shadow-3xs flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Draft Request for this Authority ➔</span>
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
