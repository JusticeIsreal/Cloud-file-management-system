import React from "react";
import Image from "next/image";

function SideNavBar() {
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
      <button className="flex gap-2 justify-between items-center w-full bg-blue-500 p-2 text-white rounded-md px-3 mt-5 hover:scale-105 transition-all">
        Add New File{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button className="flex gap-2 justify-between items-center bg-sky-400 w-full p-2 text-white rounded-md px-3 mt-2 hover:scale-105 transition-all">
        New Folder{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SideNavBar;
