import PaymentUI from "./PaymentUI";

export default function PaymentPage() {
  // These must be set in your Vercel/Hosting Dashboard
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="p-20 text-center font-bold text-red-500">
        Error: PayPal
      </div>
    );
  }

  return <PaymentUI clientId={clientId} />;
}
