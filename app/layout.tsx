import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amitoz Jatana — Software Engineer",
  description:
    "Amitoz Jatana is a Toronto-based software engineer building dependable systems, thoughtful products, and practical automation.",
  openGraph: {
    title: "Amitoz Jatana — Software Engineer",
    description: "Building dependable systems and thoughtful products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
