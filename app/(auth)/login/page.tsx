"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  setIsLoggedIn,
  setUserInfo,
} from "../../store/features/authSlice/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDate = new FormData(e.target as HTMLFormElement);
    const username = formDate.get("username");
    const password = formDate.get("password");
    if (username && password) {
      console.log(username, password);
      dispatch(setIsLoggedIn(true));
      dispatch(
        setUserInfo({
          username: username as string,
          password: password as string,
        })
      );
      router.push("/");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please enter your details to sign in
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <Link href="/register" className="link">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
