import React, { useRef, useState } from "react";
import SignUpRightPannel from "./SignUpRightPannel";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpOtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move forward
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleotpVerification = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 4) {
      toast.error("Please enter the complete 4-digit OTP");
      return;
    }

    toast.success("OTP verified successfully");

    navigate("/signup-profile-setup");
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-primary">
      {/* Main Container */}
      <div className="w-[80vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - OTP Form */}
        <div className="space-y-6 flex flex-col justify-centern items-center">
          {/* Back Arrow */}
          <div className="flex items-center relative">
            <ArrowLeft
              onClick={() => window.history.back()}
              className="text-gray-600 cursor-pointer absolute right-100  "
            />
            <div>
              <h1 className="text-primary text-4xl font-bold w-full text-center ">
                Enter OTP
              </h1>
              <p className="text-gray-600 mt-3 text-sm flex items-center gap-1">
                <p className="text-[#212529]">
                  {" "}
                  A 4 digit code has been sent to
                </p>{" "}
                <span className="text-primary font-medium">
                  {" "}
                  example@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* OTP Inputs */}
          <div className="flex gap-4 w-72 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-xl rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleotpVerification}
            className="w-72  bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition cursor-pointer"
          >
            Verify OTP
          </button>

          {/* Resend Section */}
          <div className="flex gap-4 text-sm text-gray-500">
            <span>00:30</span>
            <button className="text-primary font-medium hover:underline">
              Resend OTP
            </button>
          </div>
        </div>

        {/* Right Side - Image Card */}
        <SignUpRightPannel />
      </div>
    </div>
  );
};

export default SignUpOtpVerification;
