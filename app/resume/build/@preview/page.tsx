"use client";

import Image from "next/image";
import ResumeImage from "./../../../../public/resume.png";

import { FaPaintBrush } from "react-icons/fa";
import ThemeColors from "@/app/_components/ThemeColors";
import Contact from "@/app/_components/Contact";
import Education from "@/app/_components/Education";
import Expertise from "@/app/_components/Expertise";
import Languages from "@/app/_components/Languages";
import Info from "@/app/_components/Info";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeColor } from "@/app/_context/resumeSlice";

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
      <div className="h-full shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]  flex items-start w-5/6 bg-white">
        <div
          className="w-40 h-full flex items-center justify-start py-5 flex-col gap-3"
          style={{ backgroundColor: color }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden bg-green-100">
            <Image
              src={ResumeImage}
              alt="resume_image"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <Contact />
          <Education />
          <Expertise />
          <Languages />
        </div>
        <div className="flex p-5">
          <Info color={color} />
        </div>
      </div>
    </div>
  );
}
