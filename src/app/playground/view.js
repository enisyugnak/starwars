"use client";
import SelfButton from "@/ui/button";

export default function PlaygroundView() {
  return (
    <div className="flex gap-3">
      <SelfButton endpoint="/playground/hooks">Hooks</SelfButton>
      <SelfButton endpoint="/playground/images">Images</SelfButton>
    </div>
  );
}
