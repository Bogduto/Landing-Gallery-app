import React from "react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={`dark:text-white dark:hover:text-white-hover hover:text-black-hover text-black px-[10px] border-l-[1px] dark:border-white border-black capitalize cursor-pointer uppercase font-normal text-[12.8px] tracking-[1.27px] leading-[17px] duration-300`}
    >
      {theme === "dark" ? "dark" : "light"} {/* Change text content here */}
    </button>
  );
};

export default ToggleTheme;
