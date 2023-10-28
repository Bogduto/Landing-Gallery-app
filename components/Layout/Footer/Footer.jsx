"use client";
import React from "react";
import Image from "next/image";
import { categoriesArray } from "@/constants";
import Link from "next/link";
// components
import Container from "../Container/Container";
const Footer = () => {
  return (
    <div className="w-full bg-footer-color mobile:py-[68px] desktop:py-[136px]">
      <Container>
        <div className="flex mobile:flex-col desktop:flex-row mobile:gap-[43px] desktop:gap-[83px] flex-wrap items-start">
          <div>
            <div className="mb-[41px] w-[42.5px] h-[42.5px] flex flex-row justify-center items-center p-[10px] bg-black rounded-[8.5px]">
              <div className="relative w-[21.25px] h-[21.25px]">
                <Image src="/logo.svg" alt="logo" fill />
              </div>
            </div>
            <div className="w-[248px] text-white font-bold text-[17px] leading-[25px]">
              Home of the best landing page design inspiration.
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[94px]">
            {/* title section */}
            <div>
              <div className="mb-[17px] uppercase text-[12.8px] text-white font-bold leading-[17px] tracking-[1.275px]">
                links
              </div>

              <ul className="flex flex-col gap-[9px]">
                <li className="duration-300 cursor-pointer capitalize text-[14.9px] text-[#D1D5DB] hover:text-white font-normal leading-[25.5px]">
                  submit
                </li>
              </ul>
            </div>

            <div className="">
              <div className="mb-[17px] uppercase text-[12.8px] text-white font-bold leading-[17px] tracking-[1.275px]">
                categories
              </div>

              <div className="flex mobile:flex-col tablet:flex-row mobile:gap-[10px] tablet:gap-[30px] items-start">
                <div className="flex flex-col items-start gap-[8.8px]">
                  {categoriesArray
                    .slice(0, categoriesArray.length / 2)
                    .map((item, key) => (
                      <Link
                        key={key}
                        href={{
                          query: {
                            category: item.text,
                          },
                        }}
                      >
                        <div className="flex flex-row gap-[5px]duration-300 cursor-pointer capitalize text-[14.9px] text-[#D1D5DB] hover:text-white font-normal leading-[25.5px]">
                          <div>{item.icon}</div>
                          {item.text}
                        </div>
                      </Link>
                    ))}
                </div>

                <div className="flex flex-col items-start gap-[8.8px]">
                  {categoriesArray
                    .slice(
                      categoriesArray.length / 2 + 1,
                      categoriesArray.length
                    )
                    .map((item, key) => (
                      <Link
                        key={key}
                        href={{
                          query: {
                            category: item.text,
                          },
                        }}
                      >
                        <div className="flex flex-row gap-[5px]duration-300 cursor-pointer capitalize text-[14.9px] text-[#D1D5DB] hover:text-white font-normal leading-[25.5px]">
                          <div>{item.icon}</div>
                          {item.text}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
