import React from "react";
import { Link } from "react-router";
import playStoreImg from "../assets/play-store.png";
import appStoreImg from "../assets/app-store.png";
import PhoneImg from "../assets/hero.png";
import { IoDownload, IoLogoGooglePlaystore } from "react-icons/io5";
import { HiMiniStar } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="text-center  mx-auto md:mt-20 mt-10">
      <div className="mx-auto w-11/12">
        <h1 className="lg:text-[60px] md:text-[40px] text-[30px] font-extrabold">
          We Build <br /> <span className="text-[#935EEE]">Productive</span>{" "}
          <span className="text-[#392F5A]">Apps</span>
        </h1>
        <p className="text-gray-600 mt-5">
          <i>
            At <span className="font-semibold">HERO.IO</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting.Our goal <br /> is to turn your ideas into digital
            experiences that truly make an impact.
          </i>
        </p>
        <div className="flex gap-2 justify-center items-center my-[40px] mx-auto">
          <Link
            to="https://play.google.com/store/games"
            target="_blank"
            className="btn py-7 rounded-md shadow-sm"
          >
            <img src={playStoreImg} alt="PlayStore" />
            <span className="text-2xl font-bold">Google Play</span>
          </Link>

          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="btn py-7 rounded-md shadow-sm"
          >
            <img src={appStoreImg} alt="PlayStore" />
            <span className="text-2xl font-bold">App Store</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={PhoneImg} alt="" className="px-6" />

        <div className=" w-full bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white lg:py-[50px] md:py-[30px] py-[10px]">
          <div className="text-center lg:max-w-screen-lg max-w-screen-xl  mx-auto">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-8">
              Trusted by Millions, Built for You
            </h1>

            <div className="contentsParent grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-2">
              <div className="text-center flex justify-center items-center ">
                <div className="text-center">
                  <h3 className="font-semibold">Total Downloads</h3>
                  <span className="lg:text-[50px] text-[30px] font-bold">
                    29.6M
                  </span>
                  <p className="text-sm">21% more than last month</p>
                </div>
                <span className="lg:text-[70px] text-[40px]">
                  <IoDownload />
                </span>
              </div>

              <div className="text-center flex justify-center items-center ">
                <div className="text-center">
                  <h3 className="font-semibold">Total Reviews</h3>
                  <span className="lg:text-[50px] text-[30px] font-bold">
                    906K
                  </span>
                  <p className="text-sm">46% more than last month</p>
                </div>
                <span className="lg:text-[70px] text-[40px]">
                  <HiMiniStar />
                </span>
              </div>

              <div className="ActiveApps flex justify-center items-center">
                <div className="text-center">
                  <h3 className="font-semibold">Active Apps</h3>
                  <span className="lg:text-[50px] text-[30px] font-bold">
                    132+
                  </span>
                  <p className="text-sm">31 more will Launch</p>
                </div>
                <span className="lg:text-[70px] text-[40px]">
                  <IoLogoGooglePlaystore />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
