import { ImSpinner9 } from "react-icons/im";
export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex animate-spin">
        <ImSpinner9 className="h-8 w-8" />
      </div>
    </div>
  );
}
