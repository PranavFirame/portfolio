import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Firame — Fullstack Web Developer & Web Security",
  description:
    "Portfolio of Pranav Firame: Fullstack Web Developer and Web Security specialist building high-performance, secure web applications.",
  keywords: [
    "Pranav Firame",
    "Fullstack Developer",
    "Web Security",
    "React",
    "Next.js",
    "Node.js",
    "Software Developer",
    "Pune",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
