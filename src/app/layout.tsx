import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marchetti Estudio Contable | Cra. Sofía Marchetti",
  description:
    "Contabilidad para autónomos, monotributistas y PYMES en Buenos Aires. Declaraciones, sueldos, monotributo — todo resuelto a tiempo, sin sorpresas.",
  openGraph: {
    title: "Marchetti Estudio Contable",
    description:
      "Que ARCA no sea tu problema. Llevamos la contabilidad de autónomos y PYMES en Buenos Aires.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
