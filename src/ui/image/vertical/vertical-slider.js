import ImagesColumn from "./image-column";

export default function VerticalImageSlider() {
  const images = ["kaminoan.webp", "chagrian.webp", "clawdite.webp"];

  return (
    <div className="relative h-[600px] w-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-gradient-to-b from-neutral-950 from-0% via-transparent via-20% to-neutral-950 to-100%"></div>

      <div
        className="absolute z-10 flex animate-slideUp flex-col"
        style={{ animationDuration: "30s" }}
      >
        <ImagesColumn images={images} />
        <ImagesColumn images={images} />
      </div>
    </div>
  );
}
