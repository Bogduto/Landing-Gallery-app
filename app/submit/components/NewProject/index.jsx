"use client";
import React from "react";
// components
import Container from "@/components/Layout/Container";
import CreateProject from "../CreateProject";

const NewProject = () => {
  return (
    <div className="w-full h-full">
      <Container>
        {/* text field */}
        <div>
          {/* title */}
          <div className="mobile:text-[20.5px] desktop:text-[76.5px] dark:text-white text-black font-bold desktop:leading-[95.63px] mobile:text-center laptop:text-start mobile:w-full  laptop:w-[600px]">
            Submit a new startup
          </div>
          {/* subtitle */}
          <div className="desktop:text-[21.3px] mobile:text-[14px] dark:text-white text-[#334155] font-normal mobile:text-center laptop:text-start desktop:leading-[29.75px]">
            Share your startup with the community and get featured
          </div>
        </div>
        <CreateProject />
      </Container>
    </div>
  );
};

export default NewProject;
