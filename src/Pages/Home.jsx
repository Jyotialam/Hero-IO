import React from "react";
import Banner from "../Components/Banner";
import useApps from "../CustomHooks/useApps";
import { LuTrendingUp } from "react-icons/lu";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { HiMiniStar } from "react-icons/hi2";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, setError } = useApps();
  console.log(apps);
  const featuredApps = apps.slice(20, 28);
  return (
    <div>
      <Banner />
      <div className="mt-[80px] text-center max-w-screen-xl">
        <h1 className="text-4xl text-gray-700 font-extrabold mb-2 flex justify-center items-center gap-2">
          Trending Apps <LuTrendingUp className="text-blue-700 text-[60px]" />
        </h1>
        <p className="font-medium text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredApps.map((app) => (
            <div
              key={app.id}
              className="card bg-base-100 border border-gray-300 shadow-sm hover:scale-104 ease-in-out gap-4 p-4"
            >
              <figure>
                <img src={app.image} alt="Furniture" className="rounded-3xl" />
              </figure>
              <p className="font-bold text-lg text-gray-800">{app.title}</p>
              <div className="card-end flex justify-between items-center font-bold">
                <span className="flex items-center gap-1 text-sm text-[#00d390] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                  <PiDownloadSimpleBold className="text-xl" /> {app.downloads}
                </span>
                <span className="flex items-center text-sm gap-1 text-[#632EE3] bg-[#f1f5e8] py-2 px-4 rounded-lg">
                  <HiMiniStar className="text-xl" /> {app.downloads}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* end */}
        <Link
          to="/apps"
          className="btn text-white bg-gradient-to-r py-6 mb-10 text-xl px-10 from-[#632EE3] to-[#9F62F2]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
