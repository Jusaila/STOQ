// src/components/BubbleAnimation.jsx
import React, { useEffect, useState } from "react";

const categories = [
  "FARMERS",
  "FOOD & COOK",
  "HOUSEHOLDS",
  "HOBBYISTS",
  "FREELANCERS",
  "WELLNESS",
  "CONSTRUCTION",
  "WORKSHOPS",
  "KIDS",
];

const BubbleAnimation = ({ setColorTemporarily }) => {
  const [yPosition, setYPosition] = useState(0);
  const spacing = 320;
  const loopHeight = spacing * categories.length;
  const gapDetectionRange = 120;

  useEffect(() => {
    let frameId;
    const animate = () => {
      setYPosition((prev) => {
        const next = (prev - 2 + loopHeight) % loopHeight;

        let isAnyBubbleNearCenter = false;

        categories.forEach((_, i) => {
          const bubbleOffset = (next + i * spacing) % loopHeight;
          const adjustedY = bubbleOffset > loopHeight / 2
            ? bubbleOffset - loopHeight
            : bubbleOffset;

          if (Math.abs(adjustedY) < gapDetectionRange) {
            isAnyBubbleNearCenter = true;
          }
        });

        if (setColorTemporarily) {
          if (isAnyBubbleNearCenter) {
            setColorTemporarily(0, 1500); // green for 1.5s
          } else {
            setColorTemporarily(1, 3000); // black for 3s
          }
        }

        return next;
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [loopHeight, spacing, setColorTemporarily]);

  const getY = (offset) => {
    const rawY = (yPosition + offset) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 font-bitcount">
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
