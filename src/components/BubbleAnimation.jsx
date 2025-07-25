// src/components/BubbleAnimation.jsx
import React, { useEffect, useState, useRef } from "react";

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

const BubbleAnimation = ({ onPositionChange }) => {
  const [yPosition, setYPosition] = useState(0);
  const containerRef = useRef(null);
  const spacing = 320;
  const loopHeight = spacing * categories.length;
  const bubbleRadius = 125; // Half of 250px bubble size

  useEffect(() => {
    const animationSpeed = 0.5; // Adjust speed as needed
    
    const animate = () => {
      setYPosition(prev => prev - animationSpeed); // Changed + to - for down to up movement
    };

    const animationId = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationId);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !onPositionChange) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const bubbles = categories.map((_, i) => {
      const y = getY(i * spacing);
      const opacity = Math.abs(y) > loopHeight / 2 - 140 ? 0 : 1;
      
      // Only include visible bubbles
      if (opacity === 0) return null;
      
      return {
        x: containerCenterX,
        y: containerCenterY + y,
        radius: bubbleRadius
      };
    }).filter(Boolean); // Remove null entries

    onPositionChange(bubbles);
  }, [yPosition, onPositionChange]);

  const getY = (offset) => {
    const rawY = (yPosition + offset) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-rubik">
      <div
        ref={containerRef}
        className="relative"
        style={{
          position: "absolute",
          top: "50%",
          left: "37%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {[...categories, ...categories].map((text, i) => {
  const y = getY(i * spacing);
  const opacity = Math.abs(y) > loopHeight / 2 ? 0 : 1;

  return (
    <div
      key={i}
      className="absolute w-[260px] h-[250px] rounded-full text-[23px] font-bold text-black overflow-hidden flex items-center justify-center"
      style={{
        transform: `translateY(${y}px)`,
        background: `
          linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)
        `,
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: `
          inset 0 0 10px rgba(255, 255, 255, 0.3),
          inset 0 2px 4px rgba(255, 255, 255, 0.2),
          0 4px 8px rgba(0, 0, 0, 0.05)
        `,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        opacity: opacity,
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