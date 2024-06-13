import React from 'react';

interface IndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const Indicator: React.FC<IndicatorProps> = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, step) => (
        <div
          key={step}
          className={`h-2 w-2 rounded-full ${
            step + 1 === currentStep ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Indicator;