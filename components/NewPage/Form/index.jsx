"use client";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
const RegisterProject = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        description: "",
        websiteUrl: "",
        email: "",
      }}
      onSubmit={async (values) => {
        console.log("s", values);
      }}
    >
      <Form className="flex flex-col gap-[25px] mt-[24px] w-[500px]">
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"email"}>Your email</Label>

          <Field
            className="py-[12.2px] px-[12.3px] border-[1px] border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] text-[#6B7280] font-normal capitalize"
            name={"email"}
            id={"email"}
            placeholder={"your email"}
          />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"websiteUrl"}>Website URL</Label>

          <Field
            className="py-[12.2px] px-[12.3px] border-[1px] border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] text-[#6B7280] font-normal capitalize"
            name={"websiteUrl"}
            id={"websiteUrl"}
            placeholder={"website url"}
          />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"description"}>Description</Label>
          <Field
            className="py-[12.2px] px-[12.3px] border-[1px] border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] text-[#6B7280] font-normal capitalize"
            name={"description"}
            id={"description"}
            as="textarea"
            placeholder={"description"}
          />
        </div>
        <div className="mt-[26px]">
          <SubmitButton>Complete submission</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

const SubmitButton = ({ children }) => {
  return (
    <button
      className="rounded-[8.5px] py-[12px] px-[27px] duration-300 bg-orange hover:bg-orange-hover text-white text-[14.9px] text-white font-normal leading-[21.25px]"
      type="submit"
    >
      {children}
    </button>
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

export default RegisterProject;
