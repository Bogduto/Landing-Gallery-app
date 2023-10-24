import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      className="border-[3px] dark:bg-white bg-black hover:bg-black-hover dark:hover:bg-white-hover dark:active:border-white-active active:border-black-active duration-300 rounded-[10px] p-[5px]"
    >
      {children}
    </button>
  );
};

export default Button;
