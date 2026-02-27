import React from "react";
import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import SignUpOtpVerification from "./components/auth/SignUpOtpVerification";
import SignUpProfileSetup from "./components/auth/SignUpProfileSetup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route
        path="/signup-otp-verification"
        element={<SignUpOtpVerification />}
      />
      <Route path="/signup-profile-setup" element={<SignUpProfileSetup />} />
    </Routes>
  );
};

export default App;
