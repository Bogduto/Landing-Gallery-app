"use client";
import React, { useState } from "react";
// componetns
import Container from "@/components/Layout/Container/Container";

const Detail = () => {
  const [cate, setCate] = useState([
    "Rock",
    "Pop",
    "Hip-Hop",
    "Jazz",
    "Country",
    "Electronic",
    "Classical",
    "Reggae",
    "R&B",
    "Blues",
  ]);
  return (
    <Container>
      <div className="">
        {/* image */}
        <div className="mobile:w-full desktop:w-[650px] mobile:h-[300px] desktop:h-[400px] bg-white"></div>
        {/* name */}
        <div className="text-white mobile:text-center desktop:text-start text-[25px] mb-[25px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
        </div>
        {/* description */}
        <div className="text-white text-[18px] desktop:w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          ducimus autem eius adipisci quas reiciendis, ad consectetur distinctio
          ratione nostrum, corporis non ab placeat ipsam provident fuga
          corrupti, vitae facilis! Sequi iste quasi saepe?
        </div>
        {/* the details */}
        <div className="flex flex-col gap-[10px] mt-[15px]">
          <div className="capitalize text-white text-[15px] font-bold">
            the details
          </div>
          <div>
            {cate.map((item, key) => (
                <div className="text-white" key={key}>
                    {item},
                </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
