import React from "react";
// services
import { getOneProject } from "@/services";
// components
import EditForm from "./components/EditForm";
import Container from "@/components/Layout/Container/Container";

const EditCart = async ({ params }) => {
  const projectId = params.id;
  const project = await getOneProject(projectId);
  return (
    <div className="w-full py-[50px] minH-screen text-black bg-white dark:bg-black dark:text-white">
      <Container>
        <EditForm project={project.cart} />
      </Container>
    </div>
  );
};

export default EditCart;
