"use client";

import { CardPeople } from "@/ui/cards/card-people";
import Pagination from "@/ui/section-pagination";
import { useEffect, useState } from "react";

export default function PeopleList({ data }) {
  const [list, setList] = useState();
  const [index, setIndex] = useState(0);
  const pageSize = 20;
  const pageCount = Math.ceil(data.length / pageSize);
  useEffect(() => {
    if (data && data.length) {
      const nextValue = index * pageSize;
      const newArr = data.slice(nextValue, nextValue + pageSize);
      setList(newArr);
    }
  }, [index, data]);
  const scrollToTop = () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  };
  // This function will be called when the page changes in the Pagination component
  const handlePageChange = (newIndex) => {
    scrollToTop();
    setIndex(newIndex);
  };

  return (
    <div>
      <div className="w-full">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list &&
            list.map((item, index) => <CardPeople key={index} item={item} />)}
        </div>
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
    </div>
  );
}
