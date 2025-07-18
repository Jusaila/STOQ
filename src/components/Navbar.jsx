import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import "../index.css";
const industryItems = [
  { label: "Construction", icon: "/icons/Vector.png" },
  { label: "Home Services", icon: "/icons/Vector4.png" },
  { label: "Restaurants", icon: "/icons/Vector3.png" },
  { label: "Workshops", icon: "/icons/Vector2.png" },
  { label: "Households", icon: "/icons/Vector3.png" },
  { label: "Farmers", icon: "/icons/Vector.png" },
  { label: "Hobby/Collections", icon: "/icons/Vector3.png" },
  { label: "Wine lovers", icon: "/icons/Vector.png" },
  { label: "Kids", icon: "/icons/Vector4.png" },
  { label: "Freelancers", icon: "/icons/Vector2.png" },
  { label: "Wellness/Beauty", icon: "/icons/Vector4.png" },
  { label: "Sports/Health", icon: "/icons/Vector3.png" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="w-full flex justify-center absolute top-6 z-20 px-4">
      <div className="w-full max-w-screen-2xl flex items-center justify-between bg-white/30 backdrop-blur-md border border-gray-300 shadow-md rounded-xl px-6 py-3">

        {/* Left Logo */}
        {/* Logo */}
        <img src="/images/Button Stoq.png" alt="STOQ Logo" className="h-6 mb-4 md:mb-0" />


        {/* Middle Nav Items */}
        <div className="hidden md:flex space-x-14 text-sm font-medium text-gray-700 relative">
          {[
            { name: "Industries", items: ["Farmers", "Restaurants", "Construction"] },
            { name: "Features", items: ["Tracking", "Analytics", "Automation"] },
            { name: "Uses's Cases", items: [] },
            { name: "Pricing", items: ["Case Study 1", "Case Study 2"] },   
            { name: "About STOQ", items: [] },
          ].map((menu, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center gap-1 hover:text-black"
              >
                {menu.name}
                {menu.items.length > 0 && <ChevronDown size={14} />}
              </button>

              {/* Dropdown */}
              {menu.items.length > 0 && openDropdown === menu.name && (
              menu.name === "Industries" ? (
                <div className="absolute top-full left-0 mt-4 bg-[#FBFDF6] backdrop-blur-md shadow-xl rounded-xl px-6 py-5 text-sm z-50 border border-gray-200 w-[700px]">
                  <div className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    Industries
                    
                  </div>

                  <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-gray-700 text-[14px]">
                  {industryItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 cursor-pointer hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                </div>
              ) : (
                <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-2 px-4 text-sm text-gray-700 space-y-1 z-50 border border-gray-200">
                  {menu.items.map((item, i) => (
                    <div key={i} className="hover:text-black cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              )
            )}

            </div>
          ))}
        </div>

        {/* Right Auth Buttons */}
        <div className="flex items-center space-x-4 text-sm font-medium">
        <button className="bg-white rounded-full px-3 py-1.5 text-gray-700 hover:text-black border border-gray-300">
        Log in
          </button>

          <button className="bg-[#A9CF45] text-white px-4 py-1.5 rounded-full hover:bg-[#8BB833] border border-gray-300">
            Sign up
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
