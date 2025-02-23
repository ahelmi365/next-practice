import Loading from "@/app/components/postDetails/loading";
import PostDetails from "@/app/components/postDetails/PostDetails";
import { Suspense } from "react";
interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <h1>Post Details</h1>
      <Suspense fallback={<Loading />}>
        <PostDetails id={id} />
      </Suspense>
    </div>
  );
};

export default PostPage;
