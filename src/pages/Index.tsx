import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import QuickContextSection from "@/components/landing/QuickContextSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhoIsForSection from "@/components/landing/WhoIsForSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhatWeAskSection from "@/components/landing/WhatWeAskSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <HeroSection />
        <QuickContextSection />
        <ProblemSection />
        <SolutionSection />
        <WhoIsForSection />
        <HowItWorksSection />
        <WhatWeAskSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
