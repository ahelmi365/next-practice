"use client";
import React, { SetStateAction } from "react";
import Stepper from "@/app/components/stepper/Stepper";

interface PaymentPageeProps {
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const PaymentPage = ({ setActiveStep }: PaymentPageeProps) => {
  return (
    <div className="mx-auto p-6">
      {/* Payment Details */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Driver License Payment Details
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please check the payment details and click proceed to pay
        </p>

        {/* Payment Summary */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-lg font-semibold mb-4 px-4">Payment Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-gray-600">Fine for late D.Lic Renewal</span>
              <span className="font-medium">ADE 70.00</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-gray-600">
                Renewing A Driving License For More Than One Year
              </span>
              <span className="font-medium">ADE 300.00</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-gray-600">Knowledge/innovation Fees</span>
              <span className="font-medium">ADE 20.00</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
              <span className="font-semibold">Total Amount to Pay</span>
              <span className="font-semibold text-blue-600">ADE 390.00</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <p className="text-gray-600 mb-6">Choose a payment method</p>

          <div className="grid grid-cols-3 gap-6">
            {/* Cash Option */}
            <button className="p-6 border rounded-lg hover:border-blue-600 hover:shadow-md transition-all group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-600 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                  Cash
                </span>
              </div>
            </button>

            {/* Card Option */}
            <button className="p-6 border rounded-lg hover:border-blue-600 hover:shadow-md transition-all group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-600 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                  Card
                </span>
              </div>
            </button>

            {/* NOL Option */}
            <button className="p-6 border rounded-lg hover:border-blue-600 hover:shadow-md transition-all group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600 group-hover:text-blue-600">
                    nol
                  </span>
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                  nol
                </span>
              </div>
            </button>
          </div>

          {/* Total Amount Display */}
          <div className="mt-8 p-4 border rounded-lg bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Amount to Pay</span>
              <span className="text-xl font-semibold text-blue-600">
                ADE 390.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
