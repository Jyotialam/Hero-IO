import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center font-bold h-screen">
        404 {error.message}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
