import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern3D Concept | Endüstriyel 3D Üretim Çözümleri",
  description:
    "Prototipten seri üretime, savunma sanayine özel yüksek hassasiyetli 3D üretim çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
