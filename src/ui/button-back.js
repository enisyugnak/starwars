"use client";
import { useRouter } from "next/navigation";
import SelfButton from "./button";

export default function SelfBackButton() {
  const router = useRouter();
  return <SelfButton onClick={() => router.back()}>Back</SelfButton>;
}
