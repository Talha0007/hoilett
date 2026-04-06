import { SERVICES_DATA } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#3a86ff] font-bold text-xs tracking-[0.2em] uppercase mb-12 hover:gap-4 transition-all group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all services
        </Link>

        {/* HERO IMAGE SECTION - WIDE FORMAT */}
        <div className="relative mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-video max-h-[400px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          {/* Subtle Gradient Overlay for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: TEXT CONTENT (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f0f7ff] border border-[#3a86ff]/20 shadow-sm">
                <ShieldCheck size={14} className="text-[#3a86ff]" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#001f3f]">
                  Hoilett Business Systems
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-[#001f3f] tracking-tighter uppercase leading-[0.9]">
                {service.title.replace(/\//g, " / ")}
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-8">
              {service.longDescription?.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-500 text-xl leading-relaxed font-medium first-letter:text-4xl first-letter:font-black first-letter:text-[#001f3f] first-letter:mr-1"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* KEY FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {[
                "24/7 Priority Support",
                "Certified Technicians",
                "On-site Assistance",
                "Secure Solutions",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#3a86ff]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#3a86ff]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-[#001f3f] text-sm uppercase tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FLOATING INTERACTION CARD (4 Cols) */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="p-10 rounded-[2.5rem] bg-[#001f3f] text-white shadow-2xl relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3a86ff]/20 blur-3xl rounded-full transition-opacity group-hover:opacity-100" />

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-[#3a86ff] flex items-center justify-center mb-6">
                  <Clock className="text-white" size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                  Ready to <br />{" "}
                  <span className="text-[#3a86ff] not-italic">Start?</span>
                </h3>

                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Our team is standing by to help you optimize your{" "}
                  {service.title.toLowerCase()}.
                </p>

                <Link href="/contact" className="block">
                  <button className="w-full bg-[#3a86ff] text-white py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#001f3f] transition-all duration-500 shadow-xl">
                    Get Started Now
                  </button>
                </Link>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  <span>Fast Response</span>
                  <span>•</span>
                  <span>Free Estimate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
