import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MissionVision from "./components/MissionVision";
import Work from "./components/Work";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import OurApp from "./components/OurApp";
import OurBlog from "./components/OurBlog";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BcAppSection from "./components/BcAppSectiion";
import FooterSection from "./components/FooterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVision />
      <Work />
      <KeyFeaturesSection />
      <OurApp />
      <OurBlog />
      <Testimonials />
      <FAQ />
      <BcAppSection />
      <FooterSection />
    </>
  );
}
