"use client";
import React, { useState, useRef } from "react";
import useBodyOverflow from "@/hooks/useOverflowBody";
import useOutsideClick from "@/hooks/useClickOutside";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PopUpWindow = ({
  buttonName,
  onShowState,
  searchValue,
  searchChangeValue,
  children,
  hasSearch = false,
}) => {
  const [onShow, setOnShow] = useState(
    onShowState != null ? onShowState : false
  );
  const params = usePathname();
  // if url changes
  useEffect(() => {
    handleClose();
  }, [params]);

  const handleChange = () => {
    setOnShow(!onShow);
  };

  const handleClose = () => {
    setOnShow(false);
  };

  const ref = useRef(null);

  useBodyOverflow(onShow);
  useOutsideClick(ref, handleClose);

  return (
    <div>
      <button type="button" onClick={handleChange}>
        {buttonName}
      </button>

      {onShow && (
        <div className="z-50	 fixed left-0 top-0 flex flex-row backdrop-blur-[2px] justify-center items-center dark:bg-black-alpha bg-white-alpha w-full h-screen">
          <div
            ref={ref}
            className="z-50 overflow-hidden mobile:w-full mobile:h-full desktop:w-[600px] desktop:h-[550px] desktop:rounded-[15px] desktop:border-[1px] desktop:dark:border-white-hover desktop:border-black p-[20px] dark:bg-black bg-white"
          >
            {hasSearch ? (
              <div className="w-full h-[40px]">
                <input
                  className="dark:text-white dark:placeholder:text-white-hover text-black placeholder:textt-black-hover placeholder:capitalize pb-[8px] border-b-[2px] border-white-active w-full"
                  type="text"
                  placeholder="search"
                  value={searchValue}
                  onChange={(e) => searchChangeValue(e.target.value)}
                />
              </div>
            ) : null}
            <div className="flex flex-col w-full py-[15px] h-full">
              {children}
            </div>
          </div>

          {/* close */}
          <button
            className="absolute right-[25px] top-[25px]"
            type="button"
            onClick={handleChange}
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default PopUpWindow;
