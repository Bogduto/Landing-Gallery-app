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
      <div className="z-10 w-full h-full flex flex-row justify-center items-center">
        <div className="py-[50px]">
          {/* image */}
          <div className="z-10 relative mobile:w-full desktop:w-[650px] mobile:h-[300px] desktop:h-[400px]  mb-[30px]">
            <Image src={screenshot} alt="cart image" fill />
          </div>
          {/* name */}
          <div className="capitalize text-black dark:text-white mobile:w-full desktop:w-[650px] mobile:text-center desktop:text-start  text-[18px] desktop:text-[25px] mb-[25px]">
            {name}
          </div>
          {/* description */}
          <div className="text-black dark:text-white mobile:text-[14px] desktop:text-[18px] desktop:w-[600px]">
            {description}
          </div>
          {/* the details */}
          <div className="flex flex-col gap-[10px] mt-[15px]">
            <div className="capitalize text-black dark:text-white text-[15px] font-bold">
              the details
            </div>
            <div>
              <div className="text-black dark:text-white">
                url: <Link className="duration-300 cursor-pointer dark:text-white hover:dark:text-white-hover text-black hover:text-black-hover" href={websiteUrl}>{websiteUrl}</Link>
              </div>
              <div className="text-black dark:text-white">email: {email}</div>
              {categories.length ? (
                <div className="flex flex-row gap-[5px]">
                  <div>topic: </div>
                  <div className="flex flex-row items-center gap-[10px] flex-wrap">
                    {categories.map((item, key) => (
                      <div key={key}>{item}</div>
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
