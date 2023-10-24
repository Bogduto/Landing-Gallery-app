"use client";
import React from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";

// validator
import { loginAdminValidator } from "@/validations/YapValidator";
// components
import FormFieldCart from "@/components/UI/Form/FormField";
import SubmitButton from "@/components/UI/Buttons/SubmitButton";

const AdminLogin = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        password: "",
        username: "",
      }}
      validationSchema={loginAdminValidator}
      onSubmit={async (values) => {
        return;
      }}
    >
      <Form className="flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        
        <FormFieldCart name={"username"} placeholder={"your username"} />
        <FormFieldCart name={"password"} placeholder={"your password"} />

        <div className="mt-[26px] mobile:text-center desktop:text-start">
          <SubmitButton>Login</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

export default AdminLogin;