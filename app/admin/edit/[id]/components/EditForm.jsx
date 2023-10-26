"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";

import SubmitButton from "@/components/UI/Buttons/SubmitButton";
import FormFieldCart from "@/components/UI/Form/FormField";
import Category from "./Category";

const EditForm = ({ project }) => {
  const [values, setValues] = useState({
    categories: [],
    description: project.description,
    websiteUrl: project.websiteUrl,
    name: project.name,
  });

  return (
    <Formik
      initialValues={values}
      onSubmit={async (values) => {
        console.log("submit", values);
        // route & fetch 
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

        <Category />

        <div>
          <SubmitButton>update cart</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
