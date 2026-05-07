"use client";

import { BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy-load Lottie (SVG-based, scales perfectly)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  speed = 1,
}) {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    // Fetch the JSON animation data
    const jsonSrc = src.replace(/\.lottie$/, ".json");
    fetch(jsonSrc)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch(() => setError(true));
  }, [src]);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl ${className}`}
        style={{ minHeight: 280, ...style }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full border-2 border-[#135BEC]/10 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute w-24 h-24 rounded-full border-2 border-[#135BEC]/15 animate-ping" style={{ animationDuration: "2.5s" }} />
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#135BEC]/10 to-[#135BEC]/5 flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-[#135BEC]/40" />
          </div>
        </div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: 280, ...style }}
      />
    );
  }

  return (
    <div className={className} style={style}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
