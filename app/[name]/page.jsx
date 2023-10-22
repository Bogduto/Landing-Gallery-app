import React from "react";
import Detail from "./components/Detail";
import { getOneProject } from "@/services";

const DetailPage = async ({ params }) => {
  // const cart = await getOneProject(params.name)
  // console.log("search", params.name);
  return (
    <div className="desktop:minH-screen w-full">
      <Detail />
    </div>
  );
};

export default DetailPage;
