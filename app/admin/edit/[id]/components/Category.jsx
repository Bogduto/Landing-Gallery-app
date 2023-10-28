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
      <div className="flex mobile:flex-col desktop:flex-row gap-[10px]">
        <div>Categories:</div>
        <div className="flex flex-row flex-wrap gap-[5px]">
          {added.length
            ? added.map((item, key) => (
                <div key={key}>{item?.text ? item.text : item}</div>
              ))
            : null}
        </div>
      </div>

      <PopUpWindow onShowState={onShow} buttonName={"new categories"}>
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
