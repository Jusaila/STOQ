// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import gsap from "gsap";

// 0 = black, 1 = green
const colorCycle = ["#303C14", "#6E8A28"];

const HeroSection = () => {
  const tryRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  const [bubbleCenterY, setBubbleCenterY] = useState(0);

  // Update color instantly when bubble is near center
  useEffect(() => {
    const isGreen = Math.abs(bubbleCenterY) < 60; // you can fine-tune this threshold
    setColorIndex(isGreen ? 1 : 0);
  }, [bubbleCenterY]);

  // GSAP animation for TRY bubble
  // useEffect(() => {
  //   const el = tryRef.current;
  
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true });
  //   tl.to(el, {
  //     scale: 4,
  //     duration: 4,
  //     ease: "power1.inOut",
  //   });
  //   tl.to(el, {
  //     scale: 2,
  //     duration: 4,
  //     ease: "power1.inOut",
  //   });
  
   
  // }, []);
 
  useEffect(() => {
    const el = tryRef.current;
  
    // ✅ Reset any existing transforms
    gsap.set(el, { scale: 1.5 }); // set initial scale before animation
  
    // ✅ Create pulsing timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(el, {
      scale: 2.9,
      duration: 4,
      ease: "power1.inOut",
    }).to(el, {
      scale: 1.5,
      duration: 4,
      ease: "power1.inOut",
    });
  
    // ✅ Hover effects
    const onEnter = () => {
      tl.pause();
      gsap.to(el, { scale: 2.9, duration: 0.8, ease: "power1.out" });
    };
  
    const onLeave = () => {
      gsap.to(el, {
        scale: 2,
        duration: 3,
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
        <div className="relative flex items-center justify-center h-full">
          <img
            src="/images/STOQ Logo Final-png"
            alt="STOQ Logo Text"
            className="w-[1000px] h-[950px] object-contain"
            style={{ transform: "translateX(-70px)" }}
          />

           {/* SEE. DO. GROW text at bottom-right of logo */}
        <div
          className="absolute text-[#6E8A28] text-5xl font-bold text-right font-rubik"
          style={{
            bottom: "200px",   // Adjust as needed
            left: "910px",    // Align near the logo's right side
          }}
        >
          SEE.DO.GROW
        </div>

          {/* Color-changing background inside Q */}
          <div
            className="absolute w-[73px] h-[73px] rounded-full transition-colors duration-700 z-0"
            style={{
              top: "48%",
              left: "50.2%",
              transform: "translate(-50%, -50%)",
              backgroundColor: colorCycle[colorIndex],
            }}
          ></div>

          {/* TRY Bubble Positioned Inside Q */}
          <div
            ref={tryRef}
            className="try-circle absolute w-[140px] h-[140px] rounded-full overflow-hidden flex items-center justify-center z-20"
            style={{
              top: "49.2%",
              left: "77%",
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

          {/* Centered Bubble Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <BubbleAnimation onYChange={(y) => setBubbleCenterY(y)} />
          </div>
        </div>

        

        {/* App Buttons */}
        <div className="absolute bottom-10 left-[155px] flex flex-row gap-4 z-20">
          
        <a href="#" className="relative w-[200px] h-[60px] inline-block">
        {/* Background image */}
        <img
          src="/images/blur-bg.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        {/* Foreground content */}
        <div className="absolute inset-0 flex items-center px-3 gap-3 z-10">
          {/* Icon on left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 814 1000"
            className="w-10 h-10"
            fill="#44551B"
          >
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
          </svg>

          {/* Text on right */}
          <div className="flex flex-col leading-tight">
            <p className="text-[12px] text-[#44551B]">Download on the</p>
            <p className="text-[21px] font-bold text-[#44551B]">App Store</p>
          </div>
        </div>
      </a>

          {/* Google Play */}
          <a
            href="#"
            className="relative w-[200px] h-[60px] inline-block"
          >
            <img
          src="/images/blur-bg.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
           <div className="absolute inset-0 flex items-center px-3 gap-1 z-10">
            <img
              src="/icons/Google_Play_Arrow_logo.svg"
              alt="Google Play"
              className="w-8 h-8 mr-3"
            />
            <div className="text-left text-sm leading-tight">
              <p className="text-[#44551B] text-[12px]">GET IT ON</p>
              <p className="font-semibold text-[#44551B] text-[21px]">Google Play</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
