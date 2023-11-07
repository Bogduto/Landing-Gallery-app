"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Error = ({ error, reset }) => {
  const router = useRouter();

  const handleGoHome = () => router.push("/");
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="text-[35px] dark:text-white text-black font-bold capitalize">
        something went wrong
      </div>
      <div className="relative w-[500px] h-[400px]">
        <Image
          src="/page-state/something-went-wrong.svg"
          alt="error icon"
          fill
        />
      </div>
      <button type="button" onClick={handleGoHome} className="flex mt-[20px] flex-row items-center gap-[6px]">
        <div className="relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10.0272L15 10.0272C17.2091 10.0272 19 11.8181 19 14.0272V19M5 10.0272L9.78038 15.0545M5 10.0272L9.78038 5"
              className="stroke-black dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="">
          Go home
        </div>
      </button>
    </div>
  );
};

export default Error;
