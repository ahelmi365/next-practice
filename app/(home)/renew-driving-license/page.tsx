"use client";
import { SetStateAction, useRef, useState } from "react";
interface RenewDrivingLicenseProps {
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const RenewDrivingLicense = ({ setActiveStep }: RenewDrivingLicenseProps) => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [trafficCode, setTrafficCode] = useState("");

  const licenseNumberRef = useRef<HTMLInputElement>(null);
  const birthYearRef = useRef<HTMLInputElement>(null);
  const trafficCodeRef = useRef<HTMLInputElement>(null);

  const [focusedInput, setFocusedInput] = useState<string>("");

  return (
    <div className=" mx-auto p-6">
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Search for Driver License Card
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please fill in the information below and click on search
        </p>

        <div className="grid grid-cols-2 gap-3 ">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                License Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter License Number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                onFocus={() => setFocusedInput("license")}
                ref={licenseNumberRef}
              />
              <span className="text-xs text-gray-500">E.g.1234567</span>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Birth Year (YYYY)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="YYYY"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                onFocus={() => setFocusedInput("birth")}
                ref={birthYearRef}
              />
              <span className="text-xs text-gray-500">E.g.2000</span>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Traffic Code Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Traffic Code Number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={trafficCode}
                onChange={(e) => setTrafficCode(e.target.value)}
                onFocus={() => setFocusedInput("traffic")}
                ref={trafficCodeRef}
              />
              <span className="text-xs text-gray-500">E.g.12345678</span>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                License Source<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="Abu Dhabi"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
              />
              <span className="text-xs text-gray-500">
                This Service is Only Valid for ABU DHABI
              </span>
            </div>
          </div>

          <div className="self-end">
            {/* Numeric Keypad */}
            <div className="grid grid-cols-3 gap-4 max-w-[300px] mx-auto mt-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    if (focusedInput === "license")
                      setLicenseNumber((prev) => prev + num);
                    else if (focusedInput === "birth")
                      setBirthYear((prev) => prev + num);
                    else if (focusedInput === "traffic")
                      setTrafficCode((prev) => prev + num);
                  }}
                  className={`p-3 text-center border rounded-md hover:bg-gray-100 transition-colors shadow-md`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => {
                  if (focusedInput === "license")
                    setLicenseNumber((prev) => prev + "0");
                  else if (focusedInput === "birth")
                    setBirthYear((prev) => prev + "0");
                  else if (focusedInput === "traffic")
                    setTrafficCode((prev) => prev + "0");
                }}
                className="p-3 text-center border rounded-md hover:bg-gray-100 transition-colors col-start-2"
              >
                0
              </button>
              <button
                onClick={() => {
                  if (focusedInput === "license")
                    setLicenseNumber((prev) => prev.slice(0, -1));
                  else if (focusedInput === "birth")
                    setBirthYear((prev) => prev.slice(0, -1));
                  else if (focusedInput === "traffic")
                    setTrafficCode((prev) => prev.slice(0, -1));
                }}
                className="p-3 text-center border rounded-md hover:bg-gray-100 transition-colors col-start-3"
              >
                ⌫
              </button>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button
                className="w-1/5 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mt-8"
                onClick={() => {
                  setActiveStep(3);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewDrivingLicense;
