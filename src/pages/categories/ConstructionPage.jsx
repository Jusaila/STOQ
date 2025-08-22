
import Navbar from "../../components/Navbar";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Footer from "../../components/Footer";
import TestimonialSection from "../../components/TestimonialSection";
import PersonalPricingPlans from "../../components/ProffessionalPricingPlans";
import ProffessionalPricingPlans from "../../components/ProffessionalPricingPlans";


    const ConstructionPage = () => {

      // Ref for the scrollable container
      const scrollRef = useRef(null);

      useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;
        let speed = 0.5; // Adjust scrolling speed
        // let isPaused = false;
    
        // // Pause on hover
        // container.addEventListener("mouseenter", () => (isPaused = true));
        // container.addEventListener("mouseleave", () => (isPaused = false));
    
        function autoScroll() {
          if (container) {
            scrollAmount += speed;
            container.scrollLeft = scrollAmount;

            // Loop back to start for infinite scroll
            if (scrollAmount >= container.scrollWidth / 2) {
              scrollAmount = 0;
            }
          }
          requestAnimationFrame(autoScroll);
        }

        autoScroll();
      }, []);
    
      const items = [
        { img: "qr.png", label: "QR tagging" },
        { img: "site.png", label: "Site/location mapping" },
        { img: "inventory.png", label: "Centralized inventory" },
        { img: "role.png", label: "Role-based access" },
        { img: "ui.png", label: "Intuitive UI" },
        { img: "account.png", label: "Team accountability" },
        { img: "return.png", label: "Return/ transfer items" },
        { img: "dash.png", label: "Usage analytics dashboard" },
        { img: "business.png", label: "Efficient business" },
      ];

        const tryRef = useRef(null); // ✅ moved inside
      
        useEffect(() => {
          const el = tryRef.current;
          gsap.set(el, { scale: 1.5 });
          const tl = gsap.timeline({ repeat: -1, yoyo: true });
          tl.to(el, { scale: 2.2, duration: 4, ease: "power1.inOut" })
            .to(el, { scale: 1.3, duration: 4, ease: "power1.inOut" });
      
          const onEnter = () => {
            tl.pause();
            gsap.to(el, { scale: 2.2, duration: 0.8, ease: "power1.out" });
          };
          const onLeave = () => {
            gsap.to(el, {
              scale: 1.5,
              duration: 3,
              ease: "power1.inOut",
              onComplete: () => tl.resume(),
            });
          };
      
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
          return () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
          };
        }, []);
  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen overflow-hidden font-rubik">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0 blur-sm"
      >
        <source src="/videos/WhatsApp Video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] pt-10">
        <div className="relative w-full max-w-[1600px] h-full flex flex-col items-center justify-center">
          {/* LEFT TOP TEXT */}
          <div className="absolute top-[120px] left-[150px] text-left">
            <h2 className="text-[#6E8A28] text-[50px] font-bold">CONSTRUCTION <span className="text-[#6E8A28]">Inventory Management.</span></h2>
            <p className="text-[#63645c] text-xl mt-1 font-semibold">See your material resources. Do what's necessary. Grow with no stress and full control.</p>
          </div>

          {/* STOQ LOGO */}
          <img
            src="/images/STOQ Logo Final.png"
            alt="STOQ Logo"
            className="w-[900px] h-[900px] object-contain"
            style={{ transform: "translate(-70px, -1px)"
               
             }} // moved slightly up
          />

          {/* HOUSEHOLDS Bubble on the 'O' */}
          <div
            className="absolute w-[235px] h-[220px] rounded-full text-[23px] font-bold text-black flex items-center justify-center z-20"
            style={{
              top: "47.5%",
              left: "49.6%",
              transform: "translate(-50%, -50%)",
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)`,
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow: `
                inset 0 0 10px rgba(255, 255, 255, 0.3),
                inset 0 2px 4px rgba(255, 255, 255, 0.2),
                0 4px 8px rgba(0, 0, 0, 0.05)
              `,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            CONSTRUCTION
          </div>

          <div
            ref={tryRef}
            className="absolute w-[280px] h-[280px] rounded-full overflow-hidden flex items-center justify-center z-20 cursor-pointer"
            style={{
                top: "49.2%",
                left: "64.7%",
                transform: "translate(-50%, -50%)",
            }}
            onClick={() => alert("Navigating to TRY logic...")}
            >
            <img
                src="/images/Button Shpehere Black.png"
                alt="TRY"
                className="w-16 h-16 object-contain mb-2"
            />
            </div>


          {/* SEE.DO.ENJOY Slogan */}
          <div
            className="absolute text-[#6E8A28] text-4xl font-bold font-rubik"
            style={{ bottom: "250px", left: "1160px" }}
          >
            SEE. DO. GROW.
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-[155px] flex gap-4 z-20">
          <a href="#" className="relative w-[200px] h-[60px] inline-block">
            <img
              src="/images/blur-bg.png"
              alt=""
              className="absolute w-full h-full pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center px-3 gap-3 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 814 1000"
                className="w-10 h-10"
                fill="#44551B"
              >
               <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />

              </svg>
              <div className="flex flex-col leading-tight">
                <p className="text-[12px] text-[#44551B] font-rubik">Download on the</p>
                <p className="text-[21px] font-bold text-[#44551B] font-rubik">App Store</p>
              </div>
            </div>
          </a>

          <a href="#" className="relative w-[200px] h-[60px] inline-block">
            <img
              src="/images/blur-bg.png"
              alt=""
              className="absolute w-full h-full pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center px-3 gap-1 z-10">
              <img
                src="/icons/Google_Play_Arrow_logo.svg"
                alt="Google Play"
                className="w-8 h-8 mr-3"
              />
              <div className="text-left text-sm leading-tight">
                <p className="text-[#44551B] text-[12px]">GET IT ON</p>
                <p className="font-semibold text-[#44551B] text-[21px]">Google Play</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-white flex flex-col items-center px-28 py-20 font-rubik overflow-hidden">
  <div className="w-full max-w-8xl">
    {/* Header */}
    <h1 className="text-4xl md:text-5xl font-bold text-[#181D27] mb-4 text-left">
      No delays. No guesswork. Just smarter decisions.
    </h1>

    <p className="text-gray-600 text-lg mb-16 max-w-3xl text-left">
      Track every material in real time. Act fast—give, move, use, flag, or restock the moment it’s needed—so your construction business grows with confident efficiency.
    </p>

    {/* Auto-scrolling Feature Cards */}
    <div
      ref={scrollRef}
      className="w-screen overflow-x-hidden scrollbar-hide whitespace-nowrap"
    >
      <div className="flex gap-8 w-max pl-4">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-[320px]"
          >
            <img
              src={`/images/construction/${item.img}`}
              alt={item.label}
              className="w-[350px] h-[350px] object-contain mb-4"
            />
            <p className="text-lg font-semibold text-center text-gray-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex justify-center items-center pt-20">
      <a
        href="/get-started"
        className="inline-block w-[200px] h-[80px] bg-no-repeat bg-center bg-contain text-center text-black text-lg font-semibold leading-[80px]"
        style={{
          backgroundImage: "url('/images/Actions.png')",
        }}
      >
        Let's get started
      </a>
    </div>
  </div>
</section>




    <section className="relative w-full bg-white pt-16 pb-24 px-2 md:px-4 overflow-hidden font-rubik">
      {/* Right Section BG Image — position absolute and top-right aligned */}
      <img
        src="/images/Clip path group.png"
        alt="right gradient"
        className="absolute top-1 right-0 w-[550px] object-contain pointer-events-none z-0"
      />

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-24">
        
        {/* Left Section */}
        <div className="flex flex-col text-lg">
          <h2 className="text-[#6E8A28] font-medium text-5xl mb-6">STOQ in Action.</h2>

          <div>
          <p className="text-[#535862] font-normal leading-relaxed mb-4">
          For Small Construction Businesses.
          </p>

            <p className="text-[#535862] font-normal leading-relaxed mb-4">
            STOQ is the small Construction business inventory management app that serves as your real-time operations layer for physical resources. It maps tools, parts, and materials across jobs, teams, and sites — in one live, structured timeline.
            </p>
            <p className="text-[#535862] font-normal leading-relaxed mb-2">
            STOQ fits any role. Use it solo or with teams and partners.
            </p>
            <p className="text-[#535862] font-normal leading-relaxed mb-4">
            Stay in sync with your crew using built-in, item-focused messaging. Forget outdated spreadsheets and disconnected apps.
          </p>
          </div>

           {/* Left Image — shifted upward and more centered beside text */}
            <div className="absolute -left-10 top-2/4 z-0">
                <img
                src="/images/Clip path group-left.png"
                alt="left gradient"
                className="w-[550px] object-contain"
                />
            </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col justify-start text-lg pt-[4.8rem]">
          <p className="text-[#535862] font-normal leading-relaxed mb-4">
          Instant clarity from the first use. STOQ’s game-style interface makes using the app fun—no training required for You or Your Construction crew.
          </p>
          <p className="text-[#535862] font-normal leading-relaxed mb-4">
          STOQ Works the way you work. Log materials in units your crew uses—kilos, packs, meters. One tap converts any cost to any currency.
          </p>
          <p className="text-[#535862] font-normal leading-relaxed mb-4">
          Live Sync & Lasting History.<br/>
          See updates the moment they happen—no delays, no duplicate work. STOQ quietly saves every change, from today’s tweaks to years-old records.
          </p>
        </div>
      </div>
    </section>


    <TestimonialSection />
    <ProffessionalPricingPlans />
     {/* CTA Button */}
    <div className="flex justify-center mt-0 pt-0 -translate-y-2">
      <a 
        href="/pricing" 
        className="text-[#8CB031] font-semibold px-8 py-1 text-md transition-all duration-200 hover:underline"
      >
        See all plans
      </a>
    </div>
 
    {/* call to action */}
    <section className="w-full py-40 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
      Ready to run your Construction site like clockwork?
      </h2>
      <p className="text-gray-500 text-base md:text-xl mb-6">
      Start a free trial and track every tool, part, and load in one live dashboard.
      </p>
      <div className="flex gap-4">
        <button className="border-[3px] border-gray-100 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
          Watch Demo
        </button>
        <button className="bg-[#6E8A28] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#6e8a28] transition">
          Get started
        </button>
      </div>
    </section>

    <Footer />
    </div>
  );
};

export default ConstructionPage;