import FeatuersPage from "./features/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-4">
        Welcome to Next.js
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        The React Framework for Production - Build full-stack web applications
        that scale
      </p>
      <FeatuersPage />
    </div>
  );
}
