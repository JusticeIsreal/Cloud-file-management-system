"use client";
import React, { useState } from "react";
import Image from "next/image";
import menu from "../data/menu";

function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-[200px] bg-white h-screen p-5 sticky top-0 z-10 shadow-blue-200 shadow-md">
      <div className="flex justify-center ">
        <Image
          src="/AJIS_FILE_1_arvnbd.png"
          alt="logo"
          width={150}
          height={60}
        />
      </div>
      <button className="flex gap-2 justify-between items-center w-full bg-blue-500 p-2 text-white rounded-md px-3 mt-5 hover:scale-105 transition-all text-[10px] md:text-[13px]">
        New File{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button className="flex gap-2 justify-between items-center bg-sky-400 w-full p-2 text-white rounded-md px-3 mt-2 hover:scale-105 transition-all text-[9px] md:text-[13px]">
        New Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="mt-4">
        {menu.list.map((item, index) => (
          <h2
            onClick={() => setActiveIndex(index)}
            key={item.id}
            className={`flex gap-2 items-center p-2 mt-3 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer ${
              activeIndex == index ? "bg-blue-500 text-white" : null
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNavBar;
