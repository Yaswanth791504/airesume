import { useSelector } from "react-redux";

export default function Experience({ color }: { color: string }) {
  const experiences = useSelector((state: any) => state.resume.experience);

  if (!experiences.length) {
    return null;
  }

  return (
    <div className="mt-1 ">
      <h4
        style={{ borderColor: color }}
        className={`text-[16px]  font-bold  border-b-2 `}
      >
        Experience
      </h4>
      <ul className="text-black py-4 flex flex-col gap-5">
        {experiences.map((experience: any, index: number) => (
          <ExpetienceLi
            key={index}
            from={experience.startDate}
            to={experience.endDate}
            companyName={experience.companyName}
            role={experience.role}
            description={experience.description}
          />
        ))}
      </ul>
    </div>
  );
}

const ExpetienceLi = ({
  from,
  to,
  companyName,
  role,
  description,
}: {
  from: string;
  to: string;
  companyName: string;
  role: string;
  description: string;
}) => {
  return (
    <li className="flex border-l-2 px-3">
      {/* <div className=""></div> */}
      <div>
        {from && (
          <h4 className="text-[10px]">
            {from} - {to}
          </h4>
        )}
        <p className="text-[11px]  text-slate-700">{companyName}</p>
        <h3 className="font-semibold text-[13px]">{role}</h3>
        <p className="text-[9px] text-black">{description}</p>
      </div>
    </li>
  );
};
