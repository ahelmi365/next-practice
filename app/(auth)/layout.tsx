import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import loginBg from "@/assets/jpg/login.jpg";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="login-container bg-secondary">
      <div className="flex w-full h-screen">
        <div className="w-1/2">
          <Image
            src={loginBg}
            alt="Authentication background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
