import React, { useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSection = ({ testimonials = [], title = "Don’t just take our word for it" }) => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    sliderRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - offsetWidth : scrollLeft + offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:pl-20 bg-white font-rubik">
      <h2 className="text-4xl font-bold text-[#6E8A28] mb-8">{title}</h2>

      {/* Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory pb-10"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group min-w-[300px] md:min-w-[360px] h-[480px] snap-start rounded-xl overflow-hidden shadow-md relative"
            >
              {/* Background Image */}
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Shared background box */}
              <div className="absolute left-4 right-4 bottom-4 bg-white/20 backdrop-blur-md p-4 rounded-lg transition-all duration-500">
                {/* Quote (only visible on hover) */}
                {t.quote && (
                  <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[400px] transition-all duration-500">
                    <p className="text-white font-semibold text-sm leading-relaxed mb-3">
                      "{t.quote}"
                    </p>
                  </div>
                )}

                {/* Always visible info */}
                <div className="flex text-yellow-400 mb-1">
                  {Array(t.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white text-sm">{t.role}</p>
                <p className="text-white text-xs">{t.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="flex gap-6 mt-6 ml-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <FaArrowLeft className="text-gray-500" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <FaArrowRight className="text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
