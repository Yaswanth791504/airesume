"use client";

import { IoAddCircleOutline } from "react-icons/io5";
import FormsLayout from "./Formslayout";
import ResumeBackButton from "../ResumeBackButton";
import ResumeNextButton from "../ResumeNextButton";
import FormElement from "./FormElement";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addSkill, removeSkill, updateSkill } from "@/app/_context/resumeSlice";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

export default function ExperiseDetails() {
  const dispatch = useDispatch();
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
        skill: data[key],
      };
    });
    console.log(skills);
    dispatch(updateSkill(skills));
  };

  const skills = useSelector((state: any) => state.resume.skills);

  const handleAddSkill = () => {
    dispatch(addSkill(Math.floor(Math.random() * 1000)));
  };

  const handleRemoveSkill = (id: number) => {
    unregister(`skill_${id}`);
    dispatch(removeSkill(id));
  };

  useEffect(() => {
    skills.forEach((skill: any) => {
      register(`skill_${skill.id}`, { required: true });
    });

    return () => {
      skills.forEach((skill: any) => {
        unregister(`skill_${skill.id}`);
      });
    };
  }, [skills, register, unregister]);

  return (
    <FormsLayout name="Skills">
      <div className="flex flex-1 p-10 gap-5 flex-col ">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {skills && skills.length > 0 ? (
            skills.map((skill: any) => {
              return (
                <SkillComponent
                  key={skill.id}
                  errors={errors}
                  register={register}
                  id={skill.id}
                  removeSkill={handleRemoveSkill}
                />
              );
            })
          ) : (
            <div className="text-center p-10">Skills?? 😉</div>
          )}
        </form>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={handleAddSkill}
              disabled={skills.length >= 5}
              className="flex items-center gap-2 bg-transparent text-[#942d2c] border-2 border-[#942d2c] px-3 py-2 rounded-md disabled:opacity-50"
            >
              <IoAddCircleOutline />
              Add Skill
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <ResumeBackButton />
            <ResumeNextButton
              isValid={isValid && skills.length > 0}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </FormsLayout>
  );
}

const SkillComponent = ({
  errors,
  register,
  id,
  removeSkill,
}: {
  errors: any;
  register: any;
  id: number;
  removeSkill: any;
}) => {
  return (
    <div className="flex gap-5 border-2 justify-center items-center border-[#942d2c] rounded-md p-5">
      <FormElement
        name={`skill_${id}`}
        label="Skill"
        error={errors}
        type="text"
        register={register}
        required
        styles={{ flex: 1 }}
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
