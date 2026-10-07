"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INITIAL_PROFESSOR_REQUESTS } from "@/lib/mockData";
import { ProfessorVerificationRequest } from "@/lib/types";
import { GraduationCap, CheckCircle2, XCircle, HelpCircle, ShieldCheck, Award, ArrowRight } from "lucide-react";

export default function ProfessorPortalPage() {
  const [requests, setRequests] = useState<ProfessorVerificationRequest[]>(INITIAL_PROFESSOR_REQUESTS);
  const [selectedRequest, setSelectedRequest] = useState<ProfessorVerificationRequest | null>(null);
  const [investDecision, setInvestDecision] = useState<"YES" | "NO" | "NEED_MORE_INFO" | "GOOD_FOUNDER_WEAK_OPP">("YES");
  const [facultyNotes, setFacultyNotes] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleVerify = (reqId: string) => {
    setRequests(
      requests.map((r) =>
        r.id === reqId
          ? {
              ...r,
              status: "VERIFIED",
              wouldInvest10L: investDecision,
              facultyNotes: facultyNotes || "Verified authentic enrollment and active builder character.",
            }
          : r
      )
    );
    setSuccessMsg("Student Founder verified and faculty reference audit record logged!");
    setTimeout(() => setSuccessMsg(""), 3500);
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#09090B] flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar currentRole="PROFESSOR" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Header */}
        <div className="mahto-card p-6 mb-8 bg-white border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-stone-900">
                Professor & Faculty Reference Portal
              </h1>
              <p className="text-xs text-stone-500 mt-0.5">
                Prof. Rajesh Kulkarni • Department of Computer Science • NIT Bangalore
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
            Campus Discovery Leader
          </span>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Verification Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-stone-500">
              Student Founder Verification Requests ({requests.length})
            </h3>

            <div className="space-y-4">
              {requests.map((r) => (
                <div key={r.id} className="mahto-card p-5 bg-white border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-stone-900">{r.founderName}</h4>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        r.status === "VERIFIED" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                      }`}>
                        {r.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      {r.course} • {r.yearOfStudy} • {r.collegeName}
                    </p>
                    {r.wouldInvest10L && (
                      <div className="mt-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                        <strong>₹10L Investment Rubric:</strong> <span className="font-bold text-emerald-700">{r.wouldInvest10L}</span>
                        {r.facultyNotes && <p className="text-[11px] text-stone-500 mt-0.5">{r.facultyNotes}</p>}
                      </div>
                    )}
                  </div>

                  {r.status === "PENDING" && (
                    <button
                      onClick={() => setSelectedRequest(r)}
                      className="px-4 py-2 bg-[#09090B] text-amber-400 border border-amber-500/30 text-xs font-bold rounded-xl hover:bg-stone-800 transition-all shadow-xs shrink-0"
                    >
                      Complete Reference & Rubric
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verification Rubric Form */}
          <div className="lg:col-span-4">
            <div className="mahto-card p-6 bg-white border-[#E7E2D9]">
              <h3 className="text-sm font-black text-stone-900 mb-2">Faculty Evaluation Protocol</h3>
              <p className="text-xs text-stone-500 mb-4">
                Your reference is a foundational evidence input (10% score weighting) into the student's longitudinal Founder Passport.
              </p>

              {selectedRequest ? (
                <div className="space-y-4 pt-3 border-t border-stone-100">
                  <div className="text-xs font-bold text-amber-800">
                    Evaluating: {selectedRequest.founderName}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      "Would you personally invest ₹10 Lakh in this founder?" (Canonical Rubric)
                    </label>
                    <select
                      value={investDecision}
                      onChange={(e: any) => setInvestDecision(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold focus:ring-2 focus:ring-amber-600 focus:outline-none bg-white"
                    >
                      <option value="YES">Yes — Exceptional grit & execution</option>
                      <option value="NO">No — Needs foundational capability development</option>
                      <option value="NEED_MORE_INFO">Not enough longitudinal information yet</option>
                      <option value="GOOD_FOUNDER_WEAK_OPP">Strong founder, but weak current problem choice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Faculty Notes & Observed Strengths
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Demonstrated high agency during semester hackathons..."
                      value={facultyNotes}
                      onChange={(e) => setFacultyNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => handleVerify(selectedRequest.id)}
                    className="w-full py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-all shadow-md"
                  >
                    Submit Verification & Sign Reference
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-400 text-center">
                  Select a pending verification request to complete faculty reference.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
