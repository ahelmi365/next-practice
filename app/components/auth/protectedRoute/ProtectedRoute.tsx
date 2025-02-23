"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const [isRouteChecked, setIsRouteChecked] = useState(false);

  const publicPaths = ["/login", "/register"];
  const isPublicPath = publicPaths.includes(pathName);

  useEffect(() => {
    if (!isLoggedIn && !isPublicPath) {
      router.push("/login");
    } else if (isLoggedIn && isPublicPath) {
      router.back();
    }
    setIsRouteChecked(true);
  }, [isLoggedIn, router, pathName, isPublicPath]);

  const shouldRenderContent =
    isRouteChecked &&
    !(!isLoggedIn && !isPublicPath) &&
    !(isLoggedIn && isPublicPath);

  if (!shouldRenderContent) {
    return null;
  }

  return <>{children}</>;
}
