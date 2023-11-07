import React from "react";
// services
import { getOneProjectById } from "@/services";
// components
import EditForm from "./components/EditForm";
import Container from "@/components/Layout/Container";

const EditCart = async ({ params }) => {
  const projectId = params.id;
  const project = await getOneProjectById(projectId);
  
  return (
    <div className="z-10 w-full py-[50px] minH-screen text-black bg-white dark:bg-black dark:text-white">
      <Container>
        {project ? <EditForm project={project.cart} /> : null}
      </Container>
    </div>
  );
};

export default EditCart;
