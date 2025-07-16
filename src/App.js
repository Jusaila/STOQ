import React from "react";
import BubbleScrollSection from "./components/BubbleAnimation";
import Navigation from "./components/Navbar";
import SeeDoGrowSection from "./components/SeeDoGrowSection";
import BubbleAutoScroll from "./components/BubbleAnimation";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";

const App = () => {
  return (
    <div>
      <HeroSection />
      <SeeDoGrowSection />
      <TestimonialSection />
    </div>
  );
};

export default App;
