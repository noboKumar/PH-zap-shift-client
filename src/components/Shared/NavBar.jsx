import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";

const NavBar = () => {
  const navBarLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/beRider"}>Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm px-10 py-5 rounded-2xl">
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
            {navBarLinks}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-accent gap-2">
          {navBarLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to={"/signIn"} className="btn rounded-xl text-accent font-bold">Sign in</Link>
        <a className="btn btn-primary rounded-xl text-black font-bold">
          Be a rider
        </a>
      </div>
    </div>
  );
};

export default NavBar;
