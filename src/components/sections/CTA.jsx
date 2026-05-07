"use client";

import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

const { cta, animations } = siteContent;

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-10 sm:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#135BEC] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#135BEC] rounded-full blur-[100px]" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {cta.heading}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {cta.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {cta.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#135BEC]" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#135BEC] hover:bg-[#0e47c1] text-white shadow-xl shadow-[#135BEC]/30 hover:shadow-[#135BEC]/50 transition-all duration-300 rounded-xl px-8 h-13 text-base group"
                >
                  <a href={cta.button.href}>
                    {cta.button.label}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right - Lottie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex items-center justify-center"
            >
              <LottieAnimation
                src={animations.cta}
                className="opacity-100"
                style={{ width: "100%", minHeight: 320 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
