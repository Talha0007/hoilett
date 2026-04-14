"use client";
import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    // We use a small timeout to ensure the page is loaded first
    const timer = setTimeout(() => {
      fetch("/api/visit-alert", {
        method: "POST",
        // This ensures the request doesn't block the main thread
        priority: "low",
      }).catch((err) => console.log("Tracker silent error:", err));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't need to render anything
}
