"use client";

import Link from "next/link";

interface StepperProps {
  steps: string[];
  activeStep: number;
}

const stepUrls = {
  Search: "/license-renewal",
  Details: "/details",
  Payment: "/payment",
  Print: "/print",
  Success: "/success",
};

const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center relative">
        {steps.map((step, index) => (
          <Link
            href={stepUrls[step as keyof typeof stepUrls]}
            key={step}
            className={`flex items-center group cursor-pointer ${
              index > activeStep - 1 ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full ${
                index === activeStep - 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              } flex items-center justify-center font-semibold group-hover:scale-105 transition-transform`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <span
              className={`ml-2 ${
                index === activeStep - 1
                  ? "font-semibold text-blue-600"
                  : "text-gray-600"
              } group-hover:text-blue-500`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 left-[calc(${
                  (100 / (steps.length - 1)) * index
                }%+100px)] right-[calc(${
                  100 - (100 / (steps.length - 1)) * (index + 1)
                }%)] h-[2px] bg-gray-200 -z-10`}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
