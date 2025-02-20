"use client";
import { useEffect, useState } from "react";
import ListPlanets from "./list-planets";
import Pagination from "./section-pagination";
import SelfButton from "./button/button";

export default function PlanetsPaginated({ data, loadmore = false }) {
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
    if (data && data.length) {
      const nextValue = index * pageSize;
      const newArr = data.slice(nextValue, nextValue + pageSize);
      loadmore ? setList((prev) => [...prev, ...newArr]) : setList(newArr);
    }
  }, [index, data]);

  // handles load more structure
  const itemClicked = () => {
    setIndex((prev) => prev + 1);
  };
  // handles numbered pagination
  const handlePageChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div>
      {/** Planets List */}

      {list && <ListPlanets data={list} />}

      {/** Pagination */}
      <div className="mt-7 flex justify-center">
        {loadmore ? (
          <SelfButton
            onClick={itemClicked}
            hidden={pageCount === index + 1}
            className={`${pageCount === index + 1 ? "hidden" : ""}`}
          >
            Load More
          </SelfButton>
        ) : (
          <Pagination
            count={pageCount}
            pageIndex={index}
            onPageChange={handlePageChange}
            className={`${pageCount === 1 ? "hidden" : ""}`}
          />
        )}
      </div>
    </div>
  );
}
