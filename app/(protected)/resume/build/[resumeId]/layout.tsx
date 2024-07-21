"use client";

import HorizontalLinearStepper from "@/app/_components/Stepper";
import useConfirmReload from "@/app/hooks/useConformReload";

export default function Layout({
  editor,
  preview,
}: {
  editor?: React.ReactNode;
  preview?: React.ReactNode;
}) {
  useConfirmReload("Are you sure you want to leave this page?");
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
