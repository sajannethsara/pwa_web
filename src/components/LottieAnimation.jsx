"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { BarChart3 } from "lucide-react";

export default function LottieAnimation({
  src,
  animationData: providedData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
}) {
  const [animationData, setAnimationData] = useState(providedData || null);
  const [status, setStatus] = useState(providedData ? "loaded" : "loading");

  useEffect(() => {
    if (providedData || !src) {
      if (providedData) setStatus("loaded");
      return;
    }

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
        setStatus("loaded");
      })
      .catch(() => setStatus("error"));
  }, [src, providedData]);

  // Elegant fallback when animation file is missing
  if (status === "error") {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl ${className}`}
        style={{ minHeight: 280, ...style }}
      >
        <div className="relative flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-[#135BEC]/10 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute w-24 h-24 rounded-full border-2 border-[#135BEC]/15 animate-ping" style={{ animationDuration: "2.5s" }} />
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#135BEC]/10 to-[#135BEC]/5 flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-[#135BEC]/40" />
          </div>
        </div>
      </div>
    );
  }

  // Loading spinner
  if (status === "loading") {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: 280, ...style }}
      >
        <div className="w-12 h-12 border-3 border-[#135BEC]/20 border-t-[#135BEC] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className={`lottie-container ${className}`} style={style}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
}
