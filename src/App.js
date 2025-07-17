import React from "react";
import BubbleScrollSection from "./components/BubbleAnimation";
import Navigation from "./components/Navbar";
import SeeDoGrowSection from "./components/SeeDoGrowSection";
import BubbleAutoScroll from "./components/BubbleAnimation";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingPlans from "./components/PricingPlans";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <HeroSection />
      <SeeDoGrowSection />
      <TestimonialSection />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default App;
