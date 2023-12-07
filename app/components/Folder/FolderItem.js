import React from "react";

function FolderItem({ folder }) {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[130px] border-[1px] rounded-lg bg-white hover:scale-105 hover:shadow-md cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-20 h-20 md:w-35 md:h-35 text-blue-400"
      >
        <path d="M4.75 3A1.75 1.75 0 003 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0015.25 5h-3.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H4.75zM3.104 9a1.75 1.75 0 00-1.673 2.265l1.385 4.5A1.75 1.75 0 004.488 17h11.023a1.75 1.75 0 001.673-1.235l1.384-4.5A1.75 1.75 0 0016.896 9H3.104z" />
      </svg>
      <h2 className="line-clamp-2 text-[12px] text-center">{folder.name}</h2>
    </div>
  );
}

export default FolderItem;
