
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SeeDoGrowSection = () => {
   const [hoverVideo1, setHoverVideo1] = useState(false); // hover state
  const [showVideo1, setShowVideo1] = useState(false); // for first section
  const [showVideo2, setShowVideo2] = useState(false); // for second section
  const [showVideo3, setShowVideo3] = useState(false); // for third section
  const [showVideo4, setShowVideo4] = useState(false); // for fourth section
  const [showVideo5, setShowVideo5] = useState(false); // Fifth section
  const [showVideo6, setShowVideo6] = useState(false); // Sixth section

  return (
    <div className="bg-white">
      {/* First Section */}
      
      <section
        className={`flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 ${
          showVideo1 ? "h-[592px]" : "py-20"
        } transition-all duration-500 ease-in-out bg-white overflow-hidden relative`}
      >
        <div
          className="flex-shrink-0 mb-10 lg:mb-0 relative"
          onMouseEnter={() => setShowVideo1(true)}
        >
          {!showVideo1 ? (
            <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
              <img
                src="/images/about.jpg"
                alt="First Video"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          ) : (
            <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
              <button
                onClick={() => setShowVideo1(false)}
                className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bDVpI23q8Zg?autoplay=1&mute=1&loop=1&playlist=bDVpI23q8Zg"
                title="STOQ Intro Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
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

      {/* Second Section */}

{/* Second Section */}
<section
  className={`flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 ${
    showVideo2 ? "h-[592px]" : "py-20"
  } transition-all duration-500 ease-in-out bg-white overflow-hidden relative`}
>
  <div
    className="flex-shrink-0 mb-10 lg:mb-0 relative"
    onMouseEnter={() => setShowVideo2(true)}
  >
    {!showVideo2 ? (
      <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
        <img
          src="/images/about.jpg"
          alt="Second Video"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    ) : (
      <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
        <button
          onClick={() => setShowVideo2(false)}
          className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md"
        >
          <FaTimes className="w-4 h-4" />
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/VIDEO_ID_2?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_2"
          title="STOQ Feature Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    )}
  </div>

  {!showVideo2 && (
    <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
      <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6 font-rubik">
        Instant clarity from the first use
      </h2>
      <p className="text-[#6E8A28] text-base lg:text-xl leading-relaxed">
        STOQ thinks like you do. Its game-style interface makes using STOQ fun—no training required.
      </p>
    </div>
  )}
</section>


{/* THIRD SECTION */}
<section className={`flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 ${showVideo3 ? "h-[596px]" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
  <div className="flex-shrink-0 mb-10 lg:mb-0 relative" onMouseEnter={() => setShowVideo3(true)}>
    {!showVideo3 ? (
      <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
        <img src="/images/about.jpg" alt="Third Video" className="object-cover w-full h-full rounded-full" />
      </div>
    ) : (
      <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
        <button onClick={() => setShowVideo3(false)} className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md">
          <FaTimes className="w-4 h-4" />
        </button>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_3" title="STOQ Timeline Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="rounded-xl"></iframe>
      </div>
    )}
  </div>

  {!showVideo3 && (
    <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
      <h2 className="text-[#596F22] text-3xl lg:text-5xl font-bold leading-snug mb-4">One Live Timeline, Zero Chaos.</h2>
      <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
      STOQ lets you run everything with confidence. It maps each item’s life cycle, so you always see what’s on hand, what’s running low, and the next action to take.
      </p>
    </div>
  )}
</section>


{/* FOURTH SECTION */}
<section className={`flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 ${showVideo6 ? "h-[596px]" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
  <div className="flex-shrink-0 mb-10 lg:mb-0 relative" onMouseEnter={() => setShowVideo6(true)}>
    {!showVideo6 ? (
      <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
        <img src="/images/about.jpg" alt="Sixth Video" className="object-cover w-full h-full rounded-full" />
      </div>
    ) : (
      <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
        <button onClick={() => setShowVideo6(false)} className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md">
          <FaTimes className="w-4 h-4" />
        </button>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID_6?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_6" title="STOQ Clusters Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="rounded-xl"></iframe>
      </div>
    )}
  </div>

  {!showVideo6 && (
    <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
      <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6">STOQ Clusters multi-domain universe</h2>
      <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
        One system, multiple worlds—work, home, hobbies, family—all in one place.
      </p>
    </div>
  )}
</section>


{/* FIFTH SECTION */}
<section className={`flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 ${showVideo5 ? "h-[596px]" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
  <div className="flex-shrink-0 mb-10 lg:mb-0 relative" onMouseEnter={() => setShowVideo5(true)}>
    {!showVideo5 ? (
      <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
        <img src="/images/about.jpg" alt="Fifth Video" className="object-cover w-full h-full rounded-full" />
      </div>
    ) : (
      <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
        <button onClick={() => setShowVideo5(false)} className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md">
          <FaTimes className="w-4 h-4" />
        </button>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bDVpI23q8Zg?autoplay=1&mute=1&loop=1&playlist=bDVpI23q8Zg" title="STOQ Work Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="rounded-xl"></iframe>
      </div>
    )}
  </div>

  {!showVideo5 && (
    <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
      <h2 className="text-[#596F22] text-3xl lg:text-5xl font-bold leading-snug mb-6">Works the way you work</h2>
      <p className="text-[#6E8A28] text-base lg:text-lg leading-relaxed">
      Log materials in units your crew uses—kilos, packs, meters. One tap converts any cost to any currency.
      </p>
    </div>
  )}
</section>

{/* SIXTH SECTION */}
<section className={`flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 ${showVideo4 ? "h-[596px]" : "py-20"} transition-all duration-500 ease-in-out overflow-hidden relative`}>
  <div className="flex-shrink-0 mb-10 lg:mb-0 relative" onMouseEnter={() => setShowVideo4(true)}>
    {!showVideo4 ? (
      <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
        <img src="/images/about.jpg" alt="Fourth Video" className="object-cover w-full h-full rounded-full" />
      </div>
    ) : (
      <div className="relative w-[90vw] max-w-full h-[592px] rounded-xl overflow-hidden">
        <button onClick={() => setShowVideo4(false)} className="absolute top-4 right-4 z-10 bg-white text-gray-600 hover:text-black rounded-full p-2 shadow-md">
          <FaTimes className="w-4 h-4" />
        </button>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID_4?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_4" title="STOQ Sync Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="rounded-xl"></iframe>
      </div>
    )}
  </div>

  {!showVideo4 && (
    <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
      <h2 className="text-[#8CB031] text-3xl lg:text-5xl font-bold leading-snug mb-6">Live, always-synced updates</h2>
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
      <hr className="border-t-2 border-gray-300 mx-20 mb-2" />

    </div>

        

  );
};

export default SeeDoGrowSection;
