"use client";
// pages/index.js (or any other relevant page file)
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FolderList from "./components/Folder/FolderList";

export default function Home() {
  const { data: session } = useSession();
  // const router = useRouter();

  useEffect(() => {
    if (!session) {
      redirect("/login");
    }
  }, [session]);

  return (
    <main>
      <SearchBar />
      <FolderList />
    </main>
  );
}
