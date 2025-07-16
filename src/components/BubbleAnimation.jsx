// src/components/BubbleAnimation.jsx
import React, { useEffect, useState } from "react";

const categories = [
  "FARMERS",
  "RESTAURANTS",
  "HOME & CARE",
  "HOBBYISTS",
  "FREELANCERS",
  "WELLNESS",
  "CONSTRUCTION",
  // "WORKSHOPS",
  // "KIDS",
];


const BubbleAnimation = () => {
  const [yPosition, setYPosition] = useState(0);
  const spacing = 170;
  const loopHeight = 1200;

  useEffect(() => {
    let frameId;
    const animate = () => {
      setYPosition((prev) => (prev - 0.5 + loopHeight) % loopHeight);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);


  const getY = (offset) => {
    const rawY = (yPosition + offset) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };
  

  return (
    // Wrapper to adjust horizontal position
<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
  <div
    className="relative"
    style={{
      position: "absolute",
      top: "50%",
      left: "0%", // adjust this to move bubbles left/right
      transform: "translate(-50%, -50%)",
    }}
  >
  {categories.map((text, i) => {
  const y = getY(i * spacing);
  return (
    <div
      key={i}
      className="absolute w-[140px] h-[140px] rounded-full text-[12px] text-black font-semibold flex items-center justify-center shadow-md"
      style={{
        transform: `translateY(${y}px)`,
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        opacity: Math.abs(y) > loopHeight / 2 - 140 ? 0 : 1,
      }}
    >
      {text}
    </div>
  );
})}

  </div>
</div>

  );
};

export default BubbleAnimation;
