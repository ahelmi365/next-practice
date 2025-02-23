import Link from "next/link";
import React from "react";
interface FeatureProps {
  link: string;
  title: string;
  description: string;
}
const Feature = ({ link, title, description }: FeatureProps) => {
  return (
    <Link href={link} className="block">
      <div className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow h-full">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Feature;
