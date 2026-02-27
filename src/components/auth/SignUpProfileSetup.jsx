import React, { useEffect, useState } from "react";
import SignUpRightPannel from "./SignUpRightPannel";
import documentIcon from "../../assets/image/Document.png";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const SignUpProfileSetup = () => {
  const [openSection, setOpenSection] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-primary">
      <div className="w-[85vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-primary text-3xl font-bold text-center">
            Let’s setup your profile.
          </h1>

          {/* CARD CONTAINER */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-2xl p-5 shadow-md">
            {/* HEADER */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpenSection(!openSection)}
            >
              <div className="flex items-center gap-3">
                <img src={documentIcon} alt="document" className="w-6 h-6" />
                <p className="font-semibold text-gray-700">
                  Personal Information
                </p>
              </div>

              {openSection ? (
                <IoChevronUpOutline size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>

            {/* CONTENT */}
            {openSection && (
              <div className="space-y-2">
                {/* NAME */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-primary">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* LINKEDIN */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-primary">
                    Your LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.linkedin.com/in/"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* LOCATION */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-primary">Location*</label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* JOB ROLE */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-primary">Job Role</label>
                  <input
                    type="text"
                    placeholder="Job Role"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* NEXT BUTTON */}
                <div className="flex justify-end pt-3">
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SECOND COLLAPSED SECTION */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-2xl p-5 shadow-md">
            <div
              onClick={() => setOpenCompany(!openCompany)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img src={documentIcon} alt="company" className="w-6 h-6" />
                <p className="font-semibold text-gray-700">
                  Company Information
                </p>
              </div>

              {openCompany ? (
                <IoChevronUpOutline size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>

            {openCompany && (
              <div className="mt-4">{/* Company fields here */}</div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <SignUpRightPannel />
      </div>
    </div>
  );
};

export default SignUpProfileSetup;
