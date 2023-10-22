import React from "react";
import Detail from "@/components/Detail/Detail";

const handleGetOneCart = async (id) => {
  try {
    const cart = await fetch(`http://localhost:3000/api/send/getOne/${id}`, {
      method: "GET",
    });

    const cartJson = await cart.json();
    return cartJson;  
  } catch (error) {
    throw new Error(error);
  }
};

const DetailPage = async ({ params }) => {
  // const cart = await handleGetOneCart(params.name)
  console.log("search", params.name);
  return (
    <div className="desktop:minH-screen w-full">
      <Detail />
    </div>
  );
};

export default DetailPage;
