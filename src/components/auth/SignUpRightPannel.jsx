import React from "react";
import signupimage from "../../assets/image/signUp.png";
import SignUpProgressBar from "../auth/SignUpProgressBar";

const SignUpRightPannel = () => {
  return (
    <div className="hidden lg:flex justify-end">
      <div className="relative w-[450px] h-[90vh] rounded-xl overflow-hidden shadow-2xl">
        {/* Image */}
        <img
          src={signupimage}
          alt="Graduation"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 signup-img-gradient" />

        {/* Text Content */}
        <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 text-white z-10 w-full px-8">
          <h2 className="text-3xl font-semibold leading-snug">
            Create your account
          </h2>
          <p className="text-2xl ml-20 opacity-80 [text-shadow:0px_4px_12px_rgba(0,0,0,0.4)]">
            in few clicks
          </p>
        </div>

        {/* Stepper */}
        <div className="absolute bottom-20 left-1/3 -translate-x-1/2 z-10">
          <SignUpProgressBar currentStep={3} />
        </div>
      </div>
    </div>
  );
};

export default SignUpRightPannel;
