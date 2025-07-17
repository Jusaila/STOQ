// src/components/HeroSection.jsx

import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const tryRef = useRef(null);

  useEffect(() => {
    // Start idle pulsing loop
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(tryRef.current, {
      scale: 2,
      duration: 2,
      ease: "power1.inOut",
    });

    // Hover effects
    const el = tryRef.current;
    const onEnter = () => {
      tl.pause();
      gsap.to(el, { scale: 2.2, duration: 0.8, ease: "power1.out" });
    };
    const onLeave = () => {
      gsap.to(el, {
        scale: 1.8,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => tl.resume(),
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <div className="relative h-screen overflow-hidden text-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0 blur-sm"
      >
        <source src="/videos/WhatsApp Video.mp4" type="video/mp4" />
      </video>

      {/* Navigation Bar */}
     
    
          <Navbar />

      

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] pt-20">
        {/* STOQ Image */}
        <div className="relative">
          <img
            src="/images/STOQ Logo Final.png"
            alt="STOQ Logo Text"
            className="w-[800px] h-[350px] object-contain"
          />

          {/* TRY Bubble Positioned Inside Q */}
      <div
        ref={tryRef}
        className="try-circle absolute w-[60px] h-[60px] rounded-full bg-black text-white text-base font-bold flex items-center justify-center shadow-inner"
        style={{
          top: "50%",   // Tune this based on your image's Q hole
          left: "86.5%",  // Tune this based on where Q appears in image
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
      >
        TRY
      </div>

            <BubbleAnimation />
          </div>

        <div className="w-full max-w-screen-xl px-4 mx-auto">
        {/* Subtitle aligned to right where Q starts */}
        <p className="mt-6 text-3xl font-bold text-[#4B6100] text-right pr-[20px]">
            SEE. DO. GROW
        </p>
        </div>

        <div className="absolute bottom-10 left-[155px] flex flex-row gap-4 z-20">
        {/* App Store */}
        <a
            href="#"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
        >
            <img
            src="/icons/Apple_logo_black.svg" // Replace with your actual Apple icon path
            alt="Apple"
            className="w-6 h-6 mr-3"
            />
            <div className="text-left text-sm leading-tight">
            <p className="text-gray-500 text-xs">Download on the</p>
            <p className="font-semibold text-black">App Store</p>
            </div>
        </a>

        {/* Google Play */}
        <a
            href="#"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
        >
            <img
            src="/icons/Google_Play_Arrow_logo.svg" // Replace with your actual Google Play icon path
            alt="Google Play"
            className="w-6 h-6 mr-3"
            />
            <div className="text-left text-sm leading-tight">
            <p className="text-gray-500 text-xs">GET IT ON</p>
            <p className="font-semibold text-black">Google Play</p>
            </div>
        </a>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
