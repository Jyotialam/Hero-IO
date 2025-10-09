import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import avgRatingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { IoIosArrowDown } from "react-icons/io";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedList"));
    if (savedList) setInstalled(savedList);
  }, []);
  //
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);
    if (type === "low") {
      const sortedByLow = [...installed].sort((a, b) => a.downloads - b.downloads);
      setInstalled(sortedByLow);
    } else if (type === "high") {
      const sortedByHigh = [...installed].sort((a, b) => b.downloads- a.downloads);
      setInstalled(sortedByHigh);
    }
  };

  return (
    <div className="container mx-auto text-center my-[80px]">
      <h1 className="text-[40px] font-bold">Your Installed Apps</h1>
      <p className="text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="space-y-6 mt-10">
        <div className="flex justify-between p-3 items-center border-b border-gray-300">
          <span className="text-2xl font-bold text-gray-500">
            ({installed.length}) Products Found
          </span>
          {/*  */}
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
                <a
                  onClick={() => handleSort("low")}
                  className={`${
                    sort === "low" ? "bg-amber-300 font-bold" : ""
                  }`}
                  href="#"
                >
                  Low-High
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleSort("high")}
                  className={`${
                    sort === "high" ? "bg-amber-300 font-bold" : ""
                  }`}
                  href="#"
                >
                  High-Low
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className="space-y-3">
          {installed.map((app) => (
            <div
              key={app.id}
              className="card card-side bg-base-100 flex gap-10 border border-gray-200 shadow-md p-3 rounded-lg"
            >
              <figure>
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-40 h-25 object-cover rounded-2xl"
                />
              </figure>
              <div className="space-y-4">
                <h3 className="text-[20px] text-gray-700 font-semibold">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
