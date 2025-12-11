import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// **--- SEO अनुकूलित metadata ---**
export const metadata = {
  title: "डॉ. अखिलेश पाण्डेय | नवचेतना न्यूरो-साइकियाट्री सेंटर, वाराणसी",
  description:
    "डॉ. अखिलेश पाण्डेय (MBBS, MD BHU) - वाराणसी के अनुभवी मानसिक रोग विशेषज्ञ। Depression, Anxiety, Bipolar Disorder, Schizophrenia, OCD, ADHD, PTSD का विशेषज्ञ इलाज। नवचेतना न्यूरो-साइकियाट्री सेंटर, बी-29 भुवननगर, अर्दली बाजार, वाराणसी। फोन: 9450016305",

  keywords: [
    "Dr Akhilesh Pandey Varanasi",
    "Psychiatrist Varanasi",
    "Neuro Psychiatrist Varanasi",
    "Mental Health Doctor Varanasi",
    "Depression Treatment Varanasi",
    "Anxiety Treatment Varanasi",
    "Best Psychiatrist in Varanasi",
    "NAVCHETNA Centre Varanasi",
    "BHU Psychiatrist",
    "मानसिक रोग विशेषज्ञ वाराणसी",
    "डॉ अखिलेश पाण्डेय",
    "नवचेतना साइकियाट्री सेंटर",
    "मनोचिकित्सक वाराणसी",
    "डिप्रेशन का इलाज वाराणसी",
    "मानसिक रोग का इलाज",
  ],

  authors: [{ name: "Dr. Akhilesh Pandey" }],

  openGraph: {
    title: "डॉ. अखिलेश पाण्डेय | नवचेतना न्यूरो-साइकियाट्री सेंटर",
    description:
      "वाराणसी में मानसिक और न्यूरोलॉजिकल विकारों का विशेषज्ञ उपचार। BHU से MD, 15+ वर्षों का अनुभव।",
    url: "https://navchetana-psychiatry.vercel.app",
    siteName: "नवचेतना न्यूरो-साइकियाट्री सेंटर",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/psychiatrist.jpeg",
        width: 1200,
        height: 630,
        alt: "डॉ. अखिलेश पाण्डेय - मानसिक रोग विशेषज्ञ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "डॉ. अखिलेश पाण्डेय | नवचेतना सेंटर, वाराणसी",
    description: "वाराणसी में मानसिक स्वास्थ्य का विशेषज्ञ उपचार",
    images: ["/psychiatrist.jpeg"],
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

  verification: {
    google: "your-google-verification-code", // Google Search Console से मिलेगा
  },

  alternates: {
    canonical: "https://navchetana-psychiatry.vercel.app",
  },

  category: "Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        {/* Structured Data - Doctor Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Akhilesh Pandey",
              description:
                "Neuro-Psychiatrist specializing in mental health disorders",
              image:
                "https://navchetana-psychiatry.vercel.app/psychiatrist.jpeg",
              telephone: "+91-9450016305",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-29, Bhuvannagar, Orderly Bazaar",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                postalCode: "221002",
                addressCountry: "IN",
              },
              medicalSpecialty: "Psychiatry",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Banaras Hindu University",
              },
            }),
          }}
        />

        {/* Structured Data - Medical Clinic Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "NAVCHETNA Neuro-Psychiatry Centre",
              image:
                "https://navchetana-psychiatry.vercel.app/psychiatrist.jpeg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-29, Bhuvannagar, Orderly Bazaar",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                postalCode: "221002",
                addressCountry: "IN",
              },
              telephone: "+91-9450016305",
              openingHours: "Mo-Sa 09:00-20:00",
              priceRange: "₹₹",
              medicalSpecialty: ["Psychiatry", "Neurology"],
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
  );
}
