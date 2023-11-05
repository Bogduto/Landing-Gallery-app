"use client";
import Container from "@/components/Layout/Container/Container";
import React from "react";
import AdminCart from "../cart";

const Carts = ({ data }) => {
  return (
    <div className="w-full min-h-screen">
      <Container>
        <div className="mb-[25px]">Under consideration</div>

        {data.length ? (
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
          <div className="h-[500px] pt-[50px]">No bids.</div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
