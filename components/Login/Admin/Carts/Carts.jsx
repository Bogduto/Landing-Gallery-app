"use client";
import Container from "@/components/Layout/Container/Container";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const handleAcceptCart = async (id, router) => {
  await fetch(`http://localhost:3000/api/approval/manipulation/accept/${id}`, {
    method: "PUT",
  });
  return await router.fastRefresh();
};

const handleUpdateCart = async (id, router) => {
  await fetch(`http://localhost:3000/api/approval/manipulation/update/${id}`, {
    method: "POST",
    body: JSON.stringify("{hello: '123'}"),
  });
  return await router.fastRefresh();
};

const handleDeleteCart = async (id, router) => {
  await fetch(`http://localhost:3000/api/approval/manipulation/remove/${id}`, {
    method: "DELETE",
  });
  return await router.fastRefresh();
};

const Carts = ({ data }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <Container>
        <div className="mb-[25px]">Under consideration</div>

        {data.length ? (
          <div className="h-[500px] flex flex-col gap-[10px]">
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
                  <button
                    onClick={() => handleAcceptCart(item._id, router)}
                    type="button"
                    className="bg-[#FF0000] px-[10px]"
                  >
                    accept
                  </button>

                  <button
                    onClick={() => handleUpdateCart(item._id, router)}
                    type="button"
                    className="bg-[#FF0000] px-[10px]"
                  >
                    change
                  </button>

                  <button
                    onClick={() => handleDeleteCart(item._id, router)}
                    type="button"
                    className="bg-[#FF0000] px-[10px]"
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[500px] pt-[50px]">Заявок нету</div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
