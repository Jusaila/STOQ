import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const SeeDoGrowSection = () => {

  const [showVideo1, setShowVideo1] = useState(false); // for first section
  const [showVideo2, setShowVideo2] = useState(false); // for second section
  const [showVideo3, setShowVideo3] = useState(false); // for third section
  const [showVideo4, setShowVideo4] = useState(false); // for fourth section
  const [showVideo5, setShowVideo5] = useState(false); // Fifth section
  const [showVideo6, setShowVideo6] = useState(false); // Sixth section

  const [playInCircle1, setPlayInCircle1] = useState(false);
  const [playInCircle2, setPlayInCircle2] = useState(false);
  const [playInCircle3, setPlayInCircle3] = useState(false);
  const [playInCircle4, setPlayInCircle4] = useState(false);
  const [playInCircle5, setPlayInCircle5] = useState(false);
  const [playInCircle6, setPlayInCircle6] = useState(false);

  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const circleRef3 = useRef(null);
  const circleRef4 = useRef(null);
  const circleRef5 = useRef(null);
  const circleRef6 = useRef(null);

  // Section 1 scroll detection
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => setPlayInCircle1(entry.isIntersecting),
      { threshold: 1 }
    );
    if (circleRef1.current) observer1.observe(circleRef1.current);
    return () => {
      if (circleRef1.current) observer1.unobserve(circleRef1.current);
    };
  }, []);

  // Section 2 scroll detection
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => setPlayInCircle2(entry.isIntersecting),
      { threshold: 1 }
    );
    if (circleRef2.current) observer2.observe(circleRef2.current);
    return () => {
      if (circleRef2.current) observer2.unobserve(circleRef2.current);
    };
  }, []);

  // useEffect for 3rd section
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setPlayInCircle3(entry.isIntersecting),
    { threshold: 1 }
  );
  if (circleRef3.current) observer.observe(circleRef3.current);
  return () => {
    if (circleRef3.current) observer.unobserve(circleRef3.current);
  };
}, []);

// useEffect for 4th section
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setPlayInCircle4(entry.isIntersecting),
    { threshold: 1 }
  );
  if (circleRef4.current) observer.observe(circleRef4.current);
  return () => {
    if (circleRef4.current) observer.unobserve(circleRef4.current);
  };
}, []);
// Auto play when scrolled into view
useEffect(() => {
  const observer5 = new IntersectionObserver(
    ([entry]) => setPlayInCircle5(entry.isIntersecting),
    { threshold: 1 }
  );
  if (circleRef5.current) observer5.observe(circleRef5.current);
  return () => {
    if (circleRef5.current) observer5.unobserve(circleRef5.current);
  };
}, []);

useEffect(() => {
  const observer6 = new IntersectionObserver(
    ([entry]) => setPlayInCircle6(entry.isIntersecting),
    { threshold: 1 }
  );
  if (circleRef6.current) observer6.observe(circleRef6.current);
  return () => {
    if (circleRef6.current) observer6.unobserve(circleRef6.current);
  };
}, []);

  return (
    <div className="bg-white font-rubik">
      {/* First Section */}
      <section
        className={`flex ${
          showVideo1 ? "flex-col" : "flex-col lg:flex-row"
        } items-center justify-center px-4 lg:px-10 transition-all duration-500 ease-in-out bg-white overflow-hidden relative ${
          showVideo1 ? "h-[592px] py-0" : "py-20"
        }`}
      >
        <div className={`relative ${showVideo1 ? "w-full h-full" : "flex-shrink-0 mb-10 lg:mb-0"}`}>
          {!showVideo1 ? (
            <div
              ref={circleRef1}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer shadow-md transition-transform"
              onClick={() => setShowVideo1(true)}
            >
              {playInCircle1 ? (
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
          ) : (
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="relative w-[90%] h-[500px] max-w-[1600px] rounded-xl overflow-hidden">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  onClick={() => setShowVideo1(false)}
                  className="absolute top-4 right-4 z-20 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {!showVideo1 && (
          <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#4F6B1C] text-3xl lg:text-5xl font-bold leading-snug mb-2">
              See. Do. Grow.
            </h2>
            <h3 className="text-[#4F6B1C] text-2xl lg:text-5xl font-bold mb-6">
              This is how STOQ works
            </h3>
            <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
              See everything in one place. Do what matters in an instant—hand off to a teammate,
              chat on the item, update its status, restock, or move it where it’s needed. Grow
              efficiency with zero guesswork and nothing but clear, positive results.
            </p>
          </div>
        )}
      </section>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

      {/* Second Section */}
      <section
        className={`flex ${
          showVideo2 ? "flex-col" : "flex-col lg:flex-row-reverse"
        } items-center justify-center px-4 lg:px-10 transition-all duration-500 ease-in-out bg-white overflow-hidden relative ${
          showVideo2 ? "h-[592px] py-0" : "py-20"
        }`}
      >
        <div className={`relative ${showVideo2 ? "w-full h-full" : "flex-shrink-0 mb-10 lg:mb-0"}`}>
          {!showVideo2 ? (
            <div
              ref={circleRef2}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer shadow-md transition-transform"
              onClick={() => setShowVideo2(true)}
            >
              {playInCircle2 ? (
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Second Video"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
          ) : (
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="relative w-[90%] h-[500px] max-w-[1600px] rounded-xl overflow-hidden">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  onClick={() => setShowVideo2(false)}
                  className="absolute top-4 right-4 z-20 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {!showVideo2 && (
          <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6">
              Instant clarity from the first use
            </h2>
            <p className="text-[#6E8A28] text-base lg:text-xl leading-relaxed">
              STOQ thinks like you do. Its game-style interface makes using STOQ fun—no training required.
            </p>
          </div>
        )}
      </section>

       {/* Divider Line */}
       <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

        {/* THIRD SECTION */}
      <section className={`flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 ${showVideo3 ? "h-[596px] py-0" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
        <div className="flex-shrink-0 mb-10 lg:mb-0 relative">
          {!showVideo3 ? (
            <div
              ref={circleRef3}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer"
              onClick={() => setShowVideo3(true)}
            >
              {playInCircle3 ? (
                <video
                  src="/videos/LandingPage/lifeline 0 chaos.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Third Video"
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <div
              className="relative w-[90vw] max-w-full h-[500px] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo3(false);
                }}
                className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="/videos/LandingPage/lifeline 0 chaos.mp4"
                title="STOQ Timeline Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>

        {!showVideo3 && (
          <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#596F22] text-3xl lg:text-5xl font-bold leading-snug mb-4">
              One Live Timeline, Zero Chaos.
            </h2>
            <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
              STOQ lets you run everything with confidence. It maps each item’s life cycle, so you always see what’s on hand, what’s running low, and the next action to take.
            </p>
          </div>
        )}
      </section>


       {/* Divider Line */}
       <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

       {/* FOURTH SECTION */}
      <section className={`flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 ${showVideo4 ? "h-[596px] py-0" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
        <div className="flex-shrink-0 mb-10 lg:mb-0 relative">
          {!showVideo4 ? (
            <div
              ref={circleRef4}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer"
              onClick={() => setShowVideo4(true)}
            >
              {playInCircle4 ? (
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Fourth Video"
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <div
              className="relative w-[90vw] max-w-full h-[500px] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo4(false);
                }}
                className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID_6?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_6"
                title="STOQ Clusters Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>

        {!showVideo4 && (
          <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6">
              STOQ Clusters multi-domain universe
            </h2>
            <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
              One system, multiple worlds—work, home, hobbies, family—all in one place.
            </p>
          </div>
        )}
      </section>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

        {/* FIFTH SECTION */}
      <section className={`flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 ${showVideo5 ? "h-[596px] py-0" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
        <div className="flex-shrink-0 mb-10 lg:mb-0 relative">
          {!showVideo5 ? (
            <div
              ref={circleRef5}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer"
              onClick={() => setShowVideo5(true)}
            >
              {playInCircle5 ? (
                <video
                  src="/videos/LandingPage/Works the way your work.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Fifth Video"
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <div
              className="relative w-[90vw] max-w-full h-[500px] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo5(false);
                }}
                className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="/videos/LandingPage/Works the way your work.mp4"
                title="STOQ Work Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>

        {!showVideo5 && (
          <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#596F22] text-3xl lg:text-5xl font-bold leading-snug mb-6">
              Works the way you work
            </h2>
            <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
              Log materials in units your crew uses—kilos, packs, meters. One tap converts any cost to any currency.
            </p>
          </div>
        )}
      </section>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

        {/* SIXTH SECTION */}
      <section className={`flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 ${showVideo6 ? "h-[596px] py-0" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
        <div className="flex-shrink-0 mb-10 lg:mb-0 relative">
          {!showVideo6 ? (
            <div
              ref={circleRef6}
              className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full cursor-pointer"
              onClick={() => setShowVideo6(true)}
            >
              {playInCircle6 ? (
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="/images/about.jpg"
                  alt="Sixth Video"
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <div
              className="relative w-[90vw] max-w-full h-[500px] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo6(false);
                }}
                className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID_6?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_6"
                title="STOQ Sync Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>

        {!showVideo6 && (
          <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
            <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6">
              Live, always-synced updates
            </h2>
            <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
              Everyone sees the same info in real time. No delays, no duplicate effort.
            </p>
          </div>
        )}
      </section>



     {/* lets get started button at center */}
        <div className="flex justify-center py-20">
            <a href="/get-started" className="bg-[#A9CF45] text-black px-6 py-3 rounded-full text-md font-semibold hover:bg-[#8BB833] transition-colors">
            Let's get started
            </a>
        </div>

         {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-2" />

    </div>

        

  );
};

export default SeeDoGrowSection;
