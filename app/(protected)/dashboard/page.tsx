"use client";

import { useEffect, useState } from "react";
import NewResume from "../../_components/NewResume";
import PreviousResumes from "../../_components/PreviousResumes";
import { deleteResume, getResumes } from "@/app/firebase/firebaseCalls";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function Page() {
  const [resume, setResume] = useState<any[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const resumes = await getResumes(user?.uid || "");
        if (resumes) setResume(resumes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResume();
  }, [setResume, user]);

  const handleDocDelete = async (resumeId: string) => {
    if (!user) return;
    const newResume = resume.filter((res) => res.resumeId !== resumeId);
    await deleteResume(user.uid, resumeId);
    setResume(newResume);
  };

  return (
    <div className="p-16 h-full w-full flex flex-col gap-10 ">
      <h1 className="text-4xl font-bold text-[#942d2c]">Your Resumes</h1>
      <div className="flex-wrap flex flex-1 gap-5 pb-28 ">
        <NewResume uid={user?.uid || ""} />
        {resume.map((res, index) => (
          <PreviousResumes
            key={index}
            resume={res}
            handleDocDelete={handleDocDelete}
          />
        ))}
      </div>
    </div>
  );
}
