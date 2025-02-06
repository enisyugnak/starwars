"use client";

import SelfButton from "@/ui/button";
import { CardPeople } from "@/ui/card-people";
import { addImageToJson } from "@/utils/data";
import { useState } from "react";

export default function PeopleList({ data }) {
  const { results, next } = data;
  const resultImages = addImageToJson(results, "characters");
  const [nextPage, setNextPage] = useState(next);
  const [list, setList] = useState(resultImages);

  const loadPage = async () => {
    if (nextPage) {
      const res = await fetch(nextPage);
      const data = await res.json();
      const resultImages = addImageToJson(data.results, "characters");
      setList((prev) => [...prev, ...resultImages]);
      setNextPage(data.next);
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((item, index) => (
            <CardPeople key={index} item={item} />
          ))}
        </div>
      </div>

      <SelfButton hidden={!nextPage} onClick={loadPage} className="mt-3">
        Load More
      </SelfButton>
    </div>
  );
}
