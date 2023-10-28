"use client";
import React from "react";
import Link from "next/link";
const Cart = ({ description, name, image, categories }) => {
  return (
    <div className="w-[347.94px] text-white rounded-[25px]">
      {/* image */}
      <div className="rounded-[25px]  w-full mb-[10px]">
        <img src={`/uploads/${image}`} alt="cart image" />
      </div>
      {/* name */}

      <Link href={`/${name}`}>
        <div className="mb-[5px] text-[20px] font-normal text-black hover:text-black-hover dark:text-[#C8C8C8] dark:hover:text-[#a8a5a5] duration-300 tracking-[0.32px] leading-[17px] capitalize">
          {name}
        </div>
      </Link>

      {/* categories */}
      {categories.length ? (
        <div className="mb-[5px] flex flex-row justify-start flex-wrap items-start gap-[3px]">
          {categories.slice(0, 3).map((item, key) => (
            <div
              key={key}
              className="text-black dark:text-white text-[12px] font-normal"
            >
              {item},
            </div>
          ))}
          {categories.length > 3 ? <div className="text-black dark:text-white text-[12px] tracking-[1px] font-normal">...</div> : null}
        </div>
      ) : null}
      {/* simple description */}
      {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        iste sint magni, ipsum labore fugit quaerat deserunt earum temporibus
        at. Fuga, obcaecati ratione.
      </div> */}
    </div>
  );
};

export default Cart;
