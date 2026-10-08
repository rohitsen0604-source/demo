"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserRole } from "@/lib/types";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  QrCode,
  ShieldCheck,
  Sparkles
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
    <header className="sticky top-0 z-50 bg-[#09090B]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-black flex items-center justify-center font-black text-xl tracking-tight shadow-[0_0_20px_rgba(245,158,11,0.35)] border border-amber-300/40 group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xl font-black tracking-tight text-white font-display">
                    MAHTO<span className="text-amber-400">.ORG</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-bold border border-amber-400/30">
                    V2.0
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  Founder Operating System
                </span>
              </div>
            </Link>

            {/* Main Nav Links (Public) */}
            <nav className="hidden lg:flex items-center space-x-1 pl-6 border-l border-white/10 text-xs font-semibold text-zinc-300">
              <Link href="/#how-it-works" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                How It Works
              </Link>
              <Link href="/#founder-journey" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                6-Month Journey
              </Link>
              <Link href="/#pricing" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                Pricing & Fees
              </Link>
              <Link href="/#campus-network" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                Campus Flywheel
              </Link>
              <Link href="/#rankings" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                Rankings
              </Link>
              <Link href="/#media" className="px-3 py-2 rounded-lg hover:text-amber-400 hover:bg-white/5 transition-all">
                Mahto Media
              </Link>
            </nav>
          </div>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Quick Verification Button */}
            <Link
              href="/verify/founder/mht-qr-rohit-sen-0042"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900/80 text-xs font-semibold text-zinc-300 hover:border-amber-500/50 hover:text-amber-300 transition-all shadow-sm"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-400" />
              <span>Verify Card QR</span>
            </Link>

            {/* Interactive Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-xs font-bold text-zinc-200 transition-colors border border-white/10 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Role: {currentRole}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {isRoleMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#121215] rounded-2xl shadow-2xl border border-amber-500/20 py-2 z-50 backdrop-blur-2xl">
                  <div className="px-4 py-2 border-b border-white/5">
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
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
                      className={`w-full text-left px-4 py-2.5 hover:bg-white/5 transition-colors flex flex-col ${
                        currentRole === r.role ? "bg-amber-400/10 font-bold border-l-4 border-amber-400 text-amber-300" : "text-zinc-300"
                      }`}
                    >
                      <span className="text-xs font-bold">{r.label}</span>
                      <span className="text-[10px] text-zinc-500">{r.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Dashboard Link */}
            <Link
              href="/founder"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl btn-gold text-black text-xs font-black transition-all"
            >
              <span>Command Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="md:hidden bg-[#121215] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <Link href="/#how-it-works" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-200">
            How It Works
          </Link>
          <Link href="/#founder-journey" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-200">
            6-Month Journey
          </Link>
          <Link href="/#pricing" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-200">
            Pricing
          </Link>
          <Link href="/#campus-network" onClick={() => setIsMobileNavOpen(false)} className="block py-2 text-sm font-semibold text-zinc-200">
            Campus Network
          </Link>
          <Link href="/founder" onClick={() => setIsMobileNavOpen(false)} className="block w-full text-center py-3 btn-gold text-black rounded-xl text-sm font-bold mt-4">
            Open Founder Portal
          </Link>
        </div>
      )}
    </header>
  );
}

