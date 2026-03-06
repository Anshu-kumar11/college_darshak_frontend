import React from "react";
import signupimage from "../../assets/image/signUp.png";

const SignUpRightPannel = () => {
  return (
    <div className="hidden lg:flex justify-end">
      <div className="relative w-112.5 h-[90vh] rounded-xl overflow-hidden shadow-2xl">
        {/* Image */}
        <img
          src={signupimage}
          alt="Graduation"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 signup-img-gradient" />

        {/* Text Content */}
        <div className="absolute top-[8%] left-12 text-white z-10 max-w-[420px]">
          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight ml-8">
            Everything you need,
          </h2>

          {/* Sub heading */}
          <p className="text-4xl font-light opacity-90 leading-tight ml-48">
            in one place
          </p>

          {/* Description */}
          <p className="mt-4 text-lg opacity-80 [text-shadow:0px_4px_12px_rgba(0,0,0,0.4)]">
            Sign in to manage tasks, progress, and insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpRightPannel;
