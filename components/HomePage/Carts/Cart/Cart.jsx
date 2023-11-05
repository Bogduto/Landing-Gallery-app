"use client";
import React from "react";
import Link from "next/link";
const Cart = ({ description, name, image, categories }) => {
  const slideLength = 3;
  return (
    <div className="w-[347.94px] text-white rounded-[25px]">
      {/* image */}
      <div className="rounded-[25px] w-full mb-[10px]">
        <img src={image} className="rounded-[15px] w-full" alt="cart image" />
      </div>
      {/* name */}

      <Link href={`/${name}`}>
        <div className="mb-[5px] text-[20px] font-normal text-black hover:text-black-hover dark:text-[#C8C8C8] dark:hover:text-[#a8a5a5] duration-300 tracking-[0.32px] leading-[17px] capitalize">
          {name}
        </div>
      </Link>

      {/* categories */}
      {categories.length ? (
        <div className="pt-[5px] pb-[8px] flex flex-row justify-start flex-wrap items-start gap-[3px]">
          {categories.slice(0, slideLength).map((item, key) => (
            <div
              key={key}
              className="text-black dark:text-white text-[12px] font-medium"
            >
              &quot;{item}&quot;{" "}
              {categories.length < slideLength
                ? key < categories.length - 1
                  ? ","
                  : null
                : key < slideLength - 1 && ","}
            </div>
          ))}
          {categories.length > 3 ? (
            <div className="text-black dark:text-white text-[12px] tracking-[1px] font-normal">
              ...
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mb-[5px] dark:text-white text-black text-[13px] font-light">
        {description.slice(0, 80)}...
      </div>
    </div>
  );
};

export default Cart;
