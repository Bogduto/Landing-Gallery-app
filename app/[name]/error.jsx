"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WentWrongError from "@/components/UI/Errors/WentWrong";
const Error = ({ error, reset }) => {
  const router = useRouter();

  const handleGoHome = () => router.push("/");
  return (
    <WentWrongError>
      <button
        type="button"
        onClick={handleGoHome}
        className="flex mt-[20px] flex-row items-center gap-[6px]"
      >
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
        <div className="">Go home</div>
      </button>
    </WentWrongError>
  );
};

export default Error;
