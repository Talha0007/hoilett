"use client";

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { capturePayPalOrder } from "@/app/actions/paypal";
import {
  Shield,
  Zap,
  Mail,
  DollarSign,
  Lock,
  CheckCircle2,
  Crown,
  CreditCard,
  Loader2,
} from "lucide-react";

export default function PaymentUI({ clientId }: { clientId: string }) {
  const [service, setService] = useState("basic");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isPaid) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl max-w-md animate-in zoom-in duration-500">
          <CheckCircle2 size={60} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black uppercase mb-2 text-[#001f3f]">
            Payment Successful
          </h2>
          <p className="text-slate-500 mb-8 font-medium">
            The funds have been transferred to the business account for {email}.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-[#001f3f] text-white rounded-2xl font-black uppercase"
          >
            Return to Site
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="mx-auto max-w-xl bg-white rounded-[48px] shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-[#001f3f] p-10 text-white relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#3a86ff] p-2 rounded-xl">
              <Lock size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a86ff]">
              Live Secure Gateway
            </span>
          </div>
          <h1 className="text-4xl font-black uppercase leading-none">
            Checkout
          </h1>
          <p className="text-slate-400 text-[11px] mt-3 font-bold uppercase tracking-widest">
            Client to Business Portal
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Service Selector */}
          <div className="grid grid-cols-3 gap-3">
            {["basic", "gold", "platinum"].map((tier) => (
              <button
                key={tier}
                onClick={() => setService(tier)}
                className={`p-4 rounded-2xl border-2 transition-all uppercase text-[10px] font-black ${service === tier ? "border-[#3a86ff] bg-blue-50 text-[#3a86ff]" : "border-slate-50 text-slate-400"}`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="relative">
              <DollarSign
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 text-black rounded-2xl font-bold outline-none focus:ring-2 ring-blue-500/20"
              />
            </div>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 ring-blue-500/20"
              />
            </div>
          </div>

          {/* PayPal Integration */}
          <div className="pt-6 border-t border-slate-50">
            <PayPalScriptProvider
              options={{
                clientId: clientId,
                currency: "USD",
                intent: "capture",
                "enable-funding": "card",
                "disable-funding": "venmo,paylater",
              }}
            >
              <div
                className={
                  !amount || !email || isProcessing
                    ? "opacity-20 pointer-events-none"
                    : "opacity-100"
                }
              >
                <PayPalButtons
                  style={{ layout: "vertical", shape: "rect", height: 50 }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          description: `${service.toUpperCase()} Payment from ${email}`,
                          amount: {
                            currency_code: "USD",
                            value: parseFloat(amount).toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data) => {
                    setIsProcessing(true);
                    setError(null);
                    const result = await capturePayPalOrder(data.orderID);
                    if (result.success) {
                      setIsPaid(true);
                    } else {
                      setError(result.error || "Payment failed to finalize.");
                    }
                    setIsProcessing(false);
                  }}
                />
              </div>
            </PayPalScriptProvider>

            {isProcessing && (
              <div className="flex justify-center items-center gap-2 mt-4 text-blue-500 font-black text-[10px] uppercase">
                <Loader2 className="animate-spin" size={14} /> Processing
                Transaction...
              </div>
            )}
            {error && (
              <p className="text-red-500 text-[10px] font-bold text-center mt-4 uppercase">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
