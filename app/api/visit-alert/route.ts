import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  try {
    // Get IP to identify the user uniquely
    const ip = req.headers.get("x-forwarded-for") || "local-dev";
    const redisKey = `alert_sent:${ip}`;

    // 1. Check Redis: Has this IP visited in the last 24 hours?
    const isRecentlyAlerted = await redis.get(redisKey);

    if (isRecentlyAlerted) {
      return NextResponse.json({ message: "Repeat visitor - No alert sent" });
    }

    // 2. Send Push Notification via Pushover
    const pushoverResponse = await fetch(
      "https://api.pushover.net/1/messages.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: process.env.PUSHOVER_API_TOKEN,
          user: process.env.PUSHOVER_USER_KEY,
          title: "HBS Visitor Alert",
          message: `A new client is viewing the website (IP: ${ip})`,
          sound: "cashregister", // Custom sound for your phone
          priority: 1,
        }),
      },
    );

    if (pushoverResponse.ok) {
      // 3. Mark this IP in Redis for 24 hours (86400 seconds)
      await redis.set(redisKey, "true", { ex: 86400 });
      return NextResponse.json({ success: true, status: "Alert Sent" });
    }

    return NextResponse.json({ error: "Pushover API failed" }, { status: 500 });
  } catch (error) {
    console.error("Internal Alert Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
