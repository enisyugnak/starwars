import { icons } from "./icons";

export default function IconSvg({ type, className, stroke = 1, ...props }) {
  return (
    <span className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} h-6 w-6`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={stroke}
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icons[type]} />
      </svg>
    </span>
  );
}
