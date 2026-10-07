"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserRole } from "@/lib/types";
import {
  ShieldCheck,
  Award,
  Compass,
  Users,
  Briefcase,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  QrCode,
  LineChart,
  GraduationCap
} from "lucide-react";

interface NavbarProps {
  currentRole?: UserRole;
  onRoleChange?: (role: UserRole) => void;
}

export default function Navbar({ currentRole = "FOUNDER", onRoleChange }: NavbarProps) {
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const roles: { role: UserRole; label: string; desc: string }[] = [
    { role: "FOUNDER", label: "Founder Command Center", desc: "Passport, Score, Challenges & Startups" },
    { role: "PROFESSOR", label: "Professor & Faculty Portal", desc: "Student Verification & ₹10L Rubric" },
    { role: "COLLEGE_ADMIN", label: "College & Campus Network", desc: "Campus Demand Index & E-Cell Hub" },
    { role: "INVESTOR", label: "Investor Pipeline & Diligence", desc: "Matched Startups & Data Rooms" },
    { role: "TELECALLER", label: "Telecaller CRM & Growth", desc: "Leads, Conversions & Incentives" },
    { role: "SUPER_ADMIN", label: "Super Admin CEO Command", desc: "Platform Audit, Revenue & Health" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#09090B] text-amber-400 flex items-center justify-center font-black text-xl tracking-tight shadow-md border border-amber-500/20 group-hover:border-amber-500 transition-colors">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#09090B]">
                  MAHTO<span className="text-amber-600">.ORG</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                  Founder Operating System
                </span>
              </div>
            </Link>

            {/* Main Nav Links (Public) */}
            <nav className="hidden lg:flex items-center space-x-1 pl-4 border-l border-[#E7E2D9] text-xs font-bold text-stone-700">
              <Link href="/#how-it-works" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                How It Works
              </Link>
              <Link href="/#founder-journey" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                6-Month Journey
              </Link>
              <Link href="/#pricing" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                Pricing (₹10k / ₹25k)
              </Link>
              <Link href="/#campus-network" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                Campus Flywheel
              </Link>
              <Link href="/#rankings" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                Rankings
              </Link>
              <Link href="/#media" className="px-3 py-2 rounded-lg hover:text-stone-950 hover:bg-stone-100 transition-colors">
                Mahto Media
              </Link>
            </nav>
          </div>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Quick Verification Button */}
            <Link
              href="/verify/founder/mht-qr-rohit-sen-0042"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#E7E2D9] bg-white text-xs font-semibold text-stone-700 hover:border-stone-400 hover:text-stone-900 transition-all shadow-xs"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-600" />
              <span>Verify Card QR</span>
            </Link>

            {/* Interactive Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 text-xs font-bold text-[#09090B] transition-colors border border-[#E7E2D9] shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Role: {currentRole}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {isRoleMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-stone-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-stone-100">
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Switch Active Role
                    </p>
                  </div>
                  {roles.map((r) => (
                    <button
                      key={r.role}
                      onClick={() => {
                        onRoleChange?.(r.role);
                        setIsRoleMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-stone-50 transition-colors flex flex-col ${
                        currentRole === r.role ? "bg-stone-50 font-bold border-l-4 border-amber-600" : ""
                      }`}
                    >
                      <span className="text-xs font-bold text-stone-900">{r.label}</span>
                      <span className="text-[10px] text-stone-500">{r.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Dashboard Link */}
            <Link
              href="/founder"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#09090B] text-amber-400 text-xs font-extrabold hover:bg-stone-800 transition-all shadow-md hover:shadow-lg border border-amber-500/30"
            >
              <span>Launch Command Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 rounded-lg bg-stone-100 text-stone-800"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3">
          <Link href="/#how-it-works" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-stone-800">
            How It Works
          </Link>
          <Link href="/#founder-journey" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-stone-800">
            6-Month Journey
          </Link>
          <Link href="/#pricing" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-stone-800">
            Pricing
          </Link>
          <Link href="/#campus-network" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-stone-800">
            Campus Network
          </Link>
          <Link href="/founder" onClick={() => setIsMobileNavOpen(false)} className="block w-full text-center py-3 bg-[#09090B] text-amber-400 rounded-xl text-sm font-bold mt-4">
            Open Founder Portal
          </Link>
        </div>
      )}
    </header>
  );
}
