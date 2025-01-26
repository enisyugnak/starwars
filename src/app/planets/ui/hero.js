export default function Hero() {
  return (
    <section className="relative w-full space-y-2">
      <div className="max-w-fit rounded-3xl border border-slate-700 px-4 py-2 text-green-700">
        87 Characters
      </div>
      <div className="sm:w-[80%]">
        <h2 className="text-3xl font-black text-white md:text-4xl xl:text-6xl">
          Discover your favorite character in the whole universe
        </h2>
      </div>

      <div className="text-base text-neutral-400 sm:text-lg md:w-2/3">
        This page is dedicated to StarWars characters. This is an updated list
        from swapi api.
      </div>
    </section>
  );
}
