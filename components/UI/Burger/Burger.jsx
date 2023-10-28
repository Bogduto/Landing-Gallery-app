"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { categoriesArray } from "@/constants";
import dynamic from "next/dynamic";
import useBodyOverflow from "@/hooks/useOverflowBody";
import { usePathname } from "next/navigation";
// components
import Container from "@/components/Layout/Container/Container";
const ToggleTheme = dynamic(
  () => import("@/components/UI/ToggleTheme/ToggleTheme"),
  { ssr: false }
);

const Burger = () => {
  const [isShow, setIsShow] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsShow(false);
  }, [path]);
  
  const handleChange = () => {
    setIsShow(!isShow);
  };
  
  useBodyOverflow(isShow);

  return (
    <div>
      <button onClick={handleChange} className="relative w-[20px] h-[20px]">
        {isShow ? (
          <svg
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            height="24px"
            width="24px"
            className="dark:fill-white fill-black"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 22 22"
            className="dark:fill-white dark:stroke-white fill-black stroke-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64941 10.8483H17.8161"
              strokeWidth="1.77083"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.64941 5.53577H17.8161"
              strokeWidth="1.77083"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.64941 16.1608H17.8161"
              stroke-width="1.77083"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>

      {isShow && (
        <div className="h-full z-50 fixed left-0 top-[46px] w-full dark:bg-black bg-white text-white dark:text-white">
          <Container>
            <div className="pb-[60px] pt-[27.7px] w-full h-full flex flex-col overflow-y-scroll">
              <div>
                <Link
                  href="/submit"
                  className="font-bold capitalize text-[17px] duration-300 text-black hover:text-black-hover dark:text-white dark:hover:text-white-hover tracking-[0%] leading-[25.5px]"
                >
                  submit
                </Link>
              </div>

              {/* caterories */}
              <div className="py-[42.5px]">
                <div className="mb-[21.25px] uppercase dark:text-white dark:text-white text-black text-[12.8px] leading-[17px] tracking-[1.27px]">
                  categories
                </div>
                <div className="flex flex-col gap-[17px]">
                  {categoriesArray.map((item, key) => (
                    <Link
                      key={key}
                      href={{
                        query: {
                          category: item.text,
                        },
                      }}
                    >
                      <div className="flex flex-row items-center gap-[15.35px]">
                        <div className="dark:bg-white bg-black w-[25px] h-[25px] px-[2.6px] py-[2px] rounded-[8.5px] flex flex-row justify-center items-center">
                          {item.icon}
                        </div>
                        <div className="dark:text-white text-black capitalize text-[14.9px] font-normal leading-[21.3px]">
                          {item.text}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-[21.25px] uppercase dark:text-white text-black text-[12.8px] leading-[17px] tracking-[1.27px]">
                  preferences
                </div>
                <div className="flex flex-row items-center">
                  <ToggleTheme />
                  <div className="pl-[5px] dark:text-white text-black capitalize cursor-pointer uppercase font-normal text-[12.8px] tracking-[1.27px] leading-[17px]">
                    mode
                  </div>
                </div>
              </div>

              {/* submit */}
              <div className="w-full pt-[30px] pb-[20px]">
                <Link
                  href={"/submit"}
                  className="w-full flex flex-row justify-center rounded-[6.38px] bg-[#E44B09] text-white w-full py-[11.23px] text-[14.9px] font-normal leading-[21.3px]"
                >
                  Submit a site
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Burger;
