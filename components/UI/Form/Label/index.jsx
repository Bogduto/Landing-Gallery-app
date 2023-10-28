"use client";
import React from "react";

const Label = ({ name, children }) => {
  return (
    <label
      className="capitalize dark:text-white text-[#111827] text-[14.9px] font-normal leading-[21.25px]"
      htmlFor={name}
    >
      {children}
    </label>
  );
};

export default Label;
