import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "../index.css";
import Button from "./Button";
// Industry items with icons
const industryItems = [
  { label: "Construction", icon: "/icons/Vector.png", link: "construction" },
  { label: "Home Services", icon: "/icons/Vector4.png", link: "" },
  { label: "Restaurants", icon: "/icons/Vector3.png", link: "" },
  { label: "Workshops", icon: "/icons/Vector2.png", link: "" },
  { label: "Households", icon: "/icons/Vector3.png", link: "Households" },
  { label: "Farmers", icon: "/icons/Vector.png", link: "" },
  { label: "Hobby/Collections", icon: "/icons/Vector3.png", link: "" },
  { label: "Wine lovers", icon: "/icons/Vector.png", link: "" },
  { label: "Kids", icon: "/icons/Vector4.png", link: "" },
  { label: "Freelancers", icon: "/icons/Vector2.png", link: "" },
  { label: "Wellness/Beauty", icon: "/icons/Vector4.png", link: "" },
  { label: "Sports/Health", icon: "/icons/Vector3.png", link: "" },
];
const featuresItems = [
  { label: "Construction", icon: "/icons/Vector.png", link: "#Construction" },
  { label: "Home Services", icon: "/icons/Vector4.png", link: "#Home Services" },
  { label: "Restaurants", icon: "/icons/Vector3.png", link: "#Restaurants" },
  { label: "Workshops", icon: "/icons/Vector2.png", link: "#Workshops" },
  { label: "Households", icon: "/icons/Vector3.png", link: "#Households" },
  { label: "Farmers", icon: "/icons/Vector.png", link: "#Farmers" },
  { label: "Hobby/Collections", icon: "/icons/Vector3.png", link: "#Hobby/Collections" },
  { label: "Wine lovers", icon: "/icons/Vector.png", link: "#Wine lovers" },
  
];
const pricingItems = [
  { label: "Startup Plan", icon: "/icons/Vector4.png", link: "#Startup" },
  { label: "Business Plan", icon: "/icons/Vector4.png" , link: "#Business" },
  { label: "Enterprise Plan", icon: "/icons/Vector4.png" , link: "#Enterprise" },
];




const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Industries", items: industryItems.map(i => ({ label: i.label, link: i.link })) },
    { name: "Features", items: [], link: "#Features"},
    { name: "User's Cases", items: [], link: "#Uses's Cases" },
    { name: "Pricing", items: [], link: "/pricing" },
    { name: "About STOQ", items: [], link: "/about" },
  ];
  
  return (
    <div className="w-full flex justify-center absolute top-6 z-20 px-4 font-rubik">
      <div className="w-full max-w-screen-2xl flex items-center justify-between bg-white/30 backdrop-blur-md border border-gray-300 shadow-md rounded-xl px-6 py-3">

        {/* Left Logo */}
        <img src="/images/logo-small.svg" alt="STOQ Logo" className="h-7"/>

        {/* Middle Nav Items - Desktop */}
        <div className="hidden md:flex space-x-24 text-md font-normal text-[#414651] relative">
          {navItems.map((menu, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center gap-1 text-[#414651] hover:text-black font-semibold"
              >
                <a href={menu.link}>{menu.name}</a>
                {menu.items.length > 0 && <ChevronDown size={14} />}
              </button>

              {menu.items.length > 0 && openDropdown === menu.name && menu.name === "Industries" && (
              <div
                className={`absolute top-full mt-4 bg-[#F0F7E1] backdrop-blur-md shadow-xl rounded-xl px-6 py-5 text-sm z-50 border border-gray-200 ${
                  menu.name === "Pricing" ? "w-[240px] left-1/2 -translate-x-1/2" : "w-[700px] left-0"
                }`}
              >
                <div className="font-semibold text-gray-800 mb-4 w-full text-left">
                  {menu.name}
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 w-[700px] text-gray-700 text-[14px]">
                  {industryItems.map((item, i) => (
                    <a key={i} href={item.link} className="flex items-center gap-2 hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 
              Uncomment if you want to re-enable Features dropdown:
            {menu.items.length > 0 && openDropdown === menu.name && menu.name === "Features" && (
              <div className="absolute top-full mt-4 bg-[#F0F7E1] backdrop-blur-md shadow-xl rounded-xl px-6 py-5 text-sm z-50 border border-gray-200 w-[700px] left-0">
                <div className="font-semibold text-gray-800 mb-4 w-full text-left">Features</div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 w-[700px] text-gray-700 text-[14px]">
                  {featuresItems.map((item, i) => (
                    <a key={i} href={item.link} className="flex items-center gap-2 hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

              Uncomment if you want to re-enable Pricing dropdown:
            {menu.items.length > 0 && openDropdown === menu.name && menu.name === "Pricing" && (
              <div className="absolute top-full mt-4 bg-[#F0F7E1] backdrop-blur-md shadow-xl rounded-xl px-6 py-5 text-sm z-50 border border-gray-200 w-[240px] left-1/2 -translate-x-1/2">
                <div className="font-semibold text-gray-800 mb-4 w-full text-left">Pricing</div>
                <div className="flex flex-col space-y-2 w-[200px] px-2 py-1 text-gray-700 text-[14px]">
                  {pricingItems.map((item, i) => (
                    <a key={i} href={item.link} className="flex items-center gap-2 hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            */}


            </div>
          ))}
        </div>

        {/* Right Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {/* <a href="#" className="bg-white rounded-full px-3 text-[15px] py-1.5 text-[#414651] hover:text-black border border-gray-300 font-rubik">
            Log in
          </a> */}
          {/* <a
          href="#"
          className="inline-block rounded-full px-3 py-1.5 
                    bg-gradient-to-b from-[#A9CF45] to-[#A9CF45] 
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_4px_6px_rgba(0,0,0,0.1)]
                    border-[1px] border-[#6E8A28] text-[#1C230C] text-[15px] font-medium text-center font-rubik
                    hover:from-[#8CB031] hover:to-[#8CB031] transition-colors duration-300"
        >
          Sign up
        </a> */}
   
   {/* <a
  href="#"
  style={{
    display: "inline-block",
    borderRadius: "9999px", // full rounded
    padding: "10px 14px", // same as px-3 py-1.5
    background: "bg-white",
    border: "2px solid #D5D7DA",
    // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    color: "#414651",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Rubik, sans-serif",
    textAlign: "center",
    textDecoration: "none",
    transition: "background 0.3s ease"
  }}
  
>
  Log in
</a>
        <a
  href="#"
  style={{
    display: "inline-block",
    borderRadius: "9999px", // full rounded
    padding: "10px 14px", // same as px-3 py-1.5
    background: "linear-gradient(#A9CF45, #A9CF45) padding-box, linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0)) border-box",
    border: "2px solid #8aa740",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    color: "#1C230C",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Rubik, sans-serif",
    textAlign: "center",
    textDecoration: "none",
    transition: "background 0.3s ease"
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background =
      "linear-gradient(#8CB031, #8CB031) padding-box, linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0)) border-box")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background =
      "linear-gradient(#A9CF45, #A9CF45) padding-box, linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0)) border-box")
  }
>
  Sign up
</a> */}
       
       <Button size="md" variant="secondary" className="w-[74px] font-semibold text-[#414651]">Login</Button>
<Button size="md" variant="primary" className="w-[84px] font-semibold text-[#1C230C]">Sign up</Button>




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
              <div className="font-semibold text-gray-800 mb-1">
                <a href="#">{menu.name}</a>
              </div>
              {menu.name === "Industries" ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 text-sm">
                  {industryItems.map((item, i) => (
                    <a key={i} href={item.link} className="flex items-center gap-2 cursor-pointer hover:text-black">
                      <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              ) : (
                menu.items.length > 0 && (
                  <ul className="pl-2 text-gray-700 text-sm space-y-1">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <a href={item.link} className="cursor-pointer hover:text-black">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-3 mt-4">
            <a href="#" className="bg-white rounded-full px-4 py-2 text-gray-700 hover:text-black border border-gray-300">
              Log in
            </a>
            <a href="#" className="bg-[#A9CF45] text-white px-4 py-2 rounded-full hover:bg-[#8BB833] border border-gray-300">
              Sign up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
