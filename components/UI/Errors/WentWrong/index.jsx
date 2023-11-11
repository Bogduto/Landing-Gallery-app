"use client";
import React from "react";
import Image from "next/image";

const WentWrongError = ({children}) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="mobile:text-[25px] laptop:text-[35px] dark:text-white text-black font-bold capitalize">
        something went wrong
      </div>
      <div className="relative mobile:w-[270px] mobile:h-[270px] laptop:w-[500px] laptop:h-[400px]">
        <Image
          src="/page-state/something-went-wrong.svg"
          alt="error icon"
          fill
        />
      </div>

      {children}
    </div>
  );
};

export default WentWrongError;
