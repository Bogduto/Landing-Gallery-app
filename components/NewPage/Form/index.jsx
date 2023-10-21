"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/UI/Buttons/SubmitButton";
import * as Yup from "yup";

const registerProjectValidator = Yup.object().shape({
  description: Yup.string()
    .min(40, "Too Short!")
    .max(500, "Too Long!")
    .required("deskription is Required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  websiteUrl: Yup.string().required("websiteUrl is required"),
});

const RegisterProject = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        description: "",
        websiteUrl: "",
        email: "",
      }}
      validationSchema={registerProjectValidator}
      onSubmit={async (values) => {
        await fetch(`http://localhost:3000/api/send/new`, {
          method: "POST",
          body: JSON.stringify(values),
        });

        return router.push("/");
      }}
    >
      <Form className="flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"email"}>Your email</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"email"}
            id={"email"}
            placeholder={"your email"}
          />
          <ErrorMessage name={"email"} render={msg => <div className="text-[#FF0000] text-[12px] font-normal">{msg}</div>} />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"websiteUrl"}>Website URL</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] mobile:text-[14px] desktop:text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"websiteUrl"}
            id={"websiteUrl"}
            placeholder={"website url"}
          />

          <ErrorMessage name={"websiteUrl"} render={msg => <div className="text-[#FF0000] text-[12px] font-normal">{msg}</div>} />
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

          <ErrorMessage name={"description"} render={msg => <div className="text-[#FF0000] text-[12px] font-normal">{msg}</div>} />
        </div>
        <div className="mt-[26px] mobile:text-center desktop:text-start">
          <SubmitButton>Complete submission</SubmitButton>
        </div>
      </Form>
    </Formik>
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