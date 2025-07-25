// ✅ src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import BubbleAnimation from "./BubbleAnimation";
import Navbar from "./Navbar";
import gsap from "gsap";

const colorCycle = ["#303C14", "#6E8A28"];

const HeroSection = () => {
  const tryRef = useRef(null);
  const circleRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const hasOverlapRef = useRef(false);
  const blackTimeoutRef = useRef(null);

  useEffect(() => {
    const el = tryRef.current;
    gsap.set(el, { scale: 1.5 });
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

  useEffect(() => {
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const circle = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      radius: rect.width / 2,
    };

    const overlapping = bubbles.some((b) => {
      const dx = b.x - circle.x;
      const dy = b.y - circle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < b.radius + circle.radius;
    });

    if (overlapping) {
      hasOverlapRef.current = true;
      if (blackTimeoutRef.current) {
        clearTimeout(blackTimeoutRef.current);
        blackTimeoutRef.current = null;
      }
      setColorIndex(1);
    } else if (hasOverlapRef.current && !blackTimeoutRef.current) {
      blackTimeoutRef.current = setTimeout(() => {
        setColorIndex(0);
        hasOverlapRef.current = false;
        blackTimeoutRef.current = null;
      }, 3000); // Delay returning to black by 3 seconds after last overlap
    }
  }, [bubbles]);

  return (
    <div className="relative h-screen overflow-hidden text-center text-rubik">
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

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] pt-20">
        <div className="relative flex items-center justify-center h-full">
          <img
            src="/images/STOQ Logo Final-png"
            alt="STOQ Logo Text"
            className="w-[1000px] h-[950px] object-contain"
            style={{ transform: "translateX(-70px)" }}
          />

          <div
            className="absolute text-[#6E8A28] text-5xl font-bold text-right font-rubik"
            style={{ bottom: "200px", left: "910px" }}
          >
            SEE.DO.GROW
          </div>

          <div
            ref={circleRef}
            className="absolute w-[73px] h-[73px] rounded-full transition-colors duration-700 z-0"
            style={{
              top: "48%",
              left: "50.2%",
              transform: "translate(-50%, -50%)",
              backgroundColor: colorCycle[colorIndex],
            }}
          ></div>

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

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <BubbleAnimation onPositionChange={setBubbles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
