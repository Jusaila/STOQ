import React from 'react';

const SeeDoGrowSection = () => {
  return (
    <div className="bg-white">
      {/* First Section: Image Left, Text Right */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 py-20">
        {/* Left Image */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Woman holding camera" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#4F6B1C] text-3xl lg:text-5xl font-bold leading-snug mb-2">
            See. Do. Grow.
          </h2>
          <h3 className="text-[#4F6B1C] text-2xl lg:text-4xl font-bold mb-6">
            This is how STOQ works
          </h3>
          <p className="text-[#4F6B1C] text-base lg:text-lg leading-relaxed">
            See everything in one place. Do what matters in an instant—hand off to a teammate, chat on the item, update its status, restock, or move it where it’s needed. Grow efficiency with zero guesswork and nothing but clear, positive results.
          </p>
        </div>
      </section>

      {/* Second Section: Text Left, Image Right */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 py-20">
        {/* Right Image (but placed first because of row-reverse) */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Another image" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Left Text */}
        <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#4F6B1C] text-3xl lg:text-4xl font-bold leading-snug mb-4">
          Instant clarity from the first use
          </h2>
         
          <p className="text-[#4F6B1C] text-base lg:text-lg leading-relaxed">
          STOQ thinks like you do. Its game-style interface makes using STOQ fun—no training required.
          </p>
        </div>
      </section>

       {/* Divider Line */}
       <hr className="border-t-[3px] border-gray-300 mx-20" />

       {/* third Section: Image Left, Text Right */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 py-20">
        {/* Left Image */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Woman holding camera" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#8CB031] text-3xl lg:text-4xl font-bold leading-snug mb-4">
          One Live Timeline, Zero Chaos.
          </h2>
          
          <p className="text-[#8CB031] text-base lg:text-lg leading-relaxed">
          STOQ lets you run everything with confidence. It maps each item’s life cycle, so you always see what’s on hand, what’s running low, and the next action to take.
          </p>
        </div>
      </section>

      {/* fourth Section: Text Left, Image Right */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 py-20">
        {/* Right Image (but placed first because of row-reverse) */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Another image" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Left Text */}
        <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#8CB031] text-3xl lg:text-4xl font-bold leading-snug mb-4">
          Live, always-synced updates
          </h2>
         
          <p className="text-[#8CB031] text-base lg:text-lg leading-relaxed">
          Everyone sees the same info in real time. No delays, no duplicate effort.          </p>
        </div>
      </section>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-300 mx-20" />

        {/* fift Section: Image Left, Text Right */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 py-20">
        {/* Left Image */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Woman holding camera" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:ml-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#596F22] text-3xl lg:text-4xl font-bold leading-snug mb-4">
          Works the way you work
          </h2>
          
          <p className="text-[#596F22] text-base lg:text-lg leading-relaxed">
          Log materials in units your crew uses—kilos, packs, meters. One tap converts any cost to any currency.
          </p>
        </div>
      </section>

       {/* sixth Section: Text Left, Image Right */}
       <section className="flex flex-col lg:flex-row-reverse items-center justify-center px-4 lg:px-10 py-20">
        {/* Right Image (but placed first because of row-reverse) */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <div className="w-80 h-80 lg:w-[410px] lg:h-[410px] overflow-hidden rounded-full">
            <img src="/images/about.jpg" alt="Another image" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Left Text */}
        <div className="lg:mr-16 text-center lg:text-left w-full lg:w-[800px]">
          <h2 className="text-[#8CB031] text-3xl lg:text-4xl font-bold leading-snug mb-4">
          STOQ Clusters multi-domain universe
          </h2>
         
          <p className="text-[#8CB031] text-base lg:text-lg leading-relaxed">
          One system, multiple worlds—work, home, hobbies, family—all in one place.         </p>
        </div>
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
