"use client";

import React from "react";
import { FounderScoreDimensions, FounderScoreEvolutionEntry } from "@/lib/types";
import { TrendingUp, Award, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ScoreVisualProps {
  score: number;
  dimensions: FounderScoreDimensions;
  history: FounderScoreEvolutionEntry[];
}

export default function ScoreRadarVisual({ score, dimensions, history }: ScoreVisualProps) {
  const dimensionList: { key: keyof FounderScoreDimensions; label: string; max: number; desc: string }[] = [
    { key: "vision", label: "Vision & Long-Term Thinking", max: 8, desc: "Clarity of 10-year mission and conviction" },
    { key: "problemUnderstanding", label: "Problem Understanding", max: 8, desc: "Acute customer pain diagnosis" },
    { key: "customerUnderstanding", label: "Customer Empathy", max: 8, desc: "Validated willingness-to-pay insights" },
    { key: "criticalThinking", label: "Critical Thinking", max: 8, desc: "Cognitive reflection & hypothesis testing" },
    { key: "execution", label: "Execution Velocity", max: 10, desc: "Speed of high-quality prototype delivery" },
    { key: "sales", label: "Sales & Persuasion", max: 8, desc: "Objection handling & closing capability" },
    { key: "leadership", label: "Leadership & Team", max: 8, desc: "Attracting high-agency co-builders" },
    { key: "financialThinking", label: "Financial Reasoning", max: 7, desc: "Unit economics & burn discipline" },
    { key: "resilience", label: "Resilience & Grit", max: 8, desc: "Bounce-back rate post pivot or failure" },
    { key: "communication", label: "Communication Clarity", max: 7, desc: "Simplicity in pitching complex ideas" },
    { key: "learningAbility", label: "Learning Agility", max: 8, desc: "Speed of unlearning and skill acquisition" },
    { key: "resourcefulness", label: "Resourcefulness / Initiative", max: 10, desc: "Solving problems with zero budget" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner with Overall Score & Weightings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Score Ring / Badge */}
        <div className="mahto-card p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-white to-[#FDFBF7] border-amber-500/20">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
            MAHTO FOUNDER SCORE
          </span>
          <div className="my-3 relative flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-amber-500/40 flex items-center justify-center bg-white shadow-inner">
              <span className="text-4xl font-black text-[#09090B] tracking-tight">
                {score}
              </span>
              <span className="text-xs font-bold text-stone-400 absolute bottom-5">/100</span>
            </div>
          </div>
          <p className="text-xs text-stone-600 font-medium">
            Evaluated across 12 behavioral & real evidence dimensions.
          </p>
        </div>

        {/* Evidence Weighting Pill Box */}
        <div className="mahto-card p-6 col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Evidence-Weighted Calculation (Zero Self-Report Hype)</span>
              </h4>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Audited Version 1.2
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900">Psychometrics: 15%</div>
                <div className="text-[10px] text-stone-500">Grit & Risk (DOSPERT)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900">Cognitive: 15%</div>
                <div className="text-[10px] text-stone-500">Critical Reasoning</div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-300">
                <div className="font-bold text-amber-950">Simulations: 25%</div>
                <div className="text-[10px] text-amber-700">Mahto Challenges</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-900 text-white border border-amber-500/30">
                <div className="font-bold text-amber-400">Actual Execution: 25%</div>
                <div className="text-[10px] text-stone-300">MVP & Customer Proof</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900">Faculty/Peer: 10%</div>
                <div className="text-[10px] text-stone-500">Verified References</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900">Startup Traction: 10%</div>
                <div className="text-[10px] text-stone-500">Revenue & Retention</div>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-2">
            *As founder maturity progresses, real-world execution carries progressively heavier weight.
          </p>
        </div>
      </div>

      {/* 12-Dimension Visual Grid */}
      <div className="mahto-card p-6">
        <h4 className="text-sm font-extrabold text-stone-900 mb-4 flex items-center justify-between">
          <span>12 Core Evaluation Dimensions</span>
          <span className="text-xs font-normal text-stone-500">Updated: Oct 2026</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {dimensionList.map((d) => {
            const val = dimensions[d.key];
            const pct = Math.min(100, Math.round((val / d.max) * 100));
            return (
              <div key={d.key} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-800">{d.label}</span>
                  <span className="font-mono font-bold text-stone-900">
                    {val} <span className="text-stone-400 font-normal">/ {d.max}</span>
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct >= 80 ? "bg-emerald-600" : pct >= 65 ? "bg-amber-500" : "bg-stone-800"
                    }`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
                <div className="text-[10px] text-stone-400">{d.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Longitudinal Score Evolution Timeline */}
      <div className="mahto-card p-6">
        <h4 className="text-sm font-extrabold text-stone-900 mb-1 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span>Longitudinal Score Evolution Timeline</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Founder Scores are dynamic and evolve with verified milestones, not fixed permanently by day-1 tests.
        </p>

        <div className="relative border-l-2 border-amber-500/30 ml-4 space-y-6">
          {history.map((h, idx) => (
            <div key={idx} className="relative pl-6">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-stone-900">
                  {h.yearOrMilestone}
                </span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  Score: {h.score}/100
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1">{h.notes}</p>
              <span className="text-[10px] text-stone-400 font-mono">{h.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
