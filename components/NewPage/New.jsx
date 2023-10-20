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
          <div className="text-[76.5px] dark:text-white text-black font-bold leading-[95.63px] desktop:w-[600px]">
            Submit a new startup
          </div>
          {/* subtitle */}
          <div className="text-[21.3px] dark:text-white text-[#334155] font-normal leading-[29.75px]">
            Share your startup with the community and get featured
          </div>
        </div>
        <RegisterProject />
      </Container>
    </div>
  );
};

export default New;
