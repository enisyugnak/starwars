import Image from "next/image";
import ListResidents from "../../../ui/list-residents";
import InfoRow from "../ui/info";
import WaterBar from "../ui/waterbar";
import RoundedBlock from "../ui/rounded";

import { cleanString } from "@/utils/string";
import { FaHeart } from "react-icons/fa";
import { fetchAll } from "@/services/fetch";
import Link from "next/link";
import SelfBackButton from "@/ui/button-back";

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
  const image = `/planets/${cleanName}.webp`;

  return (
    // <div className="lg:overscroll-y-scroll flex flex-wrap justify-center gap-8 overscroll-y-none sm:m-3 lg:scrollbar-hide">
    <div className="lg:overscroll-y-scroll grid grid-cols-1 justify-center gap-8 overscroll-y-none md:grid-cols-2 lg:scrollbar-hide">
      {/** Image Column */}
      <section className="h-full w-full">
        <div className="relative h-auto w-full rounded-md bg-slate-700/40 p-4">
          <Image
            src={image}
            // sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={300}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>
      </section>
      {/* <section className="lg:sticky lg:top-[90px] lg:h-[550px]">
        <div className="h-full w-full rounded-md bg-slate-800/50 p-5">
          <div className="group relative aspect-square cursor-pointer overflow-hidden sm:h-[500px] sm:w-[500px]">
            <Image
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              className="h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section> */}
      {/** Details Column */}
      <section className="flex w-full flex-col gap-4">
        {/** 1st Row , Title Section */}
        <div className="flex justify-between gap-3 align-middle">
          <h1 className="text-3xl">{name}</h1>
          <span className="ml-auto">
            <FaHeart />
          </span>
          <span>{/** TODO: button gelecek */}</span>
        </div>
        {/** 2st Row , Tarrain etc */}
        <div className="flex justify-between">
          <InfoRow title="Terrain">{terrain}</InfoRow>
          <InfoRow title="Population" styleName="text-end">
            {population}
          </InfoRow>
        </div>
        {/** 3rd Row Rounded Infos */}
        <div className="flex justify-evenly border-y border-slate-800/70 py-3 md:justify-start md:gap-2">
          <RoundedBlock title="Diameter">{diameter}</RoundedBlock>
          <RoundedBlock title="Gravity">{gravityNumber}</RoundedBlock>
          <RoundedBlock title="Rotation">{rotation_period}</RoundedBlock>
          <RoundedBlock title="Orbital">{orbital_period}</RoundedBlock>
        </div>
        {/** 4th Row Water Info Bar */}
        <WaterBar percent={surface_water} />
        {/** 5th Row Residents List */}
        {people && <ListResidents people={people} />}
      </section>
    </div>
    // <SelfButton endpoint="/planets">Go Back</SelfButton>
  );
}
