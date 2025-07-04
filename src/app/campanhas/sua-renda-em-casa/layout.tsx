import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sua Renda em Casa - Trabalhe Online com Liberdade",
  description: "Descubra como gerar renda trabalhando de casa. Transforme sua rotina com liberdade financeira e qualidade de vida.",
  keywords: ["renda extra", "trabalho em casa", "ganhar dinheiro online", "liberdade financeira", "liberdade geografica", "renda com o celular"],
  authors: [{ name: "Sua Renda em Casa", url: "" }],
  openGraph: {
    title: "Sua Renda em Casa - Trabalhe Online com Liberdade",
    description: "Transforme sua rotina e alcance liberdade financeira com nosso método exclusivo de renda online.",
    siteName: "Sua Renda em Casa",
    images: [
      {
        url: "/imagens/sua-renda-em-casa/logo.svg",
        width: 1200,
        height: 630,
        alt: "Sua Renda em Casa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Renda em Casa",
    description: "Trabalhe de casa com liberdade e qualidade de vida.",
    images: ["/imagens/sua-renda-em-casa/logo.svg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


