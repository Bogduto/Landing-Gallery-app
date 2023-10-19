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

    // query ?search=value
    if (value.length > 0) "searching..";
    if (currentPath !== "/") return router.push("/");
  };

  //   also outline click close input
  return (
    <div className="flex flex-row items-center gap-[8px]">
      <input
        className={`${
          isShow
            ? "w-[240px] h-[40px] border-b-[1px] border-white flex flex-row items-center"
            : "w-0 h-[40px] border-none"
        } duration-300 text-white placeholder:text-white placeholder:capitalize h-full px-[10px]`}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search"
      />
      <button
        className="relative w-[20px] h-[20px]"
        onClick={handleSearch}
        type="button"
      >
        <Image src="/search__icon.svg" alt="search" fill />
      </button>
    </div>
  );
};

export default Search;
