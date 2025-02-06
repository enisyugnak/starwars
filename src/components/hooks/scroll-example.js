import useScrollPosition from "@/hooks/scroll-position";
import useThrottle from "./throttle";
import useWindowSize from "@/hooks/window-size";

export default function ScrollPositionExample() {
  const scrollPosition = useScrollPosition();
  // scroll position with delay
  const throttledScrollPosition = useThrottle(scrollPosition, 500);
  const { width, height } = useWindowSize();

  return (
    <div className="relative">
      <div className="fixed right-5 top-24 z-[99999] w-auto">
        <div className="border border-slate-800 bg-slate-900/60 p-3 text-right text-white">
          Scroll Position: {scrollPosition}
        </div>
        <div className="border border-slate-800 bg-slate-900/60 p-3 text-right text-white">
          Throttled Position: {throttledScrollPosition}
        </div>
        <div className="border border-slate-800 bg-slate-900/60 p-3 text-right text-white">
          Window: Width: {width}px Height: {height}px
        </div>
      </div>
    </div>
  );
}
