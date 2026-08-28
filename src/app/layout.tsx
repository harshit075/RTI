import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RTI Saathi - Ask the Government. Track the Answer.",
  description: "File, track, and manage your Right to Information requests in one clear, guided journey.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
