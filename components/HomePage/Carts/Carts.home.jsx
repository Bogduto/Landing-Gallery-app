"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation'
// components
import Container from "@/components/Layout/Container/Container";
import Cart from "./Cart/Cart";
import LoadMoreButton from "@/components/UI/Buttons/LoadMore";

const Carts = ({ data }) => {
  const [sliceIndex, setSliceIndex] = useState(10);

  const [isLoading, setIsLoading] = useState(false);

  const params = useSearchParams()
  const router = useRouter()
  const handleClearCategory = () => router.replace('?category=')
  

  const handleCountSlice = () => {
    setIsLoading(true);
    setSliceIndex((prev) => (prev += 10));
    setIsLoading(false);
  };
  


  return (
    <div className="w-full min-h-screen">
      <Container>
        {data.length > 0 ? (
          <div>
            <div className="pb-[50px] w-full h-full flex flex-row flex-wrap items-start mobile:gap-[27px] tablet:gap-[32px] desktop:gap-[37.55px]">
              {data.slice(0, sliceIndex).map((item, key) => (
                <Cart
                  key={key}
                  description={item.description}
                  name={item.name}
                  image={item.screenshot}
                  categories={item.categories}
                />
              ))}
            </div>

            {data.length > 10 && (
              <div className="w-full flex flex-row justify-center py-[42px]">
                <LoadMoreButton
                  onClick={handleCountSlice}
                  loading={isLoading}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="min-h-screen pt-[50px]">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative w-[613px] h-[309px]">
                <Image
                  src="/page-state/no-results-found.svg"
                  alt="no apps icon"
                  fill
                />
              </div>

              <div className="w-full text-center mt-[25px] dark:text-white text-[#252F40] text-[35px] font-bold capitalize">
                No results found.
              </div>

              <button className="mt-[20px] duration-300 active:bg-footer-color-active bg-[#1E1E1E] hover:bg-[#2e2e2e] rounded-[8.5px] px-[27px] pt-[11.4px] pb-[12.66px] block text-white font-medium text-[14.9px] leading-[21.25px]" onClick={handleClearCategory}>Clear category</button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
