import React from "react";
import HeroSection from "../components/HeroSection";
import SeeDoGrowSection from "../components/SeeDoGrowSection";
import TestimonialSection from "../components/TestimonialSection";
import PricingPlans from "../components/PricingPlans";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SeeDoGrowSection />
      <TestimonialSection />
      <PricingPlans />
      <Footer />
    </>
  );
};

export default LandingPage;
