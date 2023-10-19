"use client"
import React from 'react'
import { ThemeProvider } from "next-themes"
const Template = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Template