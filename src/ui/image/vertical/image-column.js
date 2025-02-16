import Image from "next/image";

export default function ImagesColumn({ images }) {
  return (
    <div className="flex flex-col">
      {images.map((item, index) => {
        return (
          <div className="mb-4 overflow-hidden rounded-md" key={index}>
            <Image
              src={item}
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
