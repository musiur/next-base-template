"use client";

import { UserContext } from "@/contexts/UserProvider";
import { useRouter } from "next/navigation";
import { ReactElement, useContext } from "react";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  if (!user.token) {
    return <div>{children}</div>;
  } else {
    router.push("/dashboard");
    return <div></div>;
  }
};

export default PublicRoute;
