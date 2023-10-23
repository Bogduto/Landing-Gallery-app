"use client";
import Container from "@/components/Layout/Container/Container";
import React, { useState } from "react";
import Select from "@/components/UI/Select/Select";
import { categoriesArray } from "@/constants";

const Header = () => {
  const [categories, setCategories] = useState(categoriesArray);

  return (
    <div className="w-full py-[68px]">
      <Container>
        <div className="w-full flex flex-row items-center justify-between">
          {/* left side */}
          <div>
            {/* title */}
            <div className="mb-[7.8px] desktop:w-[559px] font-bold mobile:text-center desktop:text-start mobile:text-[25.5px] desktop:text-[38.3px] text-black dark:text-white leading-[42px]">
              Home of the best landing page design inspiration
            </div>
            {/* discover */}
            <div className="mb-[17.72px] desktop:w-[613px] font-normal mobile:text-center desktop:text-start mobile:text-[14.9px] desktop:text-[19.1px] text-black dark:text-gray leading-[29.75px]">
              Discover the beauty of the internet with our handpicked collection
              of the best landing page design inspiration.
            </div>
            {/* select */}
            {/* <Select data={categories} /> */}
          </div>
          {/* right side */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
