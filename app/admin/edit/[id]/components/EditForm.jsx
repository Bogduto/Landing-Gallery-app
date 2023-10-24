"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { categoriesArray } from "@/constants";
import SubmitButton from "@/components/UI/Buttons/SubmitButton";
import FormFieldCart from "@/components/UI/Form/FormField";

const EditForm = ({ project }) => {
  const [values, setValues] = useState({
    categories: [],
    description: project.description,
    websiteUrl: project.websiteUrl,
    name: project.name,
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

  const [onShow, setOnShow] = useState(false);

  const handleChangeStatus = () => {
    setOnShow(!onShow);
  };
  return (
    <Formik
      initialValues={values}
      onSubmit={async (values) => {
        console.log("submit", values);
      }}
    >
      <Form className="relative flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        <FormFieldCart name="name" placeholder={"project name"} />
        <FormFieldCart name="websiteUrl" placeholder={"website url"} />
        <FormFieldCart
          name="description"
          placeholder={"description"}
          as={"textarea"}
          style={{
            height: "300px",
          }}
        />

        <div className="">
          <CategoriesContainer
            handleDeleteCategorie={handleDeleteCategorie}
            values={values}
          >
            {values.categories &&
              values.categories.map((item, key) => (
                <button
                  key={key}
                  type="button"
                  className="inline-block gap-[5px] p-[12px]  border-[2px] border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize dark:text-white dark:bg-black bg-white text-black"
                  onClick={() => handleDeleteCategorie(item.text)}
                >
                  <div>{item.icon}</div>

                  {item.text}
                </button>
              ))}
          </CategoriesContainer>

          <AddCategorieButton
            onClick={() => handleChangeStatus()}
          >
            {onShow && (
              <DrawAllCategories>
                {categoriesArray.map((item, key) => (
                  <DrawCategoryCart
                    key={key}
                    onClick={() => handleAddCategorie(item)}
                    icon={item.icon}
                  >
                    {item.text}
                  </DrawCategoryCart>
                ))}
              </DrawAllCategories>
            )}
          </AddCategorieButton>
        </div>
        <div>
          <SubmitButton>update cart</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

const CategoriesContainer = ({ children }) => {
  return (
    <div className="flex flex-row items-center gap-[10px] flex-wrap">
      {children}
    </div>
  );
};

const AddCategorieButton = ({ children, ...props }) => {
  return (
    <div className="">
      <button {...props} type="button">
        add new category
      </button>

      {children}
    </div>
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
