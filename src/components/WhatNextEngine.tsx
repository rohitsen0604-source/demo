"use client";

import React from "react";
import { NextActionRecommendation } from "@/lib/types";
import { Sparkles, ArrowRight, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

interface WhatNextProps {
  actions: NextActionRecommendation[];
  onActionClick?: (action: NextActionRecommendation) => void;
}

export default function WhatNextEngine({ actions, onActionClick }: WhatNextProps) {
  if (!actions || actions.length === 0) {
    return (
      <div className="mahto-card p-6 bg-emerald-50/50 border-emerald-200 text-center">
        <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
        <h4 className="text-sm font-bold text-emerald-950">All Current Priorities Up-to-Date!</h4>
        <p className="text-xs text-emerald-700 mt-1">
          You have completed all staged assessments and challenge deliverables for this week.
        </p>
      </div>
    );
  }

  const primaryAction = actions[0];
  const otherActions = actions.slice(1);

  return (
    <div className="space-y-4">
      {/* Primary Recommended Action (Hero Card) */}
      <div className="mahto-card p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-[#0F172A] text-white border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32" />
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Highest Priority Action</span>
          </span>
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{primaryAction.deadlineText} • ~{primaryAction.estimatedMinutes} mins</span>
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
          {primaryAction.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
          {primaryAction.description}
        </p>

        <div className="mt-5 flex items-center space-x-4">
          <Link
            href={primaryAction.actionHref}
            onClick={() => onActionClick?.(primaryAction)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 text-[#0F172A] text-xs font-extrabold hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
          >
            <span>{primaryAction.actionCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-[11px] text-slate-400">
            Automated intelligence based on stage & score weighting
          </span>
        </div>
      </div>

      {/* Secondary Actions Queue */}
      {otherActions.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            Queued Next Actions ({otherActions.length})
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {otherActions.map((action) => (
              <div
                key={action.id}
                className="mahto-card p-4 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {action.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {action.deadlineText}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {action.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {action.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">~{action.estimatedMinutes} mins</span>
                  <Link
                    href={action.actionHref}
                    onClick={() => onActionClick?.(action)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>{action.actionCta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
