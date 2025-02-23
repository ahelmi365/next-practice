import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About",
  description: "About compnay page",
};

const AboutPage = () => {
  return (
    <div>
      AboutPage
      <Link href={"/about/team"}>
        <button>Team</button>
      </Link>
    </div>
  );
};

export default AboutPage;
