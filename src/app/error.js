"use client";
import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-2xl text-red-700">Error fetching data</div>
    </div>
  );
}
