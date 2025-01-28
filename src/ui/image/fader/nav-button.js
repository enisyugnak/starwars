//** Arrow buttons on Navigation */
export default function ArrowButton({ side, onClick }) {
  const buttonSide = {
    left: "M15 19l-7-7 7-7",
    right: "M9 5l7 7-7 7",
    up: "M19 15l-7-7-7 7",
    down: "M5 9l7 7 7-7",
  };
  return (
    <button
      className="rounded-xl bg-slate-700/60 p-3 text-neutral-400 transition duration-300 hover:bg-slate-900"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={buttonSide[side]}
        />
      </svg>
    </button>
  );
}
