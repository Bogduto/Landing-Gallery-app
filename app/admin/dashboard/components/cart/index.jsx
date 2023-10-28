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
      <ButtonsContainer id={_id} />
    </div>
  );
};

export default AdminCart;
