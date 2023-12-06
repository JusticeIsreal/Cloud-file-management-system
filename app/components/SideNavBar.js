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
    </div>
  );
}

export default SideNavBar;
