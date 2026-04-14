"use server";

export async function sendChatMessage(message: string, sessionId: string) {
  if (!process.env.N8N_WEBHOOK_URL) {
    return { error: "Webhook URL not configured in environment variables." };
  }

  try {
    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatInput: message,
        sessionId: sessionId,
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`n8n responded with status: ${response.status}`);
    }

    const data = await response.json();

    // n8n Chat Trigger usually returns the response in a 'output' field
    return {
      output: data.output || "I received an empty response from the assistant.",
    };
  } catch (error) {
    console.error("Chat Action Error:", error);
    return {
      error: "Failed to connect to the AI service. Please try again later.",
    };
  }
}
