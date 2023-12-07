import React from "react";
import FolderItem from "./FolderItem";

function FolderList() {
  const folderDemoList = [
    {
      id: 1,
      name: "folder 1 to test trash",
    },
    {
      id: 2,
      name: "folder 2",
    },
    {
      id: 3,
      name: "folder 3",
    },
    {
      id: 4,
      name: "folder 4",
    },
    {
      id: 5,
      name: "folder 5",
    },
  ];
  return (
    <main className=" p-5 mt-5 bg-white rounded-lg">
      <h2 className="text-[17px] font-bold items-center">
        Recent Folders{" "}
        <span className="float-right font-normal text-blue-400 text-[13px]">
          View All
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-3">
        {folderDemoList.map((item) => (
          <FolderItem key={item.id} folder={item} />
        ))}
      </div>
    </main>
  );
}

export default FolderList;
