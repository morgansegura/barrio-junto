import { Outfit } from "next/font/google";

import "@/styles/globals.css";

const fontFamSans = Outfit({
  variable: "--font-fam-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
