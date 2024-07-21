"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [user, loading, router]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(user);

  return <>{children}</>;
}
