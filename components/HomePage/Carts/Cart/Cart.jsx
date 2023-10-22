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

      <Link href={"/detail/my-travel"}>
        <div className="mb-[5px] text-[20px] font-normal text-black dark:text-[#C8C8C8] tracking-[0.32px] leading-[17px] capitalize">
          {name}
        </div>
      </Link>

      {/* categories */}
      {categories.length && (
        <div className="flex flex-row gap-[3px]">
          {categories.map((item, key) => (
            <div
              key={key}
              className="mb-[5px] text-black dark:text-white text-[12.8px] font-normal"
            >
              {item}
            </div>
          ))}
        </div>
      )}
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
