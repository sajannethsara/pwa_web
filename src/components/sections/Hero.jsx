"use client";

import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

const { hero, animations } = siteContent;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#135BEC]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#135BEC]/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-40 left-20 w-2 h-2 bg-[#135BEC]/20 rounded-full" />
        <div className="absolute top-60 right-40 w-3 h-3 bg-[#135BEC]/15 rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#135BEC]/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-blue-50 text-[#135BEC] border border-[#135BEC]/10 rounded-full hover:bg-blue-100 transition-colors"
              >
                ✦ {hero.badge}
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
              >
                {hero.headline}{" "}
                <span className="text-[#135BEC] relative">
                  {hero.headlineHighlight}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                      stroke="#135BEC"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {hero.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#135BEC] hover:bg-[#0e47c1] text-white shadow-xl shadow-[#135BEC]/25 hover:shadow-[#135BEC]/40 transition-all duration-300 rounded-xl px-8 h-13 text-base group"
              >
                <a href={hero.primaryCTA.href}>
                  {hero.primaryCTA.label}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-xl px-8 h-13 text-base group"
              >
                <a href={hero.secondaryCTA.href}>
                  {hero.secondaryCTA.label}
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {hero.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#135BEC]/10 to-[#135BEC]/5 rounded-3xl blur-2xl scale-105" />
              <LottieAnimation
                src={animations.hero}
                className="opacity-100"
                style={{ width: "100%", minHeight: 320 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
