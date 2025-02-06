import Image from "next/image";
import clsx from "clsx";

const ImageHolder = ({ src, alt = "", className, ...props }) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={clsx(
          "h-full w-full object-cover transition-all duration-300",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default ImageHolder;
