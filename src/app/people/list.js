"use client";

import { CardPeople } from "@/ui/card-people";
import { addImageToJson } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";

export default function PeopleList({ data }) {
  const { results, next } = data;
  const resultImages = addImageToJson(results, "people");
  const [nextPage, setNextPage] = useState(next);
  const [list, setList] = useState(resultImages);

  const loadPage = async () => {
    if (nextPage) {
      const res = await fetch(nextPage);
      const data = await res.json();
      const resultImages = addImageToJson(data.results, "people");
      setList((prev) => [...prev, ...resultImages]);
      setNextPage(data.next);
    }
  };

  return (
    <div className="w-full">
      <div className="">
        {list.map((item, index) => (
          <CardPeople key={index} item={item} />
        ))}
      </div>
      <button
        className="btn mt-3 bg-slate-700 text-white"
        hidden={!nextPage}
        onClick={loadPage}
      >
        Load More
      </button>
    </div>
  );
}
