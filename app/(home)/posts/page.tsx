import Link from "next/link";

const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  const posts: [
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }
  ] = await response.json();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <h1>Posts</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card max-w-sm flex flex-col justify-between h-full"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1, 40)}
            </h5>

            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
              {post.body}
            </p> */}
            <Link
              href={`/posts/${post.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn btn-primary  focus:ring-4 focus:outline-none"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
