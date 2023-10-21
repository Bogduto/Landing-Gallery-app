"use client";
import React from "react";

const SubmitButton = ({ children }) => {
  return (
    <button
      className="rounded-[8.5px] py-[12px] px-[27px] duration-300 bg-orange hover:bg-orange-hover active:bg-orange-active text-white text-[14.9px] text-white font-normal leading-[21.25px]"
      type="submit"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
