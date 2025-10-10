import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import avgRatingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { SlSocialDropbox } from "react-icons/sl";
import { toast } from "react-toastify";
import useApps from "../CustomHooks/useApps.js";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "../Pages/ErrorPage";
import { Link } from "react-router";

const Installation = () => {
  const { loading, error } = useApps();
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedList"));
    if (savedList) setInstalled(savedList);
  }, []);

  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);
    if (type === "low") {
      const sortedByLow = [...installed].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalled(sortedByLow);
    } else if (type === "high") {
      const sortedByHigh = [...installed].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalled(sortedByHigh);
    }
  };

  const handleUninstall = (id) => {
    const existingList =
      JSON.parse(localStorage.getItem("installedList")) || [];
    let updatedList = existingList.filter((ap) => ap.id !== id);
    localStorage.setItem("installedList", JSON.stringify(updatedList));
    setInstalled(updatedList);
    toast("✅ Successfully UnInstalled");
  };
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div>
      <div className="container mx-auto text-center my-[80px]">
        <h1 className="text-[40px] font-bold flex justify-center text-gray-800 items-center gap-2">
          Your Installed Apps{" "}
          <SlSocialDropbox className="text-5xl text-[#5307f7]" />
        </h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="space-y-6 mt-10">
          <div className="flex justify-between p-3 items-center border-b border-gray-300">
            <span className="text-2xl font-bold text-gray-500">
              ({installed.length}) Products Found
            </span>

            <details className="dropdown">
              <summary className="btn m-1 bg-[#23BE0A] rounded-md text-white">
                {sort === "low"
                  ? "Low-High"
                  : sort === "high"
                  ? "High-Low"
                  : "Sort By ▾"}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <button
                    onClick={() => handleSort("low")}
                    className={`${
                      sort === "low" ? "bg-amber-300 font-bold" : ""
                    }`}
                  >
                    Low-High
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSort("high")}
                    className={`${
                      sort === "high" ? "bg-amber-300 font-bold" : ""
                    }`}
                  >
                    High-Low
                  </button>
                </li>
              </ul>
            </details>
          </div>
          <div className="space-y-5 px-4">
            {installed.length === 0 && (
              <div className="  w-full text-center p-10 space-y-5">
                <span className="text-6xl">🐣</span>
                <h2 className="text-6xl font-bold text-[#6C6C6D]">
                  No Apps Found
                </h2>
                <Link
                  to="/apps"
                  className="btn rounded-xl text-white bg-[#332A51] py-6 mb-10 text-xl px-10 "
                >
                  Show All Apps
                </Link>
              </div>
            )}
            {installed.map((app) => (
              <div
                key={app.id}
                className="card card-side bg-base-100 flex md:gap-10 gap-5 border border-gray-200 shadow-md p-2 rounded-lg"
              >
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="md:w-[100px] w-[70px] h-15 md:h-20 object-cover rounded-lg"
                  />
                </figure>
                <div className="flex justify-between items-center w-full">
                  <div className="space-y-4">
                    <h3 className="text-[16px] md:text-[20px] text-gray-700 font-semibold">
                      {app.title}
                    </h3>

                    <div className=" flex gap-10 items-center">
                      <div className="flex text-gray-700 text-sm flex-row gap-1 justify-center items-center">
                        <img className="w-4" src={downloadIcon} alt="" />

                        <span className=" font-bold text-gray-700 text-sm">
                          {app.downloads}M
                        </span>
                      </div>
                      <div className="flex flex-row gap-1 justify-center items-center">
                        <img className="w-4" src={avgRatingIcon} alt="" />

                        <span className="text-gray-700 text-sm font-bold">
                          {app.ratingAvg}
                        </span>
                      </div>
                      <div className="flex flex-row gap-1 justify-center items-center">
                        <img className="w-6" src={reviewIcon} alt="" />

                        <span className="text-gray-700 text-sm font-bold">
                          {app.reviews}K
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="btn bg-[#00D390] text-white py-5 px-6"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Installation;
