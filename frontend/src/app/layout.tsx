import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Navbar";
import { ThemeProvider } from "next-themes";

//IMPORTANT TO GET FRESH DATA AFTER RELOAD PAGE
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
//IMPORTANT TO GET FRESH DATA AFTER RELOAD PAGE

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || ''),
  title: {
    default: "World News - Najświeższe wiadomości ze świata",
    template: "%s | World News"
  },
  description: "Aktualne wiadomości ze świata, polityka, nauka, technologia, sport i kultura. Bądź na bieżąco z najważniejszymi wydarzeniami globalnymi.",
  keywords: ["wiadomości ze świata", "aktualności", "polityka", "nauka", "wydarzenia globalne", "news", "biznes", "sport"],
  authors: [{ name: "World News Team" }],
  category: "news",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "World News",
    title: "World News - Najświeższe wiadomości ze świata",
    description: "Aktualne wiadomości ze świata, polityka, nauka, biznes, technologia, sport i kultura. Bądź na bieżąco z najważniejszymi wydarzeniami globalnymi.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/seo.png`,
        width: 1200,
        height: 630,
        alt: "World News - Wiadomości ze świata"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
    languages: {
      'pl': process.env.NEXT_PUBLIC_DOMAIN
    }
  },
  // verification: {
  //   google: "twój-kod-weryfikacyjny-google",
  //   yandex: "twój-kod-weryfikacyjny-yandex",
  //   yahoo: "twój-kod-weryfikacyjny-yahoo"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
