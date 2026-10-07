"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderCardVisual from "@/components/FounderCardVisual";
import FreeFounderTestModal from "@/components/FreeFounderTestModal";
import { INITIAL_FOUNDER } from "@/lib/store";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  TrendingUp,
  Award,
  Video,
  FileText,
  Lock,
  Compass,
  Check,
  ChevronRight,
  QrCode,
  Layers,
  Flame,
  HelpCircle
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [activeStageTab, setActiveStageTab] = useState(0);

  const journeyStages = [
    {
      stage: "Month 1 — Discover",
      title: "Founder Identity, Motivation & Problem Autopsy",
      summary: "Diagnose why you build, uncover acute problem areas, complete Day 1–2 staged assessments, and formulate hypothesis.",
      deliverable: "Founder Identity Dossier & 3-Minute Problem Pitch",
      metrics: "Vision (8) • Critical Thinking (8)",
    },
    {
      stage: "Month 2 — Understand",
      title: "Customer Discovery & 20 Deep Interviews",
      summary: "Shadow real target users. Extract exact pain points, existing workarounds, and concrete willingness-to-pay signals.",
      deliverable: "20 Real Customer Interview Transcripts & Discovery Report",
      metrics: "Customer Empathy (8) • Problem Clarity (8)",
    },
    {
      stage: "Month 3 — Build",
      title: "Functional MVP & Prototyping",
      summary: "Deploy working code or concierge operations. Connect first 100 organic campus users to test core value delivery.",
      deliverable: "Working Live Product URL + Demo Recording",
      metrics: "Execution Velocity (10) • Resourcefulness (10)",
    },
    {
      stage: "Month 4 — Sell",
      title: "50-Prospect Cold Outreach & Sales Challenge",
      summary: "Direct outbound pipeline execution. Overcome objections, convert first paying users, and take the 90-sec sales drill.",
      deliverable: "CRM Pipeline Export + 90-Sec Objection Handling Audio",
      metrics: "Sales & Persuasion (8) • Communication (7)",
    },
    {
      stage: "Month 5 — Prove",
      title: "Unit Economics & 'Where to Spend ₹10 Lakh'",
      summary: "Financial reasoning and CAC/LTV forecasting. Map 12-month capital deployment with exact ROI justifications.",
      deliverable: "12-Month Financial Model + Burn Control Plan",
      metrics: "Financial Reasoning (7) • Resilience (8)",
    },
    {
      stage: "Month 6 — Pitch",
      title: "10-Slide Pitch Deck & Investor Simulation",
      summary: "Cap table structuring, term sheet literacy, diligence data room setup, and AI/human investor Q&A simulations.",
      deliverable: "10-Slide Verified Pitch Deck + Video Presentation",
      metrics: "Leadership (8) • Learning Agility (8)",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar />

      {/* Free Test Modal */}
      <FreeFounderTestModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          
          {/* Subtle Canvas Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-amber-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Vision & Action */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Lifelong Operating System for Founders</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
                  BUILD YOUR FOUNDER PROFILE <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-indigo-900 to-slate-900">
                    FROM YEAR 1.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Don’t just build a startup. <strong>Build yourself.</strong> A longitudinal, evidence-driven ecosystem tracking your character, customer discovery, execution velocity, and lifelong founder identity.
                </p>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/founder"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0F172A] text-white text-sm font-extrabold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 group"
                  >
                    <span>Apply as Founder</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => setIsTestModalOpen(true)}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm font-bold hover:bg-slate-50 transition-all shadow-xs flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Take Free Founder Test</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900">12</div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Evaluation Dimensions</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900">6 Months</div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Evidence Curriculum</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900">₹10,000</div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Student Membership</div>
                  </div>
                </div>

              </div>

              {/* Right Column: 3D Founder Card Live Visualizer */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md p-2 rounded-3xl bg-gradient-to-b from-slate-200 to-slate-100 shadow-2xl border border-slate-300/80">
                  <FounderCardVisual founder={INITIAL_FOUNDER} startupName="CampusLogix" />
                </div>
                <p className="text-[11px] text-slate-400 mt-3 text-center">
                  *Interactive Preview • Digital + Physical Card issued upon KYC & membership
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CORE PHILOSOPHY: NOT A GENERIC COACHING SITE */}
        {/* ========================================================================= */}
        <section id="how-it-works" className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Foundational Principle
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Infrastructure Around People, Not Merely Companies.
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Companies pivot, merge, or close—but a builder’s character, integrity, grit, and verified history compound for decades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="mahto-card p-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Founder Passport (Longitudinal Identity)
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A permanent record of your entrepreneurial journey across college and adulthood. If you leave a startup, your Passport retains your verified milestones as <em>Former Founder</em> without data loss.
                </p>
              </div>

              <div className="mahto-card p-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Evidence Over Self-Reporting
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Scores evolve from 20 real customer interviews, working MVPs, 50-prospect sales logs, and verified professor references—never inflated by generic questionnaires.
                </p>
              </div>

              <div className="mahto-card p-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="w-10 h-10 rounded-xl bg-indigo-900 text-white flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  The Multi-Startup Model
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Founders can operate solo, invite co-founders with defined equity splits, or contribute to multiple simultaneous ventures through a unified MAHTO Account.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. 6-MONTH FOUNDER DEVELOPMENT JOURNEY */}
        {/* ========================================================================= */}
        <section id="founder-journey" className="py-20 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  Action Curriculum
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                  The 6-Month Builder Journey
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-xl">
                  10% Education • 20% Evaluation & Feedback • 70% Real-World Execution.
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-xs font-mono text-slate-500">
                Student 4-Year Longitudinal Track or Accelerated Graduate Track
              </div>
            </div>

            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
              {journeyStages.map((st, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStageTab(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    activeStageTab === idx
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                    Month {idx + 1}
                  </div>
                  <div className="text-xs font-black truncate mt-0.5">
                    {st.stage.split("—")[1]}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Stage Card */}
            <div className="mahto-card p-8 bg-white border-slate-200 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600">
                    <Sparkles className="w-4 h-4" />
                    <span>{journeyStages[activeStageTab].stage}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {journeyStages[activeStageTab].title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {journeyStages[activeStageTab].summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex-1">
                      <span className="font-bold text-slate-900 block mb-1">Required Deliverable:</span>
                      <span className="text-slate-600">{journeyStages[activeStageTab].deliverable}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex-1">
                      <span className="font-bold text-slate-900 block mb-1">Target Score Rubric:</span>
                      <span className="text-slate-600">{journeyStages[activeStageTab].metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between h-full text-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Evaluator Protocol
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900 mt-1">
                      Audited Human Review
                    </h4>
                    <p className="text-xs text-slate-500 mt-2">
                      Submissions receive detailed rubric feedback from Mahto evaluators, logged with timestamp in your Founder Passport.
                    </p>
                  </div>

                  <Link
                    href="/founder"
                    className="mt-6 w-full py-3 bg-[#0F172A] text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Start This Milestone</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PRICING & COMMERCIAL TRANSPARENCY */}
        {/* ========================================================================= */}
        <section id="pricing" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                One-Time Membership. Lifetime Network.
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Payment is strictly <strong>PER STARTUP</strong>, not per founder. If a startup has 5 founders, one payment covers the entire venture.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Student Founder */}
              <div className="mahto-card p-8 flex flex-col justify-between border-2 border-slate-900 relative shadow-xl">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-wider">
                  Campus Verified Student
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Student Founder
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">₹10,000</span>
                    <span className="text-xs font-medium text-slate-500">/ startup (One-time)</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    For college students verified by faculty reference. Includes longitudinal 4-year journey and permanent Founder Passport.
                  </p>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Permanent Founder Passport & Card</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 6-Day Staged Assessment Suite</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 10 Core Founder Challenges</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Professor Verification & Mentorship</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Startup Evaluation Profile</li>
                  </ul>
                </div>

                <Link
                  href="/founder"
                  className="mt-8 w-full py-3.5 bg-[#0F172A] text-white rounded-xl text-xs font-extrabold hover:bg-slate-800 transition-all text-center shadow-md block"
                >
                  Join as Student Founder
                </Link>
              </div>

              {/* Card 2: Graduate Founder */}
              <div className="mahto-card p-8 flex flex-col justify-between border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Graduate Founder
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">₹25,000</span>
                    <span className="text-xs font-medium text-slate-500">/ startup (One-time)</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    For working professionals, graduates, and full-time operators. Accelerated evaluation and investor readiness pathway.
                  </p>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Complete Founder Passport & Card</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Accelerated 12-Dimension Scoring</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Pitch Lab & AI Investor Objections</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Full Data Room & Cap Table Tools</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Investor Matching Eligibility</li>
                  </ul>
                </div>

                <Link
                  href="/founder"
                  className="mt-8 w-full py-3.5 bg-white border border-slate-300 text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all text-center block"
                >
                  Join as Graduate Founder
                </Link>
              </div>

              {/* Card 3: Startup OS (Recurring SaaS) */}
              <div className="mahto-card p-8 flex flex-col justify-between bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Recurring SaaS Layer
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">₹100</span>
                    <span className="text-xs font-medium text-slate-500">/ startup / month</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Optional low-friction operating system keeping your startup active, monitored, and visible to investors year-round.
                  </p>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Monthly Metric Reporting & Runway Tracker</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Startup Health Index (Healthy/Watch/Alert)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Active Investor Data Room Sharing</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Mahto Media Eligibility</li>
                  </ul>
                </div>

                <div className="mt-8 p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500 text-center">
                  Activates after initial evaluation
                </div>
              </div>

            </div>

            {/* Transparency Table: What Fee Buys vs What It Does NOT */}
            <div className="mt-14 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Commercial & Legal Clarity (Section 6 & 14)</span>
                </span>
                <span className="text-[10px] text-slate-400">Zero Misleading Promises</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-xs">
                <div className="p-6 space-y-3 bg-white">
                  <h4 className="font-extrabold text-emerald-800 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>What Your Fee Explicitly Pays For:</span>
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>✓ Staged 12-dimension behavioral & simulation assessment</li>
                    <li>✓ Issuance and maintenance of verified Founder Passport</li>
                    <li>✓ Physical & Digital MAHTO Founder Card with QR code</li>
                    <li>✓ 6-Month longitudinal curriculum and challenge evaluations</li>
                    <li>✓ Secure Data Room and multi-startup management OS</li>
                  </ul>
                </div>

                <div className="p-6 space-y-3 bg-slate-50">
                  <h4 className="font-extrabold text-red-800 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>What Your Fee Does NOT Buy:</span>
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>❌ Funding is <strong>never guaranteed</strong> by paying fees</li>
                    <li>❌ Guaranteed investor meetings or pre-negotiated valuations</li>
                    <li>❌ Unlimited future human services or consulting</li>
                    <li>❌ Achievement badges (all badges are merit-earned)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CAMPUS FLYWHEEL & PROFESSOR NETWORK */}
        {/* ========================================================================= */}
        <section id="campus-network" className="py-20 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Campus Innovation Flywheel
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Turn Every Campus into a Builder Ecosystem.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Colleges and professors are the foundation of authentic founder discovery. Our network tracks real distribution, E-cell engagement, and verified student credentials.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Faculty Reference & The ₹10L Rubric</h4>
                      <p className="text-slate-500 mt-0.5">
                        Professors answer: <em>"Would you personally invest ₹10 Lakh in this student?"</em>, creating honest reference evidence.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">College Partner MoU & Badges</h4>
                      <p className="text-slate-500 mt-0.5">
                        Colleges display the official Mahto Campus badge on their E-cell portal, linking to live aggregate campus analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/college"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
                >
                  <span>Explore Campus Network Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Live Campus Telemetry Card */}
              <div className="lg:col-span-6">
                <div className="mahto-card p-6 bg-white border-slate-200 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Campus Demand Index</span>
                      <h3 className="text-base font-extrabold text-slate-900">National Institute of Technology</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold">
                      Campus Partner (MoU)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 text-center">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-lg font-black text-slate-900">8,400</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Total Students</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-lg font-black text-slate-900">72</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Active Faculty</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-lg font-black text-slate-900">620</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Test Takers</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-lg font-black text-emerald-600">45</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Active Startups</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950">
                    <strong>Flywheel Active:</strong> Students $\rightarrow$ Faculty References $\rightarrow$ Verified Startups $\rightarrow$ Campus Multiplier 3.8x.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MAHTO MEDIA & FOUNDER STORIES */}
        {/* ========================================================================= */}
        <section id="media" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Media Flywheel
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
                Mahto Media & Founder Stories
              </h2>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                <em>"Ask difficult questions about ideas and systems, not attack people."</em> One recording produces flagship YouTube episodes, Shorts, Reels, and verified Founder Passport media entries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold mb-4">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white">The Mahto Founder Test</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    High-stakes live founder evaluations where ideas are pressure-tested against acute market realities and unit economics.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-amber-400">
                  Format: Claim $\rightarrow$ Evidence $\rightarrow$ Challenge
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold mb-4">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white">Dawat-e-Mahto</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Candid long-form conversations with India's most relentless builders, senior operators, and institutional investors.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-indigo-400">
                  Leadership • Character • Long-Term Grit
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-900 flex items-center justify-center font-bold mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white">Founder Stories & Viral Engine</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Ready-to-post media kits for validated founders, driving nationwide organic talent discovery to campus partners.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-emerald-400">
                  Consented Public Profiles & Shorts Loop
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. FINAL CTA BANNER */}
        {/* ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0F172A] text-amber-500 flex items-center justify-center font-black text-2xl mx-auto shadow-xl">
              M
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Start Building Your Lifetime Founder Passport Today.
            </h2>

            <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium">
              Join thousands of student and graduate founders creating verified track records, testing prototypes, and developing lifelong builder capability.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="/founder"
                className="px-8 py-4 rounded-2xl bg-[#0F172A] text-white text-sm font-extrabold hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Launch Founder Command Center</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsTestModalOpen(true)}
                className="px-8 py-4 rounded-2xl border border-slate-300 bg-white text-slate-900 text-sm font-bold hover:bg-slate-50 transition-all"
              >
                Take Free Founder Test
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
