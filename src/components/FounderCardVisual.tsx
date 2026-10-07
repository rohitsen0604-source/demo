"use client";

import React, { useState } from "react";
import { FounderProfile } from "@/lib/types";
import { QrCode, ShieldCheck, Share2, Copy, Check, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";

interface FounderCardProps {
  founder: FounderProfile;
  startupName?: string;
}

export default function FounderCardVisual({ founder, startupName = "CampusLogix" }: FounderCardProps) {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const copyLink = () => {
    const url = typeof window !== "undefined"
      ? `${window.location.origin}/verify/founder/${founder.cardQrCode}`
      : `https://mahto.org/verify/founder/${founder.cardQrCode}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getBadgeColor = (level: string) => {
    switch (level) {
      case "MAHTO_BACKED_FOUNDER":
        return "bg-amber-950 text-amber-200 border-amber-600";
      case "MAHTO_SELECTED_FOUNDER":
        return "bg-stone-900 text-amber-300 border-amber-500";
      case "MAHTO_VALIDATED_FOUNDER":
        return "bg-emerald-950 text-emerald-300 border-emerald-600";
      case "MAHTO_ASSESSED_FOUNDER":
        return "bg-stone-800 text-stone-200 border-stone-600";
      default:
        return "bg-stone-800 text-stone-200 border-stone-700";
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* 3D Card Shell */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full max-w-sm h-64 sm:h-72 rounded-3xl cursor-pointer perspective-1000 select-none group transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className={`relative w-full h-full rounded-3xl p-6 shadow-2xl transition-all duration-700 text-white flex flex-col justify-between overflow-hidden border border-amber-500/40 ${
          isFlipped 
            ? "bg-gradient-to-br from-[#09090B] via-[#18181B] to-[#27272A]" 
            : "bg-gradient-to-br from-[#09090B] via-[#121214] to-[#1C1917]"
        }`}>
          
          {/* Subtle Guilloche Luxury Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          
          {/* Gold Metallic Glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

          {!isFlipped ? (
            /* FRONT FACE */
            <>
              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-[#09090B] flex items-center justify-center font-black text-sm shadow-md border border-amber-300">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-widest text-stone-100 uppercase">
                      MAHTO FOUNDER CARD
                    </span>
                    <span className="text-[9px] font-mono text-amber-400">
                      ID: {founder.founderIdCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Middle Body */}
              <div className="flex items-center space-x-4 my-auto z-10">
                <img
                  src={founder.avatarUrl}
                  alt={founder.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-500/70 shadow-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-stone-300 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{startupName}</span>
                  </p>
                  <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                    {founder.collegeName || "NIT Bangalore"}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between z-10 pt-2 border-t border-stone-800">
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">
                    Status Level
                  </div>
                  <div className={`text-[11px] font-bold px-2 py-0.5 rounded border mt-0.5 inline-block ${getBadgeColor(founder.recognition)}`}>
                    {founder.recognition.replace(/_/g, " ")}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">
                    Issue Date
                  </div>
                  <div className="text-xs font-mono font-bold text-amber-400">
                    {founder.cardIssueDate}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* BACK FACE */
            <>
              <div className="flex items-center justify-between z-10 border-b border-stone-800 pb-2">
                <span className="text-[11px] font-bold tracking-wider text-stone-300">
                  SCAN TO VERIFY CREDENTIALS
                </span>
                <span className="text-[10px] text-amber-400 font-mono">
                  mahto.org/verify
                </span>
              </div>

              <div className="flex items-center justify-center my-auto z-10 space-x-6">
                <div className="p-2.5 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-amber-500/40">
                  <QrCode className="w-20 h-20 text-[#09090B]" />
                </div>
                <div className="flex flex-col text-left text-xs space-y-1">
                  <p className="text-stone-300 font-medium">
                    Permanent Founder Identity & Verified Record.
                  </p>
                  <p className="text-[10px] text-stone-400">
                    Tap to flip back anytime.
                  </p>
                </div>
              </div>

              <div className="text-center text-[10px] text-stone-400 z-10 pt-2 border-t border-stone-800">
                Mahto Innovations Pvt Ltd • Official Credential
              </div>
            </>
          )}
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center space-x-3 mt-4">
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-800 hover:bg-stone-50 transition-all shadow-xs"
        >
          {isFlipped ? "Show Front" : "Flip to QR Code"}
        </button>

        <button
          onClick={copyLink}
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-800 hover:bg-stone-50 transition-all shadow-xs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
          <span>{copied ? "Link Copied!" : "Copy Verification Link"}</span>
        </button>

        <Link
          href={`/verify/founder/${founder.cardQrCode}`}
          target="_blank"
          className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-xl bg-[#09090B] text-amber-400 border border-amber-500/30 text-xs font-bold hover:bg-stone-800 transition-all"
        >
          <span>Public Page</span>
        </Link>
      </div>
    </div>
  );
}
