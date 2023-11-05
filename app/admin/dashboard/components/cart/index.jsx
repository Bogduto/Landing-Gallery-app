"use client";
import React from "react";
import Link from "next/link";
// services
import ButtonsContainer from "../ButtonsContainer";

const AdminCart = ({
  description,
  email,
  websiteUrl,
  _id,
  image,
  categories,
  name,
}) => {
  const slideLength = 3

  return (
    <div className="w-full tablet:w-[400px]">
      {image && (
        <div className="mb-[10px] w-full relative">
          <img src={`/uploads/${image}`} alt="bg" />
        </div>
      )}
      <div className="mb-[5px] mobile:text-[16px] tablet:text-[20px] font-normal text-black dark:text-[#C8C8C8] tracking-[0.32px] leading-[17px] capitalize">
        {name ? name : description}
      </div>
      <div className="text-[13px]">email: {email}</div>
      <Link href={`${websiteUrl}`}>
        <div className="text-[13px]">url: {websiteUrl}</div>
      </Link>
      {categories.length ? (
        <div className="pt-[5px]  flex flex-row justify-start flex-wrap items-start gap-[3px]">
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
      <ButtonsContainer id={_id} />
    </div>
  );
};

export default AdminCart;
