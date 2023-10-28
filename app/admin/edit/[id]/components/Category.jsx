"use client";
import React, { useState } from "react";
import { FieldArray } from "formik";
import { categoriesArray } from "@/constants";
// components
import PopUpWindow from "@/components/UI/PopUpWindow";

const Category = ({ categories }) => {
  const [onShow, setOnShow] = useState(false);
  const [added, setAdded] = useState(categories ? categories : []);

  const handleChangeAdded = (value, cb) => {
    if (
      !added.find((item) => item == value) &&
      !categories.find((item) => item == value)
    ) {
      setAdded((prev) => [...prev, value]);
      cb(value);
    }
    return setOnShow(false);
  };

  const handleDeleteFromAdded = (item1, cb) => {
    cb(added.filter((item2) => item1 != item2));
    return setAdded((prev) => prev.filter((item2) => item1 != item2));
  };

  const handleSelected = (value) => {
    return added.includes(value);
  };

  return (
    <div>
      {/* dont need anymore */}
      {/* <div className="flex mobile:flex-col desktop:flex-row gap-[10px]">
        <div>Categories:</div>
        <div className="flex flex-row flex-wrap gap-[5px]">
          {added.length
            ? added.map((item, key) => (
                <div key={key}>{item?.text ? item.text : item}</div>
              ))
            : null}
        </div>
      </div> */}

      <PopUpWindow
        onShowState={onShow}
        buttonName={
          <div className="w-[48px] h-[48px] flex flex-row justify-center items-center dark:bg-white bg-black dark:hover:bg-white-hover hover:bg-black-hover dark:active:bg-white-active active:bg-black-active duration-300 rounded-[15px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="dark:fill-black fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.75C3 4.98223 3 4.09835 3.54917 3.54917C4.09835 3 4.98223 3 6.75 3C8.51777 3 9.40165 3 9.95083 3.54917C10.5 4.09835 10.5 4.98223 10.5 6.75C10.5 8.51777 10.5 9.40165 9.95083 9.95083C9.40165 10.5 8.51777 10.5 6.75 10.5C4.98223 10.5 4.09835 10.5 3.54917 9.95083C3 9.40165 3 8.51777 3 6.75Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M3 17.2571C3 15.4893 3 14.6054 3.54917 14.0563C4.09835 13.5071 4.98223 13.5071 6.75 13.5071C8.51777 13.5071 9.40165 13.5071 9.95083 14.0563C10.5 14.6054 10.5 15.4893 10.5 17.2571C10.5 19.0248 10.5 19.9087 9.95083 20.4579C9.40165 21.0071 8.51777 21.0071 6.75 21.0071C4.98223 21.0071 4.09835 21.0071 3.54917 20.4579C3 19.9087 3 19.0248 3 17.2571Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 6.75C13.5 4.98223 13.5 4.09835 14.0492 3.54917C14.5983 3 15.4822 3 17.25 3C19.0178 3 19.9017 3 20.4508 3.54917C21 4.09835 21 4.98223 21 6.75C21 8.51777 21 9.40165 20.4508 9.95083C19.9017 10.5 19.0178 10.5 17.25 10.5C15.4822 10.5 14.5983 10.5 14.0492 9.95083C13.5 9.40165 13.5 8.51777 13.5 6.75Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 17.2571C13.5 15.4893 13.5 14.6054 14.0492 14.0563C14.5983 13.5071 15.4822 13.5071 17.25 13.5071C19.0178 13.5071 19.9017 13.5071 20.4508 14.0563C21 14.6054 21 15.4893 21 17.2571C21 19.0248 21 19.9087 20.4508 20.4579C19.9017 21.0071 19.0178 21.0071 17.25 21.0071C15.4822 21.0071 14.5983 21.0071 14.0492 20.4579C13.5 19.9087 13.5 19.0248 13.5 17.2571Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        }
      >
        <FieldArray name="categories">
          {({ insert, push, remove }) => (
            <div className="overflow-y-scroll w-full h-full flex flex-col items-start">
              {categoriesArray.map((category, index) => (
                <div
                  className={`w-full px-[20px] py-[12px] flex flex-row cursor-pointer ${
                    handleSelected(category.text) && "bg-black-hover"
                  } hover:bg-black-hover active:bg-black-active`}
                  key={index}
                  onClick={() =>
                    handleSelected(category.text)
                      ? handleDeleteFromAdded(category.text, remove)
                      : handleChangeAdded(category.text, push)
                  }
                >
                  <div>{category.icon}</div> {category.text}
                </div>
              ))}
            </div>
          )}
        </FieldArray>
      </PopUpWindow>
    </div>
  );
};

export default Category;
