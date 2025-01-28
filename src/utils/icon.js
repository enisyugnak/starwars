export function getIcon(type) {
  const iconType = {
    toggle: "M4 6h16M4 12h16M4 18h16",
    close: "M6 18L18 6M6 6l12 12",
    leftArrow: "M15 19l-7-7 7-7",
    rightArrow: "M9 5l7 7-7 7",
    upArrow: "M19 15l-7-7-7 7",
    downArrow: "M5 9l7 7 7-7",
  };

  return (
    <span className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconType[type]} />
      </svg>
    </span>
  );
}
