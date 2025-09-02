import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div className="bg-white">
        <section className="relative w-full h-[376px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/backgound new.mp4" type="video/mp4" />
          </video>
      
          {/* Overlay layer */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[10px]" />
        </div>
      
        {/* Navbar - Fixed */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>
      
        {/* Content */}
        <div className="relative max-w-[1440px] h-full mx-auto px-6 md:px-8 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between h-full text-center md:text-left space-y-4 md:space-y-15 transform translate-y-6 md:translate-y-10">       
           {/* Left text block */}
                <div className="w-full md:w-1/2 space-y-2 pt-32 md:pt-0">
                <p className="text-sm md:text-[16px] font-semibold text-[#00000099]">
                    Nice to meet you
                </p>
                <h1 className="text-2xl md:text-[48px] font-semibold text-[#303C14]">
                    About our company
                </h1>
                </div>

      
            {/* Right text block */}
            <div className="w-full md:w-2/5 pb-16 md:pb-0">
              <p className="text-base md:text-[20px] leading-relaxed text-[#596F22] font-medium">
                See how STOQ adapts to real-life workflows,<br className="hidden md:block" />
                across industries and lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Subtitle */}
            <p className="text-sm md:text-[16px] font-semibold text-[#6E8A28]">
            The Story Behind STOQ
            </p>

            {/* Title */}
            <h2 className="text-2xl md:text-[48px] font-bold text-[#596F22] mt-6">
            Necessity , not theory
            </h2>

            {/* Paragraphs */}
            <div className="mt-12 space-y-6 text-gray-700 text-sm md:text-[20px] leading-relaxed text-justify font-normal">
            <p>
                STOQ was forged on a busy construction site where missing materials
                meant missed deadlines.
            </p>
            <p>
                Who we are. We’re BAFID Corporation—since 2005, a 200-strong team
                delivering architecture, design, construction, and bespoke furniture
                across the Middle East and Central Asia. In BAFID Modern tech meets
                cultural craft in every project.
            </p>
            <p>
                Why STOQ exists. As our projects grew, heavy spreadsheets hid
                critical data. We needed instant clarity on every item moving across
                multiple sites—so we built STOQ: inventory app, that shows each
                resource in real time, lets teams act the moment something shifts,
                and helps businesses grow with total confidence. No spreadsheets, no
                headaches—just the calm of knowing everything’s under control.
            </p>
            </div>
        </div>

        {/* Decorative Dots Background (Right Side) */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[radial-gradient(circle,_#5A6F2E40_1px,_transparent_1px)] bg-[length:12px_12px] opacity-40"></div>
      </section>


      <section className="w-full bg-white py-52 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
    
        {/* Reusable Card */}
        {[
          {
            img: "/images/about/mission.svg",
            title: "Mission",
            text: "Make it easy for every small service business, freelancer, household and collector to track and manage all their things with total confidence—every day, in one simple app.",
          },
          {
            img: "/images/about/vision.svg",
            title: "Vision",
            text: "A world where every resource is visible, shared, and used wisely, so people spend less time hunting for things and more time doing what matters.",
          },
          {
            img: "/images/about/values.svg",
            title: "Values",
            text: "Clarity. Simplicity. Empathy. We design for humans first, make the complex feel easy, and improve relentlessly—because organized lives create happier days.",
          },
        ].map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Floating Image */}
            <div className="absolute -top-[72px] left-1/2 -translate-x-1/2">
              <img
                src={card.img}
                alt={card.title}
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[145px] md:h-[145px]"
              />
            </div>

            {/* Card Content */}
            <div className="border-2 border-[#A4D037] rounded-2xl p-8 pt-24 flex flex-col items-center h-full">
              <h3 className="text-xl md:text-2xl font-semibold text-[#303C14] mb-4">
                {card.title}
              </h3>
              <p className="text-[#535862] text-sm md:text-[20px] leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      </section>

      <div className="min-h-screen bg-gray-50 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-green-600 leading-tight mb-4">
                STOQ: Built for Everyone
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                STOQ gives full picture and control to your everyday storage.
              </p>
            </div>

            {/* Subheading */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                STOQ: Made for real life.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We built it on a construction site, then realized it helps anyone—from solo makers and 
                busy parents to growing teams and curious kids. No manuals, no spreadsheets, just 
                one easy app that keeps every item in sight. Free, forever.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Because starting out is hard enough, the basic version of STOQ costs nothing—so you 
                can save time, cut stress, and focus on what matters STOQ isn't just for business. It's 
                for life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                It reflects BAFID's journey, our passion for design and functionality, and our mission to 
                help people manage resources smarter — at home, in the field, or anywhere in 
                between.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Download STOQ from the App Store and Google Play. Register and get started free. 
                Premium features are available by subscription.
              </p>
              <p className="text-gray-800 font-medium mb-2">
                BAFID — Creating Solutions That Simplify Life.
              </p>
              <p className="text-gray-800 font-medium">
                See. Do. Grow..
              </p>
            </div>
          </div>

          {/* Right Images Section - Stepped Layout */}
          <div className="relative">
            {/* Step 1: Top right - Simplify Everything card */}
            <div className="flex justify-end mb-4">
              <div className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-colors w-[143px] h-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium">Simplify</div>
                  <div className="text-sm font-medium">Everything</div>
                </div>
              </div>
            </div>

            {/* Step 2: Two images side by side */}
            <div className="flex justify-end gap-4 mb-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop&crop=center" 
                  alt="Construction worker" 
                  className="w-[143px] h-24 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&crop=center" 
                  alt="Team working" 
                  className="w-[143px] h-24 object-cover"
                />
              </div>
            </div>


           {/* Step 3: Center image with side cards */}
            <div className="flex justify-end gap-4">
              {/* Free Forever card */}
              <div className="w-[143px] h-24 bg-green-300 hover:bg-green-400 text-gray-800 font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium">Free</div>
                  <div className="text-sm font-medium">Forever</div>
                </div>
              </div>
              
              {/* Center image */}
              <div className="w-[143px] h-24 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center" 
                  alt="Warehouse worker" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Track with Ease card */}
              <div className="w-[143px] h-24 bg-green-300 hover:bg-green-400 text-gray-800 font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium">Track with</div>
                  <div className="text-sm font-medium">Ease</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

        {/* call to action */}
    <section className="w-full py-40 flex flex-col items-center justify-center text-center px-4 font-rubik">
      <h2 className="text-2xl md:text-[36px] font-semibold text-[#181D27] mb-4">
      Ready to try and start manage your inventory with STOQ?
      </h2>
      <p className="text-[#535862] text-base md:text-[20px] mb-6">
      Start your free trial now and See your material resources, Do what's necessary and Grow with no stress and full control.
      </p>
      
      <div className="flex gap-4 items-center">
        {/* Watch Demo */}
        {/* <button className="w-[150px] h-[45px] border-[2px] border-gray-200 text-[#1C230C] text-base font-semibold rounded-full hover:bg-gray-100 transition flex items-center justify-center">
          Watch Demo
        </button>
        */}
        <Button size="md" variant="secondary" className="text-[#414651] w-[117px] font-semibold text-[14px]">Watch Demo</Button>
        <Button size="md" className="text-[#1C230C] w-[111px] font-semibold text-[14px]">Get started</Button>
      </div>


    </section>

    <Footer />
        </div>

      
      
    );
  }
  