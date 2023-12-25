"use client";
import React, { useState } from "react";
import Image from "next/image";
import { db2 } from "@/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
function CreateFolderModal() {
  const { data: session } = useSession();
  const [folderName, setFolderName] = useState();
  const docId = Date.now().toString();

  const onCreate = async () => {
    await setDoc(doc(db2, "Folder", docId), {
      name: folderName,
      id: docId,
      createdBy: session.user.email,
    });
  };
// khgshjd
  return (
    <div>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="w-full items-center flex flex-col justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-20 h-20 md:w-35 md:h-35 text-blue-400"
          >
            <path d="M4.75 3A1.75 1.75 0 003 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0015.25 5h-3.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H4.75zM3.104 9a1.75 1.75 0 00-1.673 2.265l1.385 4.5A1.75 1.75 0 004.488 17h11.023a1.75 1.75 0 001.673-1.235l1.384-4.5A1.75 1.75 0 0016.896 9H3.104z" />
          </svg>
          <input
            type="text"
            placeholder="Folder name"
            className="p-2 border-[1px] outline-none rounded-md bg-transparent"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button
            onClick={() => onCreate()}
            className="bg-blue-500 text-white rounded-md p-2 px-3 w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderModal;
