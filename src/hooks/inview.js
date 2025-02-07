import { useEffect, useRef, useState } from "react";

export default function useInView({
  threshold = 0.5,
  root = null,
  rootMargin = "0px",
  triggerOnce = false,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setInView(true);

          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, inView };
}

/** Example Usage */

// export default function ObserverComponent() {
//   const { ref, isInView } = useInView({ threshold: 0.3 });

//   return (
//     <div ref={ref} className="h-96 bg-gray-200 flex justify-center items-center">
//       {isInView ? "I'm visible! 🎉" : "Scroll down to see me"}
//     </div>
//   );
// }
