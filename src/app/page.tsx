"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
interface PricingProps {
  id: number;
  title: string;
}
interface PlanProps {
  id: number;
  title: string;
  price: string;
  plan: string;
  features: string[];
}

const pricing: PricingProps[] = [
  {
    id: 1,
    title: "Monthly",
  },
  {
    id: 2,
    title: "Quarterly (save 10%)",
  },
];

const plans: PlanProps[] = [
  {
    id: 1,
    title:
      "Ideal for those who've already got their website up and running and are seeking assistance to enhance it further.",
    price: "$2500",
    plan: "Pro",
    features: [
      "3-5 day turnaround",
      "Native Development",
      "Task delivered one-by-one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
  },
  {
    id: 2,
    title:
      "Ideal if you want to build or scale your website fast, with the strategy calls included.",
    price: "$3800",
    plan: "Pro Plus",
    features: [
      "1-3 day turnaround",
      "Monthly strategy call",
      "Commercial license",
      "Native Development",
      "Tasks delivered one-by-one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
  },
  {
    id: 3,
    title:
      "If these plans don't fit, let's create one that suits. Customize your subscription for a perfect fit, bigger or smaller!",
    price: "Let's talk",
    plan: "Custom",
    features: [
      "Everything in design & development",
      "Strategy workshop",
      "Priority support",
      "Multiple tasks at once",
      "Ongoing autonomous A/B testing",
      "Advanced custom development",
    ],
  },
];
export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-gradient-to-b from-[#e8dffa] to-[#f8f4fb] lg:h-screen p-10 lg:px-20 lg:py-10 ">
      <div className="flex  justify-center flex-col items-center ">
        <div className=" flex items-center text-center flex-col w-full max-w-xl">
          <div
            className={`text-primary font-semibold text-4xl pb-4 ${montserrat.className}`}
          >
            Choose your right plan!
          </div>
          <div className="text-secondary ">
            Select from the best plans, ensuring a perfect match. Need more or
            less?{" "}
          </div>
          <div className="text-secondary">
            Customize your subscription for a seamless fit!
          </div>
          <div className="flex flex-row w-full justify-center bg-white rounded-full space-x-1  mt-8 h-12 px-1 py-1">
            {pricing.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`${
                    isActive ? "text-white" : "hover:opacity-80"
                  } relative  text-sm font-medium text-secondary  transition focus-visible:outline-2 w-full `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 rounded-full bg-primary  px-0.5 "
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 ">
        {plans.map((item) => {
          const isFirstTwoPlans = [1, 2].includes(item.id);
          return (
            <div
              key={item.id}
              className={`${
                isFirstTwoPlans
                  ? "bg-white border"
                  : "bg-gradient-to-b from-[#e8dffa] to-[#fff] border-primary border"
              } flex rounded-xl p-6 flex-col gap-3 `}
            >
              <div className="">
                <span
                  className={`${
                    !isFirstTwoPlans ? "bg-white text-primary" : "bg-primary"
                  }  py-2 px-4 rounded-xl`}
                >
                  {item.plan}
                </span>
              </div>

              <p className="text-secondary text-xs">{item.title}</p>
              <div className="flex flex-row items-end">
                <span
                  className={`text-primary font-semibold text-4xl  ${montserrat.className}`}
                >
                  {item.price}
                </span>
                {isFirstTwoPlans && (
                  <span className="text-secondary text-xs ml-2">/month</span>
                )}
              </div>
              <span
                className={`${
                  isFirstTwoPlans ? "" : "border-primary"
                } border border-b-0  `}
              />

              <span
                className={`${montserrat.className} flex-grow font-semibold text-primary text-xs`}
              >
                {item.features.map((feature) => (
                  <div key={feature} className="flex flex-row pb-2 gap-1">
                    <Check className="text-primary" size={16} />
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </span>
              <div className="place-items-end w-full">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`${
                    isFirstTwoPlans
                      ? "border text-primary "
                      : "bg-secondary text-white"
                  } h-10 rounded-xl text-xs font-semibold cursor-pointer w-full`}
                >
                  {isFirstTwoPlans ? "Get Started" : "Book a Call"}
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
