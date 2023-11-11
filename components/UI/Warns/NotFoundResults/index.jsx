"use client";
import React from "react";
import Image from "next/image";
const NotFoundResults = ({ children }) => {
  return (
    <div className="min-h-screen pt-[50px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative mobile:w-[270px] mobile:h-[270px] laptop:w-[613px] laptop:h-[309px]">
          <Image
            src="/page-state/no-results-found.svg"
            alt="no apps icon"
            fill
          />
        </div>

        <div className="w-full text-center mt-[25px] dark:text-white text-[#252F40] text-[35px] font-bold capitalize">
          No results found.
        </div>
        {children}
      </div>
    </div>
  );
};

export default NotFoundResults;
