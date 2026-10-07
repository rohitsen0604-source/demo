"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, FileText, Lock, ShieldAlert, HeartHandshake } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Trust & Governance Documentation
          </span>
          <h1 className="text-3xl font-black text-slate-900">
            Legal Terms, Policies & Disclaimers
          </h1>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Mahto Innovations Pvt Ltd • Official Platform Terms & Commercial Policies (Updated Oct 2026)
          </p>
        </div>

        {/* 1. Funding Disclaimer */}
        <div id="funding-disclaimer" className="mahto-card p-6 bg-amber-50/50 border-amber-200 text-xs space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>1. Mandatory Funding & Investment Disclaimer</span>
          </div>
          <p className="text-amber-950 leading-relaxed">
            Payment of any membership fee (Student Founder ₹10,000, Graduate Founder ₹25,000, or Startup Evaluation ₹10,000) pays exclusively for structured assessments, curriculum, challenges, data room tools, and Founder Passport issuance. <strong>Under no circumstances does payment guarantee funding, equity valuation, or introductions to third-party investors.</strong> Mahto does not charge success fees or commissions for investor introductions.
          </p>
        </div>

        {/* 2. 3-Day Refund Policy */}
        <div id="refund" className="mahto-card p-6 bg-white space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
            <HeartHandshake className="w-5 h-5 text-indigo-600" />
            <span>2. 3-Day Commercial Refund Policy</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Founders may request a full refund within 3 days (72 hours) of payment if they have not completed beyond Day 1 of the Staged Assessment and have not generated an official audited Founder Passport report. Assessment unlocking is staged to prevent test fatigue, not to defeat refund rights.
          </p>
        </div>

        {/* 3. Scoring & Assessment Methodology */}
        <div id="scoring-methodology" className="mahto-card p-6 bg-white space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>3. Scoring Rubric & Evidence Weighting Protocol</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The MAHTO FOUNDER SCORE (/100) combines psychometrics (15%), critical thinking (15%), simulation challenges (25%), actual execution/MVP milestones (25%), faculty references (10%), and startup traction (10%). Scores are never permanently fixed and evolve longitudinally with auditable timestamps.
          </p>
        </div>

        {/* 4. Privacy & KYC Data Processing */}
        <div id="privacy" className="mahto-card p-6 bg-white space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
            <Lock className="w-5 h-5 text-slate-800" />
            <span>4. Data Privacy, KYC & Data Room Terms</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Raw Aadhaar copies are never stored. Only masked references and KYC tokens are persisted. All cap table allocations, private psychometrics, and proprietary pitch assets in the Startup Data Room are strictly permission-controlled and logged with immutable viewer audit trails.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
