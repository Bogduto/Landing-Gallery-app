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
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="py-[50px]">
          {/* image */}
          <div className="mobile:w-full desktop:w-[650px] mobile:h-[300px] desktop:h-[400px] bg-black dark:bg-white mb-[30px]"></div>
          {/* name */}
          <div className="text-black dark:text-white mobile:w-full desktop:w-[650px] mobile:text-center desktop:text-start  text-[18px] desktop:text-[25px] mb-[25px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
          </div>
          {/* description */}
          <div className="text-black dark:text-white mobile:text-[14px] desktop:text-[18px] desktop:w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            ducimus autem eius adipisci quas reiciendis, ad consectetur
            distinctio ratione nostrum, corporis non ab placeat ipsam provident
            fuga corrupti, vitae facilis! Sequi iste quasi saepe?
          </div>
          {/* the details */}
          <div className="flex flex-col gap-[10px] mt-[15px]">
            <div className="capitalize text-black dark:text-white text-[15px] font-bold">
              the details
            </div>
            <div>
              <div className="text-black dark:text-white">
                url: http://github.com
              </div>
              <div className="text-black dark:text-white">
                email: example@gmail.com
              </div>
              <div className="flex flex-row gap-[5px]">
                <div>topic: </div>
                <div className="flex flex-row items-center gap-[10px] flex-wrap">
                  <div>scss,</div>
                  <div>ai,</div>
                  <div>machine learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
