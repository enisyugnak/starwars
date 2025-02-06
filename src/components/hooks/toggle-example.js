import useToggle from "@/hooks/toggle";

export default function ToggleExample() {
  const btnClass = "rounded-md border border-gray-700 p-3";
  const { toggle, setToggle } = useToggle(false);
  const itemClicked = (type) => {
    switch (type) {
      case "true":
        setToggle(true);
        break;
      case "false":
        setToggle(false);
        break;
      case "toggle":
        setToggle(!toggle);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 rounded-md border border-slate-800 p-3">
      <div className="font-bold text-white">{toggle ? "ON" : "OFF"}</div>
      <div className="flex gap-3">
        <button className={btnClass} onClick={() => itemClicked("true")}>
          Set On
        </button>
        <button className={btnClass} onClick={() => itemClicked("false")}>
          Set Off
        </button>
        <button className={btnClass} onClick={() => itemClicked("toggle")}>
          Toggle
        </button>
      </div>
    </div>
  );
}
