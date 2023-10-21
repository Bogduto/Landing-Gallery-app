"use client";
import Container from "@/components/Layout/Container/Container";
import React from "react";
import EditForm from "./EditForm";

const Edit = () => {
  return (
    <div className="w-full py-[50px] minH-screen text-black bg-white dark:bg-black dark:text-white">
      <Container>
        <EditForm />
      </Container>
    </div>
  );
};

export default Edit;
