import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  try {
    // Better IP detection: Get the first IP in the forwarded list
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "local-dev";
    const redisKey = `alert_sent:${ip}`;

    // 1. Check Redis: Has this IP visited in the last 2 hours?
    const isRecentlyAlerted = await redis.get(redisKey);

    if (isRecentlyAlerted) {
      return NextResponse.json({ message: "Cooldown active - No alert sent" });
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
          title: "🚀 HBS Visitor Alert",
          message: `Client active on site. IP: ${ip}`,
          sound: "cashregister",
          priority: 1,
        }),
      },
    );

    const pushoverData = await pushoverResponse.json();

    if (pushoverResponse.ok) {
      // 3. Mark in Redis for 2 hours (7200 seconds)
      await redis.set(redisKey, "true", { ex: 30 });
      return NextResponse.json({ success: true, status: "Alert Sent" });
    } else {
      console.error("Pushover Error:", pushoverData);
      return NextResponse.json({ error: "Pushover failed" }, { status: 500 });
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
