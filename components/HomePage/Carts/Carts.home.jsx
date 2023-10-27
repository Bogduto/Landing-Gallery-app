"use client";
import React, { useState } from "react";
import Link from "next/link";
// components
import Container from "@/components/Layout/Container/Container";
import Cart from "./Cart/Cart";
const Carts = ({ data }) => {
  return (
    <div className="w-full h-full">
      <Container>
        <div className="pb-[50px] w-full h-full flex flex-row flex-wrap items-start gap-[37.55px] justify-between">
          {data.map((item, key) => (
            <Cart
              key={key}
              description={item.description}
              name={item.name}
              image={item.screenshot}
              categories={item.categories}
            />
          ))}
        </div>

        {data && data.length > 10 && (
          <div className="w-full flex flex-row justify-center py-[42px]">
            <button
              type="button"
              className="duration-300 active:bg-footer-color-active bg-[#1E1E1E] hover:bg-[#2e2e2e] rounded-[8.5px] px-[27px] pt-[11.4px] pb-[12.66px] block text-white font-medium text-[14.9px] leading-[21.25px]"
            >
              Load more
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
