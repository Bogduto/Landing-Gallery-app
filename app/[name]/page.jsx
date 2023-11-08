import React from "react";
import Detail from "./components/Detail";
import { getOneProject } from "@/services";

const DetailPage = async ({ params }) => {
  const cart = await getOneProject(params.name);
  return (
    <div className="desktop:minH-screen w-full z-10">
      <Detail
        description={cart.cart.description}
        screenshot={cart.cart.screenshot}
        websiteUrl={cart.cart.websiteUrl}
        categories={cart.cart.categories}
        email={cart.cart.email}
        name={cart.cart.name}
      />
    </div>
  );
};

export default DetailPage;
