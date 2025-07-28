// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import gsap from "gsap";

// 0 = green, 1 = black
const colorCycle = ["#6E8A28", "#303C14"];

export default function HeroSection() {
  const tryRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(1); // start black

  useEffect(() => {
    let index = 1;
    const cycle = () => {
      index = (index + 1) % 2;
      setColorIndex(index);
      const delay = index === 0 ? 1900 : 1500; // green = 5s, black = 2s
      setTimeout(cycle, delay);
    };
    const initialDelay = index === 0 ? 1900 : 1500;
    const timeoutId = setTimeout(cycle, initialDelay);
    return () => clearTimeout(timeoutId);
  }, []);

  // GSAP pulsing + hover for the TRY bubble
  useEffect(() => {
    const el = tryRef.current;
    gsap.set(el, { scale: 1.5 });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(el, { scale: 2.9, duration: 4, ease: "power1.inOut" })
      .to(el, { scale: 1.5, duration: 4, ease: "power1.inOut" });

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
    <div className="relative h-screen overflow-hidden text-center text-rubik">
      {/* Background video */}
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
        <div className="relative flex items-center justify-center h-full">
          {/* STOQ Logo */}
          <img
            src="/images/STOQ Logo Final-png"
            alt="STOQ Logo Text"
            className="w-[1000px] h-[950px] object-contain"
            style={{ transform: "translateX(-70px)" }}
          />

          {/* SEE.DO.GROW */}
          <div
            className="absolute text-[#6E8A28] text-5xl font-bold text-right font-rubik"
            style={{ bottom: "200px", left: "910px" }}
          >
            SEE.DO.GROW
          </div>

          {/* Color‑changing circle inside the “Q” */}
          <div
            className="absolute w-[73px] h-[73px] rounded-full transition-colors duration-500 z-0"
            style={{
              top: "48%",
              left: "50.2%",
              transform: "translate(-50%, -50%)",
              backgroundColor: colorCycle[colorIndex],
            }}
          />

          {/* TRY bubble */}
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
            <img
              src="/images/Button Shpehere Black.png"
              alt="TRY"
              className="w-14 h-14 object-contain mb-2"
            />
          </div>

          {/* Bubble Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <BubbleAnimation />
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="absolute bottom-10 left-[155px] flex gap-4 z-20">
          {/* App Store */}
          <a href="#" className="relative w-[200px] h-[60px] inline-block">
            <img
              src="/images/blur-bg.png"
              alt=""
              className="absolute w-full h-full pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center px-3 gap-3 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 814 1000"
                className="w-10 h-10"
                fill="#44551B"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <p className="text-[12px] text-[#44551B]">Download on the</p>
                <p className="text-[21px] font-bold text-[#44551B]">App Store</p>
              </div>
            </div>
          </a>

          {/* Google Play */}
          <a href="#" className="relative w-[200px] h-[60px] inline-block">
            <img
              src="/images/blur-bg.png"
              alt=""
              className="absolute w-full h-full pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center px-3 gap-1 z-10">
              <img
                src="/icons/Google_Play_Arrow_logo.svg"
                alt="Google Play"
                className="w-8 h-8 mr-3"
              />
              <div className="text-left text-sm leading-tight">
                <p className="text-[#44551B] text-[12px]">GET IT ON</p>
                <p className="font-semibold text-[#44551B] text-[21px]">
                  Google Play
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
