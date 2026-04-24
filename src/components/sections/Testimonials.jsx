"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const { testimonials } = siteContent;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const items = testimonials.items;

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-slate-50/50 relative"
    >
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
            {testimonials.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {testimonials.subheading}
          </p>
        </motion.div>

        {/* Testimonial Cards - Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-[#135BEC]/5 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-[#135BEC]/10 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-5">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#135BEC]/10 flex items-center justify-center">
                    <span className="text-[#135BEC] font-semibold text-sm">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <Quote className="h-10 w-10 text-[#135BEC]/10 mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6">
                &ldquo;{items[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: items[current].rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#135BEC]/10 flex items-center justify-center">
                    <span className="text-[#135BEC] font-semibold text-sm">
                      {items[current].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {items[current].name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {items[current].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[#135BEC] w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
