import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Services</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Coverage</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">About Us</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Pricing</NavLink>
      </li>
      <li className="hover:text-[#4CAF50]">
        <NavLink to="/">Be a Rider</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm bg-[#FFFFFF] py-5 md:px-12 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow text-[16px] font-medium flex items-start gap-2 text-[#606060]"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 text-[16px] font-medium text-[#606060] flex items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="avatar tooltip tooltip-left gap-4">
          <button className="text-[#606060] border border-gray-200 font-semibold px-6 md:px-10 py-3 rounded-lg transition cursor-pointer hover:bg-gray-100">
            {" "}
            Sign In
          </button>
          <button className="bg-[#CAEB66] text-[#1F1F1F] font-semibold px-6 md:px-10 py-3 rounded-lg transition hover:shadow cursor-pointer">
            {" "}
            Be a rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
