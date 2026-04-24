"use client";

import { siteContent } from "@/lib/content";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const { brand, footer } = siteContent;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#135BEC] flex items-center justify-center shadow-lg shadow-[#135BEC]/25">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">
                  {brand.name}
                </span>
                <p className="text-xs text-slate-400 uppercase tracking-widest">
                  {brand.tagline}
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {footer.description}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {footer.social.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#135BEC] hover:text-white transition-all duration-300"
                    aria-label={s.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footer.columns.map((column, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-[#135BEC] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.bottomLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-[#135BEC] text-white shadow-xl shadow-[#135BEC]/30 flex items-center justify-center hover:bg-[#0e47c1] transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
