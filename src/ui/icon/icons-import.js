"use client";
import { Suspense } from "react";
import React from "react";

// export default function SelfIcon({ type, ...props }) {
//   const icons = {
//     robot: <LiaRobotSolid {...props} />,
//     male: <IoMaleSharp {...props} />,
//     female: <IoFemaleSharp {...props} />,
//   };

//   return icons[type];
// }

<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 32 32"
  height="30"
  width="30"
  xmlns="http://www.w3.org/2000/svg"
  style=""
></svg>;

export default function SelfIcon({ type, ...props }) {
  const icons = {
    robot: React.lazy(() =>
      import("react-icons/lia").then((mod) => ({ default: mod.LiaRobotSolid })),
    ),
    male: React.lazy(() =>
      import("react-icons/io5").then((mod) => ({ default: mod.IoMaleSharp })),
    ),
    female: React.lazy(() =>
      import("react-icons/io5").then((mod) => ({ default: mod.IoFemaleSharp })),
    ),
  };
  const Icon = icons[type];
  if (!Icon) return null; // Handle invalid types gracefully.

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Icon {...props} />
    </Suspense>
  );
}
