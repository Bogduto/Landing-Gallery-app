"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const LoadMoreButton = ({dataLength}) => {
  const sliceParam = useSearchParams();
  const router = useRouter();
  const [sliceIndex, setSliceIndex] = useState(10);

  const handleCount = () => {
    router.push(`?slice=${sliceIndex}`);
    // I'll change
    if (dataLength + 10 <= sliceIndex) return setSliceIndex(dataLength); 
    return setSliceIndex((prev) => (prev += 10));
  };

  return (
    <button
      onClick={handleCount}
      type="button"
      className="duration-300 active:bg-footer-color-active bg-[#1E1E1E] hover:bg-[#2e2e2e] rounded-[8.5px] px-[27px] pt-[11.4px] pb-[12.66px] block text-white font-medium text-[14.9px] leading-[21.25px]"
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
