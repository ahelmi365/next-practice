"use client";
import { useState } from "react";
import RenewDrivingLicense from "../renew-driving-license/page";
import PaymentPage from "../payment/page";
import Stepper from "@/app/components/stepper/Stepper";

const LicenseRenewalFlow = () => {
  const steps = ["Search", "Details", "Payment", "Print", "Success"];
  const [activeStep, setActiveStep] = useState(1);

  const renderStepContent = () => {
    switch (activeStep) {
      case 1: // Search
        return <RenewDrivingLicense setActiveStep={setActiveStep} />;
      case 3: // Payment
        return <PaymentPage setActiveStep={setActiveStep} />;
      default:
        return <div>Step {activeStep} is under construction</div>;
    }
  };

  return (
    <div className="mx-auto p-6">
      <Stepper steps={steps} activeStep={activeStep} />
      {renderStepContent()}
    </div>
  );
};

export default LicenseRenewalFlow;
