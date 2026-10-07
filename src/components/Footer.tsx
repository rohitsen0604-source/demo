"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, FileText, CheckCircle2, Lock, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Alert */}
        <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Official Funding & Membership Disclaimer
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-4xl">
                Payment of Mahto.org membership fees (₹10,000 for Student Founders, ₹25,000 for Graduate Founders) pays exclusively for structured founder assessment, Founder Passport issuance, 6-month longitudinal development curriculum, challenge evaluations, and startup data room tools. <strong>No fee buys funding, guaranteed investor meetings, or guaranteed valuation.</strong> Independent investor introductions are arranged strictly on a merit and thesis-matched basis with explicit founder consent.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand & Vision */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-[#0F172A] flex items-center justify-center font-black text-sm">
                M
              </div>
              <span className="text-base font-extrabold tracking-tight">
                MAHTO<span className="text-amber-500">.ORG</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The lifelong operating system for founders, builders, leaders, mentors, and investors. Operated by <strong>Mahto Innovations Pvt Ltd</strong>.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Bangalore, Karnataka, India • contact@mahto.org
            </p>
          </div>

          {/* Programmes & Pricing */}
          <div>
            <h5 className="font-bold uppercase tracking-wider text-slate-200 mb-3">
              Platform & Pathways
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Student Founder (₹10,000/startup)</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Graduate Founder (₹25,000/startup)</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Startup Evaluation (₹10,000/eval)</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Startup OS (₹100/mo SaaS)</Link></li>
              <li><Link href="/#founder-journey" className="hover:text-white transition-colors">6-Month Founder Journey</Link></li>
              <li><Link href="/founder" className="hover:text-white transition-colors">Founder Passport & Card</Link></li>
            </ul>
          </div>

          {/* Ecosystem & Media */}
          <div>
            <h5 className="font-bold uppercase tracking-wider text-slate-200 mb-3">
              Ecosystem & Media
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/#campus-network" className="hover:text-white transition-colors">Campus Flywheel & Colleges</Link></li>
              <li><Link href="/#rankings" className="hover:text-white transition-colors">Mahto Startup Rankings</Link></li>
              <li><Link href="/#media" className="hover:text-white transition-colors">The Mahto Founder Test Show</Link></li>
              <li><Link href="/#media" className="hover:text-white transition-colors">Dawat-e-Mahto Interviews</Link></li>
              <li><Link href="/#media" className="hover:text-white transition-colors">Founder Stories Series</Link></li>
              <li><Link href="/verify/founder/mht-qr-rohit-sen-0042" className="hover:text-white transition-colors">Public QR Verification</Link></li>
            </ul>
          </div>

          {/* Legal, Trust & Policies */}
          <div>
            <h5 className="font-bold uppercase tracking-wider text-slate-200 mb-3">
              Legal, Trust & Compliance
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/legal#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy & KYC Data</Link></li>
              <li><Link href="/legal#refund" className="hover:text-white transition-colors">3-Day Commercial Refund Policy</Link></li>
              <li><Link href="/legal#scoring-methodology" className="hover:text-white transition-colors">Scoring & Evidence Rubric</Link></li>
              <li><Link href="/legal#dataroom-terms" className="hover:text-white transition-colors">Data Room Confidentiality</Link></li>
              <li><Link href="/legal#investor-policy" className="hover:text-white transition-colors">Investor Introduction Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Mahto Innovations Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-slate-400" /> SSL 256-Bit Encrypted</span>
            <span>•</span>
            <span>Zero Fabricated Data Policy</span>
            <span>•</span>
            <span>Made with Conviction in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
