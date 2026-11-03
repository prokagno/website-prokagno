import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";
// import PopupComponent from "./components/PopupComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kanprokagno Innovation Private Limited | Innovative Solutions",
  description:
    "Leading innovation company providing cutting-edge solutions and services. Founded by Krishna Prasad Ponnekenti to transform businesses through technology.",
  keywords: [
    "Kanprokagno Innovation",
    "Krishna Prasad Ponnekenti",
    "technology solutions",
    "innovation company",
  ],
  author: "Krishna Prasad Ponnekenti",
  openGraph: {
    title: "Kanprokagno Innovation Private Limited",
    description:
      "Leading innovation company providing cutting-edge solutions.",
    type: "website",
    locale: "en_US",
    url: "https://prokagno.co.in",
    siteName: "Kanprokagno Innovation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kanprokagno Innovation Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanprokagno Innovation Private Limited",
    description:
      "Technology innovation company by Krishna Prasad Ponnekenti",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://prokagno.co.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="robots" content="index, follow" />

        {/* Icons */}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SchemaOrg />

        {/*
        <PopupComponent
          autoOpen
          autoOpenDelay={2000}
          storageKey="newYearPopup"
          title="Special Announcement"
          image="https://drive.usercontent.google.com/download?id=1PEw10uQOvAHWOM3OJh0iyYvxhnBlDpbc"
          showCloseButton
        >
          <p className="text-center font-medium">
            Thank you for visiting our website!
          </p>
        </PopupComponent>
        */}

        <Navbar />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
