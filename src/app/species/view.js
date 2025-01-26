import Image from "next/image";

export default function SpeciesView({ data }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-5 text-left text-4xl font-black">Species</h1>

      <div className="grid-col grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => {
          const imageName = item.name.replace(/[^a-zA-Z]/g, "").toLowerCase();
          const image = `/species/${imageName}.jpg`;
          return (
            <SpecieCard
              key={index}
              item={item}
              image={image}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export const SpecieCard = ({ item, index, image }) => {
  return (
    <div className="group flex h-[90px] w-full min-w-[240px] cursor-pointer items-center gap-4 rounded-lg border border-slate-800/70 bg-slate-800/20 hover:bg-teal-800/20 sm:gap-2">
      <div className="ml-3 min-h-[64px] min-w-[64px] overflow-hidden rounded-full border-4 border-slate-800/70">
        <div className="relative overflow-hidden rounded-full">
          <Image
            src={image}
            alt=""
            width={64}
            height={64}
            priority={true}
            className="transform object-cover duration-300 group-hover:scale-125"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="break-words text-lg font-extrabold text-white group-hover:text-teal-800">
          {item.name}
        </div>
        <p className="text-xs uppercase text-neutral-400">{`${item.classification}`}</p>
      </div>
      <div className="ml-auto mr-6 transform text-[50px] font-[700] text-neutral-400/10 duration-300 group-hover:scale-75">
        {index}
      </div>
    </div>
  );
};
