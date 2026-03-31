import Image from "next/image";
import { CheckCircle2, History, ShieldCheck, Phone } from "lucide-react";

export const metadata = {
  title: "About Our Experience | Hoilett Business Systems",
  description:
    "Serving the NY Tri-State area since 1997 with expert computer repair and network solutions.",
};

export default function AboutPage() {
  const brands = [
    "Apple",
    "Samsung",
    "Lenovo",
    "Sony",
    "Acer",
    "ASUS",
    "Toshiba",
    "HP",
    "Dell",
    "Gateway",
  ];

  const specialtyPoints = [
    "Manual Virus Removal",
    "Hardware Upgrades",
    "Electrical Circuitry Repair",
    "Mobile On-Site Support",
    "Network Configuration",
    "Software Installs",
  ];

  return (
    <main className="bg-[#000814] text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3a86ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#7ac142]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 space-y-32 relative z-10">
        {/* --- SECTION 1: VAST EXPERIENCE --- */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#3a86ff]/10 border border-[#3a86ff]/20">
              <History size={16} className="text-[#3a86ff]" />
              <span className="text-[#3a86ff] text-xs font-black uppercase tracking-[0.2em]">
                Established 1997
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
              WE HAVE VAST <br />
              <span className="text-[#3a86ff] italic">EXPERIENCE.</span>
            </h1>

            <div className="space-y-6 text-blue-100/60 text-lg leading-relaxed max-w-xl text-justify">
              <p>
                We have been in business since{" "}
                <strong className="text-white">1997</strong>providing service to
                the New York Tri-State area. Our goal at Hoilett Business
                Systems is to provide you with the greatest service experience
                ever.
              </p>
              <p>
                Our technicians have been in the computer repair industry for
                many years. We have maintained an excellent customer service
                record throughout the life of this company. Not only do we have
                some of the best and most knowledgeable techs in New York
                Tri-State area, but we also require continued education to
                ensure that they all keep up with the constant changes in
                technology.
              </p>
              <p>
                We provide solutions for every computer repair related issue
                that you could ever have. We do it all. Everything from simple
                computer setup to complex network configurations. There is no
                job too big or too small of us. We offer the full range of IT
                services. Cyber security, Virus removal, Hardware replacement,
                Upgrades, Software installs, network setup, consulting, general
                maintenance, data recovery and anything else related to
                computers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-white/80 italic font-medium leading-relaxed">
                &quot;We require continued education to ensure our techs keep up
                with the constant changes in technology.&quot;
              </p>
            </div>
          </div>

          {/* IMAGE 1: Hover Zoom & Brighten */}
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-4 bg-[#3a86ff]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-[#3a86ff]/50 group-hover:scale-[1.02]">
              <Image
                src="/about/ab-contentimage.png"
                alt="Hoilett Business Systems Experience"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 2: TRAINED SPECIALISTS --- */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE 2: Tech Gradient Activation */}
          <div className="relative group cursor-crosshair">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7ac142] to-[#3a86ff] rounded-[2rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#000814] aspect-[4/3]">
              <Image
                src="/about/abt-home-2.jpg"
                alt="Trained IT Specialists"
                fill
                className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:rotate-1"
              />

              {/* Floating 24/7 Support Badge with its own hover animation */}
              <div className="absolute -bottom-8 -right-8 bg-[#7ac142] p-8 rounded-3xl shadow-[0_20px_50px_rgba(122,193,66,0.3)] flex flex-col items-center transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <ShieldCheck size={32} className="text-white mb-1" />
                <span className="text-white font-black text-xl leading-none">
                  24/7
                </span>
                <span className="text-white/80 font-bold text-[10px] uppercase tracking-tighter">
                  Support
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
              TRAINED <br />
              <span className="text-[#7ac142] italic">SPECIALISTS.</span>
            </h2>
            <p className="text-blue-100/60 text-lg leading-relaxed text-justify">
              We are a team of committed mobile computer repair technicians
              dedicated to providing quality affordable service to the New York
              Tri-State area. All techs at Hoilett Business Systems are
              professionally trained.
            </p>
            <p className="text-blue-100/60 text-lg leading-relaxed text-justify">
              One issue that is often not recognized by our clients are viruses.
              There are some viruses that cause your computer to do weird things
              that anyone can diagnose as a virus. However, viruses and other
              forms of malware have become so complex that many times they go
              undetected by your virus protection. We specialize in detecting
              and removing even the most stubborn viruses and malware. We use a
              technique that consists of manually removing viruses versus using
              software to do it. Manually removing takes a little more time and
              is more detailed but we ensure that your virus doesn’t stand a
              chance of recreating itself as some do.
            </p>

            <p className="text-blue-100/60 text-lg leading-relaxed text-justify">
              Hardware replacement is a pretty common occurrence in the computer
              repair industry. Over time computer parts wear out just like
              anything else that has moving parts and electrical circuitry. Hard
              drives either short circuit or their motors burn out. Sometimes
              this can be fixed and sometimes the situation calls for a
              replacement. Either way our techs are prepared to handle the
              issue. We do software and hardware upgrades.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialtyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#7ac142]/30 hover:bg-[#7ac142]/5 transition-all group"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#7ac142] group-hover:scale-125 transition-transform"
                  />
                  <span className="text-white/90 font-bold text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- SECTION 3: BRANDS & PARTS --- */}
        <section className="pt-20 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tighter leading-none">
                REPAIRING ALL <br />
                <span className="text-[#3a86ff]">POPULAR BRANDS.</span>
              </h2>
              <p className="text-blue-100/40 text-sm leading-relaxed text-justify">
                We often see businesses and residential customers that don’t
                understand the importance of keeping their computer up to date.
                Microsoft recently stopped supporting Windows XP and it caused
                lots of headaches for many of people that were still on that
                operating system. It affected everything from point of sale
                software to video surveillance systems. Lucky all that it took
                was a software upgrade to get them back on track. Sometimes it
                takes hardware upgrades to meet the minimum system requirements
                of certain programs. Those are just two of the 100′s of reasons
                and components that you may now or in the future need to
                upgrade.
              </p>

              <p className="text-blue-100/40 text-sm leading-relaxed text-justify">
                Hoilett Business Systems is not just a computer repair company
                but we also supply the parts and software for your computers and
                networks. Network issues can bring a business operation to a
                halt and hinder the lives of everyday people. We know how
                important it can be for everyone to access the internet and even
                share files so our network team works fast and efficiently to
                restore any network outages that might arise.
              </p>
            </div>

            <div className="lg:col-span-2 relative group">
              {/* Floating Logowall with a glassmorphism lift effect */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-[#3a86ff]/30 group-hover:shadow-[0_0_50px_rgba(58,134,255,0.1)]">
                <Image
                  src="/about/about-logos.png"
                  alt="Popular Brands We Repair"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="text-center py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white hover:border-[#3a86ff]/50 hover:bg-[#3a86ff]/10 transition-all cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <div className="bg-gradient-to-r from-[#3a86ff] to-[#3a86ff]/60 rounded-[2.5rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter relative z-10">
            Ready for Professional Support?
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center relative z-10">
            <button className="bg-white text-[#000814] px-12 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-[#7ac142] hover:text-white transition-all duration-300 shadow-2xl active:scale-95">
              GET STARTED NOW
            </button>
            <a
              href="tel:9737144625"
              className="flex items-center gap-4 text-white font-black text-2xl group/phone"
            >
              <Phone
                className="text-white group-hover/phone:animate-bounce"
                fill="white"
                size={24}
              />
              (973) 714-4625
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
