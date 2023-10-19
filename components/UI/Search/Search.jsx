"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const Search = () => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const handleChangeShow = () => {
    setIsShow(!isShow);
    if (!isShow) setValue("");
  };

  const handleSearch = () => {
    console.log("click", currentPath);
    if (value.length === 0) return handleChangeShow();
    if (value.length > 0) return setValue("");
    // query ?search=value
  };

  const handleSearchResults = () => {};

  //   also outline click close input
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-[8px]">
        <input
          className={`${
            isShow
              ? "w-[240px] h-[40px] border-b-[1px] border-white pb-[5px] flex flex-row items-center"
              : "w-0 h-[40px] border-none"
          } ${
            value.length > 0 ? "border-none" : ""
          } duration-300 text-white placeholder:text-white placeholder:capitalize h-full px-[10px]`}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search startups"
        />
        <button
          className="relative w-[20px] h-[20px]"
          onClick={handleSearch}
          type="button"
        >
          {value.length > 0 ? (
            <Image src="/trash_icon.svg" alt="trash" fill />
          ) : (
            <Image src="/search__icon.svg" alt="search" fill />
          )}
        </button>
      </div>
      {value.length > 0 && (
        <div className="bg-white absolute top-9 w-[300px] left-0">
          results results <br />
          results <br /> results <br /> results results results <br />
          results <br /> results <br /> results
        </div>
      )}
    </div>
  );
};

export default Search;
