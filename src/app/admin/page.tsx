"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INITIAL_AUDIT_LOGS } from "@/lib/mockData";
import { AuditLogItem } from "@/lib/types";
import { ShieldAlert, TrendingUp, Users, Building2, Lock, DollarSign, Activity, CheckCircle2 } from "lucide-react";

export default function SuperAdminPage() {
  const [logs, setLogs] = useState<AuditLogItem[]>(INITIAL_AUDIT_LOGS);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#09090B] flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar currentRole="SUPER_ADMIN" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Header */}
        <div className="mahto-card p-6 mb-8 bg-[#09090B] text-white border border-amber-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
              SUPER ADMIN / CEO COMMAND CENTER
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
              Manoj Mahto • Executive Control
            </h1>
            <p className="text-xs text-stone-400 mt-0.5">
              Full platform governance, scoring rubrics, audit log inspection, and treasury telemetry.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold font-mono">
              System 100% Operational
            </span>
          </div>
        </div>

        {/* High-Level Financial & Platform KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Monthly Run-Rate</span>
            <div className="text-2xl font-black text-stone-900 mt-1 font-mono">₹1.24 Cr</div>
            <span className="text-[11px] text-emerald-700 font-semibold">1,020 Paid Startups</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Active Founders</span>
            <div className="text-2xl font-black text-amber-700 mt-1 font-mono">1,450</div>
            <span className="text-[11px] text-stone-500">Across 64 Campus Partners</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Avg Founder Score</span>
            <div className="text-2xl font-black text-stone-900 mt-1 font-mono">71.4 <span className="text-xs text-stone-400">/100</span></div>
            <span className="text-[11px] text-stone-500">Evidence weighted</span>
          </div>

          <div className="mahto-card p-5 bg-white border-[#E7E2D9]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Portfolio Health</span>
            <div className="text-2xl font-black text-emerald-700 mt-1 font-mono">82%</div>
            <span className="text-[11px] text-stone-500">🟢 Healthy Status</span>
          </div>
        </div>

        {/* Immutable Audit Trail Section (Section 57) */}
        <div className="mahto-card p-6 bg-white border-[#E7E2D9] mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-black text-stone-900">
                Immutable System Audit Logs (RBAC & Fraud Prevention)
              </h3>
              <p className="text-xs text-stone-500">
                Every score change, role transition, data room access, and payment webhook is cryptographically logged.
              </p>
            </div>
            <span className="text-xs font-mono text-amber-600 font-bold">Live Stream</span>
          </div>

          <div className="divide-y divide-stone-100 text-xs">
            {logs.map((log) => (
              <div key={log.id} className="py-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{log.actorName}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700">
                      {log.actorRole}
                    </span>
                    <span className="font-mono text-amber-800 font-semibold">{log.action}</span>
                  </div>
                  <div className="text-stone-600 mt-0.5">
                    Target: <strong>{log.entityName}</strong> ({log.entityType})
                  </div>
                  {log.beforeState && log.afterState && (
                    <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                      {log.beforeState} $\rightarrow$ {log.afterState}
                    </div>
                  )}
                </div>

                <div className="text-right text-[11px] text-stone-400 font-mono">
                  <div>{log.timestamp}</div>
                  <div>IP: {log.ipAddress}</div>
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
