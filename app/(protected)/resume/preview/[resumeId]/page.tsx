"use client";
import PreviewComponent from "@/app/_components/PreviewComponent";
import { updateTheWholeResume } from "@/app/_context/resumeSlice";
import { auth } from "@/app/firebase/config";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { getResume } from "@/app/firebase/firebaseCalls";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { resumeId: string } }) {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const getPreviewResume = async (uid: string, resumeId: string) => {
      const resume = await getResume(uid, resumeId);
      dispatch(updateTheWholeResume(resume));
    };
    getPreviewResume(user?.uid || "", params.resumeId);
  }, [user, params.resumeId, dispatch]);

  const handleDownload = async () => {
    window.print();
  };

  const handleDashboard = () => {
    router.replace("/dashboard");
  };

  return (
    <div className="p-10 flex flex-col gap-10 items-center">
      <div className="w-[60%] flex flex-col gap-4 print:hidden no-print">
        <h1 className="text-4xl font-bold text-[#942d2c] text-center">Ready</h1>
        <div className="flex flex-row justify-between">
          <button
            onClick={handleDownload}
            className="bg-[#942d2c] flex items-center gap-2 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Download
          </button>
          <button
            onClick={handleDashboard}
            className="bg-[#942d2c] flex items-center gap-2 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Dashboard
          </button>
        </div>
      </div>
      <div
        className="w-full max-w-[210mm] flex justify-center items-center h-[95vh] print:block print:w-[210mm] print:h-[297mm] print:max-w-none print:max-h-none print:overflow-visible print:p-0 print:m-0"
        id="print-area"
      >
        <PreviewComponent />
      </div>
    </div>
  );
}
