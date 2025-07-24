import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-[#7A7A7A] px-6 pt-16">

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-16" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left">
        {/* Use Cases Column 1 */}
        <div>
          <h4 className="font-bold text-black mb-3">Use Cases</h4>
          <ul className="space-y-2 font-semibold text-[#7DA627]">
            <li><a href="#construction">Construction</a></li>
            <li><a href="#Workshops">Workshops</a></li>
            <li><a href="#Farmers">Farmers</a></li>
            <li><a href="#Restaurant">Restaurants</a></li>
            <li><a href="#Home & Care">Home & Care</a></li>
          </ul>
        </div>

        {/* Use Cases Column 2 */}
        <div>
          <h4 className="font-bold text-black mb-3">Use Cases</h4>
          <ul className="space-y-2 font-semibold text-[#7DA627]">
            <li><a href="#Hobbyists">Hobbyists</a></li>
            <li><a href="#Kids">Kids</a></li>
            <li><a href="#Freelancers">Freelancers</a></li>
            <li><a href="#Wellness">Wellness</a></li>
            <li><a href="#ervices">Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-black mb-3">Company</h4>
          <ul className="space-y-2 font-semibold text-[#7DA627]">
            <li><a href="#">About us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-black mb-3">Resources</h4>
          <ul className="space-y-2 font-semibold text-[#7DA627]">
            <li><a href="#">STOQ FAQs</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-black mb-3">Legal</h4>
          <ul className="space-y-2 font-semibold text-[#7DA627]">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>

        {/* Get the app */}
        <div className="left-[155px] flex flex-col gap-4 z-20">
          <h3 className="text-black font-bold">Get the app</h3>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-[#44551B] hover:shadow-lg transition"
          >
            <img src="/images/apple-logo.png" alt="Apple" className="w-6 h-6 mr-3" />
            <div className="text-left text-sm leading-tight">
              <p className="text-white text-xs">Download on the</p>
              <p className="font-semibold text-white">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-[#44551B] hover:shadow-lg transition"
          >
            <img src="/icons/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6 mr-3" />
            <div className="text-left text-sm leading-tight">
              <p className="text-xs text-white">GET IT ON</p>
              <p className="font-semibold text-white">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mt-16 mb-8" />

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-0 pb-10 text-sm">
        <img src="/images/Button Stoq.png" alt="STOQ Logo" className="h-6 mb-4 md:mb-0" />
        <p className="text-[#6B7280]">&copy; 2025 STOQ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
