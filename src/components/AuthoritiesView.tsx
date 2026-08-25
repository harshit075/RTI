'use client';

import React, { useState } from 'react';
import { Landmark, Search, Globe, User, MapPin } from 'lucide-react';
import { Authority } from '../data/mockData';

interface AuthoritiesViewProps {
  language: 'en' | 'hi';
}

export default function AuthoritiesView({ language }: AuthoritiesViewProps) {
  const [search, setSearch] = useState('');
  const [filterMinistry, setFilterMinistry] = useState('All');
  const [authorities, setAuthorities] = useState<Authority[]>([]);

  React.useEffect(() => {
    fetch('/api/authorities')
      .then(res => res.json())
      .then(data => setAuthorities(data))
      .catch(err => console.error('Failed to load authorities:', err));
  }, []);

  const ministries = ['All', ...new Set(authorities.map(a => a.ministry))];

  const filteredAuthorities = authorities.filter(auth => {
    const matchesSearch = (auth.name?.toLowerCase().includes(search.toLowerCase()) || 
                          auth.description?.toLowerCase().includes(search.toLowerCase()) ||
                          auth.cpioName?.toLowerCase().includes(search.toLowerCase()));
    const matchesMinistry = filterMinistry === 'All' || auth.ministry === filterMinistry;
    return matchesSearch && matchesMinistry;
  });

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-primary-navy tracking-tight dark:text-white">
            {language === 'en' ? 'Government Authority Explorer' : 'सरकारी विभाग निर्देशिका'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'en' 
              ? 'Find designated CPIOs and First Appellate Authorities across Central ministries and departments.'
              : 'केंद्रीय मंत्रालयों और विभागों में नामित सीपीआईओ (CPIO) और प्रथम अपील अधिकारियों को खोजें।'}
          </p>
        </div>

        {/* Scope warning and link */}
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 text-red-800 p-4.5 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 dark:bg-red-950/20 dark:border-red-900/30 dark:text-red-200">
          <div>
            <span className="font-extrabold block text-sm uppercase text-red-900 mb-0.5 dark:text-red-300">Central Government Scope Only</span>
            This lookup is curated from the registered database of Central ministries and departments. Submitting applications for state-level entities (e.g. state schools, state police, local water boards) through Central portals will result in application rejection with <span className="font-extrabold text-red-950 dark:text-red-100">NO REFUND</span>.
          </div>
          <a
            href="https://rtionline.gov.in/request/allpa.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-navy hover:bg-primary-blue text-white font-bold px-4 py-2 rounded-lg text-[10.5px] whitespace-nowrap shadow cursor-pointer text-center w-full sm:w-auto"
          >
            Official Public Authorities Directory ↗
          </a>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Search bar */}
          <div className="sm:col-span-2 flex items-center gap-2 p-2.5 border border-slate-300 rounded-xl bg-white focus-within:border-primary-blue shadow-sm">
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
          <div className="p-2 border border-slate-300 rounded-xl bg-white shadow-sm flex items-center">
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
        <div className="space-y-6">
          {filteredAuthorities.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
              <Landmark className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <h4 className="font-bold text-slate-800 text-sm">No Authorities Found</h4>
              <p className="text-xs text-slate-500 mt-1">Try broadening your search term or selecting "All Ministries".</p>
            </div>
          ) : (
            filteredAuthorities.map(auth => (
              <div 
                key={auth.id} 
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800"
              >
                {/* Main Heading */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <h3 className="font-extrabold text-slate-850 text-base dark:text-slate-100">{auth.name}</h3>
                    <p className="text-xs text-slate-400 font-bold mt-1">
                      {auth.ministry} • {auth.level} Level
                    </p>
                  </div>
                  
                  <a 
                    href={auth.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary-blue hover:underline font-bold shrink-0 mt-1 cursor-pointer"
                  >
                    <Globe className="h-4 w-4" /> Official Website ↗
                  </a>
                </div>

                <p className="text-xs text-slate-650 leading-relaxed mb-4 dark:text-slate-400">{auth.description}</p>

                {/* Details Accordion style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                  
                  {/* CPIO Info */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 dark:bg-slate-850 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Central Public Information Officer (CPIO)</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-slate-850 font-bold dark:text-slate-200">
                        <User className="h-4 w-4 text-primary-blue shrink-0" />
                        {auth.cpioName}
                      </div>
                      <span className="text-slate-500 font-medium pl-5.5 block">{auth.cpioDesignation}</span>
                      <div className="flex items-start gap-1.5 text-slate-500 mt-2 pl-5.5 leading-snug">
                        <MapPin className="h-4 w-4 text-slate-400 shrink-0 -ml-5.5 mt-0.5" />
                        {auth.cpioAddress}
                      </div>
                    </div>
                  </div>

                  {/* FAA Info */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 dark:bg-slate-850 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">First Appellate Authority (FAA)</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-slate-850 font-bold dark:text-slate-200">
                        <User className="h-4 w-4 text-blue-500 shrink-0" />
                        {auth.faaName}
                      </div>
                      <span className="text-slate-500 font-medium pl-5.5 block">{auth.faaDesignation}</span>
                      <div className="flex items-start gap-1.5 text-slate-500 mt-2 pl-5.5 leading-snug">
                        <MapPin className="h-4 w-4 text-slate-400 shrink-0 -ml-5.5 mt-0.5" />
                        {auth.faaAddress}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
