"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[46px] bg-inherit">
      <Container>
        <div className="w-full h-full flex flex-row justify-between items-center">
          {/* logo */}
          <div className="relative w-[21px] h-[21px]">
            <Image src="/logo.svg" alt="logo" fill />
          </div>

          {/* links */}
          <ul className="flex flex-row items-center gap-[25px]">
            <li className="cursor-pointer uppercase font-normal text-[12.8px] tracking-[1.27px] leading-[17px] text-white hover:text-white-hover duration-300">
              sumbit
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
