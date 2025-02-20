export default function HeroMainPage() {
  return (
    <div className="relative grid grid-cols-1 justify-center md:grid-cols-2">
      {/** Info Section  */}
      <div className="flex flex-col gap-3 pt-8">
        <h2 className="text-3xl font-black text-white md:text-4xl xl:text-5xl">
          Compendium of StarWars Universe
        </h2>

        <div className="text-xl text-neutral-400">
          This page is an educational attempt to practice my frontend knowledge
          <br />
          and having fun with
          <span className="ml-1 text-white">Starwars Universe</span>
        </div>
      </div>
    </div>
  );
}
