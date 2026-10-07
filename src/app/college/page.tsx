"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users, GraduationCap, TrendingUp, Award, ArrowRight, ShieldCheck } from "lucide-react";

export default function CollegePortalPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#09090B] flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar currentRole="COLLEGE_ADMIN" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Header */}
        <div className="mahto-card p-6 mb-8 bg-white border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-stone-900">
                Institutional Campus & E-Cell Dashboard
              </h1>
              <p className="text-xs text-stone-500 mt-0.5">
                National Institute of Technology, Bangalore • Partner ID: MHT-COL-001
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Mahto Campus Partner (MoU)</span>
          </span>
        </div>

        {/* Campus Demand Index Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Enrolled</span>
            <div className="text-2xl font-black text-stone-900 mt-1 font-mono">8,400</div>
            <span className="text-[11px] text-stone-500">Across 12 Engineering Depts</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Verified Founders</span>
            <div className="text-2xl font-black text-amber-700 mt-1 font-mono">45</div>
            <span className="text-[11px] text-emerald-700 font-semibold">↑ 18 this semester</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Faculty References</span>
            <div className="text-2xl font-black text-stone-900 mt-1 font-mono">72</div>
            <span className="text-[11px] text-stone-500">Active validating professors</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Campus Multiplier</span>
            <div className="text-2xl font-black text-amber-600 mt-1 font-mono">3.8x</div>
            <span className="text-[11px] text-stone-500">Inbound talent conversion</span>
          </div>
        </div>

        {/* Campus Startup Directory */}
        <div className="mahto-card p-6 bg-white border-[#E7E2D9]">
          <h3 className="text-base font-black text-stone-900 mb-4">
            Active Campus Startups & Student Ventures
          </h3>

          <div className="divide-y divide-stone-100 text-xs">
            <div className="py-3.5 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-stone-900">CampusLogix</h4>
                <p className="text-stone-500">Founder: Rohit Sen (3rd Year CSE) • Peer delivery ecosystem</p>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">🟢 HEALTHY</span>
                <div className="text-[10px] text-stone-400 mt-1">Score: 74/100</div>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-stone-900">DocuSense AI</h4>
                <p className="text-stone-500">Founder: Priya Nair & Rohit Sen • Automated contract parser</p>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">🟢 HEALTHY</span>
                <div className="text-[10px] text-stone-400 mt-1">Score: 61.5/100</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
