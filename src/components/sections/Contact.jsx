"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation"),
  { ssr: false }
);

const { contact, animations } = siteContent;

export default function Contact() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you! We'll be in touch shortly.");
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

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {contact.form.fields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        {field.label}
                      </label>
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="rounded-xl border-slate-200 focus:border-[#135BEC] focus:ring-[#135BEC]/20 h-12"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: e.target.value,
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <Textarea
                    placeholder={contact.form.messagePlaceholder}
                    rows={5}
                    className="rounded-xl border-slate-200 focus:border-[#135BEC] focus:ring-[#135BEC]/20 resize-none"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#135BEC] hover:bg-[#0e47c1] text-white shadow-lg shadow-[#135BEC]/25 hover:shadow-[#135BEC]/40 transition-all duration-300 rounded-xl h-13 text-base group"
                >
                  {contact.form.submitLabel}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {contact.info.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-[#135BEC]/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#135BEC]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#135BEC] group-hover:shadow-lg group-hover:shadow-[#135BEC]/25 transition-all duration-300">
                      <Icon className="h-5 w-5 text-[#135BEC] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, j) => (
                        <p key={j} className="text-sm text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Lottie */}
            <div className="hidden lg:block pt-4">
              <LottieAnimation
                src={animations.contact}
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
