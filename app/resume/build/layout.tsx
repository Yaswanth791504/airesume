"use client";

import HorizontalLinearStepper from "@/app/_components/Stepper";

export default function Layout({
  editor,
  preview,
}: {
  editor?: React.ReactNode;
  preview?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-15 flex flex-col justify-center align-middle px-4 bg-[#a12027] ">
        <HorizontalLinearStepper />
      </div>
      <div className="flex-1">{editor}</div>
      <div className="flex-1">{preview}</div>
    </div>
  );
}
