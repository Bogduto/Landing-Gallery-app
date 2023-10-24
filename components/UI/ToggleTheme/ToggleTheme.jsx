import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  // Update the currentTheme when the theme changes
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`dark:text-white dark:hover:text-white-hover hover:text-black-hover text-black px-[10px] border-l-[1px] dark:border-white border-black capitalize cursor-pointer uppercase font-normal text-[12.8px] tracking-[1.27px] leading-[17px] duration-300`}
    >
      {currentTheme === "dark" ? "Dark" : "Light"}
    </button>
  );
};

export default ToggleTheme;
