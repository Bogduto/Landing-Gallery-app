"use client"
import React from "react";
import Image from "next/image";
const NotFoundError = ({children}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="relative mobile:w-[270px] mobile:h-[270px] laptop:w-[453px] laptop:h-[232px]">
        <Image src="/page-state/not-found.svg" alt="no apps icon" fill />
      </div>

      <div className="w-full text-center mobile:mt-[15px] laptop:mt-[25px] dark:text-white text-[#252F40] mobile:text-[25px] laptop:text-[35px] font-bold capitalize">
        Oh No! Error 404
      </div>

      {children}
    </div>
  );
};

export default NotFoundError;