// This is a Server Component by default
import PaymentUI from "./PaymentUI";

export default function PaymentPage() {
  // Accessing the server-side environment variable
  const clientId = process.env.PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-red-500 uppercase tracking-widest bg-slate-50 p-6 text-center">
        Error: PayPal Configuration Missing. <br />
        Add PAYPAL_CLIENT_ID to Vercel Environment Variables.
      </div>
    );
  }

  // Pass the ID to the client component
  return <PaymentUI clientId={clientId} />;
}
