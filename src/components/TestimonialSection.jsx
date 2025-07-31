import React, { useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    image: "/images/testimonial1.jpg",
    name: "Alisa Hester",
    role: "PM, Hourglass",
    agency: "Web Design Agency",
    rating: 5,
  },
  {
    image: "/images/testimonial3.jpg",
    quote:
      "We collectively adore STOQ. It has streamlined our inventory management process. Makes efforts of 5 team members look seamless and consistently impressive.",
    name: "Rich Wilson",
    role: "COO, Command+R",
    agency: "Web Development Agency",
    rating: 5,
  },
  {
    image: "/images/testimonial2.jpg",
    name: "Annie Stanley",
    role: "Designer, Catalog",
    agency: "UX Agency",
    rating: 4,
  },
  {
    image: "/images/testimonial3.jpg",
    name: "Johnny B",
    role: "PM, Sisyphus",
    agency: "Machine Learning Agency",
    rating: 5,
  },
  {
    image: "/images/testimonial1.jpg",
    name: "Alisa Hester",
    role: "PM, Hourglass",
    agency: "Web Design Agency",
    rating: 5,
  },
];

const TestimonialSection = () => {
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
      <h2 className="text-3xl font-bold text-[#8CB031] mb-8">
        Don’t just take our word for it
      </h2>

      {/* Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory pb-10"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[360px] h-[480px] snap-start bg-transparent rounded-xl overflow-hidden shadow-md relative"
            >
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg">
                {t.quote && (
                  <p className="text-sm text-white font-semibold mb-2">"{t.quote}"</p>
                )}
                  
                    <div className="flex text-white mb-1">
                      {Array(t.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                    <p className="font-bold text-black">{t.name}</p>
                    <p className="text-white text-sm">{t.role}</p>
                    <p className="text-white text-xs">{t.agency}</p>       
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls - Below the first card */}
        <div className="flex gap-6 mt-6 ml-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <FaArrowLeft className="text-gray-500"/>
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
