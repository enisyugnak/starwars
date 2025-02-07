"use client";

import { useLoading } from "@/context/loading";
import PreloaderSpinner from "./preloader-spinner";

export default function GlobalLoader() {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <PreloaderSpinner />
      loading...
    </div>
  );
}
