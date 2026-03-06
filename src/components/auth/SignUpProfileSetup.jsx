import React, { useState } from "react";
import documentIcon from "../../assets/image/Document.png";
import successfull from "../../assets/image/successfull.png";
const SignUpProfileSetup = () => {
  const [successfulPopUp, setSuccessfulPopUp] = useState(false);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-primary">
      <div className="flex flex-col items-center space-y-6">
        {/* Heading */}
        <h1 className="text-primary text-3xl font-bold text-center">
          Lets set up your student profile
        </h1>

        {/* CARD */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-md w-[550px]">
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <img src={documentIcon} alt="document" className="w-6 h-6" />
            <p className="font-semibold text-gray-700 text-lg">
              Personal Details
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-5">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-primary">Name *</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* DOB + EDUCATION */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Date Of Birth</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Education Level</label>
                <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>--Select education--</option>
                  <option>Secondary</option>
                  <option>Senior Secondary</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                </select>
              </div>
            </div>

            {/* COURSE + COLLEGE */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Target Course</label>
                <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>--Select Course--</option>
                  <option>B.Tech</option>
                  <option>BCA</option>
                  <option>BBA</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Target College</label>
                <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>--Select college--</option>
                  <option>IIT Delhi</option>
                  <option>NIT Trichy</option>
                  <option>Delhi University</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center pt-2 relative">
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setSuccessfulPopUp(true)}
                  className="bg-primary text-white px-10 py-3 rounded-full hover:opacity-90 transition"
                >
                  Submit
                </button>
              </div>
              {successfulPopUp && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                  <div className="bg-white rounded-2xl shadow-xl w-115 p-10 flex flex-col items-center text-center space-y-6">
                    {/* Success Icon */}
                    <img
                      src={successfull}
                      alt="success"
                      className="w-20 h-20"
                    />

                    {/* Message */}
                    <p className="text-lg font-medium text-gray-700">
                      Profile Created Successfully
                    </p>

                    {/* Button */}
                    <button
                      className="bg-primary text-white w-full py-3 rounded-full hover:opacity-90 transition"
                      onClick={() => setSuccessfulPopUp(false)}
                    >
                      Go to Home
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpProfileSetup;
