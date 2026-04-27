"use server";

export async function capturePayPalOrder(orderID: string) {
  try {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
    // Real Production URL for Live Payments
    const apiUrl = "https://api-m.paypal.com";

    if (!clientId || !clientSecret) {
      return {
        success: false,
        error: "System Configuration Error: Missing Keys.",
      };
    }

    // Create Basic Auth Header
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    // 1. Get Access Token from PayPal Live
    const tokenResponse = await fetch(`${apiUrl}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-store",
    });

    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // 2. Capture the Order (Transfer funds from Customer to Business Owner)
    const captureResponse = await fetch(
      `${apiUrl}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        cache: "no-store",
      },
    );

    const captureData = await captureResponse.json();

    if (captureData.status === "COMPLETED") {
      // SUCCESS: The money is now in your client's PayPal balance
      return { success: true };
    }

    return {
      success: false,
      error:
        captureData.details?.[0]?.description ||
        "Payment could not be captured.",
    };
  } catch (error) {
    console.error("PayPal Execution Error:", error);
    return { success: false, error: "Server connection failed." };
  }
}
