import React from "react";
import { useOidc } from "@axa-fr/react-oidc";
import { useRouter } from "next/router";

const Page = () => {
  const { isAuthenticated } = useOidc();
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/");
  } else router.push("/signin");

  return <div>Loading...</div>;
};

export default Page;
