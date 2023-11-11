"use client";
import React from "react";
import Image from "next/image";

const NoProjectsFound = () => {
  return (
    <div className="min-h-screen pt-[50px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative mobile:w-[270px] mobile:h-[270px] w-[638px] h-[477px]">
          <Image src="/page-state/no-projects.svg" alt="no apps icon" fill />
        </div>

        <div className="w-full text-center mt-[25px] dark:text-white text-[#252F40] text-[35px] font-bold capitalize">
          There are currently no projects.
        </div>
      </div>
    </div>
  );
};

export default NoProjectsFound;
