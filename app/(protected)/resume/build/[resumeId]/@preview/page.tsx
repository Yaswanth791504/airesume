"use client";

import { FaPaintBrush } from "react-icons/fa";
import ThemeColors from "@/app/_components/ThemeColors";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeColor } from "@/app/_context/resumeSlice";
import PreviewComponent from "@/app/_components/PreviewComponent";

export default function Page() {
  const color = useSelector((state: any) => state.resume.themeColor);
  const dispatch = useDispatch();
  const setColor = (color: string) => {
    dispatch(updateThemeColor(color));
  };

  return (
    <div className="py-5 px-10 h-full gap-5 flex justify-center items-center">
      <div className="w-20 h-full flex items-center py-5 gap-1 flex-col">
        <FaPaintBrush className="w-5 h-5 " style={{ color }} />
        <p className="h-fit">Theme</p>
        <ThemeColors setColor={setColor} existentColor={color} />
      </div>
      <PreviewComponent />
    </div>
  );
}
