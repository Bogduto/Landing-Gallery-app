"use client";
import React, { useState } from "react";
import { FieldArray } from "formik";
import { categoriesArray } from "@/constants";
import PopUpWindow from "@/components/UI/PopUpWindow";
const Category = () => {
  const [onShow, setOnShow] = useState(false);
  const [added, setAdded] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (text) => {
    setSearchValue();
  };

  const handleChangeAdded = (value, cb) => {
    if (!added.find((item) => item.text == value.text)) {
      setAdded((prev) => [...prev, value]);
      cb(value);
    }
    return setOnShow(false);
  };

  const handleDeleteFromAdded = (item1, cb) => {
    cb(added.filter((item2) => item1.text != item2.text));
    return setAdded((prev) => prev.filter((item2) => item1.text != item2.text));
  };

  const handleSelected = (item1) => {
    return added.find((item2) => item1.text == item2.text);
  };

  const handleSearchCategory = (text) => {
    return;
  };

  return (
    <div>
      <div className="flex mobile:flex-col desktop:flex-row gap-[10px]">
        <div>Categories:</div>
        <div className="flex flex-row flex-wrap gap-[5px]">
          {added.length
            ? added.map((item, key) => <div key={key}>{item.text}</div>)
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
                    handleSelected(category) && "bg-black-hover"
                  } hover:bg-black-hover active:bg-black-active`}
                  key={index}
                  onClick={() =>
                    handleSelected(category)
                      ? handleDeleteFromAdded(category, remove)
                      : handleChangeAdded(category, push)
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
