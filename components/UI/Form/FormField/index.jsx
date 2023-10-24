"use client"
import React from "react";
import { Field, ErrorMessage } from "formik";
// components
import Label from "../Label";

const FormFieldCart = ({name, placeholder, ...props}) => {
  return (
    <div className="flex flex-col gap-[8.8px]">
      <Label name={name}>{name}</Label>
      <Field
        className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
        name={name}
        id={name}
        placeholder={placeholder}
        {...props}
      />

      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className="text-[#FF0000] text-[12px] font-normal">{msg}</div>
        )}
      />
    </div>
  );
};

export default FormFieldCart;
