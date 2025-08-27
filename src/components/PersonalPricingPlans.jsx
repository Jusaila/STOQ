import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../components/Button";


const personallplans = [
    {
      title: "Standard",
      price: "Free",
      subtitle: "Basic features for 1 user.",
      features: [
        "1 user",
        "1GB of storage",
        "Reminders for low stock or explain dates",
      ],
      prefix:  (
        <>
          Standard <b>Starter</b> features
        </>
      ),
    },
    {
      title: "Family",
      price: "$4,99",
      per: "per month",
      subtitle: "Unlimited features",
      features: [
        "1 admin user",
        "5 family members",
        "10GB of storage",
        "Shared access for family members",
      ],
      prefix:(
        <>
          Everything in <b>Standard</b> plus....
        </>
      ),
      badge: "Popular",
    },
    
  ];
  

const PersonalPricingPlans = () => {
  return (
    <div className="bg-white font-rubik">
       

        <section className="py-20 px-4 text-center">
       
        <h3 className="text-3xl md:text-4xl font-bold text-[#8CB031] mt-4 mb-10">
            Personal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-0">
            {personallplans.map((plan, index) => (
            <div
            key={index}
            className="rounded-xl border border-gray-200 shadow-sm p-6 bg-[#FBFDF6] flex flex-col h-full"
        >
            {/* Title + Badge */}
            <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">{plan.title}</h4>
            {plan.badge && (
                <span className="bg-[#E4F2C6] text-[#4B6100] text-xs font-semibold px-2 py-1 rounded-full">
                {plan.badge}
                </span>
            )}
            </div>
        
            {/* Price + Subtitle */}
            <div className="text-left mb-6">
            <p className="text-[60px] font-extrabold text-black leading-none mb-6">
                {plan.price}
                {plan.per && (
                <span className="text-sm font-medium text-gray-600 ml-2">
                    {plan.per}
                </span>
                )}
            </p>
            <p className="text-sm text-gray-600 mt-2">{plan.subtitle}</p>
            </div>
        
           {/* Button inside pricing card (md size) */}
           {/* <div className="flex justify-center mb-6">
            <Button size="xl" variant="primary">
              Get started
            </Button>
          </div> */}
           {/* Button */}
           <Button size="xl" variant="primary" className="w-[528px] mb-6">Get started</Button>

            {/* Divider */}
            <div className="border-b border-gray-200 mb-4" />
        
            {/* Features */}
            <div className="text-left">
            <h5 className="text-sm font-bold text-gray-700 mb-2">FEATURES</h5>
            <p className="text-sm text-gray-500 font-medium mb-3">
               {plan.prefix}
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
                {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 min-w-[20px] min-h-[20px] rounded-full bg-white border border-[#6E8A28] flex items-center justify-center mt-0.5">
                    <svg
                        className="w-3 h-3 text-[#6E8A28]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 111.414-1.414l2.707 2.707 7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>

                    </span>
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
        
            ))}
        </div>
        </section>      
    </div>
  );
};

export default PersonalPricingPlans;
