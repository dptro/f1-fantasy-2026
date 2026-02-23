import "./globals.css";
import type { Metadata } from "next";
import { AppShell } from "../components/AppShell";

export const metadata: Metadata = {
  title: "F1 Fantasy 2026",
  description: "F1 fantasy league dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}