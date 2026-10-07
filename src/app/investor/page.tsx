"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INITIAL_STARTUPS } from "@/lib/store";
import { Briefcase, ShieldCheck, FileText, ArrowRight, FolderLock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function InvestorPortalPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar currentRole="INVESTOR" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Header */}
        <div className="mahto-card p-6 mb-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                Investor Pipeline & Diligence Portal
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Apex Seed Ventures • Thesis: B2B SaaS, Campus Logistics, AI • Cheque: ₹25L–₹1.5Cr
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
            Consented Diligence Vault
          </span>
        </div>

        {/* Thesis-Matched Startups */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
              Thesis-Matched Startups (Founder-Consented Access)
            </h3>
            <span className="text-xs text-slate-400 font-mono">2 Matched Ventures</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_STARTUPS.filter((s) => s.stage !== "EARLY_TRACTION" || s.name !== "CodePulse Lab").map((s) => (
              <div key={s.id} className="mahto-card p-6 bg-white border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {s.industry}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      🟢 {s.healthStatus}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900">{s.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.description}</p>

                  <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-slate-100 text-xs">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <span className="text-[10px] text-slate-400">Founder Score</span>
                      <div className="font-bold text-slate-900">78.5/100</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <span className="text-[10px] text-slate-400">Startup Score</span>
                      <div className="font-bold text-slate-900">{s.startupScore}/100</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <span className="text-[10px] text-slate-400">MRR</span>
                      <div className="font-bold text-slate-900 font-mono">₹{s.mrr.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <FolderLock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{s.documentsCount} Diligence Files</span>
                  </span>

                  <button
                    onClick={() => alert(`Opening permission-controlled Data Room for ${s.name}. View logged in audit log.`)}
                    className="px-4 py-2 bg-[#0F172A] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-1"
                  >
                    <span>Inspect Data Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
