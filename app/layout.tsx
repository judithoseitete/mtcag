import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "More Than Conquerors AG",
  description: "Welcome to More Than Conquerors Assemblies of God Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
