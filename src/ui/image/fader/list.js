import Image from "next/image";

/** Images on the stage */
export default function ImagesList({ images, currIndex }) {
  return (
    <div className="relative w-full rounded-md bg-slate-700/60 p-3">
      <div className="relative aspect-square">
        {images.map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`cursor-pointer object-cover object-top transition-opacity duration-500 ease-in ${index === currIndex ? "opacity-100" : "opacity-0"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
