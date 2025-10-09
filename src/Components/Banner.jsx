import React from "react";
import { Link } from "react-router";
import playStoreImg from "../assets/play-store.png";
import appStoreImg from "../assets/app-store.png";
import PhoneImg from "../assets/Iphone.png";
import icon1 from "../assets/Ellipse24.png";
import icon2 from "../assets/Ellipse25.png";
import icon3 from "../assets/Ellipse26.png";
import icon4 from "../assets/Ellipse27.png";
import icon5 from "../assets/Ellipse28.png";
import icon6 from "../assets/Ellipse29.png";
import { IoDownload, IoLogoGooglePlaystore } from "react-icons/io5";
import { HiMiniStar } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="text-center w-full md:mt-20 mt-10">
      <h1 className="lg:text-[60px] md:text-[40px] text-[30px] font-extrabold">
        We Build <br /> <span className="text-[#935EEE]">Productive</span>{" "}
        <span className="text-[#392F5A]">Apps</span>
      </h1>
      <p>
        <i>
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting.Our goal <br /> is to turn your ideas into digital
          experiences that truly make an impact.
        </i>
      </p>
      <div className="flex gap-2 justify-center items-center my-[40px] mx-auto">
        <Link to="/" className="btn py-7 rounded-md shadow-sm">
          <img src={playStoreImg} alt="PlayStore" />
          <span className="text-2xl font-bold">Google Play</span>
        </Link>
        <Link to="/" className="btn py-7 rounded-md shadow-sm">
          <img src={appStoreImg} alt="PlayStore" />
          <span className="text-2xl font-bold">App Store</span>
        </Link>
      </div>
      {/*phone  */}
      <div className="relative  flex flex-col justify-center items-center">
        <img
          src={PhoneImg}
          alt=""
          className="lg:w-[300px] w-[100px] z-10 relative md:w-[200px] shadow-2xl bg-black rounded-t-[30px]"
        />
        {/*  */}
        <img src={icon1} alt="" className="absolute top-10 left-[350px] w-15" />
        <img src={icon3} alt="" className="absolute top-35 left-[300px] w-15" />
        <img src={icon5} alt="" className="absolute top-60 left-[260px] w-15" />
        {/*  */}
        <img
          src={icon6}
          alt=""
          className="absolute top-60 right-[260px] w-15"
        />

        <img
          src={icon4}
          alt=""
          className="absolute top-35 right-[300px] w-15"
        />
        <img
          src={icon2}
          alt=""
          className="absolute top-10 right-[350px] w-15"
        />
        {/*Trusted reviews */}
        <div className=" absolute bottom-0 text-center z-20 w-full bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white lg:py-[50px] md:py-[30px] py-[10px]">
          <div className="text-center lg:max-w-screen-lg max-w-screen-xl  mx-auto">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-8">
              Trusted by Millions, Built for You
            </h1>

            <div className="contentsParent grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-2">
              {/*  */}
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
              {/*  */}

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

              {/*  */}
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
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
