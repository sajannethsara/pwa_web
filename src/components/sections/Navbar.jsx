"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const { brand, nav } = siteContent;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt={brand.fullName}
              width={133}
              height={68}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#135BEC] rounded-lg hover:bg-blue-50/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-[#135BEC] hover:bg-[#0e47c1] text-white shadow-lg shadow-[#135BEC]/25 hover:shadow-[#135BEC]/40 transition-all duration-300 rounded-xl px-6"
            >
              <a href={nav.cta.href}>{nav.cta.label}</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="inline-flex items-center justify-center rounded-xl h-10 w-10 hover:bg-slate-100 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100">
                  <Image
                    src="/logo.svg"
                    alt={brand.fullName}
                    width={133}
                    height={68}
                    className="h-12 w-auto"
                  />
                </div>
                <nav className="flex-1 p-4">
                  {nav.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:text-[#135BEC] hover:bg-blue-50 rounded-xl transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="p-6 border-t border-slate-100">
                  <Button
                    asChild
                    className="w-full bg-[#135BEC] hover:bg-[#0e47c1] text-white rounded-xl"
                  >
                    <a href={nav.cta.href} onClick={() => setOpen(false)}>
                      {nav.cta.label}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
