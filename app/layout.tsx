import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berkeley Purity Test",
  description: "How pure of a Berkeley student are you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-times antialiased">
        {children}
      </body>
    </html>
  );
}
