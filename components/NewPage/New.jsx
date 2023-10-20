"use client";
import React from "react";
import Container from "@/components/Layout/Container/Container";
import RegisterProject from "./Form";

const New = () => {
  return (
    <div className="w-full h-full">
      <Container>
        {/* text field */}
        <div>
          {/* title */}
          <div className="mobile:text-[20.5px] desktop:text-[76.5px] dark:text-white text-black font-bold desktop:leading-[95.63px] mobile:w-full desktop:w-[600px]">
            Submit a new startup
          </div>
          {/* subtitle */}
          <div className="desktop:text-[21.3px] mobile:text-[14px] dark:text-white text-[#334155] font-normal desktop:leading-[29.75px]">
            Share your startup with the community and get featured
          </div>
        </div>
        <RegisterProject />
      </Container>
    </div>
  );
};

export default New;
