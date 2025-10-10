import React from "react";
import Banner from "../Components/Banner";
import useApps from "../CustomHooks/useApps";
import { LuTrendingUp } from "react-icons/lu";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { HiMiniStar } from "react-icons/hi2";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(20, 28);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div>
      <Banner />
      <div className="mt-[80px] text-center  w-11/12  mx-auto ">
        <h1 className="text-4xl text-gray-700 font-extrabold mb-2 flex justify-center items-center gap-2">
          Trending Apps <LuTrendingUp className="text-blue-700 text-[60px]" />
        </h1>
        <p className="font-medium text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 py-10 md:px-0 px-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredApps.map((app) => (
            <Link to={`/app/${app.id}`} key={app.id}>
              <div className="card bg-base-100 border border-gray-300 shadow-sm hover:scale-104 ease-in-out gap-4 p-4">
                <figure className="">
                  <img
                    src={app.image}
                    alt="Furniture"
                    className="rounded-3xl"
                  />
                </figure>
                <p className="font-bold text-lg text-gray-800">{app.title}</p>
                <div className="card-end flex justify-between items-center font-bold">
                  <span className="flex items-center gap-1 text-sm text-[#00d390] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                    <PiDownloadSimpleBold className="text-xl" /> {app.downloads}
                    M
                  </span>
                  <span className="flex items-center text-sm gap-1 text-[#632EE3] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                    <HiMiniStar className="text-xl" /> {app.ratingAvg}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/apps"
          className="btn text-white  py-7 mb-10 text-xl px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg"
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default Home;
