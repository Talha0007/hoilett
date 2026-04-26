"use client";
import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/api/visit-alert", {
        method: "POST",
        priority: "low",
      })
        .then(async (res) => {
          const data = await res.json();
          console.log("Tracker Status:", data.message || data.status);
        })
        .catch((err) => console.error("Tracker silent error:", err));
    }, 500); // Trigger faster

    return () => clearTimeout(timer);
  }, []);

  return null;
}
