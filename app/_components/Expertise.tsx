import { IoStarSharp } from "react-icons/io5";

export default function Expertise() {
  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white text-[16px] md:text-[17px] lg:text-[18px]  border-b-2 border-white font-semibold tracking-wide">
        Expertise
      </h1>
      <ul className="py-2">
        <li className="flex flex-row gap-1 items-center">
          <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Figma
          </p>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Next js
          </p>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            React
          </p>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Fire base
          </p>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Java Script
          </p>
        </li>
      </ul>
    </div>
  );
}
