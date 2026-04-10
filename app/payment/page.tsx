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
  CreditCard,
} from "lucide-react";

export default function PaymentPage() {
  const [service, setService] = useState("basic");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-red-500 uppercase tracking-widest bg-slate-50 p-6 text-center">
        Error: PayPal Client ID not found. <br /> Check your Vercel Environment
        Variables.
      </div>
    );
  }

  if (isPaid) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 text-center max-w-md">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black text-[#001f3f] uppercase mb-2">
            Success
          </h2>
          <p className="text-slate-500 font-medium mb-8">
            Receipt sent to {email}. <br /> Funds have been transferred.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-[#001f3f] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#3a86ff] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 font-sans">
      <div className="mx-auto max-w-xl">
        <div className="bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,31,63,0.15)] border border-slate-100 overflow-hidden">
          {/* HEADER */}
          <div className="bg-[#001f3f] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#3a86ff] p-2 rounded-xl">
                  <Lock size={16} />
                </div>
                <div className="flex gap-2">
                  <CreditCard size={18} className="text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a86ff]">
                    Cards & PayPal Accepted
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-black uppercase tracking-tight">
                Checkout
              </h1>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#3a86ff]/10 rounded-full blur-3xl" />
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* 01. TIER SELECTION */}
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3a86ff]">
                01. Select Service Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["basic", "gold", "platinum"].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setService(tier)}
                    className={`flex flex-col items-center gap-3 p-5 rounded-[24px] border-2 transition-all ${
                      service === tier
                        ? "border-[#3a86ff] bg-blue-50/50"
                        : "border-slate-50 bg-slate-50/50"
                    }`}
                  >
                    <span className="font-black text-slate-800 uppercase text-[10px] tracking-widest">
                      {tier}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 02. INPUTS */}
            <div className="space-y-6">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3a86ff]">
                02. Payment Details
              </label>
              <div className="relative group">
                <DollarSign
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900"
                />
              </div>
              <div className="relative group">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@email.com"
                  className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-black text-slate-900"
                />
              </div>
            </div>

            {/* 03. PAYPAL BUTTONS */}
            <div className="pt-10 border-t border-slate-100">
              <PayPalScriptProvider
                options={{
                  "client-id": clientId,
                  currency: "USD",
                  "enable-funding": "card", // Explicitly enables Debit/Credit card
                  "disable-funding": "paylater",
                  intent: "capture",
                }}
              >
                <div
                  className={`${!amount || !email ? "opacity-20 grayscale pointer-events-none" : "opacity-100"} transition-all duration-700`}
                >
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      shape: "rect",
                      label: "pay",
                      height: 50,
                    }}
                    createOrder={(data, actions) => {
                      // Format to 2 decimal places to prevent PayPal errors
                      const val = parseFloat(amount).toFixed(2);
                      return actions.order.create({
                        purchase_units: [
                          {
                            description: `HBS ${service.toUpperCase()} - ${email}`,
                            amount: { value: val },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order?.capture();
                      if (details?.status === "COMPLETED") {
                        setIsPaid(true);
                      }
                    }}
                    onError={(err) => {
                      setError(
                        "Payment failed to initialize. Check Client ID.",
                      );
                      console.error("PayPal Error:", err);
                    }}
                  />
                </div>
              </PayPalScriptProvider>

              {error && (
                <p className="text-red-500 text-[10px] font-bold mt-4 uppercase tracking-wider">
                  {error}
                </p>
              )}

              {!amount || !email ? (
                <p className="mt-6 text-[10px] text-center font-black text-slate-400 uppercase tracking-[0.2em]">
                  Complete fields to pay
                </p>
              ) : (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className="w-1.5 h-1.5 bg-[#3a86ff] rounded-full animate-ping" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    Live Secure Checkout
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
