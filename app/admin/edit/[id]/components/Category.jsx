"use client";
import React, { useState } from "react";
import { FieldArray } from "formik";
import { categoriesArray } from "@/constants";

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

  console.log(added);
  return (
    <div>
      <div>
        {added.length &&
          added.map((item, key) => <div key={key}>{item.text}</div>)}
      </div>

      {onShow && (
        <FieldArray name="categories">
          {({ insert, push }) => (
            <div className="flex flex-col flex-wrap gap-[10px] items-start">
              {categoriesArray.map((category, index) => (
                <div
                  className="w-full px-[20px] py-[12px] flex flex-row cursor-pointer hover:bg-black-hover active:bg-black-active"
                  key={index}
                  onClick={() => handleChangeAdded(category, push)}
                >
                  <div>{category.icon}</div> {category.text}
                </div>
              ))}
            </div>
          )}
        </FieldArray>
      )}

      <button onClick={() => setOnShow(!onShow)} type="button">
        new categories
      </button>
    </div>
  );
};

export default Category;
