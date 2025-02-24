import Link from "next/link";
import React from "react";
interface PostDetailsProps {
  id: string;
}

const PostDetails = async ({ id }: PostDetailsProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const post = await response.json();
  return (
    <div
      key={post.id}
      className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between w-full h-full"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
        {post.body}
      </p>
      <Link
        href={`/posts`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white btn btn-primary rounded-lg  focus:ring-4 focus:outline-none  w-32"
      >
        <svg
          className="w-3.5 h-3.5 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0L5 1m-4 4l4 4"
          />
        </svg>
        Back
      </Link>
    </div>
  );
};

export default PostDetails;
