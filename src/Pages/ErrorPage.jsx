import React from "react";
import { Link, useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className=" flex flex-col justify-center items-center font-bold text-xl gap-5 h-screen">
        <span>{error.message}</span>
        <img src={errorImg} alt="" className="w-xs md:w-sm" />
        <span className=" lg:text-5xl text-3xl">Oops, App not found! </span>
        <p className="font-medium text-base">
          The App you are requesting is not found on our system.
        </p>

        <Link
          to="/"
          className="btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-6 mb-10 text-xl px-10 "
        >
          Go Back!
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
