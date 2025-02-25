import Link from "next/link";
import React from "react";
import Logout from "../logout/Logout";

const NavBar = () => {
  return (
    <nav className="w-full bg-slate-800 px-6 py-4 shadow-md">
      <ul className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
          <li>
            <Link
              href={"/"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            {/* posts */}
            <Link
              href={"/posts"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href={"/calendar"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/about/team"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"/license-renewal"}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Renew License
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-6">
          <li>
            <Logout />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
