/** Pagination on Bottom */

export default function Pagination({ images, currIndex }) {
  return (
    <div className="mt-4 flex justify-center">
      {images.map((_, index) => (
        <div
          key={index}
          className={`mx-1 h-1 w-10 ${
            index === currIndex
              ? "rounded-xl bg-sky-500"
              : "rounded-xl bg-slate-700"
          } transition-all duration-500 ease-in-out`}
        ></div>
      ))}
    </div>
  );
}
