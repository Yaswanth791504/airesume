import { useSelector } from "react-redux";
import Image from "next/image";
import Contact from "./Contact";
import Education from "./Education";
import Expertise from "./Expertise";
import Info from "./Info";
import ResumeImage from "./../../public/resume.png";

export default function PreviewComponent() {
  const color = useSelector((state: any) => state.resume.themeColor);
  const image = useSelector((state: any) => state.resume.image);
  return (
    <div className="print-container h-full w-full shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] flex items-start bg-white">
      <div
        className="w-40 h-full flex items-center justify-start py-5 flex-col gap-3"
        style={{ backgroundColor: color }}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden bg-green-100 flex items-center justify-center">
          <Image
            src={image || ResumeImage}
            alt="resume_image"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <Contact />
        <Education />
        <Expertise />
      </div>
      <div className="flex p-5 flex-1">
        <Info color={color} />
      </div>
    </div>
  );
}
