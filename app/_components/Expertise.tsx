import { IoStarSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Expertise() {
  const skillls = useSelector((state: any) => state.resume.skills);

  if (skillls.length === 0) return null;
  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white text-[13px]  border-b-2 border-white font-semibold tracking-wide">
        Expertise
      </h1>
      <ul className="py-2">
        {skillls.map((skill: any) => (
          <ExpertiseLi key={skill.id} skill={skill.skill} />
        ))}
      </ul>
    </div>
  );
}

export function ExpertiseLi({ skill }: { skill: string }) {
  return (
    <li className="flex flex-row gap-1 items-center">
      <IoStarSharp className="text-[#d9e0e7] text-[10px]" />
      <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 ">{skill}</p>
    </li>
  );
}
