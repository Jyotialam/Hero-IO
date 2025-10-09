import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { BsGithub } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { FaAppStore } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";

const NavBar = () => {
  const pages = (
    <>
      <li>
        <NavLink
          to="/"
          className="flex items-center text-base text-gray-600 font-semibold"
        >
          <TiHomeOutline className="text-xl text-gray-500" />
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/apps"
          className="flex items-center text-base text-gray-600 font-semibold"
        >
          <FaAppStore className="text-xl text-gray-500" />
          Apps
        </NavLink>
      </li>
      <li className="text-base text-gray-600 font-semibold">
        <NavLink to="/installation">
          <MdOutlineInstallDesktop className="text-xl text-gray-500" />
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full shadow-sm bg-white">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {pages}
            </ul>
          </div>

          <Link className="flex items-center" to="/">
            <img className="w-15" src={logoImg} alt="" />
            <h2 className="text-2xl font-bold text-[#632EE3]">HERO.IO</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{pages}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/Jyotialam"
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <BsGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
