"use client";

import ToggleExample from "@/components/hooks/toggle-example";
import ClickOutsideComponent from "@/components/hooks/click-outside-comp";
import useBlurImage from "@/hooks/blur-image";
import useInView from "@/hooks/inview";
import Image from "next/image";
import LocalStorageExample from "@/components/hooks/local-storage-example";
import TimeoutExample from "@/components/hooks/timeout-example";
import IntervalComponent from "@/components/hooks/interval-example";
import DebounceExample from "@/components/hooks/debounce-example";
import ScrollPositionExample from "@/components/hooks/scroll-example";
import HoverExample from "@/components/hooks/hover-example";

export default function HooksView() {
  const image = "/starships/bwing.webp";
  const blurDataURL = useBlurImage(image);
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col gap-5">
      {/** Image */}
      <div>
        <div className="group relative w-[500px]">
          <div className="relative cursor-pointer rounded-md bg-slate-700/60 p-3">
            <figure className="relative aspect-square overflow-hidden">
              {blurDataURL ? (
                <Image
                  src={image}
                  fill
                  alt=""
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="relative h-full w-full transform object-cover duration-300 group-hover:scale-110"
                />
              ) : (
                "loading..."
              )}
            </figure>
          </div>
          <div className="absolute bottom-9 left-3 w-auto rounded-r-md bg-slate-900/80 p-3 text-2xl font-bold text-white sm:text-xl">
            bwing starship
          </div>
        </div>

        {/** Custom hook Examples */}
        <div className="mt-5 flex w-2/4 flex-col gap-5">
          <div className="space-y-2">
            <h1 className="text-md text-white">Hover</h1>
            <HoverExample />
          </div>
          <div className="space-y-2">
            <h1 className="text-md text-white">
              Debounce: trig a function if inactivity
            </h1>
            <DebounceExample />
          </div>
          <div className="space-y-2">
            {/** scroll position on top right of the page */}
            <ScrollPositionExample />
          </div>

          <div className="space-y-2">
            <h1 className="text-md text-white">
              Timeout: Delayed function call with timeout
            </h1>
            <TimeoutExample />
          </div>
          <div className="space-y-2">
            <h1 className="text-md text-white">
              Local Storage: Set and Remove local storage
            </h1>
            <LocalStorageExample />
          </div>
          <div className="space-y-2">
            <h1 className="text-md text-white">
              Click Outside: Trigger outside click to any div
            </h1>
            <ClickOutsideComponent />
          </div>
          <div className="space-y-2">
            <h1 className="text-md text-white">
              Toggle: Simple true/false toggle
            </h1>
            <ToggleExample />
          </div>
          <div className="space-y-2">
            <h1 className="text-md text-white">
              Interval: Simple timer to trig a function in an interval
            </h1>
            <IntervalComponent />
          </div>
        </div>
      </div>
      <div>
        <div
          ref={ref}
          className={`flex h-96 items-center justify-center bg-slate-800 transition-opacity delay-500 duration-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          🎉 Im here with style!
        </div>
      </div>
    </div>
  );
}
