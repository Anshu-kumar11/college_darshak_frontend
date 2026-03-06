import React, { useState } from "react";
import SignUpRightPannel from "../components/auth/SignUpRightPannel";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleOtpSend = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("OTP sent successfully");
    navigate("/signup-otp-verification");
    setEmail("");
  };
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
              Let’s get you set up — to unlock your world of learning!
            </p>
          </div>

          {/* Input */}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className=" border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary  w-[30rem]"
          />

          {/* Button */}
          <button
            onClick={handleOtpSend}
            className="max-w-md w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition cursor-pointer"
          >
            Send OTP
          </button>

          {/* Divider */}
          <div className="flex items-center max-w-md w-full my-4">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or signup with</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 max-w-md w-full">
            {/* Password */}
            <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 rounded-xl py-3 bg-white hover:bg-gray-200 transition">
              <span className="text-teal-600 text-lg">
                <MdLockOutline />
              </span>
              <span className="font-medium text-gray-700">Password</span>
            </button>

            {/* Google */}
            <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 rounded-xl py-3 bg-white hover:bg-gray-200 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              <span className="font-medium text-gray-700">Google</span>
            </button>
          </div>

          {/* Bottom Login Links */}
          <p className="text-sm text-gray-500 max-w-md text-center mt-4">
            Already have an account?{" "}
            <span className="text-primary font-medium cursor-pointer">
              Login
            </span>
            <span className="mx-2">|</span>
            Are you a mentor?{" "}
            <span className="text-primary font-medium cursor-pointer">
              Login
            </span>
          </p>
        </div>

        {/* Right Side - Image Card */}
        <SignUpRightPannel />
      </div>
    </div>
  );
};

export default SignUp;
