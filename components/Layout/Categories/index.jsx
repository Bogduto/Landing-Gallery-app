"use client";
import React, { useState, useEffect } from "react";
//
import Link from "next/link";
import { categoriesArray } from "@/constants";
// components
import Container from "../Container";

const CategoriesCarts = () => {
  const [index, setIndex] = useState(5);
  const [isHide, setIsHide] = useState(false);

  const handleChangeStatus = () => {
    setIsHide(!isHide);
    if (isHide) {
      handleChangeHide();
    } else {
      handleChangeShowAll();
    }
  };

  const handleChangeShowAll = () => {
    setIndex(categoriesArray.length);
  };
  const handleChangeHide = () => {
    setIndex(5);
  };
  return (
    <div className="desktop:block mobile:hidden w-full mb-[40px]">
      <Container>
        <div className="flex flex-row flex-wrap justify-center gap-y-[10px] items-center">
          {categoriesArray.slice(0, index).map((item, key) => (
            <Link
              key={key}
              href={{
                query: { category: item.text },
              }}
            >
              <div className="mx-[5px] flex desktop:text-[14px] mobile:text-[12px] flex-row gap-[5px] border-[1px] rounded-[7px] px-[10px] py-[5px] border-dashed hover:border-solid dark:border-gray dark:active:bg-black-hover active:bg-white-hover border-black duration-300">
                <div>{item.icon}</div>
                {item.text}
              </div>
            </Link>
          ))}
          <button
            onClick={() => handleChangeStatus()}
            className="ml-[10px] mobile:text-[10px] desktop:text-[13px] text-end"
            type="button"
          >
            {index > 5 ? "show less" : "show more"}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CategoriesCarts;
