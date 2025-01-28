"use client";
import { useEffect, useState } from "react";
import SelfButton from "./button";

export default function Pagination({ count, pageIndex, onPageChange }) {
  //const [pageIndex, setPageIndex] = useState(0);
  const arr = Array.from({ length: count });

  // useEffect(() => {
  //   localStorage.setItem("currentPage", pageIndex);
  // }, [pageIndex]);

  function itemClicked(id) {
    onPageChange(id);
    //setPageIndex(id);
  }

  function nextClicked() {
    onPageChange(pageIndex < arr.length - 1 ? pageIndex + 1 : 0);
    //setPageIndex((prev) => (prev < arr.length - 1 ? prev + 1 : 0));
  }
  function prevClicked() {
    onPageChange((pageIndex) =>
      pageIndex > 0 ? pageIndex - 1 : arr.length - 1,
    );
    //setPageIndex((prev) => (prev > 0 ? prev - 1 : arr.length - 1));
  }

  return (
    <div className="relative flex flex-wrap gap-1">
      <SelfButton onClick={prevClicked}>Prev</SelfButton>
      {arr.map((item, index) => {
        return (
          <SelfButton
            key={index}
            onClick={() => itemClicked(index)}
            disabled={pageIndex === index}
            className={
              pageIndex === index
                ? "cursor-default bg-sky-500 text-white hover:bg-sky-500 hover:text-white"
                : ""
            }
          >
            {index + 1}
          </SelfButton>
        );
      })}
      <SelfButton onClick={nextClicked}>Next</SelfButton>
    </div>
  );
}
