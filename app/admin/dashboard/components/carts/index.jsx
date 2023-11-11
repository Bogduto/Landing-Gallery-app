"use client";
import React, {useState} from "react";
// components
import Container from "@/components/Layout/Container";
import AdminCart from "../cart";
import NoProjectsFound from "@/components/UI/Warns/NoProjectsFound";
const Carts = ({ data }) => {
  const [carts, setCarts] = useState(data)
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
        ) : <NoProjectsFound />}
      </Container>
    </div>
  );
};

export default Carts;
