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
  "WORKSHOPS",
  "KIDS",
];


const BubbleAnimation = () => {
  const [yPosition, setYPosition] = useState(0);
  const spacing = 270;
const loopHeight = spacing * categories.length;


  useEffect(() => {
    let frameId;
    const animate = () => {
      setYPosition((prev) => (prev - 2 + loopHeight) % loopHeight);
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
      left: "44.5%", // adjust this to move bubbles left/right
      transform: "translate(-50%, -50%)",
    }}
  >
  {categories.map((text, i) => {
  const y = getY(i * spacing);
  return (
    <div
    key={i}
    className="absolute w-[220px] h-[220px] rounded-full text-[23px] font-bold text-black overflow-hidden flex items-center justify-center"
    style={{
      transform: `translateY(${y}px)`,
  
      // Soft white frosted glass effect
      background: `
        linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)
      `,
      border: "1px solid rgba(255, 255, 255, 0.4)",
  
      // Light inner shadows and glow
      boxShadow: `
        inset 0 0 10px rgba(255, 255, 255, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.2),
        0 4px 8px rgba(0, 0, 0, 0.05)
      `,
  
      // Background blur for glass effect
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
  
      // Only show within bounds
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
