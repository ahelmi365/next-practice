import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Team",
  description: "Team page",
};

const TeamPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const category = searchParams?.category || "None";
  return (
    <div>
      <p>TeamPage cartegory = {category}</p>
      <Link href={"/about"}>
        <button>About</button>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href={"/about/team/1"}>Member 1</Link>
        </li>
        <li>
          <Link href={"/about/team/2"}>Member 2</Link>
        </li>
        <li>
          <Link href={"/about/team/3"}>Member 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamPage;
