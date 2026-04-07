"use client";

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  Shield,
  Zap,
  Mail,
  DollarSign,
  Lock,
  CheckCircle2,
  Crown,
} from "lucide-react";

export default function PaymentPage() {
  const [service, setService] = useState("basic");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-red-500 uppercase tracking-widest bg-slate-50">
        Internal Error: PayPal Configuration Missing
      </div>
    );
  }

  // SUCCESS STATE (After Payment)
  if (isPaid) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 text-center max-w-md animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black text-[#001f3f] uppercase mb-2">
            Transaction Complete
          </h2>
          <p className="text-slate-500 font-medium mb-8">
            Payment processed successfully for {email}.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-[#001f3f] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#3a86ff] shadow-lg shadow-blue-900/20 transition-all"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 font-sans">
      <div className="mx-auto max-w-xl">
        <div className="bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,31,63,0.15)] border border-slate-100 overflow-hidden transition-all duration-500">
          {/* VISUAL HEADER */}
          <div className="bg-[#001f3f] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#3a86ff] p-2 rounded-xl shadow-lg shadow-blue-500/20">
                  <Lock size={16} className="text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a86ff]">
                  Secure 256-bit SSL
                </span>
              </div>
              <h1 className="text-4xl font-black uppercase tracking-tight leading-none">
                Checkout
              </h1>
              <p className="text-slate-400 text-[11px] mt-3 font-bold uppercase tracking-[0.1em]">
                HBS Infrastructure Management
              </p>
            </div>
            {/* Design Accents */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#3a86ff]/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#3a86ff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* STEP 1: SERVICE TIER */}
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3a86ff]">
                01. Select Service Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "basic", icon: <Shield size={16} />, label: "Basic" },
                  { id: "gold", icon: <Crown size={16} />, label: "Gold" },
                  {
                    id: "platinum",
                    icon: <Zap size={16} />,
                    label: "Platinum",
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setService(tier.id)}
                    className={`flex flex-col items-center gap-3 p-5 rounded-[24px] border-2 transition-all duration-300 ${
                      service === tier.id
                        ? "border-[#3a86ff] bg-blue-50/50 shadow-md scale-[1.02]"
                        : "border-slate-50 bg-slate-50/50 hover:border-slate-200"
                    }`}
                  >
                    <span
                      className={
                        service === tier.id
                          ? "text-[#3a86ff]"
                          : "text-slate-400"
                      }
                    >
                      {tier.icon}
                    </span>
                    <span className="font-black text-slate-800 uppercase text-[10px] tracking-widest">
                      {tier.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2 & 3: DETAILS */}
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3a86ff]">
                  02. Payment Details
                </label>

                <div className="relative group">
                  <DollarSign
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#3a86ff] transition-colors"
                    size={18}
                  />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Amount (USD)"
                    className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#3a86ff]/5 focus:border-[#3a86ff]/30 transition-all text-sm"
                  />
                </div>

                <div className="relative group">
                  <Mail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#3a86ff] transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#3a86ff]/5 focus:border-[#3a86ff]/30 transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* STEP 4: PAYPAL GATEWAY */}
            <div className="pt-10 border-t border-slate-100">
              <PayPalScriptProvider options={{ "client-id": clientId }}>
                <div
                  className={`${!amount || !email ? "opacity-20 grayscale pointer-events-none" : "opacity-100"} transition-all duration-700 transform`}
                >
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      shape: "pill",
                      label: "pay",
                      height: 55,
                    }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            description: `HBS ${service.toUpperCase()} Maintenance - ${email}`,
                            amount: { value: amount },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order?.capture();
                      setIsPaid(true);
                    }}
                  />
                </div>
              </PayPalScriptProvider>

              {!amount || !email ? (
                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="text-[10px] text-center font-black text-slate-400 uppercase tracking-[0.2em]">
                    Form incomplete
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className="w-1.5 h-1.5 bg-[#3a86ff] rounded-full animate-ping" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    Ready for secure checkout
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER BADGES */}
        <div className="mt-8 flex justify-center items-center gap-6 opacity-40 grayscale">
          <div className="text-[10px] font-black uppercase text-slate-500">
            Verified Merchant
          </div>
          <div className="text-[10px] font-black uppercase text-slate-500">
            PCI Compliant
          </div>
          <div className="text-[10px] font-black uppercase text-slate-500">
            Auto-Receipt
          </div>
        </div>
      </div>
    </div>
  );
}
