export default function Carousel() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-4xl px-5 py-16 md:px-10 md:py-20">
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <a
            href="#"
            className="relative flex h-[300px] items-end md:h-auto"
          >
            <img
              src="../movies/episode-1.jpg"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-black px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Project Name</p>
              <p className="text-sm sm:text-base">Microsoft</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
