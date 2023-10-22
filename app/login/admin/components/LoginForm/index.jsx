"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/UI/Buttons/SubmitButton";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const registerProjectValidator = Yup.object().shape({
  email: Yup.string().email("Invalid username").required("email is required"),
  password: Yup.string().required("password is required"),
});

const AdminLogin = () => {
  const handleSubmit = () => {};

  const router = useRouter();

  return (
    <Formik
      initialValues={{
        password: "",
        username: "",
      }}
      validationSchema={registerProjectValidator}
      onSubmit={async (values) => {
        return;
      }}
    >
      <Form className="flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"email"}>Your email</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"username"}
            id={"username"}
            placeholder={"your username"}
          />
          <ErrorMessage
            name={"username"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"password"}>Your password</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] mobile:text-[14px] desktop:text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"password"}
            id={"password"}
            placeholder={"your password"}
          />

          <ErrorMessage
            name={"password"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>

        <div className="mt-[26px] mobile:text-center desktop:text-start">
          <SubmitButton>Login</SubmitButton>
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

export default AdminLogin;
