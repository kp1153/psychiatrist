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

/**
 * यह होम पेज (/) का मुख्य कंपोनेंट है।
 * यह पेज कंपोनेंट स्वतः ही एक सर्वर कंपोनेंट होता है।
 */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <InsomniaOverview />
      <MigraineOverview />
      <EpilepsyOverview />
      <Depression />
      <Anxiety />
      <BipolarDisorder />
      <Schizophrenia />
      <OCD />
      <ADHD />
      <PTSD />
    </main>
  );
}
