"use client";
import React, { useState } from "react";
// components
import Container from "@/components/Layout/Container/Container";
import Cart from "./Cart/Cart";
import LoadMoreButton from "@/components/UI/Buttons/LoadMore";

const Carts = ({ data }) => {
  return (
    <div className="w-full min-h-screen">
      <Container>
        <div className="pb-[50px] w-full h-full flex flex-row flex-wrap items-start mobile:gap-[27px] tablet:gap-[32px] desktop:gap-[37.55px]">
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

        {data.length >= 10 && (
          <div className="w-full flex flex-row justify-center py-[42px]">
            <LoadMoreButton />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
