import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="w-full flex justify-center absolute top-6 z-20 px-4">
      <div className="w-full max-w-screen-xl flex items-center justify-between bg-white/30 backdrop-blur-md border border-gray-300 shadow-md rounded-xl px-6 py-3">

        {/* Left Logo */}
        <div className="flex items-center text-2xl font-bold text-[#82B622] font-rubik">
          <span className="mr-1">ST</span>
          <span className="text-black bg-white px-1 rounded-full">O</span>
          <span className="ml-1">Q</span>
        </div>

        {/* Middle Nav Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 relative">
          {[
            { name: "Industries", items: ["Farmers", "Restaurants", "Construction"] },
            { name: "Features", items: ["Tracking", "Analytics", "Automation"] },
            { name: "User’s Cases", items: ["Case Study 1", "Case Study 2"] },
            { name: "Pricing", items: [] },
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
                <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-2 px-4 text-sm text-gray-700 space-y-1 z-50 border border-gray-200">
                  {menu.items.map((item, i) => (
                    <div key={i} className="hover:text-black cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
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
