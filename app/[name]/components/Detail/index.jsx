"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// componetns
import Container from "@/components/Layout/Container/Container";

const Detail = ({
  description,
  name,
  categories,
  email,
  screenshot,
  websiteUrl,
}) => {
  const [cate, setCate] = useState([
    "Rock",
    "Pop",
    "Hip-Hop",
    "Jazz",
    "Country",
    "Electronic",
    "Classical",
    "Reggae",
    "R&B",
    "Blues",
  ]);
  return (
    <Container>
      <div className="z-10 w-full h-full flex flex-col justify-center items-center">
        <div className="py-[50px] w-full">
          {/* image */}
          <div className="z-10 relative mobile:w-full  tablet:w-[650px] mobile:h-[200px] tablet:h-[400px] mb-[30px]">
            <Image src={screenshot} alt="cart image" fill />
          </div>
          {/* name */}
          <div className="capitalize text-black dark:text-white mobile:w-full desktop:w-[650px]   text-[18px] desktop:text-[25px] mb-[25px]">
            {name}
          </div>
          {/* description */}
          <div className="text-black dark:text-white mobile:text-[14px] desktop:text-[18px] tablet:w-[600px]">
            {description}
          </div>
          {/* the details */}
          <div className="w-full flex flex-col mt-[15px]">
            <div className="capitalize text-black dark:text-white text-[15px] mb-[25px] font-bold">
              the details
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row flex-wrap gap-[6px]">
                <div className="text-[#626669] dark:text-white text-[17px] font-bold leading-[19.5px] uppercase">
                  url:{" "}
                </div>
                <Link
                  className="h-full duration-300 cursor-pointer text-[#3375B7] hover:text-[#27588a] duration-300 mobile:text-[14px] laptop:text-[17px] leading-[19.5px]"
                  href={websiteUrl}
                >
                  {websiteUrl}
                </Link>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-[6px]">
                <div className="text-[#626669] dark:text-white text-[17px] font-bold leading-[19.5px] capitalize">
                  email:
                </div>
                <div className="mobile:text-[14px] laptop:text-[17px] text-[#3375B7] leading-[19.5px]">
                  {email}
                </div>
              </div>
              {categories.length ? (
                <div className="flex flex-row flex-wrap justify-start items-end gap-[3px] w-full">
                  <div className="dark:text-white text-[17px] font-bold leading-[19.5px] capitalize">
                    categories:{" "}
                  </div>
                  <div className="flex flex-row gap-[5px] items-start">
                    {categories.map((item, key) => (
                      <div
                        key={key}
                        className="text-black dark:text-white mobile:text-[13px] laptop:text-[17px] font-bold"
                      >
                        {item} {categories.length - 1 > key ? ", " : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
