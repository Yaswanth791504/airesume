import { useSelector } from "react-redux";

export default function Education() {
  const educations = useSelector((state: any) => state.resume.educations);

  if (educations.length == 0) return null;

  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white text-[13px]  border-b-2 border-white font-semibold tracking-wide">
        Education
      </h1>
      <div className="py-2">
        {educations.map((education: any) => (
          <EducationSector
            year={education.completionYear}
            degree={education.degree}
            institute={education.institute}
          />
        ))}
      </div>
    </div>
  );
}

const EducationSector = ({
  year,
  degree,
  institute,
}: {
  year: number;
  degree: string;
  institute: string;
}) => {
  return (
    <div className="py-1">
      <p className="text-[#d9e0e7] text-[9px] ">{year}</p>
      <h1 className="text-white text-[10px] tracking-wide">{degree}</h1>
      <p className="text-[#d9e0e7] text-[9px] ">{institute}</p>
    </div>
  );
};
