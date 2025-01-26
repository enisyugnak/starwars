import Image from "next/image";
import ResidentsRow from "../ui/residents";
import InfoRow from "../ui/info";
import WaterBar from "../ui/waterbar";
import RoundedBlock from "../ui/rounded";

import { cleanString } from "@/utils/string";
import { FaHeart } from "react-icons/fa";
import { fetchAll } from "@/services/fetch";
import Link from "next/link";

export default async function DetailsPage({ data }) {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    gravity,
    terrain,
    residents,
    surface_water,
    population,
  } = data;

  //const people = await fetchResidents(residents);
  const people = await fetchAll(residents);
  const gravityNumber = gravity.split(" ")[0];
  const cleanName = cleanString(name, "_");
  const imageSrc = `/planets/${cleanName}.webp`;

  return (
    <div className="lg:overscroll-y-scroll m-5 flex flex-wrap justify-center gap-8 overscroll-y-none sm:m-3 lg:scrollbar-hide">
      {/** Image Column */}
      <section className="lg:sticky lg:top-[90px] lg:h-[550px]">
        <div className="mb-3 flex">
          <Link href="/planets/all" className="block font-bold text-sky-500">
            {`<`} BACK
          </Link>
        </div>
        <div className="rounded-md bg-slate-800/50 p-5">
          <figure className="group relative h-[240px] w-[320px] cursor-pointer overflow-hidden sm:h-[500px] sm:w-[500px]">
            <Image
              src={imageSrc}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              className="transform object-cover transition duration-500 group-hover:scale-105"
            />
          </figure>
        </div>
      </section>
      {/** Details Column */}
      <section className="flex w-full flex-col gap-4 break-words sm:w-2/5 sm:min-w-72">
        {/** 1st Row , Title Section */}
        <div className="flex justify-between gap-3 align-middle">
          <h1 className="text-3xl">{name}</h1>
          <span className="ml-auto">
            <FaHeart />
          </span>
          <span>{/** button gelecek */}</span>
        </div>
        {/** 2st Row , Tarrain etc */}
        <div className="flex justify-between">
          <InfoRow title="Terrain">{terrain}</InfoRow>
          <InfoRow title="Population" styleName="text-end">
            {population}
          </InfoRow>
        </div>
        {/** 3rd Row Rounded Infos */}
        <div className="flex justify-between border-y border-slate-800/70 py-3 sm:gap-2">
          <RoundedBlock title="Diameter">{diameter}</RoundedBlock>
          <RoundedBlock title="Gravity">{gravityNumber}</RoundedBlock>
          <RoundedBlock title="Rotation">{rotation_period}</RoundedBlock>
          <RoundedBlock title="Orbital">{orbital_period}</RoundedBlock>
        </div>
        {/** 4th Row Water Info Bar */}
        <WaterBar percent={surface_water} />
        {/** 5th Row Residents List */}
        <ResidentsRow people={people} />
      </section>
    </div>
    // <SelfButton endpoint="/planets">Go Back</SelfButton>
  );
}
