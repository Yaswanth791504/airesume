"use client";

import { IoAdd } from "react-icons/io5";
import { addResume } from "../firebase/firebaseCalls";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { reset } from "../_context/resumeSlice";

export default function NewResume({ uid }: { uid: string }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddResume = async () => {
    const resumeId = await addResume(uid);
    dispatch(reset());
    console.log(`Resume ID: ${resumeId}`);
    router.push(`/resume/build/${resumeId}`);
  };

  return (
    <div
      className="h-80 w-60 border-2 rounded-md flex flex-col p-10 items-center justify-center border-dashed border-[#a12027] cursor-pointer transition-all duration-300 hover:bg-slate-50 hover:scale-95"
      onClick={handleAddResume}
    >
      <IoAdd
        style={{
          height: "30px",
          width: "30px",
          color: "#a12027",
        }}
        className="transition-colors duration-300"
      />
      <h1 className="text-[#a12027] transition-colors duration-300 hover:text-slate-500">
        New Resume
      </h1>
    </div>
  );
}
