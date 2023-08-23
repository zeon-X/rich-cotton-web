"use client";
import { useRouter } from "next/navigation";

import React from "react";

const page = ({ params }) => {
  const router = useRouter();

  return <div>My Post: {params.slug}</div>;
};

export default page;
