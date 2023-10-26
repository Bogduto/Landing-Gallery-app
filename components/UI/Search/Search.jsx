"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";
import PopUpWindow from "../PopUpWindow";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = () => {
  const [value, setValue] = useState("");
  
  const handleClicked = () => {
    setValue("");
  };

  const { data, error, isLoading } = useSWR(
    value && value.length ? `/api/public-api/project/search/${value}` : null,
    fetcher
  );

  const handleChangeValue = (text) => {
    setValue(text);
  };

  return (
    <div className="relative h-full">
      <div className="h-full flex flex-row items-center gap-[8px]">
        <div className="w-[20px] h-[20px]">
          <PopUpWindow
            searchChangeValue={handleChangeValue}
            searchValue={value}
            buttonName={
              <svg
                className="dark:fill-white fill-black"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 488.4 488.4"
                xmlSpace="preserve"
                stroke="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
                    </g>
                  </g>
                </g>
              </svg>
            }
          >
            {data?.result.map((item, key) => (
              <Link
                key={key}
                href={`/${item.name}`}
                onClick={() => handleClicked()}
              >
                <div className="font-normal text-[13px] dark:hover:bg-black-hover  py-[8px] px-[7px] dark:text-white text-black cursor-pointer hover:bg-white-hover active:bg-white-active duration-300">
                  {item.name}
                </div>
              </Link>
            ))}
          </PopUpWindow>
        </div>
      </div>
    </div>
  );
};

export default Search;
