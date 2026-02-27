import React from "react";
import SignUpRightPannel from "../components/auth/SignUpRightPannel";

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
          <button
            onClick={() => {
              window.location.href = "/signup-otp-verification";
            }}
            className="max-w-md w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Send OTP
          </button>

          <p className="text-xs text-gray-500 max-w-md flex flex-col gap-1 justify-center items-center">
            <p> By signing up to create an account I accept Company’s </p>
            <p className=" text-primary">Terms of use & Privacy Policy.</p>
          </p>
        </div>

        {/* Right Side - Image Card */}
        <SignUpRightPannel />
      </div>
    </div>
  );
};

export default SignUp;
