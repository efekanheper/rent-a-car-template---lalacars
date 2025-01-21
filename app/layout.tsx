import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins fontu ayarlanıyor
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // İhtiyacınız olan ağırlıkları ekleyebilirsiniz
});

export const metadata: Metadata = {
  title: "lalacars.",
  description: "lalacars",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
