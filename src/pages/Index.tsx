import React, { Suspense } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FormSection from "@/components/FormSection";

// Lazy loading below-the-fold components to reduce initial bundle size
const ExclusiveTeamSection = React.lazy(() => import("@/components/ExclusiveTeamSection"));
const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const InstitutionalSection = React.lazy(() => import("@/components/InstitutionalSection"));
const WhatWeDoSection = React.lazy(() => import("@/components/WhatWeDoSection"));
const PlansSection = React.lazy(() => import("@/components/PlansSection"));
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
      
      <Suspense fallback={<div className="min-h-[100px] flex items-center justify-center text-primary/50">Carregando conteúdo...</div>}>
        <TestimonialsSection />
        <InstitutionalSection />
        <WhatWeDoSection />
        <PlansSection />
        <ExclusiveTeamSection />
        <PhotographySection />
        <ClientsSection />
        <FaqSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
