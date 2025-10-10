import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "../App.css";

const MainLayOut = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayOut;
