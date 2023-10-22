"use client";
import Container from "@/components/Layout/Container/Container";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminCart from "../Cart";

const Carts = ({ data }) => {
  console.log(data)
  return (
    <div className="w-full h-full">
      <Container>
        <div className="mb-[25px]">Under consideration</div>

        {data.length ? (
          <div className="h-full flex flex-col gap-[30px]">
            {data.map((item, key) => (
              <AdminCart
                key={key}
                image={item.screenshot ? item.screenshot : null}
                description={item.description}
                email={item.email}
                name={item.name}
                websiteUrl={item.websiteUrl}
                _id={item._id}
              />
            ))}
          </div>
        ) : (
          <div className="h-[500px] pt-[50px]">Заявок нету</div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
