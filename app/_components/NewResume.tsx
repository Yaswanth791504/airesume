"use client";

import Link from "next/link";
import { IoAdd } from "react-icons/io5";

export default function NewResume() {
  return (
    <Link
      href="/resume/build"
      className="h-80 w-60 border-2 rounded-md flex flex-col p-10 items-center justify-center border-dashed border-[#a12027] cursor-pointer hover:bg-slate-50 hover:scale-95 "
    >
      <IoAdd
        style={{
          height: "30px",
          width: "30px",
          color: "#a12027",
        }}
      />
      <h1 className="text-[#a12027]">New Resume</h1>
    </Link>
  );
}
