import React from "react";
import HeroSection from "../components/HeroSection";
import SeeDoGrowSection from "../components/SeeDoGrowSection";
import Footer from "../components/Footer";
import ProffessionalPricingPlans from "../components/ProffessionalPricingPlans";
import PersonalPricingPlans from "../components/PersonalPricingPlans";
import TestimonialSection from "../components/TestimonialSection";

const testimonialsPage1 = [
  {
    image: "/images/household/Testimonials/Households Emily.jpg",
    name: "Emily Brooks",
    role: "Stay-at-home mom in countryside",
    country: "USA / UK / Australia",
    rating: 5,
    quote: "I used to joke that our fridge was a black hole — things went in and were never seen again. STOQ changed that. Now it kindly ‘beeps’ at me before the milk goes bad or the yogurts expire. Fewer surprises, less waste, and honestly… more space in my fridge. I really appreciate STOQ for making my life easier.",
  },
  {
    image: "/images/construction/Testimonials/Construction Adrian.jpg",
    name: "Adrian Williams",
    role: "Site Supervisor at a family-run construction company.",
    country: "USA / UK / Australia",
    rating: 5,
    quote: "Guys, STOQ seriously saves time and spares you the stress.  Just try it — you’ll get what I mean.",
  },
  {
    image: "/images/household/Testimonials/Aisha Khan.png",
    name: "Aisha Khan",
    role: "Flat-sharing with sister",
    country: "USA / UK / Australia",
    rating: 4,
    quote: "My sister and I share a flat, and we’d often get lost with the groceries — checking cupboards, making lists, just trying not to forget anything or buy doubles. With STOQ, you see everything straight away — from food to clothes. Really handy!",
  },
  {
    image: "/images/construction/Testimonials/Construction Sofia.jpg",
    name: "Sofia Becker",
    role: "Interior Designer in a small construction company",
    country: "USA / UK / Australia",
    rating: 5,
    quote: "Love how STOQ handles everything — units, currencies, all so simple. Saves me time at work, and I even use it for my home projects. Big thanks to the team — you nailed it",
  },
 
  {
    image: "/images/household/Testimonials/Daniel Oliveira.png",
    name: "Daniel Oliveira",
    role: "Enjoys living solo",
    country: "",
    rating: 4,
    quote: "A really handy tool. I can add products any way I want, whether by packages or by kilograms. STOQ helps me keep the kitchen organized and makes sure I never forget anything.",
  },
];
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SeeDoGrowSection />
      <TestimonialSection testimonials={testimonialsPage1}/>
      <ProffessionalPricingPlans />
      <PersonalPricingPlans />
      <Footer />
    </>
  );
};

export default LandingPage;
