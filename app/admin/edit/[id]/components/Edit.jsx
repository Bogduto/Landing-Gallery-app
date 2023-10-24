"use client";
import React from "react";
// components
import Container from "@/components/Layout/Container/Container";
import EditForm from "./EditForm";

const Edit = ({project}) => {
  return (
    <div className="w-full py-[50px] minH-screen text-black bg-white dark:bg-black dark:text-white">
      <Container>
        <EditForm project/>
      </Container>
    </div>
  );
};

export default Edit;
