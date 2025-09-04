import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../components/Button";
const professionalplans = [
  {
    title: "Standard Pro",
    price: "Free",
    subtitle: "Standard Pro features for 1 user.",
    features: [
      "1 user",
      "1GB of storage",
      "Basic inventory tracking",
    ],
    prefix: "Free",
  },
  {
    title: "Artisan",
    price: "$9,99",
    per: "per month",
    subtitle: "Advanced features and reporting.",
    features: [
      "1 admin user",
      "5 users for team collaboration",
      "30GB of storage",
      "Bonus: 1 family cluster, adding 10GB of storage",
      "Additional admin users for $4.99 per admin/month",
    ],
    prefix: "Starter",
    badge: "Popular",
  },
  {
    title: "Business",
    price: "$19,99",
    per: "per month",
    subtitle: "Unlimited features.",
    features: [
      "Unlimited admin users )$9,99 per admin/month)",
      "Unlimited team collaborators ($0,50 per user/month)",
      "50GB of storage",
      "Bonus: up to 5 STOQ clusters, adding an extra 50GB of storage",
    ],
    prefix: "Artisan Pro",
  },
];


const ProffessionalPricingPlans = () => {
    return (
      <div className="bg-white font-rubik">
         <section className="py-20 px-4 text-center">
      
        <h3 className="text-3xl md:text-4xl font-bold text-[#8CB031] mt-4 mb-10">
            Professional
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {professionalplans.map((plan, index) => (
            <div
            key={index}
            className="rounded-xl border border-[] shadow-sm p-6 bg-[#FBFDF6] flex flex-col h-full"
        >
            {/* Title + Badge */}
            <div className="flex justify-between items-center mb-4">
            <h4 className="text-[20px] font-semibold text-[#535862]">{plan.title}</h4>
            {plan.badge && (
                <span className="bg-[#E4F2C6] text-[#4B6100] text-xs font-semibold px-2 py-1 rounded-full">
                {plan.badge}
                </span>
            )}
            </div>
        
            {/* Price + Subtitle */}
            <div className="text-left mb-6">
            <p className="text-[60px] font-semibold text-[#181D27] leading-none mb-6">
                {plan.price}
                {plan.per && (
                <span className="text-[16px] font-medium text-[#535862] ml-2">
                    {plan.per}
                </span>
                )}
            </p>
            <p className="text-[16px] text-[#535862] font-normal mt-2">{plan.subtitle}</p>
            </div>
        
            {/* Button */}
            <Button size="xl" variant="primary" className="w-[320px] text-[#1C230C] text-[16px] mb-6">Get started</Button>
        
            {/* Divider */}
            <div className="-mx-6 border-b border-[#E9EAEB] mb-4" />
            
        
            {/* Features */}
            <div className="text-left">
            <h5 className="text-[16px] font-semibold text-[#181D27] mb-1">FEATURES</h5>
            {index === 0 ? (
              <p className="text-[16px] text-[#535862] mb-4">
                <span className="font-normal">{plan.prefix}</span> plus....
              </p>
            ) : (
              <p className="text-[16px] text-[#535862] font-normal mb-4">
                Everything in <span className="font-bold">{plan.prefix}</span> plus....
              </p>
            )}

          <ul className="space-y-4 text-[16px] text-[#535862] font-normal">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <img
                  className="w-[24px] h-[24px] mt-0.5 flex-shrink-0"
                  src="/images/Tickmark.svg"
                  alt="tick"
                />
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

export default ProffessionalPricingPlans;