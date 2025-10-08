import React from "react";
import { useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center font-bold text-xl gap-5 h-screen">
        <span className="text-red-500 text-8xl">🐣404 </span>
        <span>{error.message}</span>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
