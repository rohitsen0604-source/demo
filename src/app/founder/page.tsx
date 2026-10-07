"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderCardVisual from "@/components/FounderCardVisual";
import ScoreRadarVisual from "@/components/ScoreRadarVisual";
import WhatNextEngine from "@/components/WhatNextEngine";
import CoFounderInviteModal from "@/components/CoFounderInviteModal";
import MonthlyReportModal from "@/components/MonthlyReportModal";
import {
  INITIAL_FOUNDER,
  INITIAL_STARTUPS,
  INITIAL_ASSESSMENT_DAYS,
  INITIAL_CHALLENGES,
  computeNextActions,
} from "@/lib/store";
import {
  FounderProfile,
  StartupEntity,
  StagedAssessmentDay,
  FounderChallenge,
  MonthlyReportSubmission,
} from "@/lib/types";
import {
  LayoutDashboard,
  Award,
  CreditCard,
  LineChart,
  Target,
  Rocket,
  Building2,
  CalendarCheck2,
  Presentation,
  ShieldCheck,
  Plus,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Clock,
  QrCode,
  UserPlus,
  FileText,
  AlertTriangle,
  LogOut,
  FolderLock
} from "lucide-react";
import Link from "next/link";

export default function FounderPortalPage() {
  const [founder, setFounder] = useState<FounderProfile>(INITIAL_FOUNDER);
  const [startups, setStartups] = useState<StartupEntity[]>(INITIAL_STARTUPS);
  const [assessments, setAssessments] = useState<StagedAssessmentDay[]>(INITIAL_ASSESSMENT_DAYS);
  const [challenges, setChallenges] = useState<FounderChallenge[]>(INITIAL_CHALLENGES);
  
  // Navigation tab state
  const [activeTab, setActiveTab] = useState<
    "overview" | "passport" | "card" | "score" | "assessments" | "challenges" | "startups" | "reports" | "pitchlab" | "dataroom"
  >("overview");

  // Modal states
  const [selectedStartupForInvite, setSelectedStartupForInvite] = useState<StartupEntity | null>(null);
  const [selectedStartupForReport, setSelectedStartupForReport] = useState<StartupEntity | null>(null);
  const [activeAssessmentDay, setActiveAssessmentDay] = useState<StagedAssessmentDay | null>(null);
  const [assessmentSuccessMsg, setAssessmentSuccessMsg] = useState("");

  const nextActions = computeNextActions(founder, startups, challenges, assessments);

  // Handle Co-Founder Invitation
  const handleCoFounderInvite = (data: { name: string; email: string; phone?: string; role: string; equity?: number; message: string }) => {
    if (!selectedStartupForInvite) return;
    const updated = startups.map((s) => {
      if (s.id === selectedStartupForInvite.id) {
        return {
          ...s,
          founders: [
            ...s.founders,
            {
              founderId: `f-invite-${Date.now()}`,
              founderName: data.name + " (Pending Accept)",
              roleTitle: data.role,
              equityPercentage: data.equity || 0,
              status: "ACTIVE" as const,
              startDate: new Date().toISOString().split("T")[0],
            },
          ],
        };
      }
      return s;
    });
    setStartups(updated);
  };

  // Handle Leaving a Startup (Preserving Passport!)
  const handleLeaveStartup = (startupId: string) => {
    const confirmLeave = window.confirm("Are you sure you want to step down? Your historical contribution will be permanently preserved in your Founder Passport as 'Former Founder'.");
    if (!confirmLeave) return;

    const updated = startups.map((s) => {
      if (s.id === startupId) {
        return {
          ...s,
          founders: s.founders.map((f) => {
            if (f.founderId === founder.id) {
              return {
                ...f,
                status: "FORMER_FOUNDER" as const,
                endDate: new Date().toISOString().split("T")[0],
                disputeNotes: "Stepped down voluntarily. History archived in Founder Passport.",
              };
            }
            return f;
          }),
        };
      }
      return s;
    });
    setStartups(updated);
  };

  // Handle Staged Assessment Day Completion
  const handleCompleteAssessmentDay = (dayStage: number) => {
    const updated = assessments.map((a) => {
      if (a.dayStage === dayStage) {
        return { ...a, isCompleted: true, score: 85 };
      }
      // Unlock next day
      if (a.dayStage === dayStage + 1) {
        return { ...a, isUnlocked: true };
      }
      return a;
    });
    setAssessments(updated);
    
    // Update score
    setFounder((prev) => ({
      ...prev,
      currentScore: Math.min(100, prev.currentScore + 2.5),
    }));

    setAssessmentSuccessMsg(`Day ${dayStage} Assessment successfully submitted and audited! Score updated.`);
    setTimeout(() => setAssessmentSuccessMsg(""), 4000);
    setActiveAssessmentDay(null);
  };

  // Handle Monthly Report
  const handleMonthlyReportSubmit = (report: any) => {
    const updated = startups.map((s) => {
      if (s.id === report.startupId) {
        return {
          ...s,
          revenue: report.revenue,
          mrr: report.mrr,
          burnRate: report.burnRate,
          runwayMonths: report.runwayMonths,
          activeCustomers: report.activeCustomers,
          healthStatus: report.healthStatus,
        };
      }
      return s;
    });
    setStartups(updated);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar currentRole="FOUNDER" />

      {/* Modals */}
      {selectedStartupForInvite && (
        <CoFounderInviteModal
          isOpen={!!selectedStartupForInvite}
          startup={selectedStartupForInvite}
          onClose={() => setSelectedStartupForInvite(null)}
          onInviteSent={handleCoFounderInvite}
        />
      )}

      {selectedStartupForReport && (
        <MonthlyReportModal
          isOpen={!!selectedStartupForReport}
          startup={selectedStartupForReport}
          onClose={() => setSelectedStartupForReport(null)}
          onSubmit={handleMonthlyReportSubmit}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* User Hero Greeting Bar */}
        <div className="mahto-card p-6 mb-8 bg-white border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img
              src={founder.avatarUrl}
              alt={founder.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-900 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  Good morning, {founder.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  Verified Student Founder
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {founder.founderIdCode} • {founder.university} • Month 3 / 6 (BUILD STAGE)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-xs font-bold text-slate-400">Founder Score</div>
              <div className="text-lg font-black text-slate-900">{founder.currentScore}/100</div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-xs font-bold text-slate-400">Active Startups</div>
              <div className="text-lg font-black text-indigo-600">
                {startups.filter((s) => s.founders.some((f) => f.founderId === founder.id && f.status === "ACTIVE")).length}
              </div>
            </div>
          </div>
        </div>

        {/* Global Success Notification */}
        {assessmentSuccessMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{assessmentSuccessMsg}</span>
          </div>
        )}

        {/* Layout Grid: Sidebar Navigation + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ========================================================================= */}
          {/* SIDEBAR NAVIGATION (Section 33) */}
          {/* ========================================================================= */}
          <aside className="lg:col-span-3 space-y-2">
            <nav className="mahto-card p-3 bg-white border-slate-200 space-y-1">
              
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "overview" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Command Center</span>
              </button>

              <button
                onClick={() => setActiveTab("passport")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "passport" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Founder Passport</span>
              </button>

              <button
                onClick={() => setActiveTab("card")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "card" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <CreditCard className="w-4 h-4 text-indigo-500" />
                <span>Founder Card & QR</span>
              </button>

              <button
                onClick={() => setActiveTab("score")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "score" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <LineChart className="w-4 h-4 text-emerald-500" />
                <span>Founder Score (/100)</span>
              </button>

              <button
                onClick={() => setActiveTab("assessments")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "assessments" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Target className="w-4 h-4 text-rose-500" />
                <span>6-Day Assessments</span>
              </button>

              <button
                onClick={() => setActiveTab("challenges")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "challenges" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Rocket className="w-4 h-4 text-amber-600" />
                <span>Founder Challenges</span>
              </button>

              <button
                onClick={() => setActiveTab("startups")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "startups" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>My Startups (Multi-Hub)</span>
              </button>

              <button
                onClick={() => setActiveTab("reports")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "reports" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <CalendarCheck2 className="w-4 h-4 text-emerald-600" />
                <span>Monthly Reports & Health</span>
              </button>

              <button
                onClick={() => setActiveTab("pitchlab")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "pitchlab" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Presentation className="w-4 h-4 text-purple-600" />
                <span>Pitch Lab & AI Objections</span>
              </button>

              <button
                onClick={() => setActiveTab("dataroom")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "dataroom" ? "bg-[#0F172A] text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <FolderLock className="w-4 h-4 text-slate-600" />
                <span>Funding & Data Room</span>
              </button>

            </nav>

            {/* Quick Status Box */}
            <div className="mahto-card p-4 bg-slate-900 text-white text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>Recognition:</span>
                <span className="text-amber-400 font-bold font-mono">VALIDATED</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>College Partner:</span>
                <span className="text-emerald-400 font-bold">NIT Bangalore</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>KYC Status:</span>
                <span className="text-emerald-400 font-bold">Aadhaar/PAN Verified</span>
              </div>
            </div>
          </aside>

          {/* ========================================================================= */}
          {/* MAIN CONTENT PANELS */}
          {/* ========================================================================= */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* ----------------------------------------------------------------------- */}
            {/* TAB 1: OVERVIEW & "WHAT SHOULD I DO NEXT?" */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                
                {/* Engine Component */}
                <WhatNextEngine
                  actions={nextActions}
                  onActionClick={(act) => {
                    if (act.category === "ASSESSMENT") setActiveTab("assessments");
                    if (act.category === "CHALLENGE") setActiveTab("challenges");
                    if (act.category === "FINANCIAL") setActiveTab("reports");
                  }}
                />

                {/* Quick Metric Snapshot */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="mahto-card p-5 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Venture Health
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <h4 className="text-lg font-black text-slate-900">CampusLogix</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold">
                        🟢 HEALTHY
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Runway: 14.5 Mos • MRR: ₹48,000 • Active: 1,840
                    </div>
                  </div>

                  <div className="mahto-card p-5 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Customer Discovery
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <h4 className="text-lg font-black text-slate-900">20 Interviews</h4>
                      <span className="text-xs font-bold text-emerald-600">✓ Completed</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Synthesis report verified by Mahto Evaluator
                    </div>
                  </div>

                  <div className="mahto-card p-5 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Next Staged Test
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      <h4 className="text-lg font-black text-slate-900">Day 4: Execution</h4>
                      <span className="text-xs font-bold text-amber-600">Active Today</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Sales scenarios & objection handling
                    </div>
                  </div>

                </div>

                {/* 6-Month Programme Progress Tracker */}
                <div className="mahto-card p-6 bg-white">
                  <h4 className="text-sm font-extrabold text-slate-900 mb-4 flex items-center justify-between">
                    <span>6-Month Founder Development Roadmap</span>
                    <span className="text-xs text-indigo-600 font-bold">50% Completed</span>
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="text-emerald-800 font-bold">Month 1: Discover</div>
                      <div className="text-[10px] text-emerald-600">✓ Completed</div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="text-emerald-800 font-bold">Month 2: Understand</div>
                      <div className="text-[10px] text-emerald-600">✓ 20 Interviews Done</div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-300">
                      <div className="text-amber-900 font-bold">Month 3: Build (Now)</div>
                      <div className="text-[10px] text-amber-700">▶ MVP In Progress</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-400">
                      <div className="font-bold">Month 4: Sell</div>
                      <div className="text-[10px]">Locked</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-400">
                      <div className="font-bold">Month 5: Prove</div>
                      <div className="text-[10px]">Locked</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-400">
                      <div className="font-bold">Month 6: Pitch</div>
                      <div className="text-[10px]">Locked</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 2: FOUNDER PASSPORT (Longitudinal Lifelong History) */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "passport" && (
              <div className="space-y-6">
                
                <div className="mahto-card p-6 bg-gradient-to-r from-[#0F172A] to-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Official Verifiable Asset
                    </span>
                    <h3 className="text-xl font-black text-white mt-1">
                      The Mahto Founder Passport
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl">
                      This is not a course certificate. This is your lifetime entrepreneurial dossier, verified references, multi-startup track record, and auditable milestones.
                    </p>
                  </div>

                  <Link
                    href={`/verify/founder/${founder.cardQrCode}`}
                    target="_blank"
                    className="px-4 py-2.5 rounded-xl bg-white text-[#0F172A] text-xs font-bold hover:bg-slate-100 transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Public Verification View</span>
                  </Link>
                </div>

                {/* Passport Dossier Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Identity & Education */}
                  <div className="mahto-card p-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                      Identity & Education
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div><strong className="text-slate-700">Legal Name:</strong> <span className="text-slate-900 font-semibold">{founder.name}</span></div>
                      <div><strong className="text-slate-700">Founder ID:</strong> <span className="font-mono text-slate-900">{founder.founderIdCode}</span></div>
                      <div><strong className="text-slate-700">Institution:</strong> <span className="text-slate-900">{founder.university}</span></div>
                      <div><strong className="text-slate-700">Degree & Course:</strong> <span className="text-slate-900">{founder.degree}</span></div>
                      <div><strong className="text-slate-700">Expected Graduation:</strong> <span className="text-slate-900">{founder.graduationYear}</span></div>
                      <div><strong className="text-slate-700">Faculty Reference:</strong> <span className="text-emerald-700 font-bold">Prof. Rajesh Kulkarni (Verified)</span></div>
                    </div>
                  </div>

                  {/* Profile Traits */}
                  <div className="mahto-card p-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                      Psychological & Leadership Profile
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div><strong className="text-slate-700">Leadership Archetype:</strong> <span className="text-slate-900">{founder.leadershipStyle}</span></div>
                      <div><strong className="text-slate-700">Decision Making:</strong> <span className="text-slate-900">{founder.decisionStyle}</span></div>
                      <div><strong className="text-slate-700">Resilience Index:</strong> <span className="text-slate-900">{founder.resilienceProfile}</span></div>
                      <div>
                        <strong className="text-slate-700 block mb-1">Demonstrated Strengths:</strong>
                        <div className="flex flex-wrap gap-1">
                          {founder.strengths.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[10px] font-bold">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Complete Startup Association History (Including Former Founder Status!) */}
                <div className="mahto-card p-6">
                  <h4 className="text-sm font-black text-slate-900 mb-1">
                    Multi-Startup Association History (Preserved Permanently)
                  </h4>
                  <p className="text-xs text-slate-500 mb-6">
                    A founder never loses historical records when leaving or closing a venture. All milestones are preserved.
                  </p>

                  <div className="space-y-4">
                    {startups.map((s) => {
                      const link = s.founders.find((f) => f.founderId === founder.id);
                      if (!link) return null;
                      return (
                        <div key={s.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-extrabold text-slate-900">{s.name}</h5>
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                                link.status === "ACTIVE" ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
                              }`}>
                                {link.status === "ACTIVE" ? "ACTIVE VENTURE" : "FORMER FOUNDER (ARCHIVED)"}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{s.tagline}</p>
                            <div className="text-[11px] text-slate-600 mt-2">
                              Role: <strong>{link.roleTitle}</strong> • Started: {link.startDate} {link.endDate ? `• Ended: ${link.endDate}` : ""}
                            </div>
                            {link.disputeNotes && (
                              <p className="text-[10px] text-slate-500 italic mt-1">
                                Note: {link.disputeNotes}
                              </p>
                            )}
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-slate-900">
                              Startup Score: {s.startupScore}/100
                            </span>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              Revenue: ₹{s.revenue.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 3: FOUNDER CARD & QR */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "card" && (
              <div className="space-y-6">
                <div className="mahto-card p-6 bg-white flex flex-col items-center text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2">
                    Physical + Digital Identity Credential
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Your Official MAHTO Founder Card
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-lg">
                    This card represents <strong>Belonging</strong> to the builder network. Click the card below to flip between credential face and instant QR verification.
                  </p>

                  <div className="my-8">
                    <FounderCardVisual founder={founder} startupName="CampusLogix" />
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-lg text-left space-y-1.5">
                    <div className="font-bold text-slate-900">Founder Card Protocols:</div>
                    <div>• <strong>QR Code:</strong> Leads to authenticated public verification at <code>mahto.org/verify</code></div>
                    <div>• <strong>Privacy:</strong> Sensitive psychometrics and cap table data remain completely hidden on public scans.</div>
                    <div>• <strong>Physical Delivery:</strong> Metal NFC card dispatched to verified campus address.</div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 4: FOUNDER SCORE BREAKDOWN */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "score" && (
              <ScoreRadarVisual
                score={founder.currentScore}
                dimensions={founder.dimensions}
                history={founder.scoreHistory}
              />
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 5: 6-DAY STAGED ASSESSMENTS */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "assessments" && (
              <div className="space-y-6">
                
                <div className="mahto-card p-6 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                        Fatigue-Free Assessment Engine
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        6-Day Staged Assessment Suite
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Assessments unlock progressively across days to preserve high focus and diagnostic accuracy.
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-400">Progress</span>
                      <div className="text-sm font-black text-emerald-600">50% (3 of 6 Days Done)</div>
                    </div>
                  </div>

                  {/* Staged Days Grid */}
                  <div className="space-y-4">
                    {assessments.map((day) => (
                      <div
                        key={day.dayStage}
                        className={`p-5 rounded-2xl border transition-all ${
                          day.isCompleted
                            ? "bg-emerald-50/50 border-emerald-200"
                            : day.isUnlocked
                            ? "bg-white border-amber-300 shadow-md ring-1 ring-amber-300"
                            : "bg-slate-50 border-slate-200 opacity-60"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${
                              day.isCompleted ? "bg-emerald-600 text-white" : day.isUnlocked ? "bg-amber-500 text-[#0F172A]" : "bg-slate-300 text-slate-600"
                            }`}>
                              {day.isCompleted ? "✓" : day.dayStage}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-extrabold text-slate-900">{day.title}</h4>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                  day.isCompleted ? "bg-emerald-100 text-emerald-800" : day.isUnlocked ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-600"
                                }`}>
                                  {day.subtitle}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">{day.description}</p>
                              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                                <Clock className="w-3 h-3" />
                                <span>~{day.estimatedMinutes} Mins</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            {day.isCompleted ? (
                              <span className="text-xs font-extrabold text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-xs inline-block">
                                Scored: {day.score}/100
                              </span>
                            ) : day.isUnlocked ? (
                              <button
                                onClick={() => setActiveAssessmentDay(day)}
                                className="px-5 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md flex items-center gap-1.5"
                              >
                                <span>Take Assessment</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                <Lock className="w-3.5 h-3.5" />
                                <span>Locked</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Interactive Questionnaire Modal View for Active Day */}
                        {activeAssessmentDay?.dayStage === day.dayStage && (
                          <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              Active Assessment Question:
                            </h5>

                            {day.questions.map((q) => (
                              <div key={q.id} className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
                                <p className="text-xs font-bold text-slate-900">{q.question}</p>
                                <div className="space-y-2">
                                  {q.options.map((opt, oIdx) => (
                                    <button
                                      key={oIdx}
                                      onClick={() => handleCompleteAssessmentDay(day.dayStage)}
                                      className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-xs font-medium text-slate-800 transition-all flex items-center justify-between"
                                    >
                                      <span>{opt.label}</span>
                                      <span className="text-[10px] text-emerald-600 font-mono font-bold">Select & Submit</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 6: FOUNDER CHALLENGES */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "challenges" && (
              <div className="space-y-6">
                <div className="mahto-card p-6 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Action-Based Simulation Engine
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        10 Core Founder Challenges
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Deliverables require real user interviews, working MVPs, 50 outreach calls, and 12-month unit economics.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {challenges.map((c) => (
                      <div
                        key={c.key}
                        className={`p-5 rounded-2xl border transition-all ${
                          c.status === "APPROVED"
                            ? "bg-emerald-50/40 border-emerald-200"
                            : c.status === "IN_PROGRESS"
                            ? "bg-white border-amber-300 shadow-sm ring-1 ring-amber-300"
                            : "bg-slate-50 border-slate-200 opacity-60"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-extrabold text-slate-900">{c.title}</h4>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                c.status === "APPROVED" ? "bg-emerald-100 text-emerald-800" : c.status === "IN_PROGRESS" ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-600"
                              }`}>
                                {c.status.replace(/_/g, " ")}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{c.description}</p>
                            
                            <div className="text-[11px] text-slate-500 font-semibold mt-2">
                              Required: <span className="text-slate-900">{c.deliverable}</span>
                            </div>

                            {c.feedback && (
                              <div className="mt-3 p-3 rounded-xl bg-white border border-emerald-200 text-[11px] text-emerald-900">
                                <strong>Assessor Feedback:</strong> {c.feedback}
                              </div>
                            )}
                          </div>

                          <div className="shrink-0 text-right">
                            {c.status === "APPROVED" ? (
                              <span className="text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-xs inline-block">
                                Score: {c.score}/100
                              </span>
                            ) : c.status === "IN_PROGRESS" ? (
                              <button
                                onClick={() => {
                                  alert("Simulating video recording upload: Deliverable submitted for human review!");
                                  setChallenges((prev) =>
                                    prev.map((item) =>
                                      item.key === c.key ? { ...item, status: "APPROVED", score: 90, feedback: "Excellent pitch delivery. Clear equity reasoning and customer pain articulation." } : item
                                    )
                                  );
                                }}
                                className="px-4 py-2 bg-amber-500 text-[#0F172A] text-xs font-bold rounded-xl hover:bg-amber-400 transition-all shadow-md"
                              >
                                Submit Video Pitch
                              </button>
                            ) : (
                              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                <Lock className="w-3.5 h-3.5" />
                                <span>Month {c.stageMonth} Milestone</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 7: MY STARTUPS (Multi-Startup Hub) */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "startups" && (
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Multi-Startup Hub</h3>
                    <p className="text-xs text-slate-500">Manage all ventures linked to your universal MAHTO Account</p>
                  </div>

                  <button
                    onClick={() => {
                      const name = prompt("Enter new Startup Name:");
                      if (!name) return;
                      const newStartup: StartupEntity = {
                        id: `st-${Date.now()}`,
                        name,
                        slug: name.toLowerCase().replace(/\s+/g, "-"),
                        tagline: "New venture in idea stage",
                        description: "Formulating customer hypothesis and MVP.",
                        industry: "Technology",
                        stage: "IDEA",
                        isPaid: true,
                        subscriptionTier: "BASIC",
                        startupScore: 50.0,
                        revenue: 0,
                        mrr: 0,
                        burnRate: 0,
                        runwayMonths: 12,
                        activeCustomers: 0,
                        healthStatus: "HEALTHY",
                        founders: [
                          {
                            founderId: founder.id,
                            founderName: founder.name,
                            roleTitle: "Primary Founder",
                            equityPercentage: 100,
                            status: "ACTIVE",
                            startDate: new Date().toISOString().split("T")[0],
                          },
                        ],
                        documentsCount: 0,
                        createdAt: new Date().toISOString().split("T")[0],
                      };
                      setStartups([...startups, newStartup]);
                    }}
                    className="px-4 py-2.5 bg-[#0F172A] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Register New Startup</span>
                  </button>
                </div>

                {/* Startup Cards */}
                <div className="space-y-6">
                  {startups.map((s) => {
                    const myRole = s.founders.find((f) => f.founderId === founder.id);
                    return (
                      <div key={s.id} className="mahto-card p-6 bg-white border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-lg font-black text-slate-900">{s.name}</h4>
                              <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                {s.stage.replace(/_/g, " ")}
                              </span>
                              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                                s.healthStatus === "HEALTHY" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                              }`}>
                                🟢 {s.healthStatus}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{s.tagline}</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedStartupForInvite(s)}
                              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1"
                            >
                              <UserPlus className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Invite Co-Founder</span>
                            </button>

                            <button
                              onClick={() => setSelectedStartupForReport(s)}
                              className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1"
                            >
                              <CalendarCheck2 className="w-3.5 h-3.5" />
                              <span>Update Metrics</span>
                            </button>

                            {myRole?.status === "ACTIVE" && (
                              <button
                                onClick={() => handleLeaveStartup(s.id)}
                                title="Leave startup voluntarily (preserves Founder Passport history)"
                                className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                              >
                                <LogOut className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Co-Founder Team Grid */}
                        <div className="my-4">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Founding Team & Equity Structure
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {s.founders.map((f, fIdx) => (
                              <div key={fIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                                <div>
                                  <div className="font-bold text-slate-900">{f.founderName}</div>
                                  <div className="text-[10px] text-slate-500">{f.roleTitle}</div>
                                </div>
                                <div className="text-right">
                                  <span className="font-mono font-bold text-slate-700">{f.equityPercentage}%</span>
                                  <div className="text-[9px] text-slate-400 uppercase">{f.status}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Financial Snapshot */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 font-medium">Revenue</span>
                            <div className="font-bold text-slate-900 font-mono">₹{s.revenue.toLocaleString()}</div>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 font-medium">MRR</span>
                            <div className="font-bold text-slate-900 font-mono">₹{s.mrr.toLocaleString()}</div>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 font-medium">Monthly Burn</span>
                            <div className="font-bold text-slate-900 font-mono">₹{s.burnRate.toLocaleString()}</div>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <span className="text-[10px] text-slate-400 font-medium">Runway</span>
                            <div className="font-bold text-slate-900 font-mono">{s.runwayMonths} Months</div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 8: MONTHLY REPORTS */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "reports" && (
              <div className="space-y-6">
                <div className="mahto-card p-6 bg-white">
                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    Standardized Monthly Portfolio Reporting
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Reporting builds an immutable record of financial discipline and traction for future investor diligence.
                  </p>

                  <div className="space-y-4">
                    {startups.map((s) => (
                      <div key={s.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{s.name}</h4>
                          <p className="text-xs text-slate-500">October 2026 Reporting Cycle</p>
                          <div className="text-xs text-emerald-700 font-semibold mt-1">
                            Current Status: 🟢 {s.healthStatus} • Runway: {s.runwayMonths} Mos
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedStartupForReport(s)}
                          className="px-4 py-2 bg-[#0F172A] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xs"
                        >
                          Submit Monthly Metrics
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 9: PITCH LAB & AI OBJECTIONS */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "pitchlab" && (
              <div className="space-y-6">
                <div className="mahto-card p-6 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                        Pitch Simulator & AI Stress-Test
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        The Mahto Pitch Lab
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Practice 10-slide deck narration and receive tough institutional investor objections.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 text-xs">
                      <h4 className="font-extrabold text-slate-900">Standard 10-Slide Deck Structure:</h4>
                      <ol className="list-decimal pl-4 space-y-1.5 text-slate-600">
                        <li><strong>Problem:</strong> Acute customer pain & frequency</li>
                        <li><strong>Solution:</strong> Core value prop & demo video</li>
                        <li><strong>Market Size:</strong> Realistic serviceable TAM</li>
                        <li><strong>Product:</strong> Architecture & proprietary edge</li>
                        <li><strong>Traction:</strong> Real user retention & MRR</li>
                        <li><strong>Business Model:</strong> Pricing & unit economics</li>
                        <li><strong>Competition:</strong> Clear defensibility matrix</li>
                        <li><strong>Go-To-Market:</strong> Campus flywheel & CAC</li>
                        <li><strong>Team:</strong> Builder background & grit proof</li>
                        <li><strong>The Ask:</strong> ₹10L–₹50L milestone deployment</li>
                      </ol>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          <span>AI Investor Simulation</span>
                        </span>
                        <span className="text-[10px] text-slate-400">Model: Gemini 3.7 Pro</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        <em>"CampusLogix shows promising 1,840 user signups, but how do you prevent runner drop-off during exam seasons? Defend your unit contribution margin when student density is low."</em>
                      </p>

                      <button
                        onClick={() => alert("Recording live answer simulation. AI feedback rubric generating...")}
                        className="w-full py-2.5 bg-amber-500 text-[#0F172A] rounded-xl text-xs font-bold hover:bg-amber-400 transition-all shadow-md"
                      >
                        Record 60-Sec Audio Response
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* TAB 10: FUNDING & DATA ROOM */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === "dataroom" && (
              <div className="space-y-6">
                <div className="mahto-card p-6 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Secure Diligence Vault
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        Startup Data Room & Permissions
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Granular access control. Investors only see documents with explicit founder consent.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span className="font-bold text-slate-900">CampusLogix_Pitch_Deck_v3.pdf</span>
                      </div>
                      <span className="text-emerald-700 font-bold">Investor-Visible</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span className="font-bold text-slate-900">Cap_Table_Structure_Oct2026.xlsx</span>
                      </div>
                      <span className="text-amber-700 font-bold">Restricted (Request Access)</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span className="font-bold text-slate-900">Campus_Vendor_Partnership_MoUs.pdf</span>
                      </div>
                      <span className="text-emerald-700 font-bold">Investor-Visible</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>

      <Footer />
    </div>
  );
}
