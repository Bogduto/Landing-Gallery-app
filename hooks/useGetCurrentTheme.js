"use client"
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useGetCurrentTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);
    useEffect(() => {
        setCurrentTheme(theme);
    }, [theme]);


    return currentTheme
}

export default useGetCurrentTheme