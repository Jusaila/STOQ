import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white text-m text-[#6E8A28] px-6 pt-16 font-rubik">

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mb-16" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left">
        
        {/* Use Cases Column 1 */}
        <div>
          <h4 className="font-bold text-[#181D27] mb-3 text-sm">Use Cases</h4>
          <ul className="space-y-3 font-semibold text-[#596F22]">
          <li><a href="#construction" className="hover:text-[#44551B]">Construction</a></li>
          <li><a href="#Workshops" className="hover:text-[#44551B]">Workshops</a></li>
          <li><a href="#Farmers" className="hover:text-[#44551B]">Farmers</a></li>
          <li><a href="#Restaurant" className="hover:text-[#44551B]">Food & Cook</a></li>
          <li><a href="Households" className="hover:text-[#44551B]">Households</a></li>
        </ul>    

        </div>

        {/* Use Cases Column 2 */}
        <div>
          <h4 className="font-bold text-[#181D27] mb-3 text-sm">Use Cases</h4>
          <ul className="space-y-3 font-semibold text-[#596F22]">
            <li><a href="#Hobbyists" className="hover:text-[#44551B]" >Hobby / Collections</a></li>
            <li><a href="#Kids" className="hover:text-[#44551B]">Kids</a></li>
            <li><a href="#Freelancers" className="hover:text-[#44551B]">Freelancers</a></li>
            <li><a href="#Wellness" className="hover:text-[#44551B]">Wellness / Beauty</a></li>
            <li><a href="#ervices" className="hover:text-[#44551B]">Home Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-[#181D27] mb-3 text-sm">Company</h4>
          <ul className="space-y-3 font-semibold text-[#596F22]">
            <li><a href="#" className="hover:text-[#44551B]">About us</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-[#181D27] mb-3 text-sm">Resources</h4>
          <ul className="space-y-3 font-semibold text-[#596F22]">
            <li><a href="#" className="hover:text-[#44551B]">STOQ FAQs</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Help center</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Tutorials</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Support</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-[#181D27] mb-3 text-sm">Legal</h4>
          <ul className="space-y-3 font-semibold text-[#596F22]">
            <li><a href="/terms" className="hover:text-[#44551B]">Terms and conditions</a></li>
            {/* <li><a href="#" className="hover:text-[#44551B]">Privacy</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Cookies</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Licenses</a></li>
            <li><a href="#" className="hover:text-[#44551B]">Settings</a></li> */}
          </ul>
        </div>

        {/* Get the app */}
        <div className="left-[155px] flex flex-col gap-4 z-20 text-sm">
          <h3 className="text-[#181D27] font-bold">Get the app</h3>

          {/* App Store */}
          <Link to="/" className="cursor-pointer">
            <img
              src="/images/footer-app store badge.svg"
              alt="Get it on App Store"
              className="w-[180px] h-auto"
            />
          </Link>

        
         
         {/* Google Play */}
         <a href="#" className="inline-block">
         <img
            src="/images/footer-play store badge.svg"
            alt="Get it on Google Play"
            className="w-[180px] h-auto"
          />
        </a>              

        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-100 mx-20 mt-16 mb-8" />

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-0 pb-10 text-sm">
        <img src="/images/logo-small.svg" alt="STOQ Logo" className="h-10 mb-4 md:mb-0" />
        <p className="text-[#6B7280]">&copy; 2025 STOQ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
