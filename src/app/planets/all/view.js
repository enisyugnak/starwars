"use client";
import { FaArrowCircleUp } from "react-icons/fa";

import SelfButton from "@/ui/button/button";
import PlanetsPaginated from "@/ui/planets-paginated";

export default function PlanetsAllView({ initial }) {
  return (
    <section className="mt-5">
      {/** Browser Back Button */}

      {/** Planets List */}
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-left text-4xl font-black">Planets</h1>
        <SelfButton endpoint="/planets/">Back</SelfButton>
      </div>

      <PlanetsPaginated data={initial} loadmore={true} />

      {/** Scroll Top */}
    </section>
  );
}
