import Image from "next/image";

export default function ImagesColumn({ images }) {
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
