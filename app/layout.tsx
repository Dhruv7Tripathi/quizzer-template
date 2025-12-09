import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/landingpage/navbar";
import TopBanner from "@/components/top-banner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizzer Template | LayrdUI",
  description:
    "Quizzer Template: a lightweight, accessible, and responsive starter for building quizzes with Next.js, TypeScript, Tailwind CSS and LayrdUI components. Includes theme support, analytics, and modular pages for questions, results, and admin flows.",
  keywords: [
    "quiz",
    "template",
    "nextjs",
    "typescript",
    "tailwind",
    "layrdui",
    "accessibility",
  ],
  authors: [{ name: "LayrdUI" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    title: "Quizzer Template — LayrdUI",
    description:
      "A starter kit for building quizzes with Next.js and LayrdUI — accessible, themable, and production-ready.",
    url: "https://layrdui.example/quizzer-template",
    siteName: "LayrdUI",
    images: [
      {
        url: "https://layrdui.example/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quizzer Template — LayrdUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBanner />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
