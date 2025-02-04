"use client";

import useBlurImage from "@/hooks/blur-image";
import useInView from "@/hooks/inview";
import Image from "next/image";

export default function PlayGroundView() {
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
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
          elementum tortor, condimentum feugiat orci vulputate pulvinar. Nullam
          facilisis mauris a leo lobortis mollis sed id lacus. Phasellus vitae
          tortor eu diam hendrerit fringilla vel sit amet dui. Sed convallis
          mauris neque, eu condimentum turpis ultrices id. Maecenas at orci ac
          metus facilisis consequat. Aliquam blandit, nisi at malesuada
          fermentum, nulla risus volutpat est, aliquam vestibulum purus ex nec
          arcu. Proin at eros interdum dolor rhoncus finibus at eget mauris.
          Donec blandit tortor et hendrerit interdum. Vivamus lobortis tortor
          ipsum, nec ultricies erat vestibulum ac. Etiam lectus dolor, tempor et
          massa vestibulum, cursus pellentesque mauris. Morbi ultrices vel
          libero at pretium. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam sed tortor
          venenatis, tempus urna vel, euismod elit. Sed ante ligula, volutpat id
          hendrerit quis, pretium sit amet lorem. Aenean finibus libero ut elit
          euismod, eu porttitor erat luctus. Sed porta tincidunt interdum. Fusce
          tristique nulla sed eros facilisis vehicula. Morbi tempor venenatis
          augue commodo consectetur. Suspendisse feugiat ligula eget ipsum
          hendrerit, et ultrices nisl efficitur. Praesent auctor hendrerit
          vestibulum. Suspendisse egestas elit ac dui consectetur lobortis. Sed
          id urna ante. Quisque nisl ipsum, sodales a leo nec, varius fermentum
          quam. Nullam a lacus sodales, molestie felis eget, commodo velit. In
          nec tempor arcu. Integer pellentesque sapien dignissim eros fringilla
          pharetra. Curabitur sit amet condimentum sapien. Aenean venenatis
          auctor malesuada. Praesent mollis mollis condimentum. Proin est ex,
          pellentesque vel lectus quis, ullamcorper sodales augue. Nunc a semper
          felis, eu varius quam. Curabitur lobortis lacinia ligula, quis auctor
          nulla fringilla nec. Praesent laoreet dolor a lacus viverra maximus.
          Vestibulum in nunc ullamcorper, rhoncus sapien non, tincidunt leo.
          Aenean pharetra arcu mauris, at vulputate nisi sodales ac. Sed
          vehicula pharetra sem euismod finibus. Fusce ullamcorper purus quis
          lectus sollicitudin iaculis. Morbi at odio finibus lectus vestibulum
          ornare. Nam efficitur elementum leo eget dictum. Nulla ligula enim,
          bibendum id lobortis ac, rhoncus in ex. Nullam eu lorem ut tellus
          varius blandit vel vitae felis. Praesent iaculis facilisis facilisis.
          Aliquam et aliquam nisl. Integer dictum dui erat, ut tincidunt eros
          fermentum at. Morbi convallis lectus non enim finibus, sit amet
          elementum massa vestibulum. Ut imperdiet vestibulum nibh, eu molestie
          metus ornare eu. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Curabitur at lorem accumsan,
          pellentesque dolor sit amet, blandit libero. Sed sodales tincidunt
          pulvinar. Praesent mattis cursus odio a imperdiet. Integer nec purus
          in mauris porta tempus et at justo. Sed et sagittis sapien. In cursus,
          nisi sed ultrices bibendum, justo magna feugiat urna, ac venenatis
          metus urna ac ex. Praesent id felis arcu. Nunc in iaculis nulla, id
          porttitor sapien. Sed iaculis elit quis ipsum accumsan, ut molestie
          odio tempor. In at aliquam dolor. Vestibulum venenatis vestibulum
          porta.
        </p>
      </div>
      <div>
        <div
          ref={ref}
          className={`flex h-96 items-center justify-center bg-gray-200 transition-opacity delay-500 duration-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          🎉 Im here with style!
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
          elementum tortor, condimentum feugiat orci vulputate pulvinar. Nullam
          facilisis mauris a leo lobortis mollis sed id lacus. Phasellus vitae
          tortor eu diam hendrerit fringilla vel sit amet dui. Sed convallis
          mauris neque, eu condimentum turpis ultrices id. Maecenas at orci ac
          metus facilisis consequat. Aliquam blandit, nisi at malesuada
          fermentum, nulla risus volutpat est, aliquam vestibulum purus ex nec
          arcu. Proin at eros interdum dolor rhoncus finibus at eget mauris.
          Donec blandit tortor et hendrerit interdum. Vivamus lobortis tortor
          ipsum, nec ultricies erat vestibulum ac. Etiam lectus dolor, tempor et
          massa vestibulum, cursus pellentesque mauris. Morbi ultrices vel
          libero at pretium. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam sed tortor
          venenatis, tempus urna vel, euismod elit. Sed ante ligula, volutpat id
          hendrerit quis, pretium sit amet lorem. Aenean finibus libero ut elit
          euismod, eu porttitor erat luctus. Sed porta tincidunt interdum. Fusce
          tristique nulla sed eros facilisis vehicula. Morbi tempor venenatis
          augue commodo consectetur. Suspendisse feugiat ligula eget ipsum
          hendrerit, et ultrices nisl efficitur. Praesent auctor hendrerit
          vestibulum. Suspendisse egestas elit ac dui consectetur lobortis. Sed
          id urna ante. Quisque nisl ipsum, sodales a leo nec, varius fermentum
          quam. Nullam a lacus sodales, molestie felis eget, commodo velit. In
          nec tempor arcu. Integer pellentesque sapien dignissim eros fringilla
          pharetra. Curabitur sit amet condimentum sapien. Aenean venenatis
          auctor malesuada. Praesent mollis mollis condimentum. Proin est ex,
          pellentesque vel lectus quis, ullamcorper sodales augue. Nunc a semper
          felis, eu varius quam. Curabitur lobortis lacinia ligula, quis auctor
          nulla fringilla nec. Praesent laoreet dolor a lacus viverra maximus.
          Vestibulum in nunc ullamcorper, rhoncus sapien non, tincidunt leo.
          Aenean pharetra arcu mauris, at vulputate nisi sodales ac. Sed
          vehicula pharetra sem euismod finibus. Fusce ullamcorper purus quis
          lectus sollicitudin iaculis. Morbi at odio finibus lectus vestibulum
          ornare. Nam efficitur elementum leo eget dictum. Nulla ligula enim,
          bibendum id lobortis ac, rhoncus in ex. Nullam eu lorem ut tellus
          varius blandit vel vitae felis. Praesent iaculis facilisis facilisis.
          Aliquam et aliquam nisl. Integer dictum dui erat, ut tincidunt eros
          fermentum at. Morbi convallis lectus non enim finibus, sit amet
          elementum massa vestibulum. Ut imperdiet vestibulum nibh, eu molestie
          metus ornare eu. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Curabitur at lorem accumsan,
          pellentesque dolor sit amet, blandit libero. Sed sodales tincidunt
          pulvinar. Praesent mattis cursus odio a imperdiet. Integer nec purus
          in mauris porta tempus et at justo. Sed et sagittis sapien. In cursus,
          nisi sed ultrices bibendum, justo magna feugiat urna, ac venenatis
          metus urna ac ex. Praesent id felis arcu. Nunc in iaculis nulla, id
          porttitor sapien. Sed iaculis elit quis ipsum accumsan, ut molestie
          odio tempor. In at aliquam dolor. Vestibulum venenatis vestibulum
          porta.
        </p>
      </div>
      <div className="group relative w-[300px]">
        <div className="relative cursor-pointer rounded-md bg-slate-700/60 p-3">
          <figure className="relative aspect-square overflow-hidden">
            <Image
              ref={ref2}
              src={image}
              fill
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="relative h-full w-full transform object-cover duration-300 group-hover:scale-110"
              style={{
                opacity: inView2 ? 1 : 0,
                transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
              }}
            />
          </figure>
        </div>
        <div className="absolute bottom-9 left-3 w-auto rounded-r-md bg-slate-900/80 p-3 text-2xl font-bold text-white sm:text-xl">
          bwing starship
        </div>
      </div>
    </div>
  );
}
