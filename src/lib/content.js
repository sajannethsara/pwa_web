import {
  Shield,
  TrendingUp,
  Users,
  FileCheck,
  Calculator,
  Briefcase,
  Scale,
  BarChart3,
  Building2,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  Target,
  Handshake,
  BookOpen,
} from "lucide-react";

export const siteContent = {
  // ─── Brand ────────────────────────────────────────────
  brand: {
    name: "PWA",
    fullName: "P.W.A. Kwella & Co.",
    tagline: "Chartered Accountants",
    description:
      "Trusted advisors delivering excellence in audit, assurance, tax, and business advisory services.",
  },

  // ─── Navigation ───────────────────────────────────────
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Why Us", href: "#why-us" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get a Consultation", href: "#contact" },
  },

  // ─── Hero ─────────────────────────────────────────────
  hero: {
    badge: "Trusted Since 1998",
    headline: "Your Trusted Partner in",
    headlineHighlight: "Financial Excellence",
    description:
      "We combine deep industry expertise with innovative solutions to help businesses navigate complex financial landscapes. From audit and assurance to strategic advisory — we've got you covered.",
    primaryCTA: { label: "Explore Our Services", href: "#services" },
    secondaryCTA: { label: "Contact Us", href: "#contact" },
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "500+", label: "Clients Served" },
      { value: "99%", label: "Client Satisfaction" },
    ],
  },

  // ─── Why Choose Us ────────────────────────────────────
  whyChooseUs: {
    badge: "Why Choose PWA",
    heading: "Why Leading Businesses Trust Us",
    subheading:
      "We don't just crunch numbers — we build lasting partnerships that drive your business forward with integrity and precision.",
    items: [
      {
        icon: Shield,
        title: "Uncompromised Integrity",
        description:
          "We maintain the highest ethical standards in every engagement, ensuring transparency and trust in all our professional relationships.",
        color: "blue",
      },
      {
        icon: Target,
        title: "Industry Expertise",
        description:
          "Our team brings specialized knowledge across diverse sectors, from manufacturing and retail to technology and healthcare.",
        color: "emerald",
      },
      {
        icon: Users,
        title: "Personalized Approach",
        description:
          "Every client receives tailored solutions designed to address their unique challenges and growth objectives.",
        color: "violet",
      },
      {
        icon: TrendingUp,
        title: "Growth Oriented",
        description:
          "Beyond compliance, we help identify opportunities for operational efficiency and sustainable business expansion.",
        color: "amber",
      },
      {
        icon: Award,
        title: "Proven Track Record",
        description:
          "With over two decades of excellence, our reputation speaks through hundreds of satisfied clients and successful engagements.",
        color: "rose",
      },
      {
        icon: Handshake,
        title: "Long-term Partnerships",
        description:
          "We invest in understanding your business deeply, becoming a trusted extension of your team for years to come.",
        color: "cyan",
      },
    ],
  },

  // ─── About ────────────────────────────────────────────
  about: {
    badge: "About Us",
    heading: "A Legacy of Trust and Excellence",
    description:
      "P.W.A. Kwella & Co. is a leading firm of Chartered Accountants established in 1998. We are committed to delivering exceptional professional services with integrity, innovation, and dedication.",
    paragraphs: [
      "Since our inception, we have been at the forefront of providing comprehensive audit, tax, and advisory services to a diverse clientele. Our approach combines rigorous professional standards with a deep understanding of each client's unique business environment.",
      "Our team of qualified professionals brings together extensive experience across multiple industries, ensuring that every engagement benefits from broad expertise and specialized insight.",
    ],
    highlights: [
      {
        icon: CheckCircle2,
        text: "Registered with the Institute of Chartered Accountants of Sri Lanka",
      },
      {
        icon: CheckCircle2,
        text: "Full compliance with Sri Lanka Auditing Standards",
      },
      {
        icon: CheckCircle2,
        text: "Comprehensive quality control procedures",
      },
      {
        icon: CheckCircle2,
        text: "Continuous professional development program",
      },
    ],
  },

  // ─── Services ─────────────────────────────────────────
  services: {
    badge: "Our Services",
    heading: "Comprehensive Professional Services",
    subheading:
      "We offer a full spectrum of financial and advisory services to support your business at every stage of its journey.",
    items: [
      {
        icon: FileCheck,
        title: "Audit & Assurance",
        description:
          "Independent and objective audit services that enhance the credibility of your financial statements. We conduct statutory audits, internal audits, and special-purpose engagements.",
        features: [
          "Statutory Audits",
          "Internal Audits",
          "Review Engagements",
          "Agreed-Upon Procedures",
        ],
      },
      {
        icon: Calculator,
        title: "Tax Advisory",
        description:
          "Strategic tax planning and compliance services that minimize your tax burden while ensuring full regulatory compliance. We cover corporate, individual, and VAT taxation.",
        features: [
          "Corporate Tax Planning",
          "Individual Tax Returns",
          "VAT Compliance",
          "Tax Dispute Resolution",
        ],
      },
      {
        icon: Briefcase,
        title: "Business Advisory",
        description:
          "Expert guidance to drive strategic decisions. From business valuations to feasibility studies, we provide insights that shape your company's future.",
        features: [
          "Business Valuations",
          "Feasibility Studies",
          "Due Diligence",
          "Strategic Planning",
        ],
      },
      {
        icon: Scale,
        title: "Corporate Compliance",
        description:
          "End-to-end compliance management including company secretarial services, regulatory filings, and governance advisory to keep your business in good standing.",
        features: [
          "Company Secretarial",
          "Regulatory Filings",
          "Governance Advisory",
          "Annual Returns",
        ],
      },
      {
        icon: BarChart3,
        title: "Financial Reporting",
        description:
          "Preparation of financial statements, management reports, and budgetary analyses in accordance with Sri Lanka Financial Reporting Standards.",
        features: [
          "Financial Statements",
          "Management Accounts",
          "Budgeting & Forecasting",
          "SLFRS Conversion",
        ],
      },
      {
        icon: Building2,
        title: "Outsourced Accounting",
        description:
          "Complete bookkeeping and accounting outsourcing solutions that let you focus on growing your business while we handle the numbers with precision.",
        features: [
          "Bookkeeping",
          "Payroll Management",
          "Accounts Payable/Receivable",
          "Financial Reporting",
        ],
      },
    ],
  },

  // ─── Stats ────────────────────────────────────────────
  stats: {
    heading: "Our Impact in Numbers",
    subheading: "Every number tells a story of trust, dedication, and results.",
    items: [
      { value: 25, suffix: "+", label: "Years of Experience" },
      { value: 500, suffix: "+", label: "Clients Served" },
      { value: 50, suffix: "+", label: "Team Members" },
      { value: 99, suffix: "%", label: "Client Retention" },
    ],
  },

  // ─── Testimonials ─────────────────────────────────────
  testimonials: {
    badge: "Testimonials",
    heading: "What Our Clients Say",
    subheading:
      "Don't just take our word for it — hear from the businesses that trust us with their finances.",
    items: [
      {
        name: "Rajitha Fernando",
        role: "CEO, Lanka Exports (Pvt) Ltd",
        quote:
          "PWA has been our auditor for over 15 years. Their professionalism and deep understanding of our industry have been invaluable to our growth. They're not just accountants — they're partners.",
        rating: 5,
      },
      {
        name: "Samanthi Perera",
        role: "Managing Director, Perera Holdings",
        quote:
          "The tax advisory services from PWA saved us significantly on our annual tax obligation while ensuring we remain fully compliant. Their proactive approach to tax planning is exceptional.",
        rating: 5,
      },
      {
        name: "Marcus De Silva",
        role: "CFO, TechVenture Solutions",
        quote:
          "When we needed a due diligence review for our merger, PWA delivered a thorough and insightful report that gave us the confidence to proceed. Highly recommended for complex advisory work.",
        rating: 5,
      },
      {
        name: "Anoma Wickramasinghe",
        role: "Director, Island Healthcare Group",
        quote:
          "Transitioning our financial reporting to SLFRS was seamless with PWA's guidance. Their technical expertise and patient approach made a complex process remarkably smooth.",
        rating: 5,
      },
    ],
  },

  // ─── CTA ──────────────────────────────────────────────
  cta: {
    heading: "Ready to Elevate Your Financial Strategy?",
    description:
      "Let's discuss how our expertise can help you achieve your business goals. Schedule a free consultation with our team today.",
    button: { label: "Schedule a Free Consultation", href: "#contact" },
    features: [
      "Free initial consultation",
      "Tailored solutions",
      "No obligation",
    ],
  },

  // ─── Contact ──────────────────────────────────────────
  contact: {
    badge: "Get in Touch",
    heading: "Let's Start a Conversation",
    subheading:
      "Whether you have a question or want to discuss your requirements, we're here to help.",
    form: {
      fields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
        { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+94 77 123 4567" },
        { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
      ],
      messagePlaceholder: "Tell us about your requirements...",
      submitLabel: "Send Message",
    },
    info: [
      {
        icon: Phone,
        title: "Call Us",
        details: ["+94 11 234 5678", "+94 77 987 6543"],
      },
      {
        icon: Mail,
        title: "Email Us",
        details: ["info@pwakwella.com", "audit@pwakwella.com"],
      },
      {
        icon: MapPin,
        title: "Visit Us",
        details: ["No. 45, Galle Road", "Colombo 03, Sri Lanka"],
      },
      {
        icon: Clock,
        title: "Working Hours",
        details: ["Mon – Fri: 8:30 AM – 5:30 PM", "Sat: 9:00 AM – 1:00 PM"],
      },
    ],
  },

  // ─── Footer ───────────────────────────────────────────
  footer: {
    description:
      "A leading firm of Chartered Accountants providing comprehensive audit, tax, and advisory services with integrity and excellence since 1998.",
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#home" },
          { label: "About Us", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Our Services",
        links: [
          { label: "Audit & Assurance", href: "#services" },
          { label: "Tax Advisory", href: "#services" },
          { label: "Business Advisory", href: "#services" },
          { label: "Corporate Compliance", href: "#services" },
          { label: "Financial Reporting", href: "#services" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "#" },
          { label: "Tax Calendar", href: "#" },
          { label: "SLFRS Updates", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
    ],
    social: [
      { label: "Facebook", href: "#", icon: Globe },
      { label: "LinkedIn", href: "#", icon: Globe },
      { label: "Twitter", href: "#", icon: Globe },
    ],
    copyright: `© ${new Date().getFullYear()} P.W.A. Kwella & Co. All rights reserved.`,
    bottomLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },

  // ─── Lottie Animation Paths ────────────────────────────
  // Place your .json Lottie files in public/animations/
  animations: {
    hero: "/animations/hero.json",
    about: "/animations/about.json",
    stats: "/animations/stats.json",
    cta: "/animations/cta.json",
    contact: "/animations/contact.json",
  },
};
