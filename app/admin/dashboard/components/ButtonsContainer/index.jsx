"use client";
import React from "react";
import Link from "next/link";
import { acceptOneProject, deleteOneProject } from "@/services";
import Button from "../Button";

import { ToastContainer, toast } from "react-toastify";
import useGetCurrentTheme from "@/hooks/useGetCurrentTheme";

const ButtonsContainer = ({ id }) => {
  const router = useRouter();

  const theme = useGetCurrentTheme();

  const handleClick = async (cb, text) => {
    await cb;

    toast.success(`${text} Page will refresh in 5 seconds.`, {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      autoClose: 3000,
      draggable: true,
      progress: undefined,
      theme: theme,
      role: "alert",
    });

    setTimeout(() => router.refresh(), 5000)
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-row gap-[10px] mt-[20px] items-center">
        <Button
          onClick={() =>
            handleClick(acceptOneProject(id), "Got it! Thanks for confirming.")
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="dark:fill-white fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:stroke-black stroke-white"
              d="M3 13L8.34246 19.1057C8.83238 19.6656 9.71577 19.6243 10.1514 19.0212L21 4"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <Link href={`/admin/edit/${id}`}>
          <button
            type="button"
            className="border-[3px] dark:bg-white bg-black hover:bg-black-hover dark:hover:bg-white-hover dark:active:border-white-active active:border-black-active duration-300 rounded-[10px] p-[5px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="dark:stroke-black stroke-white"
                d="M4 21H20"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="dark:stroke-black stroke-white"
                d="M5.66611 13.1873C5.23958 13.6144 5 14.1934 5 14.797V18H8.2226C8.82681 18 9.40626 17.7599 9.83341 17.3325L19.3333 7.82715C20.2222 6.93768 20.2222 5.49598 19.3333 4.60651L18.3948 3.66751C17.5051 2.77726 16.062 2.77753 15.1726 3.66813L5.66611 13.1873Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>

        <Button
          onClick={() =>
            handleClick(deleteOneProject(id), "Item deleted successfully. 👍")
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="dark:fill-white fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.28574 8.57141L7.24849 18.199C7.35073 19.2214 8.21107 20 9.23857 20H14.7615C15.789 20 16.6493 19.2214 16.7516 18.199L17.7143 8.57141"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-black stroke-white"
            />
            <path
              d="M13.5 15.5V10.5"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              className="dark:stroke-black stroke-white"
            />
            <path
              d="M10.5 15.5V10.5"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4.57141 6.28571H9.14284M9.14284 6.28571L9.5249 4.75746C9.63619 4.3123 10.0362 4 10.495 4H13.5049C13.9638 4 14.3638 4.3123 14.4751 4.75746L14.8571 6.28571M9.14284 6.28571H14.8571M14.8571 6.28571H19.4286"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-black stroke-white"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ButtonsContainer;
