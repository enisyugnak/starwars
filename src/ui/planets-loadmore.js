"use client";
import { useEffect, useState } from "react";
import ListPlanets from "./list-planets";
import SelfButton from "./button";

export default function PlanetsLoadMore({ data }) {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const pageSize = 10;
  const pageCount = Math.ceil(data.length / pageSize);

  useEffect(() => {
    return () => {
      setIndex(0);
      setList([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const nextValue = index * pageSize;
      const newArr = data.slice(nextValue, nextValue + pageSize);
      setList((prev) => [...prev, ...newArr]);
    }
  }, [index, data]);

  function itemClicked() {
    setIndex((prev) => prev + 1);
  }

  return (
    <div>
      {/** Planets List */}

      {list && <ListPlanets data={list} />}

      {/** Pagination */}
      <div className="mt-7 flex justify-center">
        <SelfButton
          onClick={itemClicked}
          hidden={pageCount === index + 1}
          className={`${pageCount === index + 1 ? "hidden" : ""}`}
        >
          Load More
        </SelfButton>
      </div>
    </div>
  );
}
