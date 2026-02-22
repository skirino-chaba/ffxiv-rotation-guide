import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FFXIV Rotation Guide",
  description:
    "Optimal 2-minute rotations with step-by-step annotations explaining the why behind each action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
