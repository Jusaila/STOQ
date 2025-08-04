import React from "react";

const HomeFeaturesSection = ({ title, subtitle, features, buttonText }) => {
  return (
    <div className="w-full py-20 bg-white font-rubik">
      <div className="max-w-[1300px] mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#141807] mb-2">
          {title}
        </h2>
        <p className="text-[#6E6E6E] text-sm md:text-base max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-16 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.image} alt={feature.label} className="w-24 h-24 mb-4" />
              <p className="font-semibold">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {buttonText && (
          <button className="bg-[#A9CF45] hover:bg-[#8cb031] text-white font-semibold px-6 py-2 rounded-full">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeFeaturesSection;
