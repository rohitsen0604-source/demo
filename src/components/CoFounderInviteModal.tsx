"use client";

import React, { useState } from "react";
import { X, UserPlus, Send, Check } from "lucide-react";
import { StartupEntity } from "@/lib/types";

interface InviteModalProps {
  isOpen: boolean;
  startup: StartupEntity;
  onClose: () => void;
  onInviteSent: (invite: { name: string; email: string; phone?: string; role: string; equity?: number; message: string }) => void;
}

export default function CoFounderInviteModal({ isOpen, startup, onClose, onInviteSent }: InviteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Co-Founder & CTO");
  const [equity, setEquity] = useState<number | "">("");
  const [message, setMessage] = useState("Hey, I would love for you to join as a co-builder on our mission at " + startup.name + "!");
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    onInviteSent({
      name,
      email,
      phone,
      role,
      equity: equity === "" ? undefined : Number(equity),
      message,
    });

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <UserPlus className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Invite Co-Founder</h3>
            <p className="text-xs text-stone-500">Attach a builder to {startup.name}</p>
          </div>
        </div>

        {isSent ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-stone-900">Invitation Dispatched!</h4>
            <p className="text-xs text-stone-500 mt-1">
              An invitation email and Mahto account linking link has been sent to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="aarav@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Proposed Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none bg-white font-medium"
                >
                  <option>Co-Founder & CTO</option>
                  <option>Co-Founder & COO</option>
                  <option>Co-Founder (Product)</option>
                  <option>Co-Founder (Growth & Sales)</option>
                  <option>Founding Engineer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Proposed Equity (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 25"
                  value={equity}
                  onChange={(e) => setEquity(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Invitation Message</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-amber-600 focus:outline-none"
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-amber-900">
              *Co-founders connect their own universal Mahto account. If they later leave, their history is preserved as Former Founder without data loss.
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#09090B] text-amber-400 border border-amber-500/30 text-xs font-bold hover:bg-stone-800 transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Invite</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
