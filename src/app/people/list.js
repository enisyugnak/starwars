"use client";

import Link from "next/link";
import { useState } from "react";

export default function PeopleList({ data }) {
  const { results, next } = data;
  const [nextPage, setNextPage] = useState(next);
  const [list, setList] = useState(results);

  const loadPage = async () => {
    if (nextPage) {
      const res = await fetch(nextPage);
      const data = await res.json();
      setList((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
    }
  };
  function getPersonId(url) {
    const urlSplit = url.split("/");
    const itemId = urlSplit.slice(-2)[0];
    return `/people/${itemId}`;
  }
  return (
    <div className="w-full">
      <div className="">
        {list.map((item, index) => (
          <Link key={index} className="btn m-1" href={getPersonId(item.url)}>
            {item.name} - {getPersonId(item.url)}
          </Link>
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
