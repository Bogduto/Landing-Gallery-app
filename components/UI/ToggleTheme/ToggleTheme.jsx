"use client";
import React from "react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`dark:bg-white dark:text-black bg-black text-white px-[10px]`}
    >
      {theme === "dark" ? "white" : "dark"}
    </button>
  );
};

export default ToggleTheme;
