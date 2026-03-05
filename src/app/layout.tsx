import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import { Button } from '@/components/Calculator/Button';
import { Keypad } from '@/components/Calculator/Keypad';
import { CalculatorDisplay } from '@/components/Calculator/Display';
import { calculate } from '@/utils/calculatorLogic';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pio-prompt - AI Prompt Builder",
  description: "Build AI prompts like building blocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
