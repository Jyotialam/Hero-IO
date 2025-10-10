import { Link, useParams } from "react-router";
import useApps from "../CustomHooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import avgRatingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../Components/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [clicked, setClicked] = useState(false);
  const app = apps.find((ap) => String(ap.id) === id);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratings,
    downloads,
    ratingAvg,
  } = app || {};
  //

  const handleInstalled = () => {
    setClicked(true);
    const existingList = JSON.parse(localStorage.getItem("installedList"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((ap) => ap.id === app.id);
      if (isDuplicate) return;

      updatedList = [...existingList, app];
      toast("✅ Successfully added");
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installedList", JSON.stringify(updatedList));
  };

  return (
    <div className="w-full mt-[80px]">
      <div className="flex px-4 flex-col md:flex-row gap-10 md:gap-20 items-center max-w-screen-xl mx-auto ">
        <img
          src={image}
          alt=""
          className="rounded-2xl shadow-xl w-[300px] object-cover "
        />
        <div className="flex flex-col  w-full md:[50%]">
          <h2 className="font-bold text-3xl text-gray-800">{title}</h2>
          <p className="mb-2 text-sm">
            Developed by{" "}
            <span className="text-[#632EE3] font-semibold ">{companyName}</span>
          </p>
          <div className="border-t  border-[#dedae9]"></div>

          <div className=" pt-3 flex gap-15 items-center">
            <div className="flex flex-col gap-1 justify-center items-center">
              <img className="w-8" src={downloadIcon} alt="" />
              <span className="text-sm">Downloads</span>
              <span className="text-3xl font-bold">{downloads}M</span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <img className="w-8" src={avgRatingIcon} alt="" />
              <span className="text-sm">Average Ratings</span>
              <span className="text-3xl font-bold">{ratingAvg}</span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <img className="w-10" src={reviewIcon} alt="" />
              <span className="text-sm">Total Reviews</span>
              <span className="text-3xl font-bold">{reviews}K</span>
            </div>
          </div>
          <div className=" flex items-center pt-5 flex-col sm:flex-row gap-5 ">
            <button
              onClick={handleInstalled}
              disabled={clicked}
              className={
                clicked
                  ? "btn w-full sm:w-auto py-5 px-10 bg-[#008000] text-gray-500 rounded-lg"
                  : "btn w-full sm:w-auto skeleton py-5 px-10 bg-[#008000] text-white rounded-lg"
              }
            >
              {clicked ? "✔ Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 my-5 container mx-auto"></div>

      <div className="space-y-3 container px-4 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Ratings</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={ratings}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={80} reversed />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="container md:px-0 px-4 mx-auto border-t border-gray-300 mt-[40px] mb-[80px]">
        <h1 className="text-3xl font-extrabold py-4">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
