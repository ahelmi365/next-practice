"use client";
import { resetAuth } from "@/app/store/features/authSlice/authSlice";
import { useAppDispatch } from "@/app/store/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(resetAuth());
    router.push("/login");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="btn bg-red-500 text-white p-2 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
