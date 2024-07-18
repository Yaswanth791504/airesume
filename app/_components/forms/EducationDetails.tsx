"use client";

import React from "react";
import FormElement from "./FormElement";
import FormsLayout from "./Formslayout";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ResumeNextButton from "../ResumeNextButton";
import ResumeBackButton from "../ResumeBackButton";
import { MdDelete } from "react-icons/md";
import {
  addEducation,
  removeEducation,
  updateEducation,
} from "@/app/_context/resumeSlice";

export default function EducationDetails() {
  const dispatch = useDispatch();
  const educations = useSelector((state: any) => state.resume.educations);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const addExtraEducation = () => {
    dispatch(addEducation({ id: Math.floor(Math.random() * 1000) }));
  };

  const updateEducationOnSave = (data: any) => {
    console.log(data);
    dispatch(updateEducation(data));
  };

  return (
    <FormsLayout name="Education">
      <div className="flex flex-1 p-10 flex-col gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-2"
        >
          {educations && educations.length > 0 ? (
            educations.map((education: any) => {
              return (
                <EducationComponent
                  key={education.id}
                  id={education.id}
                  education={education}
                  updateOnSave={updateEducationOnSave}
                />
              );
            })
          ) : (
            <div className="text-center p-10">
              You need to add at least one education
            </div>
          )}
        </form>
        <div className="flex flex-1 items-center justify-between">
          <button
            onClick={addExtraEducation}
            disabled={educations.length >= 2}
            className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c] disabled:opacity-50"
          >
            <IoAddCircleOutline /> Add education
          </button>
          <div className="flex justify-end gap-3">
            <ResumeBackButton />
            <ResumeNextButton isValid={isValid && educations.length > 0} />
          </div>
        </div>
      </div>
    </FormsLayout>
  );
}

const EducationComponent = ({
  updateOnSave,
  education,
  id,
}: {
  updateOnSave: any;
  id: number;
  education: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      [`degree_${id}`]: education.degree,
      [`completionYear_${id}`]: education.completionYear,
      [`college_${id}`]: education.institute,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(updateEducation({ id, ...data }));
  };
  const dispatch = useDispatch();
  const removeExtraEducation = (id: number) => {
    console.log(id);
    dispatch(removeEducation(id));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-2 border-[#942d2c] rounded-md p-5">
        <div className="col-span-1">
          <FormElement
            name={`degree_${id}`}
            label="Degree"
            error={errors}
            type="text"
            register={register}
            required
          />
        </div>
        <div className="col-span-1">
          <FormElement
            name={`completionYear_${id}`}
            label="Completion Year"
            error={errors}
            type="number"
            register={register}
            required
          />
        </div>
        <div className="col-span-2">
          <FormElement
            name={`college_${id}`}
            label="College / University"
            error={errors}
            type="text"
            register={register}
            required
          />
        </div>
        <div className="flex flex-1 justify-between col-span-2">
          <button onClick={() => removeExtraEducation(id)} type="button">
            <MdDelete
              style={{
                color: "#942d2c",
                width: "20px",
                height: "20px",
              }}
            />
          </button>
          <button
            onClick={updateOnSave}
            type="button"
            disabled={!isValid}
            className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
