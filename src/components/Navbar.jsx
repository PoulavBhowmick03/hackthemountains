"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const navbar = () => {
  const { status } = useSession();
  return (
    <div>
      <Link href={"/"}>this is Navbar</Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default navbar;
