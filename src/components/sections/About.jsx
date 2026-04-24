"use client";

import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

const { about, animations } = siteContent;

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Lottie */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#135BEC]/5 to-transparent rounded-3xl" />
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <LottieAnimation
                  src={animations.about}
                  className="w-full max-w-md mx-auto"
                />
              </div>
              {/* Decorative floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#135BEC]/10 flex items-center justify-center">
                    <span className="text-[#135BEC] font-bold text-lg">25</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Years</div>
                    <div className="text-xs text-slate-500">of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-blue-50 text-[#135BEC] border border-[#135BEC]/10 rounded-full mb-6"
              >
                {about.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                {about.heading}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {about.highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Icon className="h-5 w-5 text-[#135BEC] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
