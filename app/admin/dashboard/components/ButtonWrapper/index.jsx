"use client"
import React from 'react'

const ButtonWrapper = ({children}) => {
  return (
    <div className=''>
        <div className="flex flex-row gap-[10px] mt-[20px] items-center">
            {children}
        </div>
    </div>
  )
}

export default ButtonWrapper