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

const BubbleAnimation = ({
  onPositionChange,
  selectedCategory,
  setSelectedCategory,
  animationStopped,
  setAnimationStopped,
}) => {
  const [yPosition, setYPosition] = useState(0);
  const spacing = 320;
  const loopHeight = spacing * categories.length;

  useEffect(() => {
    if (animationStopped) return; // Don't animate when stopped
    let frameId;
    const animate = () => {
      setYPosition((prev) => (prev - 4 + loopHeight) % loopHeight);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [loopHeight, spacing, animationStopped]);

  useEffect(() => {
    if (!onPositionChange) return;
    const container = document.querySelector("#bubble-container");
    if (!container) return;

    const bubbles = Array.from(container.querySelectorAll(".bubble-item")).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        radius: rect.width / 2,
      };
    });
    onPositionChange(bubbles);
  }, [yPosition, onPositionChange]);

  const getY = (offset) => {
    const rawY = (yPosition + offset) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-auto z-10 font-rubik">
      <div
        id="bubble-container"
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
          const isSelected = selectedCategory === text;

          // Hide all except selected when animation is stopped
          if (animationStopped && !isSelected) return null;

         const fixedStyle = isSelected && animationStopped
          ? {
              position: "fixed",
              top: "-2vh",     // <- Adjust this to align with the "O"
              left: "7.5vw",    // <- Adjust this to center horizontally
              transform: "translate(-50%, -50%)",
              zIndex: 30,
            }
          : {
              transform: `translateY(${y}px)`,
            };


          return (
            <div
              key={i}
              className="bubble-item absolute w-[260px] h-[250px] rounded-full text-[23px] font-bold text-black overflow-hidden flex items-center justify-center"
              style={{
                ...fixedStyle,
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)`,
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: `
                  inset 0 0 10px rgba(255, 255, 255, 0.3),
                  inset 0 2px 4px rgba(255, 255, 255, 0.2),
                  0 4px 8px rgba(0, 0, 0, 0.05)
                `,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                opacity: Math.abs(y) > loopHeight / 2 - 140 && !isSelected ? 0 : 1,
                cursor: "pointer",
              }}
              onClick={() => {
                // Toggle selection
                if (isSelected && animationStopped) {
                  setSelectedCategory(null);
                  setAnimationStopped(false);
                } else if (!animationStopped) {
                  setSelectedCategory(text);
                  setAnimationStopped(true);
                }
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
