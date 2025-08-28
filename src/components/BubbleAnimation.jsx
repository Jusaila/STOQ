import React, { useEffect, useRef, useState } from "react";

const categories = [
  "FARMERS",
  "HOUSEHOLDS",
  "FOOD & COOK",
  "HOBBYISTS",
  "FREELANCERS",
  "WELLNESS",
  "CONSTRUCTION",
  "WORKSHOPS",
  "KIDS",
];

const BASE_LOGO_WIDTH = 1000;
const BASE_BUBBLE_SIZE = 260;
const BASE_SPACING = 320;
const BASE_SPEED = 4;

const BubbleAnimation = ({
  onPositionChange,
  selectedCategory,
  setSelectedCategory,
  animationStopped,
  setAnimationStopped,
}) => {
  const rootRef = useRef(null);
  const [containerRect, setContainerRect] = useState({ width: BASE_LOGO_WIDTH, height: 0 });
  const [yPosition, setYPosition] = useState(0);

  const scale = containerRect.width ? containerRect.width / BASE_LOGO_WIDTH : 1;

  const bubbleSize = Math.max(24, Math.round(BASE_BUBBLE_SIZE * scale));
  const spacing = BASE_SPACING * scale;
  const loopHeight = spacing * categories.length;
  const speed = BASE_SPEED * scale;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const parent = el.parentElement || document.body;

    const updateRect = () => {
      const rect = parent.getBoundingClientRect();
      setContainerRect({ width: rect.width, height: rect.height });
    };

    updateRect();
    let ro;
    try {
      ro = new ResizeObserver(updateRect);
      ro.observe(parent);
    } catch (e) {
      window.addEventListener("resize", updateRect);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", updateRect);
    };
  }, []);

  useEffect(() => {
    if (animationStopped) return;
    let frameId;
    const animate = () => {
      setYPosition((prev) => (prev - speed + loopHeight) % loopHeight);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [loopHeight, speed, animationStopped]);

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
  }, [yPosition, onPositionChange, bubbleSize]);

  const getY = (offsetIndex) => {
    const rawY = (yPosition + offsetIndex * spacing) % loopHeight;
    return rawY > loopHeight / 2 ? rawY - loopHeight : rawY;
  };

  return (
    <div ref={rootRef} className="absolute inset-0 pointer-events-auto z-10 font-rubik">
      <div
        id="bubble-container"
        className="relative"
        style={{
          position: "absolute",
          top: "50%",
          left: "37.3%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {categories.map((text, i) => {
          const y = getY(i);
          const isSelected = selectedCategory === text;

          // <-- KEY FIX: hide non-selected bubbles when animation is stopped
          if (animationStopped && !isSelected) return null;

          const rightOffsetPx = Math.round(128 * scale); // adjust horizontally

          const upOffsetPx = -11; // 👈 negative value moves up, positive moves down
          
          const fixedStyle =
            isSelected && animationStopped
              ? {
                  position: "fixed",
                  top: "40%", // base position
                  left: "60%",
                  width: "26%",
                  aspectRatio: "1 / 1",
                  transform: `translate(calc(-50% + ${rightOffsetPx}px), calc(-50% + ${upOffsetPx}px))`,
                  zIndex: 30,
                }
              : {
                  transform: `translateY(${y}px)`,
                };
          

          const hideThreshold = loopHeight / 2 - 140 * scale;

          return (
            <div
    key={i}
    className="bubble-item absolute rounded-full text-[22px] font-[700] text-[#1C230C] overflow-hidden flex items-center justify-center"
    style={{
      ...fixedStyle,
      width: `${bubbleSize}px`,
      height: `${bubbleSize}px`,
      lineHeight: `${bubbleSize}px`,
      fontSize: Math.max(12, Math.round(bubbleSize * 0.12)),
      background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)`,
      border: "1px solid rgba(255, 255, 255, 0.4)",
      boxShadow: `
        inset 0 0 10px rgba(255, 255, 255, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.2),
        0 4px 8px rgba(0, 0, 0, 0.05)
      `,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      opacity: Math.abs(y) > hideThreshold && !isSelected ? 0 : 1,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onClick={() => {
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
