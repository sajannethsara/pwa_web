"use client";

import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const { whyChooseUs } = siteContent;

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-[#135BEC]/10 text-[#135BEC]",
    border: "hover:border-[#135BEC]/20",
    glow: "group-hover:shadow-[#135BEC]/10",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-600",
    border: "hover:border-emerald-200",
    glow: "group-hover:shadow-emerald-500/10",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "bg-violet-100 text-violet-600",
    border: "hover:border-violet-200",
    glow: "group-hover:shadow-violet-500/10",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-600",
    border: "hover:border-amber-200",
    glow: "group-hover:shadow-amber-500/10",
  },
  rose: {
    bg: "bg-rose-50",
    icon: "bg-rose-100 text-rose-600",
    border: "hover:border-rose-200",
    glow: "group-hover:shadow-rose-500/10",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "bg-cyan-100 text-cyan-600",
    border: "hover:border-cyan-200",
    glow: "group-hover:shadow-cyan-500/10",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge
            variant="secondary"
            className="px-4 py-1.5 text-sm font-medium bg-blue-50 text-[#135BEC] border border-[#135BEC]/10 rounded-full mb-6"
          >
            {whyChooseUs.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {whyChooseUs.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {whyChooseUs.subheading}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.items.map((item, i) => {
            const colors = colorMap[item.color] || colorMap.blue;
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl ${colors.glow} transition-all duration-500 cursor-default ${colors.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
