"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = () => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(true);
  const currentPath = usePathname();

  const handleChangeShow = () => {
    setIsShow(!isShow);
    if (!isShow) setValue("");
  };

  const handleClicked = () => {
    setValue("");
    setIsShow(false);
  };

  const { data, error, isLoading } = useSWR(
    value ? `/api/public-api/project/search/${value}` : null,
    fetcher
  );

  //   also outline click close input
  return (
    <div className="relative h-full">
      <div className="h-full flex flex-row items-center gap-[8px]">
        <input
          className={`${
            isShow
              ? "w-[280px] h-[40px] border-b-[1px] border-black dark:border-white font-normal text-[12.8px] tracking-[1.27px] leading-[17px] flex flex-row items-center"
              : "w-0 h-[40px] border-none"
          } ${
            value.length > 0 ? "border-none" : ""
          } duration-300 text-black dark:text-white placeholder:text-black dark:placeholder:text-white placeholder:capitalize h-full px-[10px]`}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search startups"
        />
        <button
          className="relative w-[20px] h-[20px]"
          onClick={handleChangeShow}
          type="button"
        >
          {value.length > 0 ? (
            <svg
              className="dark:fill-white fill-black"
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 485 485"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <rect x="67.224" width="350.535" height="71.81" />
                  <path
                    d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447
                    h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"
                  />
                </g>
              </g>
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      {isShow && data && data?.result.length > 0 && (
        <div className="dark:border-white border-[1px] border-black bg-white dark:bg-black absolute top-9 w-[300px] left-0">
          <div className="flex flex-col gap-[10px]">
            {data.result.map((item, key) => (
              <Link
                key={key}
                href={`/${item.name}`}
                onClick={() => handleClicked()}
              >
                <div className="font-normal text-[12.8px] border-[1px] border-gray py-[5px] px-[7px] dark:text-white text-black cursor-pointer hover:bg-white-hover active:bg-white-active duration-300">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
