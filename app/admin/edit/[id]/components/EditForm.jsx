"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";

import SubmitButton from "@/components/UI/Buttons/SubmitButton";
import FormFieldCart from "@/components/UI/Form/FormField";
import Category from "./Category";
import arrayChangeDetector from "@/utils/arrayChangeDetector";

const EditForm = ({ project }) => {
  const [values, setValues] = useState({
    categories: project.categories ? project.categories : [],
    description: project.description,
    websiteUrl: project.websiteUrl,
    name: project.name,
  });

  console.log(values)

  const [onLoading, setOnLoading] = useState(false);

  return (
    <Formik
      initialValues={values}
      onSubmit={async (values) => {
        await setOnLoading(true);
        console.log("submit", values);
        const detector = await arrayChangeDetector(values, {
          categories: project.categories,
          description: project.description,
          websiteUrl: project.websiteUrl,
          name: project.name,
        });
        
        if (Object.keys(detector).length === 0) {
          setOnLoading(false);
          return;
        }

        await fetch(
          `http://localhost:3000/api/private-api/project/management/update/${project._id}`,
          {
            method: "POST",
            body: JSON.stringify(detector),
          }
        );
        await setOnLoading(false);
        return;
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

        <Category categories={values.categories}/>

        <div>
          <SubmitButton>update cart</SubmitButton>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
