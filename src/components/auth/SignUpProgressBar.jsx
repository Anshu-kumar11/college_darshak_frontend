import React from "react";

const steps = [
  { id: 1, label: "Sign up" },
  { id: 2, label: "Basic Information" },
  { id: 3, label: "What do you want to achieve?" },
];

const SignUpProgressBar = ({ currentStep = 1 }) => {
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="flex items-center gap-4 relative">
            {/* Vertical Line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-[14px] top-8 h-full w-[2px] bg-white/40" />
            )}

            {/* Circle */}
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full border 
              ${
                isCompleted
                  ? " border-white text-white "
                  : isActive
                    ? "border-white text-white"
                    : "border-white/40 text-white/60"
              }`}
            >
              {isCompleted ? "✓" : step.id}
            </div>

            {/* Label */}
            <p
              className={`text-sm ${
                isActive || isCompleted ? "text-white" : "text-white/60"
              }`}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SignUpProgressBar;
