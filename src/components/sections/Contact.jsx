"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

const { contact, animations } = siteContent;

const WHATSAPP_NUMBER = "94779876543";
const DEFAULT_MESSAGE = `Hello PWA Kwella & Co.,

I would like to inquire about your professional services. Could you please provide more details about your audit and tax advisory offerings?

Thank you.`;

export default function Contact() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  // Separate info items: Call Us & Email Us go top-row, Address & Working Hours go bottom
  const topInfo = contact.info.filter(
    (item) => item.title === "Call Us" || item.title === "Email Us"
  );
  const bottomInfo = contact.info.filter(
    (item) => item.title === "Visit Us" || item.title === "Working Hours"
  );

  const renderInfoCard = (item, i, delay = 0) => {
    const Icon = item.icon;
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + i * 0.1 }}
        className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-[#135BEC]/10 transition-all duration-300 group"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#135BEC]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#135BEC] group-hover:shadow-lg group-hover:shadow-[#135BEC]/25 transition-all duration-300">
            <Icon className="h-5 w-5 text-[#135BEC] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
            {item.details.map((detail, j) => (
              <p key={j} className="text-sm text-slate-600">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative">
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
            {contact.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {contact.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {contact.subheading}
          </p>
        </motion.div>

        {/* Top Row: WhatsApp Form + Call Us + Email Us */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl border border-slate-100 hover:shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    WhatsApp Us
                  </h3>
                  <p className="text-xs text-slate-500">
                    Send a message directly
                  </p>
                </div>
              </div>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="rounded-xl border-slate-200 focus:border-[#25D366] focus:ring-[#25D366]/20 resize-none flex-1 text-sm mb-4"
              />
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 rounded-xl h-12 text-base group"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Call Us & Email Us */}
          <div className="flex flex-col justify-around">
          {topInfo.map((item, i) => renderInfoCard(item, i, 0.2))}
          </div>
        </div>

        {/* Bottom Row: Address + Working Hours */}
        <div className="grid sm:grid-cols-2 gap-6">
          {bottomInfo.map((item, i) => renderInfoCard(item, i, 0.4))}
        </div>
      </div>
    </section>
  );
}
