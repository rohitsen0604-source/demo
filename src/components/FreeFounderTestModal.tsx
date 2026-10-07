"use client";

import React, { useState } from "react";
import { X, Sparkles, ArrowRight, ShieldCheck, Share2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface FreeTestProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeFounderTestModal({ isOpen, onClose }: FreeTestProps) {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      q: "1. When you identify an acute problem in daily campus or work life, what is your immediate reflex?",
      options: [
        { text: "Build a prototype or test a manual solution within 48 hours", points: 20 },
        { text: "Write a detailed business plan and pitch deck first", points: 12 },
        { text: "Discuss it casually with peers but delay execution", points: 6 },
      ],
    },
    {
      q: "2. You pitch an idea to 10 target customers and 8 say 'No' or show indifference. What do you do?",
      options: [
        { text: "Ask deep diagnostic questions to unearth why and iterate the value prop", points: 20 },
        { text: "Conclude people don't understand the vision and keep pitching unchanged", points: 8 },
        { text: "Abandon the idea immediately and give up", points: 4 },
      ],
    },
    {
      q: "3. If given ₹10 Lakh in capital today, how would you allocate it?",
      options: [
        { text: "Deploy 70% into direct customer acquisition & unit economics testing", points: 20 },
        { text: "Spend 80% on branding, premium office space and PR releases", points: 6 },
        { text: "Keep it in the bank and hesitate to test hypotheses", points: 10 },
      ],
    },
    {
      q: "4. How do you handle conflict or differing visions with a potential co-founder?",
      options: [
        { text: "Establish upfront measurable milestones and align on customer truth", points: 20 },
        { text: "Avoid the conversation to keep the peace", points: 6 },
        { text: "Insist on 100% control with zero compromise", points: 8 },
      ],
    },
    {
      q: "5. What is your long-term relationship with failure?",
      options: [
        { text: "Failure is rapid data feedback; grit and integrity remain permanent", points: 20 },
        { text: "Failure is embarrassing and defines my capability", points: 5 },
      ],
    },
  ];

  const handleSelect = (points: number) => {
    const updated = [...selectedAnswers, points];
    setSelectedAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const totalScore = selectedAnswers.reduce((acc, curr) => acc + curr, 0);

  const getArchetype = (score: number) => {
    if (score >= 85) return { title: "High-Agency Builder", desc: "Demonstrates immense resourcefulness, customer obsession, and rapid grit." };
    if (score >= 65) return { title: "Emerging Innovator", desc: "Strong conceptual clarity and ambition, ready for execution and sales challenge training." };
    return { title: "Explorer / Discovery Stage", desc: "Ideal for Year 1 founder identity development and customer discovery fundamentals." };
  };

  const archetype = getArchetype(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCalculated ? (
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Free Preliminary Founder Test ({step + 1}/{questions.length})</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-slate-900 transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
              {questions[step].q}
            </h3>

            <div className="space-y-3">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(opt.points)}
                  className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all text-xs sm:text-sm font-medium text-slate-800 flex items-center justify-between group"
                >
                  <span>{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 font-black text-2xl shadow-inner">
              {totalScore}
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Preliminary Evaluation
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-1">
              {archetype.title}
            </h3>
            <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              {archetype.desc}
            </p>

            {/* Honest Disclaimer */}
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 mt-5 text-left flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> This is a preliminary assessment. The official <strong>MAHTO FOUNDER SCORE</strong> evolves through the 6-Day Staged Assessment, simulation challenges, and longitudinal real-world evidence.
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/founder"
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Unlock Founder Passport (₹10k)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
              >
                Explore Platform
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
