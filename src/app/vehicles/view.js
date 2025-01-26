import Image from "next/image";

export default function VehiclesView() {
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

export function VerticalImageAnimation() {}
export function ImagesColumn({ images }) {
  return (
    <div className="flex flex-col">
      {images.map((item, index) => {
        return (
          <div className="mb-4" key={index}>
            <Image
              src={`/species_big/${item}`}
              alt="Image 1"
              width={200}
              height={300}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
