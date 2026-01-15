import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "डॉ. आर.के. कुशवाहा | न्यूरो-साइकियाट्रिस्ट, लखनऊ",
  description:
    "डॉ. आर.के. कुशवाहा - लखनऊ के अनुभवी मानसिक रोग विशेषज्ञ। Depression, Anxiety, Bipolar Disorder, Schizophrenia, OCD, ADHD, PTSD, Stress, Insomnia का विशेषज्ञ इलाज। मानसिक स्वास्थ्य परामर्श और उपचार। फोन: 8789482183",

  keywords: [
    "Dr RK Kushwaha Lucknow",
    "Psychiatrist Lucknow",
    "Neuro Psychiatrist Lucknow",
    "Mental Health Doctor Lucknow",
    "Depression Treatment Lucknow",
    "Anxiety Treatment Lucknow",
    "Best Psychiatrist in Lucknow",
    "Bipolar Disorder Treatment Lucknow",
    "Schizophrenia Treatment Lucknow",
    "OCD Treatment Lucknow",
    "ADHD Treatment Lucknow",
    "PTSD Treatment Lucknow",
    "Stress Management Lucknow",
    "Insomnia Treatment Lucknow",
    "मानसिक रोग विशेषज्ञ लखनऊ",
    "डॉ आरके कुशवाहा लखनऊ",
    "मनोचिकित्सक लखनऊ",
    "डिप्रेशन का इलाज लखनऊ",
    "मानसिक रोग का इलाज लखनऊ",
    "साइकियाट्रिस्ट लखनऊ",
    "मानसिक स्वास्थ्य परामर्श",
  ],

  authors: [{ name: "Dr. R.K. Kushwaha" }],

  openGraph: {
    title: "डॉ. आर.के. कुशवाहा | न्यूरो-साइकियाट्रिस्ट, लखनऊ",
    description:
      "लखनऊ में मानसिक और न्यूरोलॉजिकल विकारों का विशेषज्ञ उपचार। Depression, Anxiety, OCD, ADHD का इलाज।",
      images: ["https://www.drkushwahark.in/og-image.jpg"],
    locale: "hi_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "डॉ. आर.के. कुशवाहा | मानसिक रोग विशेषज्ञ, लखनऊ",
    description: "लखनऊ में मानसिक स्वास्थ्य का विशेषज्ञ उपचार",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="hi">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Physician",
                name: "Dr. R.K. Kushwaha",
                description:
                  "Neuro-Psychiatrist specializing in mental health disorders",
                telephone: "+91-8789482183",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                medicalSpecialty: "Psychiatry",
              }),
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}