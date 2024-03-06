import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github Projects",
  description: "A Template for Gitub Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-rust font-poppins">{children}</body>
    </html>
  );
}
