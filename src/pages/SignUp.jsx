import React from "react";
import signupimage from "../assets/image/signUp.png";
import SignUpProgressBar from "../components/auth/SignUpProgressBar";
const SignUp = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-primary ">
      {/* Main Container */}
      <div className=" w-[80vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Form */}
        <div className="space-y-4">
          <div>
            <h1 className="text-primary text-4xl font-bold">
              Nice to meet you!
            </h1>
            <p className="text-gray-600 mt-3  text-sm">
              Just a quick signup stands between you and the sparkling world of
              creators
            </p>
          </div>

          {/* Input */}

          <input
            type="email"
            placeholder="Enter your email"
            className=" border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary  w-[30rem]"
          />

          {/* Button */}
          <button className="max-w-md w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            Send OTP
          </button>

          <p className="text-xs text-gray-500 max-w-md flex flex-col gap-1 justify-center items-center">
            <p> By signing up to create an account I accept Company’s </p>
            <p className=" text-primary">Terms of use & Privacy Policy.</p>
          </p>
        </div>

        {/* Right Side - Image Card */}
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
              <SignUpProgressBar currentStep={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
