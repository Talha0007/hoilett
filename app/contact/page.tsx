import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact Us | Hoilett Business Systems",
  description:
    "Contact our New Jersey or New York offices for expert IT support.",
};

export default function ContactPage() {
  return (
    /* Changed to Light Mode background for clarity */
    <main className="bg-white text-[#001f3f] min-h-screen pt-32 pb-20 relative">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <ContactClient />
    </main>
  );
}
