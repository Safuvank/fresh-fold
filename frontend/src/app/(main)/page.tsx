import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import ServicesSlider from "../components/ServicesSlider";
import Testimonials from "../components/Testimonials";
import Page from "./pricing/page";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fdfdff] text-slate-900 selection:bg-indigo-100">
      <HeroSection />
      <HowItWorks />
      <Pricing />
      <ServicesSlider />
      <Testimonials />
      <Page />
    </div>
  );
}
