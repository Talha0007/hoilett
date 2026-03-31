import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact Us | Hoilett Business Systems",
  description:
    "Contact our New Jersey or New York offices for expert IT support.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#000814] text-white min-h-screen pt-32 pb-20 relative">
      <ContactClient />
    </main>
  );
}
