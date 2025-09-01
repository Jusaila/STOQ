
import Navbar from "../../components/Navbar";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Footer from "../../components/Footer";
import TestimonialSection from "../../components/TestimonialSection";
import PersonalPricingPlans from "../../components/ProffessionalPricingPlans";
import ProffessionalPricingPlans from "../../components/ProffessionalPricingPlans";
import Button from "../../components/Button";

    const ConstructionPage = () => {

      const tryRef = useRef(null);
  const scrollRef = useRef(null);

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

  //Testimonial
  const testimonialsPage2 = [
    {
      image: "/images/construction/Testimonials/Construction Grace.jpg",
      name: "Grace Harris",
      role: "Procurement Manager",
      country: "USA / UK / Australia",
      rating: 5,
      quote: "Managing supplies across multiple construction sites used to be chaos. With STOQ, I finally have full control over inventory levels and purchase planning. It flags shortages before they happen and saves hours of manual tracking every week. It’s become my daily tool for procurement.",
    },
    {
      image: "/images/construction/Testimonials/Rajesh Patel.png",
      name: "Rajesh Patel",
      role: "Operations Supervisor",
      country: "USA / UK / Australia",
      rating: 5,
      quote: "With STOQ, I can see stock levels across all sites and what’s already on the way. If we’re short on something, I just ping the team in chat and it gets handled. Gets the job done.",
    },
    {
      image: "/images/construction/Testimonials/Construction Sofia.jpg",
      name: "Sofia Becker",
      role: "Interior Designer in a small construction company",
      country: "USA / UK / Australia",
      rating: 5,
      quote: "Love how STOQ handles everything — units, currencies, all so simple. Saves me time at work, and I even use it for my home projects. Big thanks to the team — you nailed it",
    },
    {
      image: "/images/construction/Testimonials/Construction Adrian.jpg",
      name: "Adrian Williams",
      role: "Site Supervisor at a family-run construction company.",
      country: "USA / UK / Australia",
      rating: 5,
      quote: "Guys, STOQ seriously saves time and spares you the stress.  Just try it — you’ll get what I mean.",
    },
    {
      image: "/images/construction/Testimonials/Walter Jenkins.png",
      name: "Walter Jenkins",
      role: "Construction Foreman",
      country: "USA / UK / Australia",
      rating: 5,
      quote: "I’ve got a crew of six, different sites, plenty of materials to keep track of. With STOQ, everyone sees what’s in stock and what’s missing — no need for endless calls. If something’s needed, we just drop a note in the messenger and it gets sorted fast. Makes things easier for the guys and gives me peace of mind. Great tool.",
    },
    ];
  

  // Auto-scrolling functionality
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    let speed = 0.5;

    function autoScroll() {
      if (container) {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }, []);

    useEffect(() => {
      const el = tryRef.current;

      // Reset initial size (scales from parent %)
      gsap.set(el, { scale: 1 });

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(el, { scale: 1.65, duration: 4, ease: "power1.inOut" })
        .to(el, { scale: 1, duration: 4, ease: "power1.inOut" });

      const onEnter = () => {
        tl.pause();
        gsap.to(el, { scale: 1.6, duration: 0.8, ease: "power1.out" });
      };

      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
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
        {/* <div className="relative z-10 flex flex-col justify-start items-center h-full text-[#A9CF45] min-h-screen pt-12 md:pt--2"> */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] min-h-screen -mt-12 md:-mt-120">

        {/* <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] min-h-screen"> */}
            <div className="relative w-full max-w-[90vw] h-full flex flex-col items-center justify-center mx-auto">
              
              {/* Container for logo and text elements - all positioned relative to each other */}
              <div className="relative flex flex-col items-center justify-center">
                
                {/* LEFT TOP TEXT - responsive positioning */}
                <div className="w-full flex justify-start mb-8 lg:mb-12 pl-4 sm:pl-8 md:ml-[-20%] lg:ml-[-35%] xl:ml-[-25%]">
                  <div className="text-left">
                    <h2 className="
                      text-[#6E8A28] 
                      font-bold 
                      leading-tight 
                      text-2xl       /* mobile */
                      sm:text-3xl    /* small screens */
                      md:text-4xl    /* tablets */
                      lg:text-[48px]    /* laptops */
                      xl:text-[48px]    /* desktop */
                    ">
                      CONSTRUCTION <span className="text-[rgba(0,0,0,0.6)]">Inventory Management.</span>
                    </h2>

                    <p className="
                      text-[rgba(0,0,0,0.6)] 
                      mt-2 
                      font-semibold 
                      text-sm        /* mobile */
                      sm:text-base   /* small screens */
                      md:text-lg     /* tablets */
                      lg:text-[24px]    /* laptops */
                      xl:text-[24px]    /* desktop */
                    ">
                      See your material resources. Do what's necessary. Grow with no stress and full control.
                    </p>
                  </div>
                </div>

                {/* STOQ LOGO + Overlays */}

            <div className="relative w-[80vw] max-w-[800px]">
              <img
                src="/images/STOQ Logo Final.png"
                alt="STOQ Logo"
                className="w-full h-auto object-contain translate-x-[-7%]" 
              />



                  {/* HOUSEHOLDS Bubble on O */}
                  <div
                    className="absolute rounded-full font-bold text-[#1C230C] flex items-center justify-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[22px]"
                    style={{
                      width: "26%",
                      aspectRatio: "1/1",
                      top: "45%",
                      left: "50%",
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

                  {/* TRY Bubble on Q */}
                  <div
                    ref={tryRef}
                    className="absolute aspect-square rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
                    style={{
                      width: "25%",
                      top: "45%",
                      left: "76.9%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => alert("Navigating to TRY logic...")}
                  >
                    <img
                      src="/images/Button Shpehere Black.png"
                      alt="TRY"
                      className="w-[40%] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* SEE.DO.ENJOY Slogan - responsive positioning */}
                <div className="w-full flex justify-end mt-8 lg:mt-1 pr-4 sm:pr-8">
                  <div 
                    className="text-[#596F22] font-semibold font-rubik 
                      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px]
                      md:mr-[-10%] lg:mr-[-20%] xl:mr-[-12%]" 
                  >
                    SEE. DO. GROW.
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        {/* App Store & Play Store buttons */}
        {/* Store Buttons */}
        <div className="absolute bottom-6 left-[15%] sm:left-[5%] md:left-[10%] lg:left-[8%] flex flex-col sm:flex-row gap-3 sm:gap-4 z-20">
        {/* App Store */}
              <a
                href="#"
                className="relative w-[150px] h-[45px] sm:w-[180px] sm:h-[55px] lg:w-[200px] lg:h-[60px] inline-block"
              >
                <img
                  src="/images/app store badge.svg"
                  alt="App Store"
                  className="absolute w-full h-full pointer-events-none"
                />
                {/* <div className="absolute inset-0 flex items-center px-2 sm:px-3 gap-2 sm:gap-3 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 814 1000"
                    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                    fill="#44551B"
                  >
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <p className="text-[10px] sm:text-[12px] text-[#44551B] font-rubik">
                      Download on the
                    </p>
                    <p className="text-[16px] sm:text-[20px] lg:text-[21px] font-bold text-[#44551B] font-rubik">
                      App Store
                    </p>
                  </div>
                </div> */}
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="relative w-[150px] h-[45px] sm:w-[180px] sm:h-[55px] lg:w-[200px] lg:h-[60px] inline-block"
              >
                <img
                  src="/images/play store badge.svg"
                  alt="Google Play"
                  className="absolute w-full h-full"
                />
                {/* <div className="absolute inset-0 flex items-center px-2 sm:px-3 gap-2 sm:gap-3 z-10">
                  <img
                    src="/icons/Google_Play_Arrow_logo.svg"
                    alt="Google Play"
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  />
                  <div className="text-left leading-tight">
                    <p className="text-[#44551B] text-[10px] sm:text-[12px]">GET IT ON</p>
                    <p className="font-semibold text-[#44551B] text-[16px] sm:text-[20px] lg:text-[19px]">
                      Google Play
                    </p>
                  </div>
                </div> */}
              </a>
            </div>

      </section>


    <section className="bg-white flex flex-col items-center py-20 font-rubik overflow-hidden">
      <div className="w-full max-w-8xl px-28">
        {/* Header */}
        <h1 className="text-4xl md:text-[36px] font-semibold text-[#181D27] mb-4 text-left">
          No delays. No guesswork. Just smarter decisions.
        </h1>
        

        <p className="text-gray-600 text-[20px] mb-16 max-w-4xl text-left font-normal">
          Track every material in real time. Act fast—give, move, use, flag, or restock the moment it’s needed—so your construction business grows with confident efficiency.
        </p>
        </div>

      {/* Scrollable Feature Cards - full width edge to edge */}
      <div
          ref={scrollRef}
          className="w-screen overflow-x-hidden scrollbar-hide whitespace-nowrap"
        >
          <div className="flex gap-8 w-max">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-[350px]"
              >
                <img
                  src={`/images/construction/${item.img}`}
                  alt={item.label}
                  className="w-[350px] h-[350px] object-contain mb-4"
                />
                <p className="text-[24px] font-semibold text-center text-[#181D27]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>


      {/* CTA Button */}
      <div className="flex justify-center items-center pt-20">
        {/* <a
          href="/get-started"
          className="inline-block w-[200px] h-[80px] bg-no-repeat bg-center bg-contain text-center text-black text-lg font-semibold leading-[80px]"
          style={{
            backgroundImage: "url('/images/Actions.png')",
          }}
        >
          Let's get started
        </a> */}
        <Button size="xl" variant="primary" className="w-[182px] mb-6 text-[#1C230C] font-semibold text-[16px]">Let's get started</Button>
      </div>
  
    </section>




    <section className="relative w-full bg-white pt-16 pb-24 px-2 md:px-4 overflow-hidden font-rubik">
      {/* Right Section BG Image — position absolute and top-right aligned */}
      {/* <img
        src="/images/construction/Bubbles.svg"
        alt="right gradient"
        className="absolute top-6 right-[12%] w-[242px] h-[262px] object-contain pointer-events-none z-0"
      /> */}

    <div className="relative z-10 w-full px-2 md:px-4">
      {/* Constrain content */}
      <div className="max-w-[1280px] mx-auto">
        {/* Centered H2 across both columns */}
        <h2 className="text-[#6E8A28] font-semibold text-[36px] mb-12 text-center">
        STOQ in Action.
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1280px] mx-auto">
          {/* Left Section */}
          <div className="flex flex-col text-lg">
            <div>
              <p className="text-[#535862] font-normal text-[20px] leading-relaxed mb-4">
              STOQ is the small Construction business inventory management app that serves as your real-time operations layer for physical resources. It maps tools, parts, and materials across jobs, teams, and sites — in one live, structured timeline.
              </p>
             
            </div>

            {/* Left Image — below text & flush left */}
            {/* <div className="-ml-16 -mt-20 p-0 relative">
              <img
                src="/images/construction/Bubbles (1).svg"
                alt="left gradient"
                className="w-[242px] h-[262px] object-contain"
              />
            </div> */}
          </div>

          {/* Right Section */}
          <div className="relative flex flex-col justify-start text-lg">
            <p className="text-[#535862] font-normal text-[20px] leading-relaxed mb-4">
            Instant clarity from the first use. STOQ’s game-style interface makes using the app fun—no training required for You or Your Construction crew.
            </p>
           
            
          </div>
        </div>
      </div>
    </div>
    </section>


    <TestimonialSection testimonials={testimonialsPage2}/>
    <ProffessionalPricingPlans />
     {/* CTA Button */}
     <div className="flex justify-center mt-0 pt-0 -translate-y-2 font-rubik">
      <a 
        href="/pricing" 
        className="text-[#6E8A28] font-semibold px-8 py-1 text-[16px] transition-all duration-200 hover:underline font-rubik"
      >
        See all plans
      </a>
    </div>
 
    {/* call to action */}
    <section className="w-full py-40 flex flex-col items-center justify-center text-center px-4 font-rubik">
      <h2 className="text-2xl md:text-[36px] font-semibold text-[#181D27] mb-4">
      Ready to run your Construction site like clockwork?
      </h2>
      <p className="text-[#535862] text-base md:text-[20px] mb-6">
      Start a free trial and track every tool, part, and load in one live dashboard.
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
};

export default ConstructionPage;