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
            className="absolute z-50 mobile:right-[10px] mobile:top-[10px] desktop:right-[25px] desktop:top-[25px]"
            type="button"
            onClick={handleChange}
          >
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
          </button>
        </div>
      )}
    </div>
  );
};

export default PopUpWindow;
