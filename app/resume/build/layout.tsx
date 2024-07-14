import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Build your resume with",
};

export default function Layout({
  editor,
  preview,
}: {
  editor?: React.ReactNode;
  preview?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-15 flex flex-col justify-center align-middle px-2 bg-[#a12027] ">
        notifications
      </div>
      <div className="flex-1">{editor}</div>
      <div className="flex-1">{preview}</div>
    </div>
  );
}
