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


  const [onLoading, setOnLoading] = useState(false);

  return (
    <Formik
      initialValues={values}
      onSubmit={async (values) => {
        await setOnLoading(true);
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
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/private-api/project/management/update/${project._id}`,
          {
            method: "POST",
            body: JSON.stringify(detector),
          }
        );
        await setOnLoading(false);
        return;
      }}
    >
      <Form className="relative flex flex-col gap-[25px] mt-[24px] mobile:w-full tablet:w-[500px]">
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
