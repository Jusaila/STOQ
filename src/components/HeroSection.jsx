// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import gsap from "gsap";

const colorCycle = ["#A9CF45", "#6E8A28", "#303C14"];

const HeroSection = () => {
  const tryRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorCycle.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(tryRef.current, {
      scale: 2,
      duration: 4,
      ease: "power1.inOut",
    });
    tl.to(tryRef.current, {
      scale: 1,
      duration: 4,
      ease: "power1.inOut",
    });

    const el = tryRef.current;

    const onEnter = () => {
      tl.pause();
      gsap.to(el, { scale: 2, duration: 0.8, ease: "power1.out" });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1, // match with timeline base scale
        duration: 4,
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

          {/* Color-changing background inside Q */}
          <div
            className="absolute w-[64px] h-[64px] rounded-full transition-colors duration-700 z-0"
            style={{
              top: "50%",
              left: "58.4%",
              transform: "translate(-50%, -50%)",
              backgroundColor: colorCycle[colorIndex],
            }}
          ></div>

          {/* TRY Bubble Positioned Inside Q */}
          <div
            ref={tryRef}
            className="try-circle absolute w-[120px] h-[120px] rounded-full overflow-hidden flex items-center justify-center z-20"
            style={{
              top: "52.5%",
              left: "86.5%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          >
            <div className="flex flex-col items-center text-center px-2">
              <img
                src="/images/Button Shpehere Black.png"
                alt="TRY"
                className="w-14 h-14 object-contain mb-2"
              />
            </div>
          </div>

          <BubbleAnimation />
        </div>

        <div className="w-full max-w-screen-xl px-4 mx-auto">
          <p className="mt-6 text-3xl font-bold text-[#4B6100] text-right pr-[20px]">
            SEE. DO. GROW
          </p>
        </div>

        {/* App Buttons */}
        <div className="absolute bottom-10 left-[155px] flex flex-row gap-4 z-20">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
          >
            <img
              src="/icons/Apple_logo_black.svg"
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
              src="/icons/Google_Play_Arrow_logo.svg"
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
