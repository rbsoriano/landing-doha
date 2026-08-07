import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LazySection from "@/components/LazySection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FormSection from "@/components/FormSection";

const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const InstitutionalSection = React.lazy(() => import("@/components/InstitutionalSection"));
const WhatWeDoSection = React.lazy(() => import("@/components/WhatWeDoSection"));
const PlansSection = React.lazy(() => import("@/components/PlansSection"));
const ExclusiveTeamSection = React.lazy(() => import("@/components/ExclusiveTeamSection"));
const PhotographySection = React.lazy(() => import("@/components/PhotographySection"));
const ClientsSection = React.lazy(() => import("@/components/ClientsSection"));
const FaqSection = React.lazy(() => import("@/components/FaqSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  useScrollAnimation();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FormSection />

      <LazySection minHeight="480px">
        <TestimonialsSection />
      </LazySection>
      <LazySection minHeight="520px">
        <InstitutionalSection />
      </LazySection>
      <LazySection minHeight="480px">
        <WhatWeDoSection />
      </LazySection>
      <LazySection minHeight="400px" id="planos">
        <PlansSection />
      </LazySection>
      <LazySection minHeight="280px">
        <ExclusiveTeamSection />
      </LazySection>
      <LazySection minHeight="600px">
        <PhotographySection />
      </LazySection>
      <LazySection minHeight="240px">
        <ClientsSection />
      </LazySection>
      <LazySection minHeight="400px" id="faq">
        <FaqSection />
      </LazySection>
      <LazySection minHeight="200px">
        <Footer />
      </LazySection>
    </main>
  );
};

export default Index;
