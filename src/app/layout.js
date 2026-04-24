import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "P.W.A. Kwella & Co. | Chartered Accountants",
  description:
    "Trusted advisors delivering excellence in audit, assurance, tax, and business advisory services. Chartered Accountants since 1998.",
  keywords: [
    "chartered accountants",
    "audit firm",
    "tax advisory",
    "Sri Lanka",
    "PWA Kwella",
    "business advisory",
    "financial reporting",
  ],
  openGraph: {
    title: "P.W.A. Kwella & Co. | Chartered Accountants",
    description:
      "Trusted advisors delivering excellence in audit, assurance, tax, and business advisory services.",
    url: "https://pwakwella.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
