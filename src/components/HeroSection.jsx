// ✅ src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import gsap from "gsap";

const colorCycle = ["#6E8A28", "#303C14"]; // 0 = green, 1 = black

export default function HeroSection() {
  const tryRef = useRef(null);
  const circleRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(1); // start black
  const [bubbles, setBubbles] = useState([]);
  const colorTimeoutRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [animationStopped, setAnimationStopped] = useState(false);


  // Detect overlap between bubbles and the circle
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


  useEffect(() => {
    const el = tryRef.current;

    // Reset initial size (scales from parent %)
    gsap.set(el, { scale: 1 });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(el, { scale: 1.65, duration: 4, ease: "power1.inOut" })
      .to(el, { scale: 1, duration: 4, ease: "power1.inOut" });

    const onEnter = () => {
      tl.pause();
      gsap.to(el, { scale: 1.6, duration: 0.8, ease: "power1.out" });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
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

  const handleBubblePositions = (positions) => setBubbles(positions);

  const handleTryClick = () => {
    if (selectedCategory) {
      window.location.href = `/${selectedCategory.toLowerCase().replace(/\s+/g, "-")}`;

    } else {
      alert("Please select a bubble before proceeding.");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden text-center font-rubik">
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

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] pt-20">
      {/* STOQ LOGO + Overlays */}
      <div className="relative w-[90vw] max-w-[1000px]">
        {/* Logo */}
        <img
          src="/images/STOQ Logo Final.png"
          alt="STOQ Logo"
          className="w-full h-auto object-contain translate-x-[-7%]"
        />

        {/* Animated Circle */}
        <div
          ref={circleRef}
          className="absolute rounded-full transition-colors duration-500"
          style={{
            width: "8%", // relative to logo width
            aspectRatio: "1/1",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: colorCycle[colorIndex],
            zIndex: 0,
          }}
        />

                  {/* TRY Bubble on Q */}
                  <div
                    ref={tryRef}
                    className="absolute aspect-square rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
                    style={{
                      width: "25%",
                      top: "45%",
                      left: "76.9%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => alert("Navigating to TRY logic...")}
                  >
                    <img
                      src="/images/Button Shpehere Black.png"
                      alt="TRY"
                      className="w-[40%] h-auto object-contain"
                    />
                  </div>

              {/* Bubble animation overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <BubbleAnimation
                  onPositionChange={handleBubblePositions}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  animationStopped={animationStopped}
                  setAnimationStopped={setAnimationStopped}
                />
              </div>
            </div>

            {/* Slogan - outside, responsive */}
            <div className="w-full flex justify-end mt-8 lg:mt-1 pr-4 sm:pr-8">
              <div
                className="text-[#6E8A28] font-bold font-rubik 
                  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                  md:mr-[-10%] lg:mr-[-20%] xl:mr-[-37%]"
              >
                SEE. DO. GROW.
              </div>
            </div>


<div className="absolute bottom-6 left-[6%] sm:left-[5%] md:left-[10%] lg:left-[8%] flex flex-col sm:flex-row gap-3 sm:gap-4 z-20">
        {/* App Store */}
              <a
                href="#"
                className="relative w-[150px] h-[45px] sm:w-[180px] sm:h-[55px] lg:w-[200px] lg:h-[60px] inline-block"
              >
                <img
                  src="/images/app store badge.svg"
                  alt="App Store"
                  className="absolute w-full h-full pointer-events-none"
                />
                {/* <div className="absolute inset-0 flex items-center px-2 sm:px-3 gap-2 sm:gap-3 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 814 1000"
                    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                    fill="#44551B"
                  >
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <p className="text-[10px] sm:text-[12px] text-[#44551B] font-rubik">
                      Download on the
                    </p>
                    <p className="text-[16px] sm:text-[20px] lg:text-[21px] font-bold text-[#44551B] font-rubik">
                      App Store
                    </p>
                  </div>
                </div> */}
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="relative w-[150px] h-[45px] sm:w-[180px] sm:h-[55px] lg:w-[200px] lg:h-[60px] inline-block"
              >
                <img
                  src="/images/play store badge.svg"
                  alt="Google Play"
                  className="absolute w-full h-full"
                />
                {/* <div className="absolute inset-0 flex items-center px-2 sm:px-3 gap-2 sm:gap-3 z-10">
                  <img
                    src="/icons/Google_Play_Arrow_logo.svg"
                    alt="Google Play"
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  />
                  <div className="text-left leading-tight">
                    <p className="text-[#44551B] text-[10px] sm:text-[12px]">GET IT ON</p>
                    <p className="font-semibold text-[#44551B] text-[16px] sm:text-[20px] lg:text-[19px]">
                      Google Play
                    </p>
                  </div>
                </div> */}
              </a>
            </div>
      </div>
    </div>
  );
}
