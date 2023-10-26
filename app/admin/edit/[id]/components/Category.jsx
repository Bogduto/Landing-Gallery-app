"use client";
import React, { useState } from "react";
import { FieldArray } from "formik";
import { categoriesArray } from "@/constants";
import PopUpWindow from "@/components/UI/PopUpWindow";
const Category = () => {
  const [onShow, setOnShow] = useState(false);
  const [added, setAdded] = useState([]);

  const handleChangeAdded = (value, cb) => {
    if (!added.find((item) => item.text == value.text)) {
      setAdded((prev) => [...prev, value]);
      cb(value);
    }
    return setOnShow(false);
  };

  const handleDeleteFromAdded = (item1) => {
    return setAdded((prev) => prev.filter((item2) => item1.text != item2.text));
  };

  const handleSelected = (item1) => {
    return added.find((item2) => item1.text == item2.text);
  };

  console.log(added);
  return (
    <div>
      <div>
        {added.length &&
          added.map((item, key) => <div key={key}>{item.text}</div>)}
      </div>

      {/* {onShow && (
        
      )} */}

      <PopUpWindow onShowState={onShow} buttonName={"new categories"}>
        <FieldArray name="categories">
          {({ insert, push }) => (
            <div className="overflow-y-scroll w-full h-full flex flex-col gap-[10px] items-start">
              {categoriesArray.map((category, index) => (
                <div
                  className={`w-full px-[20px] py-[12px] flex flex-row cursor-pointer ${
                    handleSelected(category) && "bg-black-hover"
                  } hover:bg-black-hover active:bg-black-active`}
                  key={index}
                  onClick={() => handleSelected(category) ? handleDeleteFromAdded(category) : handleChangeAdded(category, push)}
                >
                  <div>{category.icon}</div> {category.text}
                </div>
              ))}
            </div>
          )}
        </FieldArray>
      </PopUpWindow>

      {/* <button onClick={() => setOnShow(!onShow)} type="button">
        new categories
      </button> */}
    </div>
  );
};

export default Category;
