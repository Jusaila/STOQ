// src/components/HeroSection.jsx
import React from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";

const HeroSection = () => {
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
        <h1 className="flex items-center text-[10rem] font-extrabold tracking-wide font-rubik">
          S T

          <div className="relative w-[140px] h-[140px] mx-4 flex justify-center items-center">
        {/* The 'O' letter (should appear below bubbles visually) */}
        <span className="relative z-10 text-[10rem] text-[#A9CF45] font-extrabold inline-flex items-center justify-center">
        O
        <span
            className="absolute w-[60px] h-[60px] rounded-full bg-[#A9CF45] transition-colors duration-500"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        </span>


        {/* Bubble Animation */}
        <BubbleAnimation />
        </div>

          {/* Q with TRY */}
          <div className="relative w-[140px] h-[140px] ml-4 text-[10rem] font-extrabold text-[#A9CF45] flex items-center justify-center">
            Q
            <div className="absolute w-[60px] h-[60px] rounded-full bg-black text-white text-base font-bold flex items-center justify-center shadow-inner border-4 border-white">
              TRY
            </div>
          </div>
        </h1>

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
