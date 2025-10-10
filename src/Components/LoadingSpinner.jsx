import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="h-screen px-6 flex flex-col justify-center items-center bg-white">
      <div className="flex items-center gap-2 text-7xl text-[#2c0e8b] font-bold tracking-widest">
        <span>L</span>
        <img src={logo} alt="logo" className="h-20 w-20 spin-slow" />
        <span>ADING...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
