import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// कंपोनेंट्स को इंपोर्ट करें
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
  title: "डॉ. अखिलेश पांडेय | NAVCHETNA Neuro-Psychiatry Centre, वाराणसी",
  description: `डॉ. अखिलेश पांडेय (MBBS, MD BHU), मानसिक रोग विशेषज्ञ, NAVCHETNA Neuro-Psychiatry Centre, वाराणसी। मानसिक और न्यूरोलॉजिकल विकारों का विशेषज्ञ उपचार। पता: बी-29, भुवननगर, अर्दली बाजार। संपर्क: 9450016305।`,
  keywords: [
    "Dr. Akhilesh Pandey",
    "Psychiatrist Varanasi",
    "MD BHU",
    "Neuro Psychiatrist",
    "Mental Health Centre Varanasi",
    "NAVCHETNA Centre",
    "9450016305",
    "मानसिक रोग विशेषज्ञ वाराणसी",
  ],
  openGraph: {
    title: "NAVCHETNA Neuro-Psychiatry Centre | डॉ. अखिलेश पांडेय",
    description:
      "वाराणसी में सर्वश्रेष्ठ न्यूरो-साइकियाट्रिक उपचार प्राप्त करें।",
    url: "https://yourwebsite.com", // इसे अपनी वेबसाइट के URL से बदलें
    siteName: "NAVCHETNA Centre",
    locale: "hi_IN",
    type: "website",
  },
};
// **--------------------------------**

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* नैवबार */}
        <main className="min-h-screen">
          {children} {/* पेज की मुख्य सामग्री */}
        </main>
        <Footer /> {/* फुटर */}
      </body>
    </html>
  );
}
