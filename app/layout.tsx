import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: {
    default: "Tamirat Dereje | Software Engineer",
    template: "%s | Tamirat Dereje",
  },
  description:
    "Senior Software Engineer with 6+ years of full-stack experience across Python, Flutter, React, Node.js, and machine learning.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Flutter Developer",
    "Machine Learning",
    "Next.js",
    "Node.js",
    "Tamirat Dereje",
  ],
  authors: [{ name: "Tamirat Dereje" }],
  creator: "Tamirat Dereje",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tamirat Dereje | Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of full-stack experience across Python, Flutter, React, Node.js, and machine learning.",
    siteName: "Tamirat Dereje Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamirat Dereje | Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of full-stack experience across Python, Flutter, React, Node.js, and machine learning.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
