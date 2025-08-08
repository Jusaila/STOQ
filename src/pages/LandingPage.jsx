import React from "react";
import HeroSection from "../components/HeroSection";
import SeeDoGrowSection from "../components/SeeDoGrowSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import ProffessionalPricingPlans from "../components/ProffessionalPricingPlans";
import PersonalPricingPlans from "../components/PersonalPricingPlans";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SeeDoGrowSection />
      <TestimonialSection />
      <ProffessionalPricingPlans />
      <PersonalPricingPlans />
      <Footer />
    </>
  );
};

export default LandingPage;
