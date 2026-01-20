import HeroSection from "@/components/HeroSection";
import InsomniaOverview from "@/components/InsomniaOverview";
import MigraineOverview from "@/components/MigraineOverview";
import EpilepsyOverview from "@/components/EpilepsyOverview";
import Depression from "@/components/Depression";
import Anxiety from "@/components/Anxiety";
import BipolarDisorder from "@/components/BipolarDisorder";
import Schizophrenia from "@/components/Schizophrenia";
import OCD from "@/components/OCD";
import ADHD from "@/components/ADHD";
import PTSD from "@/components/PTSD";
import AddictionRecoveryOverview from "@/components/AddictionRecoveryOverview";
import SexualDysfunctionOverview from "@/components/SexualDysfunctionOverview";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>

      {/* Doctor Portal Section */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/prescription" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Doctor Portal - Create Prescription
          </Link>
        </div>
      </div>
      
      <div id="insomnia">
        <InsomniaOverview />
      </div>
      
      <div id="migraine">
        <MigraineOverview />
      </div>
      
      <div id="epilepsy">
        <EpilepsyOverview />
      </div>
      
      <div id="depression">
        <Depression />
      </div>
      
      <div id="anxiety">
        <Anxiety />
      </div>
      
      <div id="bipolar">
        <BipolarDisorder />
      </div>
      
      <div id="schizophrenia">
        <Schizophrenia />
      </div>
      
      <div id="ocd">
        <OCD />
      </div>
      
      <div id="adhd">
        <ADHD />
      </div>
      
      <div id="ptsd">
        <PTSD />
      </div>
      
      <div id="addiction">
        <AddictionRecoveryOverview />
      </div>
      
      <div id="sexual-dysfunction">
        <SexualDysfunctionOverview />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}