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

const BubbleAnimation = ({ onYChange }) => {
  const [yPosition, setYPosition] = useState(0);
  const spacing = 320;
  const loopHeight = spacing * categories.length;

  useEffect(() => {
    let frameId;
    const animate = () => {
      setYPosition((prev) => {
        const next = (prev - 2 + loopHeight) % loopHeight;

        // Detect center bubble Y offset
        const centerIndex = Math.floor(categories.length / 2);
        const centerOffset = (next + centerIndex * spacing) % loopHeight;
        const adjusted = centerOffset > loopHeight / 2
          ? centerOffset - loopHeight
          : centerOffset;

        // Call HeroSection with this Y value
        if (onYChange) {
          onYChange(adjusted);
        }

        return next;
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [loopHeight, spacing, onYChange]);

  const getY = (offset) => {
    const rawY = (yPosition + offset) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-rubik">
      <div
        className="relative"
        style={{
          position: "absolute",
          top: "50%",
          left: "37%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {categories.map((text, i) => {
          const y = getY(i * spacing);
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
