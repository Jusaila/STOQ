import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "../index.css";

// Industry items with icons
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Industries", items: industryItems.map((i) => i.label) },
    { name: "Features", items: ["Tracking", "Analytics", "Automation"] },
    { name: "Uses's Cases", items: [] },
    { name: "Pricing", items: ["Case Study 1", "Case Study 2"] },
    { name: "About STOQ", items: [] },
  ];

  return (
    <div className="w-full flex justify-center absolute top-6 z-20 px-4">
      <div className="w-full max-w-screen-2xl flex items-center justify-between bg-white/30 backdrop-blur-md border border-gray-300 shadow-md rounded-xl px-6 py-3">

        {/* Left Logo */}
        <img src="/images/Button Stoq.png" alt="STOQ Logo" className="h-6" />

        {/* Middle Nav Items - Desktop */}
        <div className="hidden md:flex space-x-14 text-sm font-medium text-gray-700 relative">
          {navItems.map((menu, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center gap-1 hover:text-black"
              >
                {menu.name}
                {menu.items.length > 0 && <ChevronDown size={14} />}
              </button>

              {/* Industries dropdown */}
              {menu.items.length > 0 && openDropdown === menu.name && (
                menu.name === "Industries" ? (
                  <div className="absolute top-full left-0 mt-4 bg-[#FBFDF6] backdrop-blur-md shadow-xl rounded-xl px-6 py-5 text-sm z-50 border border-gray-200 w-[700px]">
                    <div className="font-semibold text-gray-800 mb-4">
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

        {/* Right Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <button className="bg-white rounded-full px-3 py-1.5 text-gray-700 hover:text-black border border-gray-300">
            Log in
          </button>
          <button className="bg-[#A9CF45] text-white px-4 py-1.5 rounded-full hover:bg-[#8BB833] border border-gray-300">
            Sign up
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md rounded-lg px-4 py-6 absolute top-[80px] left-4 right-4 z-50 border border-gray-200">
          {navItems.map((menu, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-semibold text-gray-800 mb-1">{menu.name}</div>
              {menu.name === "Industries" ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 text-sm">
                  {industryItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 cursor-pointer hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                menu.items.length > 0 && (
                  <ul className="pl-2 text-gray-700 text-sm space-y-1">
                    {menu.items.map((item, i) => (
                      <li key={i} className="cursor-pointer hover:text-black">{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-3 mt-4">
            <button className="bg-white rounded-full px-4 py-2 text-gray-700 hover:text-black border border-gray-300">
              Log in
            </button>
            <button className="bg-[#A9CF45] text-white px-4 py-2 rounded-full hover:bg-[#8BB833] border border-gray-300">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
