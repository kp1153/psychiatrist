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

/**
 * यह होम पेज (/) का मुख्य कंपोनेंट है।
 * यह पेज कंपोनेंट स्वतः ही एक सर्वर कंपोनेंट होता है।
 */
export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
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
    </main>
  );
}