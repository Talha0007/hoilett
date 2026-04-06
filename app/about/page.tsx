import Image from "next/image";
import {
  CheckCircle2,
  History,
  ShieldCheck,
  Phone,
  Zap,
  Award,
} from "lucide-react";

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
    <main className="bg-white text-[#001f3f] min-h-screen pt-24 md:pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-50 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 space-y-20 md:space-y-32 relative z-10">
        {/* SECTION 1: VAST EXPERIENCE */}
        <section className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Mobile Image First for better flow */}
          <div className="relative w-full order-1 lg:order-2 group">
            <div className="absolute -inset-2 md:-inset-4 bg-blue-50 rounded-[2rem] md:rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-[12px] border-white shadow-xl">
              <Image
                src="/about/ab-contentimage.png"
                alt="HBS Experience"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100">
              <History size={14} className="text-[#3a86ff]" />
              <span className="text-[#3a86ff] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Established 1997
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#001f3f]">
              WE HAVE VAST <br />
              <span className="text-[#3a86ff] italic uppercase">
                EXPERIENCE.
              </span>
            </h1>

            <div className="space-y-4 md:space-y-6 text-[#001f3f]/60 text-base md:text-lg leading-relaxed font-medium">
              <p>
                We have been in business since{" "}
                <strong className="text-[#001f3f] font-black underline decoration-[#3a86ff] decoration-2 md:decoration-4 underline-offset-4">
                  1997
                </strong>{" "}
                providing service to the New York Tri-State area.
              </p>
              <p className="sm:block">
                Our goal at Hoilett Business Systems is to provide you with the
                greatest service experience ever. Our technicians have been in
                the computer repair industry for many years. We have maintained
                an excellent customer service record throughout the life of this
                company. Not only do we have some of the best and most
                knowledgeable techs in New York Tri-State area, but we also
                require continued education to ensure that they all keep up with
                the constant changes in technology.
              </p>
              <p className="sm:block">
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

            <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-blue-50/50 border-l-[6px] md:border-l-8 border-[#3a86ff] relative overflow-hidden">
              <Zap className="absolute -right-4 -bottom-4 text-[#3a86ff]/10 w-16 h-16 md:w-24 md:h-24" />
              <p className="text-[#001f3f] italic font-bold text-lg md:text-xl relative z-10">
                &quot;We require continued education to ensure our techs keep up
                with constant changes.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TRAINED SPECIALISTS */}
        <section className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative w-full group">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-blue-100 bg-white aspect-[4/3] shadow-lg">
              <Image
                src="/about/abt-home-2.jpg"
                alt="Specialists"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#3a86ff] p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-3 md:gap-4">
                <ShieldCheck size={20} className="text-white md:w-6 md:h-6" />
                <p className="text-white font-black text-sm md:text-lg leading-none uppercase">
                  Elite Techs
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[#001f3f]">
              TRAINED <br />
              <span className="text-[#3a86ff] italic uppercase">
                SPECIALISTS.
              </span>
            </h2>
            <p className="text-[#001f3f]/60 text-base md:text-lg font-medium leading-relaxed">
              We are a team of committed mobile computer repair technicians
              dedicated to providing quality affordable service to the New York
              Tri-State area. All techs at Hoilett Business Systems are
              professionally trained.
            </p>
            <p className="text-[#001f3f]/60 text-base md:text-lg font-medium leading-relaxed">
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
            <p className="text-[#001f3f]/60 text-base md:text-lg font-medium leading-relaxed">
              Hardware replacement is a pretty common occurrence in the computer
              repair industry. Over time computer parts wear out just like
              anything else that has moving parts and electrical circuitry. Hard
              drives either short circuit or their motors burn out. Sometimes
              this can be fixed and sometimes the situation calls for a
              replacement. Either way our techs are prepared to handle the
              issue. We do software and hardware upgrades.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {specialtyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 border border-transparent hover:border-[#3a86ff]/30 transition-all"
                >
                  <div className="p-1.5 rounded-lg bg-white text-[#3a86ff] shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[#001f3f] font-black text-[10px] md:text-xs uppercase tracking-tight">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: BRANDS */}
        <section className="pt-16 md:pt-24 border-t border-blue-50">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="space-y-6 md:space-y-8">
              <div className="w-12 h-1 bg-[#3a86ff]" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#001f3f] uppercase">
                Repairing All <br />
                <span className="text-[#3a86ff]">Popular Brands.</span>
              </h2>
              <p className="text-[#001f3f]/50 text-sm font-medium leading-relaxed">
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
              <p className="text-[#001f3f]/50 text-sm font-medium leading-relaxed">
                Hoilett Business Systems is not just a computer repair company
                but we also supply the parts and software for your computers and
                networks. Network issues can bring a business operation to a
                halt and hinder the lives of everyday people. We know how
                important it can be for everyone to access the internet and even
                share files so our network team works fast and efficiently to
                restore any network outages that might arise.
              </p>
              <div className="flex items-center gap-3 opacity-60">
                <Award className="text-[#3a86ff]" size={24} />
                <p className="text-[9px] font-black text-[#001f3f] uppercase tracking-widest">
                  Authorized Parts Supplier
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-blue-50 bg-white p-6 md:p-12 shadow-sm">
                <Image
                  src="/about/about-logos.png"
                  alt="Brands"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-3">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="text-center py-2 md:py-3 rounded-lg md:rounded-xl border border-blue-50 text-[8px] md:text-[9px] font-black text-[#001f3f]/30 uppercase tracking-widest hover:bg-blue-50 transition-all"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="bg-[#001f3f] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-24 text-center space-y-8 md:space-y-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#3a86ff]/10 rounded-full -mr-24 -mt-24 blur-2xl md:blur-3xl" />
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white italic uppercase relative z-10">
            Ready for{" "}
            <span className="not-italic text-[#3a86ff]">Professional</span>{" "}
            Support?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 items-center relative z-10">
            <button className="w-full sm:w-auto bg-[#3a86ff] text-white px-10 md:px-14 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-xs md:text-sm tracking-widest hover:bg-white hover:text-[#001f3f] transition-all">
              GET STARTED NOW
            </button>
            <a
              href="tel:9737144625"
              className="flex items-center gap-4 text-white font-black text-xl md:text-3xl hover:text-[#3a86ff] transition-colors"
            >
              <Phone className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
              (973) 714-4625
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
