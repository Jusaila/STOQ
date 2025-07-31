import React from "react";
import Navbar from "../../components/Navbar";
const HouseholdPage = () => {
  return (
    <div className="relative h-screen overflow-hidden font-rubik">
      {/* Background Video or Image */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/videos/backgound new.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-[#A9CF45] pt-20">
        <div className="relative flex items-center justify-center">
          {/* STOQ Logo Image (with transparent O) */}
          <img
            src="/images/STOQ Logo Final.png"
            alt="STOQ Logo"
            className="w-[1000px] h-[950px] object-contain"
            style={{ transform: "translateX(-70px)" }}
          />

          {/* HOUSEHOLDS bubble centered in the O */}
          <div
            className="absolute w-[260px] h-[250px] rounded-full text-[23px] font-bold text-black flex items-center justify-center z-20"
            style={{
              top: "48%",
              left: "50.2%",
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
            HOUSEHOLDS
          </div>

          {/* TRY Bubble Image */}
          <div
            className="absolute w-[390px] h-[390px] rounded-full overflow-hidden flex items-center justify-center z-20 cursor-pointer"
            style={{
              top: "49%",
              left: "77%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => alert("Navigating to TRY logic...")}
          >
            <img
              src="/images/Button Shpehere Black.png"
              alt="TRY"
              className="w-14 h-14 object-contain mb-2"
            />
          </div>

          {/* Slogan */}
          <div
            className="absolute text-[#6E8A28] text-5xl font-bold text-right font-rubik"
            style={{ bottom: "200px", left: "910px" }}
          >
            SEE.DO.GROW
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseholdPage;
