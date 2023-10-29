import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
<div>
  <footer className="text-gray-800 w-4/5 mx-auto inter md:pt-24">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            About
          </h2>
          <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Company News
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Meet the Team
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Press Releases
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
              </a>
            </li>
          </nav>
        </div> */}
        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            Company
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Company News
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Meet the Team
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Press Releases
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
              </a>
            </li>
          </nav>
        </div> */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            Contact
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Get in Touch
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Feedback
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Feature Requests
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
              </a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            Developers
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Documentation
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer" href='https://github.com/PoulavBhowmick03/hackthemountains'>
                GitHub
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Press Releases
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
    <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
    <div className="flex items-center mx-auto text-gray-600 container justify-center md:justify-between py-2">
      <div>
        <span className="font-normal">
        </span>
      </div>
      <a
        className="items-center gap-2 hidden md:flex"
        href="#"
        rel="noopener noreferrer"
      >
        <span className="hover:underline focus-visible:underline">

        </span>
      </a>
    </div>
  </div>
</div>  );
};

export default Footer;
