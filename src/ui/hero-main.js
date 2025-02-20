export default function HeroMainPage() {
  return (
    <div className="flex flex-col gap-3 pt-8">
      <h2 className="font-black text-white md:text-4xl xl:text-5xl">
        <span className="text-2xl">Compendium of</span> <br />
        <span className="text-6xl">StarWars Universe</span>
      </h2>

      <div className="my-3">
        <div className="text-3xl">
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
