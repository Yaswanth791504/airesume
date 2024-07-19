"use client";

import { useSelector } from "react-redux";

export default function Achievements({ color }: { color: string }) {
  const achievements = useSelector((state: any) => state.resume.achievements);
  console.log(achievements);

  if (achievements.length === 0) return null;

  return (
    <div className="mt-1 ">
      <h4
        style={{ borderColor: color }}
        className={`text-[16px] font-bold  border-b-2 `}
      >
        Achievements
      </h4>
      <ul className="list-decimal text-black py-4 flex flex-col gap-2">
        {achievements.map((achievement: any, index: number) => (
          <AchievementComponent
            key={index}
            achievement={achievement.title}
            index={index + 1}
          />
        ))}
      </ul>
    </div>
  );
}

export function AchievementComponent({
  achievement,
  index,
}: {
  achievement: string;
  index: number;
}) {
  return (
    <li className="flex">
      <p className="text-[10px]">
        {index}. {achievement}
      </p>
    </li>
  );
}
