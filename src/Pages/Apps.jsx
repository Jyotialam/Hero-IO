import React, { useState } from "react";

import useApps from "../CustomHooks/useApps";
import { DiVisualstudio } from "react-icons/di";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { HiMiniStar } from "react-icons/hi2";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import nodataImg from "../assets/App-Error.png";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          <div className="mt-[50px] text-center max-w-screen-xl mx-auto px-2">
            <div className="mb-20">
              <h1 className="text-4xl text-gray-700 font-extrabold mb-2 flex justify-center items-center gap-2">
                Our All Applications{" "}
                <DiVisualstudio className="text-blue-700 text-[60px]" />
              </h1>
              <p className="text-lg text-gray-400">
                Explore All Apps on the Market developed by us. We code for
                Millions
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between items-center py-1 px-1">
              <h1 className="lg:text-3xl md:text-2xl text-md text-gray-700 font-bold">
                <span>({searchedApps.length})</span> Apps Found
              </h1>
              {/*  */}
              <label className="input input-primary bg-[#F5F5F5]  ">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  required
                  placeholder="search Apps"
                />
              </label>
            </div>
            {/*  */}

            {searchedApps.length === 0 ? (
              <div className="flex flex-col justify-center items-center  w-full text-center p-10 space-y-5">
                <img src={nodataImg} alt="" className="w-xs md:w-sm"/>
                <div className="flex justify-between items-center gap-5">
                  <Link
                    to="/"
                    onClick={() => setSearch("")}
                    className="btn rounded-xl text-white bg-[#332A51] py-6 mb-10 text-xl px-10 "
                  >
                    Go Back!
                  </Link>
                  <Link
                    to="/apps"
                    onClick={() => setSearch("")}
                    className="btn rounded-xl text-white bg-[#332A51] py-6 mb-10 text-xl px-10 "
                  >
                    Brows Apps!
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid  md:px-0 px-4 mt-[10px] grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                {searchedApps.map((app) => (
                  <Link to={`/app/${app.id}`} key={app.id}>
                    <div className="card bg-base-100 border border-gray-300 shadow-sm hover:scale-104 ease-in-out gap-4 p-4">
                      <figure>
                        <img src={app.image} alt="" className="rounded-3xl" />
                      </figure>
                      <p className="font-bold text-lg text-gray-800">
                        {app.title}
                      </p>
                      <div className="card-end flex justify-between items-center font-bold">
                        <span className="flex items-center gap-1 text-sm text-[#00d390] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                          <PiDownloadSimpleBold className="text-xl" />{" "}
                          {app.downloads}M
                        </span>
                        <span className="flex items-center text-sm gap-1 text-[#632EE3] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                          <HiMiniStar className="text-xl" /> {app.ratingAvg}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Apps;
