"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <svg
        width="100"
        height="100"
        fill="#2C2D31"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="0">
          <animate
            attributeName="r"
            calcMode="spline"
            dur="1.2s"
            values="0;11"
            keySplines=".52,.6,.25,.99"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="1.2s"
            values="1;0"
            keySplines=".52,.6,.25,.99"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {isLoading && <Loading />}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}