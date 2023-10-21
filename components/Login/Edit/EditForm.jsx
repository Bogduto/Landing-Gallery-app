"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { categoriesArray } from "@/constants";
import SubmitButton from "@/components/UI/Buttons/SubmitButton";

const EditForm = () => {
  const [values, setValues] = useState({
    categories: [],
    description: "",
    websiteUrl: "",
  });

  const handleAddCategorie = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      categories: [...prevValues.categories, value],
    }));
  };
  const handleDeleteCategorie = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      categories: prevValues.categories.filter((item) => item.text !== value),
    }));
  };

  return (
    <Formik initialValues={values}>
      <Form className="relative flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"email"}>Your email</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"email"}
            id={"email"}
            placeholder={"your email"}
          />
          <ErrorMessage
            name={"email"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"websiteUrl"}>Website URL</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] mobile:text-[14px] desktop:text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"websiteUrl"}
            id={"websiteUrl"}
            placeholder={"website url"}
          />

          <ErrorMessage
            name={"websiteUrl"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"description"}>Description</Label>
          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"description"}
            id={"description"}
            as="textarea"
            placeholder={"description"}
          />

          <ErrorMessage
            name={"description"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>
        <div className="">
          <CategoriesContainer handleDeleteCategorie={handleDeleteCategorie} values={values} />
          <AddCategorieButton handleAddCategorie={handleAddCategorie} />
        </div>
        <div>
          <SubmitButton>update cart</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

const CategoriesContainer = ({ values, handleDeleteCategorie }) => {
  return (
    <div className="flex flex-row items-center gap-[10px] flex-wrap">
      {values.categories &&
        values.categories.map((item, key) => (
          <button
            type="button"
            className="inline-block gap-[5px] p-[12px]  border-[2px] border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize dark:text-white dark:bg-black bg-white text-black"
            key={key}
            onClick={() => handleDeleteCategorie(item.text)}
          >
            <div>{item.icon}</div>

            {item.text}
          </button>
        ))}
    </div>
  );
};

const AddCategorieButton = ({ ...props }) => {
  const [onShow, setOnShow] = useState(false);
  return (
    <div className="">
      <button onClick={() => setOnShow(!onShow)} type="button">
        add new category
      </button>

      {onShow && (
        <DrawAllCategories>
          {categoriesArray.map((item, key) => (
            <DrawCategoryCart
              onClick={() => props.handleAddCategorie(item)}
              icon={item.icon}
            >
              {item.text}
            </DrawCategoryCart>
          ))}
        </DrawAllCategories>
      )}
    </div>
  );
};

const Label = ({ name, children }) => {
  return (
    <label
      className="dark:text-white text-[#111827] text-[14.9px] font-normal leading-[21.25px]"
      htmlFor={name}
    >
      {children}
    </label>
  );
};

const DrawAllCategories = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="absolute mobile:top-0 desktop:top-[30px] mobile:right-[-120px] mobile:w-[238px] desktop:w-[340px] bg-black rounded-[25px] border-[2px] border-[#252525]"
    >
      <div className="w-full h-full flex flex-col gap-[5px] px-[10px] py-[20px]">
        {children}
      </div>
    </div>
  );
};

const DrawCategoryCart = ({ icon, children, ...props }) => {
  return (
    <div
      {...props}
      className={`cursor-pointer flex flex-row gap-[20px] text-white px-[7px] py-[10px] hover:bg-white-hover hover:text-black rounded-[8px] duration-300`}
    >
      <div className="w-[10px] h-[10px]">{icon}</div>
      {children}
    </div>
  );
};

export default EditForm;
