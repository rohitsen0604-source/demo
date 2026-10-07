"use client";

import React, { useState } from "react";
import { X, TrendingUp, Check, Activity } from "lucide-react";
import { StartupEntity, HealthStatus } from "@/lib/types";

interface ReportModalProps {
  isOpen: boolean;
  startup: StartupEntity;
  onClose: () => void;
  onSubmit: (report: {
    startupId: string;
    revenue: number;
    mrr: number;
    burnRate: number;
    runwayMonths: number;
    activeCustomers: number;
    highlights: string;
    lowlights: string;
    helpNeeded: string;
    healthStatus: HealthStatus;
  }) => void;
}

export default function MonthlyReportModal({ isOpen, startup, onClose, onSubmit }: ReportModalProps) {
  const [revenue, setRevenue] = useState(startup.revenue || 0);
  const [mrr, setMrr] = useState(startup.mrr || 0);
  const [burnRate, setBurnRate] = useState(startup.burnRate || 0);
  const [runwayMonths, setRunwayMonths] = useState(startup.runwayMonths || 12);
  const [activeCustomers, setActiveCustomers] = useState(startup.activeCustomers || 0);
  const [highlights, setHighlights] = useState("Closed pilot with 3 campus food outlets, onboarded 450 new daily active students.");
  const [lowlights, setLowlights] = useState("Delivery times spiked during rain; need dedicated student runner incentives.");
  const [helpNeeded, setHelpNeeded] = useState("Introduction to legal advisor for campus vendor MoUs.");
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  // Auto-calculate health status based on runway and revenue
  const calculateHealth = (): HealthStatus => {
    if (runwayMonths < 3 && revenue === 0) return "INTERVENTION_REQUIRED";
    if (runwayMonths < 6) return "WATCH";
    return "HEALTHY";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const health = calculateHealth();

    onSubmit({
      startupId: startup.id,
      revenue: Number(revenue),
      mrr: Number(mrr),
      burnRate: Number(burnRate),
      runwayMonths: Number(runwayMonths),
      activeCustomers: Number(activeCustomers),
      highlights,
      lowlights,
      helpNeeded,
      healthStatus: health,
    });

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const computedHealth = calculateHealth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Standardized Monthly Startup Report</h3>
            <p className="text-xs text-slate-500">October 2026 Reporting Cycle • {startup.name}</p>
          </div>
        </div>

        {isSaved ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Monthly Report Recorded!</h4>
            <p className="text-xs text-slate-500 mt-1">
              Health Status: <strong>{computedHealth}</strong>. Data room and investor telemetry updated.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Health Preview Pill */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700">Calculated Startup Health:</span>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                computedHealth === "HEALTHY" 
                  ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                  : computedHealth === "WATCH"
                  ? "bg-amber-100 text-amber-800 border-amber-300"
                  : "bg-red-100 text-red-800 border-red-300"
              }`}>
                🟢 {computedHealth}
              </span>
            </div>

            {/* Financial Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Total Revenue (₹)</label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Monthly MRR (₹)</label>
                <input
                  type="number"
                  value={mrr}
                  onChange={(e) => setMrr(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Monthly Burn (₹)</label>
                <input
                  type="number"
                  value={burnRate}
                  onChange={(e) => setBurnRate(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Runway (Months)</label>
                <input
                  type="number"
                  step="0.5"
                  value={runwayMonths}
                  onChange={(e) => setRunwayMonths(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Active Customers / Users</label>
                <input
                  type="number"
                  value={activeCustomers}
                  onChange={(e) => setActiveCustomers(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Qualitative Reflection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Highlights (What went well?)</label>
              <textarea
                rows={2}
                value={highlights}
                onChange={(e) => setHighlights(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Lowlights (What went wrong / Lessons)</label>
              <textarea
                rows={2}
                value={lowlights}
                onChange={(e) => setLowlights(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Support Needed from Mahto Ecosystem</label>
              <textarea
                rows={2}
                value={helpNeeded}
                onChange={(e) => setHelpNeeded(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Submit Report & Log Audit</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
