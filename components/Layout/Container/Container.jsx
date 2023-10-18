"use client";
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="desktop:w-[1140px] desktop:px-0 mobile:px-[20px] h-full mx-auto ">
      {children}
    </div>
  );
};

export default Container;
