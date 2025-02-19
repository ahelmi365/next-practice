import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-100 border-spacing-1">
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/calendar"}>Calendar</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>

        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
