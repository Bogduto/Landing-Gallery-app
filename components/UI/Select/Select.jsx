"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";


const Select = ({ data }) => {
  const params = useSearchParams();
  const searchCategories = params.get("categories");

  const [value, setValue] = useState(
    searchCategories ? searchCategories : null
  );
  const [onShow, setOnShow] = useState(false);

  const handleChangeShow = () => {
    setOnShow(!onShow);
  };

  return (
    <div className="w-full flex mobile:flex-col desktop:flex-row items-center mobile:justify-center desktop:justify-start">
      <SelectButton onClick={() => handleChangeShow()}>
        {value ? value : "categories"}
      </SelectButton>

      <div className="mt-[10px] relative">
      {onShow && (
        <SelectOptionContainer>
          {data.map((item, key) => (
            <SelectOption
              buttonValue={value}
              onClick={() => (setValue(item), handleChangeShow())}
              key={key}
            >
              {item}
            </SelectOption>
          ))}
        </SelectOptionContainer>
      )}
      </div>
    </div>
  );
};

const SelectOptionContainer = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="absolute mobile:top-[0] desktop:top-[30px] mobile:left-[-120px] mobile:w-[238px] desktop:w-[340px] bg-black rounded-[25px] border-[2px] border-[#252525]"
    >
      <div className="w-full h-full flex flex-col gap-[5px] px-[10px] py-[20px]">
        {children}
      </div>
    </div>
  );
};

const SelectButton = ({ children, ...props }) => {
  return (
    <button
      className="flex flex-row items-center gap-[10px] mobile:w-[120px] desktop:minW-[100px] text-start text-white border-[2px] border-[#252525] p-[12px] rounded-[12px]"
      type="button"
      {...props}
    >
      {children}

      <div className="relative w-[10px] h-[10px]">
        <svg
          fill="#ffffff"
          height="10px"
          width="10px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlxspace="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
    </button>
  );
};

const SelectOption = ({ children, buttonValue, ...props }) => {
  return (
    <Link
      href={{
        query: { categories: children },
      }}
      {...props}
      className={`${
        buttonValue == children && "bg-white-hover !text-black"
      } text-white px-[7px] py-[10px] hover:bg-white-hover hover:text-black rounded-[8px] duration-300`}
    >
      {children}
    </Link>
  );
};

export default Select;
