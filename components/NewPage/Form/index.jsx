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
  name: Yup.string().required("name is required"),
});

const RegisterProject = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        description: "",
        websiteUrl: "",
        email: "",
        name: "",
      }}
      validationSchema={registerProjectValidator}
      onSubmit={async (values) => {
        setIsLoading(true);
        await fetch(`http://localhost:3000/api/send/new`, {
          method: "POST",
          body: JSON.stringify(values),
        });
        setIsLoading(false);
        return router.push("/");
      }}
    >
      <Form className="flex flex-col gap-[25px] mt-[24px] mobile:w-full desktop:w-[500px]">
        <div className="flex flex-col gap-[8.8px]">
          <Label name={"name"}>Project name</Label>

          <Field
            className="focus:border-orange focus:border-[3px] py-[12.2px] px-[12.3px] border-[3px] text-black  border-[#CBD5E1] bg-[#F1F5F9] rounded-[8.5px] text-[14.9px] placeholder:text-[#6B7280] font-normal capitalize"
            name={"name"}
            id={"name"}
            placeholder={"project name"}
          />
          <ErrorMessage
            name={"name"}
            render={(msg) => (
              <div className="text-[#FF0000] text-[12px] font-normal">
                {msg}
              </div>
            )}
          />
        </div>

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
        <div className="mt-[26px] mobile:text-center desktop:text-start">
          <SubmitButton>
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Complete submission"
            )}
          </SubmitButton>
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
