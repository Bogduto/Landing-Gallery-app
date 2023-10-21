"use client";
import Container from "@/components/Layout/Container/Container";
import React from "react";
import Link from "next/link";

const handleAcceptCart = async () => {
  return await fetch(``, {method: "PUT"})
}

const handleUpdateCart = async () => {
  return await fetch(``, {method: "POST", body: JSON.stringify("{hello: '123'}")})
}

const handleDeleteCart = async () => {
  return await fetch(``, {method: "DELETE"})
}

const Carts = ({ data }) => {
  return (
    <div className="w-full h-full">
      <Container>
        <div className="mb-[25px]">Under consideration</div>
        {data ? (
          <div className="flex flex-col gap-[10px]">
            {data.map((item, key) => (
              <div
                className="dark:bg-white dark:text-black bg-black text-white px-[30px] py-[15px] flex flex-col gap-[10px] w-[450px] rounded-[30px]"
                key={key}
              >
                <div>{item.description}</div>
                <div>{item.email}</div>
                <Link href={item.websiteUrl}>
                  <div>{item.websiteUrl}</div>
                </Link>
                <div className="flex flex-row gap-[30px] items-center">
                  <button onClick={() => console.log("click")} type="button" className="bg-[#FF0000] px-[10px]">
                    accept
                  </button>

                  <button onClick={() => console.log("click")} type="button" className="bg-[#FF0000] px-[10px]">
                    change
                  </button>

                  <button onClick={() => console.log("click")} type="button" className="bg-[#FF0000] px-[10px]">
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Заявок нету</div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
