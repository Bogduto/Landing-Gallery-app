"use client";
import React, { useState } from "react";
import Image from "next/image";
const Burger = () => {
  const [isShow, setIsShow] = useState(false);

  const handleChange = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleChange} className="relative w-[20px] h-[20px]">
        {isShow ? <Image src={"/close_icon.svg"} alt="burger" fill />  : <Image src={"/burger.svg"} alt="burger" fill />}
      </button>

      {isShow && (
        <div className="z-100 fixed left-0 top-[46px] w-full h-screen bg-black text-white">
          
        </div>
      )}
    </div>
  );
};

export default Burger;
