"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INITIAL_LEADS } from "@/lib/store";
import { TelecallerLead } from "@/lib/types";
import { PhoneCall, UserCheck, DollarSign, Target, CheckCircle2, ArrowRight } from "lucide-react";

export default function TelecallerPortalPage() {
  const [leads, setLeads] = useState<TelecallerLead[]>(INITIAL_LEADS);
  const [selectedLead, setSelectedLead] = useState<TelecallerLead | null>(null);

  const handleStatusChange = (leadId: string, newStatus: any) => {
    setLeads(
      leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar currentRole="TELECALLER" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Header */}
        <div className="mahto-card p-6 mb-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                Founder Growth & Operations CRM
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Executive: Growth Lead #1 • Base Salary: ₹25,000 • Month: October 2026
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
            Live Telecaller Terminal
          </span>
        </div>

        {/* Telecaller Incentive & Metric Grid (Section 55) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="mahto-card p-4 bg-white">
            <span className="text-[10px] uppercase font-bold text-slate-400">Monthly Target</span>
            <div className="text-xl font-black text-slate-900 mt-1">100</div>
            <span className="text-[10px] text-slate-500">Qualified Startups</span>
          </div>

          <div className="mahto-card p-4 bg-white">
            <span className="text-[10px] uppercase font-bold text-slate-400">Achieved</span>
            <div className="text-xl font-black text-indigo-600 mt-1">73</div>
            <span className="text-[10px] text-emerald-600">73% to goal</span>
          </div>

          <div className="mahto-card p-4 bg-white">
            <span className="text-[10px] uppercase font-bold text-slate-400">Conversion Rate</span>
            <div className="text-xl font-black text-slate-900 mt-1">12.4%</div>
            <span className="text-[10px] text-slate-500">Lead $\rightarrow$ Paid</span>
          </div>

          <div className="mahto-card p-4 bg-white">
            <span className="text-[10px] uppercase font-bold text-slate-400">Revenue Closed</span>
            <div className="text-xl font-black text-slate-900 mt-1 font-mono">₹7.3L</div>
            <span className="text-[10px] text-slate-500">Gateway Verified</span>
          </div>

          <div className="mahto-card p-4 bg-emerald-50 border-emerald-200">
            <span className="text-[10px] uppercase font-bold text-emerald-800">Est. Incentive</span>
            <div className="text-xl font-black text-emerald-900 mt-1 font-mono">₹36,500</div>
            <span className="text-[10px] text-emerald-700 font-semibold">5% of revenue</span>
          </div>

          <div className="mahto-card p-4 bg-slate-900 text-white">
            <span className="text-[10px] uppercase font-bold text-slate-400">Total Take-Home</span>
            <div className="text-xl font-black text-amber-400 mt-1 font-mono">₹61,500</div>
            <span className="text-[10px] text-slate-400">Salary + Incentive</span>
          </div>
        </div>

        {/* CRM Leads Table */}
        <div className="mahto-card p-6 bg-white border-slate-200">
          <h3 className="text-base font-black text-slate-900 mb-4">
            Assigned Inbound Leads & Next Actions
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            {leads.map((l) => (
              <div key={l.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-900">{l.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase">
                      {l.source}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      {l.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{l.notes}</p>
                  <div className="text-[11px] text-indigo-700 font-semibold mt-1">
                    Next Action: {l.nextAction} • Due: {l.dueDate}
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <select
                    value={l.status}
                    onChange={(e) => handleStatusChange(l.id, e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold bg-white"
                  >
                    <option value="REGISTERED">Registered</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="QUALIFIED">Qualified</option>
                    <option value="INTERESTED">Interested</option>
                    <option value="PAID">Paid (₹10k/₹25k)</option>
                  </select>

                  <button
                    onClick={() => alert(`Calling ${l.name} at ${l.phone} via integrated Cloud IVR. Call audio logged for quality.`)}
                    className="px-3.5 py-1.5 bg-[#0F172A] text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
