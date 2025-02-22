import Image from "next/image";

export default function HeroPlanets({ data }) {
  const { image, pill, title, body } = data;

  return (
    <div className="grid-col grid justify-center md:grid-cols-2">
      {/** Image Section*/}
      <figure className="flex w-full items-center justify-center p-10">
        <Image src={image} alt={image} width={500} height={500} />
      </figure>
      {/** Info Section  */}
      <div className="flex w-full flex-col gap-3 pt-16 md:pl-5">
        <div className="sm:w-[80%]">
          <h2 className="text-3xl font-black text-white md:text-4xl xl:text-5xl">
            {title}
          </h2>
        </div>
        <div className="text-base text-neutral-400 sm:text-lg md:w-2/3">
          {body}
        </div>
        <div className="max-w-fit rounded-3xl border border-slate-700 px-4 py-2 text-green-700">
          {pill}
        </div>
      </div>
    </div>
  );
}
