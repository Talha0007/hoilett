"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Standard window scroll
    window.scrollTo(0, 0);

    // Fallback for document element (some browsers/layouts)
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" to prevent the jump effect
    });
  }, [pathname]);

  return null;
}
