import { ImSpinner9 } from "react-icons/im";

export default function PreloaderSpinner() {
  return (
    <div className="flex animate-spin duration-1000">
      <div className="animate-pulse">
        <ImSpinner9 size={30} />
      </div>
    </div>
  );
}
