import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      <div className="flex-1 max-w-screen-xl w-full mx-auto p-4 md:p-8 lg:p-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
