"use client";
import React from "react";
import { setIsLoggedIn } from "../../store/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
const Login = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <button
        onClick={() => dispatch(setIsLoggedIn(!isLoggedIn))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login in {isLoggedIn ? "true" : "false"}
      </button>
    </div>
  );
};

export default Login;
