"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/UI/Search/Search";
import Burger from "@/components/UI/Burger/Burger";
import dynamic from "next/dynamic";

const ToggleTheme = dynamic(
  () => import("@/components/UI/ToggleTheme/ToggleTheme"),
  { ssr: false }
);

const Navbar = () => {
  return (
    <div className="w-full h-[46px] bg-inherit">
      <Container>
        <div className="w-full h-full flex flex-row justify-between items-center">
          {/* logo */}
          <Link
            className="rounded-[24px] w-[40px] h-[40px] bg-black flex flex-row justify-center items-center"
            href={"/"}
          >
            <div className="relative w-[21px] h-[21px]">
              <Image src="/logo.svg" alt="logo" fill />
            </div>
          </Link>

          {/* 1024 px burger is hide */}

          {/* burger */}
          <div className="desktop:hidden laptop:hidden mobile:block">
            <Burger />
          </div>
          {/* clasic */}
          <div className="h-full mobile:hidden laptop:flex flex-row gap-[20px] items-center">
            {/* search */}
            <Search />
            {/* links */}
            <ul className="h-full flex flex-row items-center gap-[25px]">
              <Link href={"/submit"}>
                <li className="cursor-pointer capitalize font-normal text-[12.8px] tracking-[1.27px] leading-[17px] text-black hover:text-black-hover dark:text-white dark:hover:text-white-hover duration-300">
                  Submit startup
                </li>
              </Link>
            </ul>
            <div className="border-l-[1px] px-[10px]  dark:border-white border-black w-[50px] h-[20px] flex flex-row items-center">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
