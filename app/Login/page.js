"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

function Login() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      redirect("/");
    }
  }, [session]);
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-blue-400 p-2 rounded-1 px-3 text-white mt-[50%]"
        onClick={() => signIn()}
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
