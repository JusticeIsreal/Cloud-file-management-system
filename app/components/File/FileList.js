import React from "react";
import FileItem from "./FileItem";

function FileList() {
  const fileDemoList = [
    {
      id: 1,
      name: "sample name.pdf",
      type: "pdf",
      size: 6934,
      modifiedAt: "Nov 23,2020",
    },
    {
      id: 2,
      name: "sample name.docx",
      type: "doc",
      size: 6934,
      modifiedAt: "Nov 23,2020",
    },
    {
      id: 3,
      name: "sample name.png",
      type: "image",
      size: 6934,
      modifiedAt: "Nov 23,2020",
    },
  ];
  return (
    <div className="bg-white mt-5 p-5 rounded-lg ">
      <h2 className="text-[18px] font-bold">Recent Files</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 text-[13px] font-semibold border-b-[1px] pb-2 mt-3 border-gray-300 text-gray-400">
        {/* <h2>Name</h2> */}
        <div className="grid grid-cols-3">
          <h2>Name</h2>
          <h2>Modifiled</h2>
          <h2>Size</h2>
          {/* <h2></h2> */}
        </div>
      </div>

      {fileDemoList?.map((item, index) => (
        <FileItem key={item.id} file={item} />
      ))}
    </div>
  );
}

export default FileList;
