import React from "react";
import logo from "../assets/matthew-icon.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Brackets_SVG } from "../assets/brackets.svg";
import { ReactComponent as Terminal_SVG } from "../assets/terminal.svg";
import { ReactComponent as Address_SVG } from "../assets/address-book.svg";
import { ReactComponent as Laptop_SVG } from "../assets/laptop.svg";
import { ReactComponent as User_SVG } from "../assets/user-focus.svg";
import NavItem from "./NavItem";

export default function StickyAboutSection() {
  return (
    <div className="bg-bg_dark border-b-[.5px] border-paragraph_dark border-opacity-30 p-6 sticky top-0 left-0 flex justify-between md:p-0 md:flex-col md:h-full md:fixed md:top-0 md:left-0 md:shadow-[5px_0px_20px_0px_rgba(0,0,0,0.2)]">
      <div className="md:w-96 md:p-12">
        {/* Info wrapper */}
        <div className="flex md:p-6 md:flex-col">
          {/* Icon wrapper */}
          <div className="w-14 md:w-28 md:mb-6 md:p-2  bg-secondary_dark rounded-full md:mx-auto">
            <img src={logo} className="mx-auto" />
          </div>
          <div className="ml-8 md:ml-0">
            <h1 className="text-heading_dark font-bold text-2xl text-center">
              Matthew Pinkus
            </h1>
            <h2 className="italic md:block text-subheading_dark font-italic text-xl md:text-center">
              Software Engineer
            </h2>
          </div>
        </div>

        {/* Link wrapper */}
        <div
          id="nav-link-wrapper"
          className="md:flex md:flex-col hidden mt-12 relative text-paragraph_dark_low"
        >
          {/* <div
            id="hover-wrapper"
            className="bg-[#232323] h-11 border border-[white] border-opacity-80 rounded-md shadow-sm absolute top-0 left-0 right-0 bottom-auto"
          /> */}
          <Link
            id="nav-link-1"
            to="/"
            className={`nav-link ${
              useLocation().pathname === "/"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Home" SVG={Terminal_SVG} />
          </Link>
          <div className="nav-link-divider" />

          <Link
            id="nav-link-2"
            to="/experience"
            className={`nav-link ${
              useLocation().pathname === "/experience"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Experience" SVG={Brackets_SVG} />
          </Link>
          <div className="nav-link-divider" />

          <Link
            id="nav-link-3"
            to="/projects"
            className={`nav-link ${
              useLocation().pathname === "/projects"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Projects" SVG={Laptop_SVG} />
          </Link>
          <div className="nav-link-divider" />

          <Link
            id="nav-link-4"
            to="/about"
            className={`nav-link ${
              useLocation().pathname === "/about"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="About" SVG={User_SVG} />
          </Link>

          <div className="nav-link-divider" />

          <Link
            id="nav-link-5"
            to="/contact"
            className={`nav-link ${
              useLocation().pathname === "/contact"
                ? "text-[#ffffff]"
                : "text-paragraph_dark_low"
            }`}
          >
            <NavItem title="Contact" SVG={Address_SVG} />
          </Link>
          <div className="nav-link-divider" />
        </div>
      </div>
      {/* Bottom wrapper for social icons? */}
      <div className="hidden md:flex p-12 border-t-[0.5px] border-paragraph_dark border-opacity-30"></div>

      {/* //TODO: Side nav drawer on click */}
      <div className="md:hidden cursor-pointer bg-primary_dark flex flex-col justify-between h-12 w-12 items-center my-auto p-4 py-5 border rounded-lg">
        <div className="nav-line-top" />
        <div className="nav-line-bottom" />
      </div>
    </div>
  );
}
