import React from "react";
import Navbar from "../components/Navbar";
import ProffessionalPricingPlans from "../components/ProffessionalPricingPlans";
import PersonalPricingPlans from "../components/PersonalPricingPlans";
import Footer from "../components/Footer";


export default function PricingPage() {
    return (
        <div className="bg-white">
        <section className="relative w-full h-[376px] overflow-hidden font-rubik">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/backgound new.mp4" type="video/mp4" />
          </video>
      
          {/* Overlay layer */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[10px]" />
        </div>
      
        {/* Navbar - Fixed */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>
      
        {/* Content */}
        <div className="relative max-w-[1440px] h-full mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center h-full text-center 
                        transform translate-y-6 md:translate-y-12">
            {/* Text block */}
            <div className="w-full md:w-3/4 lg:w-1/2 space-y-2 gap-3">
            <h2 className="text-2xl md:text-[36px] font-semibold text-[#303C14]">
            Choose your plan
            </h2>
            <p className="mt-2 text-sm md:text-[16px] font-medium text-[#00000099]">
            Flexible pricing for every need – pick what suits you best.
            </p>
            
            </div>
        </div>
        </div>

      </section>

      <ProffessionalPricingPlans />
      <PersonalPricingPlans />
      <Footer />
        </div>
      
    );
  }
  