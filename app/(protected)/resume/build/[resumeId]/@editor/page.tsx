"use client";

import AllSet from "@/app/_components/AllSet";
import AchievementDetails from "@/app/_components/forms/AchievementsDetails";
import ContactDetails from "@/app/_components/forms/ContactDetails";
import EducationDetails from "@/app/_components/forms/EducationDetails";
import ExperienceDetails from "@/app/_components/forms/ExperienceDetails";
import ExpertiseDetails from "@/app/_components/forms/ExpertiseDetials";
import PersonalDetails from "@/app/_components/forms/PersonalDetails";
import { useSelector } from "react-redux";

export default function Page() {
  const currentStepperState = useSelector(
    (state: any) => state.resumeStepper.currentIndex
  );

  const forms = [
    <PersonalDetails key="personal" />,
    <ContactDetails key="contact" />,
    <EducationDetails key="education" />,
    <ExperienceDetails key="experience" />,
    <ExpertiseDetails key="expertise" />,
    <AchievementDetails key="achievement" />,
    <AllSet key="allset" />,
  ];

  return <div className="w-full">{forms[currentStepperState]}</div>;
}
