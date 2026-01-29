import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Hello Wecome
      <Link href={"/login"}>Go to Login</Link>
    </div>
  );
};

export default page;
