"use client";

import { IoAddCircleOutline } from "react-icons/io5";
import FormsLayout from "./Formslayout";
import ResumeBackButton from "../ResumeBackButton";
import ResumeNextButton from "../ResumeNextButton";
import FormElement from "./FormElement";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addAcheivements,
  removeAchievements,
  updateAchievements,
} from "@/app/_context/resumeSlice";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { increment } from "@/app/_context/resumeStepperSlice";

export default function ExperiseDetails() {
  const dispatch = useDispatch();
  const achievements = useSelector((state: any) => state.resume.achievements);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    unregister,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    const skills = Object.keys(data).map((key) => {
      return {
        id: +key.split("_")[1],
        title: data[key],
      };
    });
    dispatch(updateAchievements(skills));
    dispatch(increment());
  };

  const handleAddSkill = () => {
    dispatch(addAcheivements(Math.floor(Math.random() * 1000)));
  };

  const handleRemoveSkill = (id: number) => {
    unregister(`achievement_${id}`);
    dispatch(removeAchievements(id));
  };

  useEffect(() => {
    achievements.forEach((skill: any) => {
      register(`achievement_${skill.id}`, { required: true });
    });

    return () => {
      achievements.forEach((skill: any) => {
        unregister(`achievement_${skill.id}`);
      });
    };
  }, [achievements, register, unregister]);

  return (
    <FormsLayout name="Achievements">
      <div className="flex flex-1 p-10 gap-5 flex-col">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {achievements && achievements.length > 0 ? (
            achievements.map((skill: any) => (
              <AchievementComponent
                key={skill.id}
                errors={errors}
                register={register}
                id={skill.id}
                removeSkill={handleRemoveSkill}
                defaultValue={skill.title}
              />
            ))
          ) : (
            <div className="text-center p-10">Achievements?? 😉</div>
          )}
        </form>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={handleAddSkill}
              disabled={achievements.length >= 4}
              className="flex items-center gap-2 bg-transparent text-[#942d2c] border-2 border-[#942d2c] px-3 py-2 rounded-md disabled:opacity-50"
            >
              <IoAddCircleOutline />
              Add Achievement
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <ResumeBackButton />
            <ResumeNextButton
              isValid={isValid && achievements.length > 0}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </FormsLayout>
  );
}

const AchievementComponent = ({
  errors,
  register,
  id,
  removeSkill,
  defaultValue,
}: {
  errors: any;
  register: any;
  id: number;
  removeSkill: any;
  defaultValue: string;
}) => {
  return (
    <div className="flex gap-5 border-2 justify-center items-center border-[#942d2c] rounded-md p-5">
      <FormElement
        name={`achievement_${id}`}
        label="Achievements"
        error={errors}
        type="text"
        register={register}
        required
        styles={{ flex: 1 }}
        defaultValue={defaultValue}
      />
      <div className="flex justify-center items-center gap-2 mt-2">
        <button onClick={() => removeSkill(id)} type="button">
          <MdDelete
            style={{
              color: "#942d2c",
              width: "20px",
              height: "20px",
            }}
          />
        </button>
      </div>
    </div>
  );
};
