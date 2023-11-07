"use client";
import Container from "@/components/Layout/Container/Container";
import Image from "next/image";
import React from "react";
import AdminCart from "../cart";

const Carts = ({ data }) => {
  return (
    <div className="w-full min-h-screen">
      <Container>
        <div className="mb-[25px]">Under consideration</div>

        {data.length > 0 ? (
          <div className="min-h-screen flex flex-col gap-[30px]">
            {data.map((item, key) => (
              <AdminCart
                key={key}
                image={item.screenshot ? item.screenshot : null}
                description={item.description}
                email={item.email}
                categories={item?.categories}
                name={item.name}
                websiteUrl={item.websiteUrl}
                _id={item._id}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-screen pt-[50px]">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative w-[638px] h-[477px]">
                <Image
                  src="/page-state/no-projects.svg"
                  alt="no apps icon"
                  fill
                />
              </div>

              <div className="w-full text-center mt-[25px] dark:text-white text-[#252F40] text-[35px] font-bold capitalize">
                There are currently no projects.
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
