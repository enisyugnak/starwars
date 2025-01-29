"use client";
import { useEffect, useState } from "react";
import ListPlanets from "./list-planets";
import Pagination from "./section-pagination";

export default function PlanetsPaginated({ data }) {
  const [list, setList] = useState();
  const [index, setIndex] = useState(0);
  const pageSize = 10;
  const pageCount = Math.ceil(data.length / pageSize);

  useEffect(() => {
    //const storedPage = localStorage.getItem("planetsPage");
    //setIndex(storedPage ? Number(storedPage) : 0);
  }, []);

  useEffect(() => {
    //index && localStorage.setItem("planetsPage", index);

    if (data && data.length) {
      const nextValue = index * pageSize;
      const newArr = data.slice(nextValue, nextValue + pageSize);
      setList(newArr);
    }
  }, [index, data]);

  // This function will be called when the page changes in the Pagination component
  const handlePageChange = (newIndex) => {
    setIndex(newIndex);
    //setPageIndex(newPageIndex); // Triggering the parent's state update
  };

  return (
    <div>
      {/** Planets List */}

      {list && <ListPlanets list={list} />}

      {/** Pagination */}
      <div className="mt-7 flex justify-center">
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            pageIndex={index}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
