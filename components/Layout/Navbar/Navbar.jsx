"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/UI/Search/Search";
import Burger from "@/components/UI/Burger/Burger";
const Navbar = () => {
  return (
    <div className="w-full h-[46px] bg-inherit">
      <Container>
        <div className="w-full h-full flex flex-row justify-between items-center">
          {/* logo */}
          <Link href={"/"}>
            <div className="relative w-[21px] h-[21px]">
              <Image src="/logo.svg" alt="logo" fill />
            </div>
          </Link>

          {/* will turn to burger */}
          {/* burger */}
          <div className="desktop:hidden mobile:block">
            <Burger />
          </div>
          {/* clasic */}
          <div className="mobile:hidden desktop:flex flex-row items-center gap-[20px]">
            {/* search */}
            <Search />
            {/* links */}
            <ul className="flex flex-row items-center gap-[25px]">
              <Link href={"/new"}>
                <li className="cursor-pointer uppercase font-normal text-[12.8px] tracking-[1.27px] leading-[17px] text-white hover:text-white-hover duration-300">
                  Submit startup
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
