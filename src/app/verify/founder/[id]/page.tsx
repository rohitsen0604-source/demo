import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INITIAL_FOUNDER } from "@/lib/mockData";
import { ShieldCheck, QrCode, Building2, CheckCircle2, Award, Calendar, GraduationCap } from "lucide-react";

export function generateStaticParams() {
  return [{ id: "mht-qr-rohit-sen-0042" }];
}

export default function PublicVerificationPage() {
  const founder = INITIAL_FOUNDER;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        
        {/* Verification Certificate Box */}
        <div className="mahto-card p-8 bg-white border-2 border-slate-900 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black text-xl">
                M
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Official Verification Registry
                </span>
                <h1 className="text-base font-extrabold text-slate-900">
                  MAHTO.ORG FOUNDER CREDENTIAL
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>AUTHENTIC RECORD</span>
            </div>
          </div>

          {/* Founder Profile Details */}
          <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <img
              src={founder.avatarUrl}
              alt={founder.name}
              className="w-24 h-24 rounded-3xl object-cover border-2 border-slate-900 shadow-md"
            />
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900">{founder.name}</h2>
              <p className="text-xs font-mono text-amber-600 font-bold">
                Founder ID: {founder.founderIdCode}
              </p>
              <p className="text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-1">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                <span>{founder.university} • {founder.degree}</span>
              </p>
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[10px] font-bold">
                  {founder.recognition.replace(/_/g, " ")}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  Verified Student Founder
                </span>
              </div>
            </div>
          </div>

          {/* Verification Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-slate-400 block font-medium">Associated Active Venture:</span>
              <span className="font-bold text-slate-900">CampusLogix (Primary Founder)</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Faculty Verification Status:</span>
              <span className="font-bold text-emerald-700">Verified by Prof. Rajesh Kulkarni</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Credential Issue Date:</span>
              <span className="font-bold text-slate-900 font-mono">{founder.cardIssueDate}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Record Issuer:</span>
              <span className="font-bold text-slate-900">Mahto Innovations Pvt Ltd</span>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-[11px] text-slate-400 mt-6 text-center">
            *In compliance with data protection policies, private psychological data, KYC documents, and cap table allocations are strictly confidential and restricted to authorized data room sessions.
          </p>

        </div>

      </main>

      <Footer />
    </div>
  );
}
