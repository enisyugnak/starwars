export default function HeroMainPage() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-black md:text-4xl xl:text-5xl">
        <span className="text-2xl">Compendium of</span> <br />
        <span className="my-3 text-4xl text-white sm:text-6xl">
          StarWars Universe
        </span>
      </h2>

      <div>
        <div className="text-xl sm:text-3xl">
          Its build with
          <span className="font-bold text-sky-400"> Nextjs</span>
          <br />
          styled with
          <span className="font-bold text-sky-400"> TailwindCSS</span>
          <br />
          and the dynamic content with
          <span className="font-bold text-sky-400"> SWAPI api</span>
        </div>
      </div>
    </div>
  );
}
