"use client";

import { useForm } from "react-hook-form";
import FormElement from "./FormElement";
import FormsLayout from "./Formslayout";
import { useState } from "react";
import ResumeNextButton from "../ResumeNextButton";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstName,
  updateLastName,
} from "@/app/_context/resumeSlice";
import { increment } from "@/app/_context/resumeStepperSlice";

export default function PersonalDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const { name, role, about } = useSelector((state: any) => state.resume);

  const onSubmit = (data: any) => {
    console.log(data);
    // setup firebase to save
    dispatch(increment());
  };

  const onFirstNameChange = (e: any) =>
    dispatch(updateFirstName(e.target.value));
  const onLastNameChange = (e: any) => dispatch(updateLastName(e.target.value));

  const [summaryWords, setSummaryWords] = useState(0);

  return (
    <FormsLayout name="Personal Info">
      <div className="flex flex-1 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <FormElement
                name="firstName"
                label="First Name"
                error={errors}
                type="text"
                register={register}
                required
                value={name.split(" ")[0]}
                onChange={onFirstNameChange}
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="lastName"
                label="Last Name"
                error={errors}
                type="text"
                register={register}
                required
                value={name.split(" ")[1]}
                onChange={onLastNameChange}
              />
            </div>
            <div className="col-span-2">
              <FormElement
                name="role"
                label="Role"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="summary"
                className=" text-sm font-medium text-gray-700 mb-1 flex gap-2"
              >
                Summary
                <span className="text-[#8d8c8c] font-normal">
                  {summaryWords} / 34 words
                </span>
              </label>
              <textarea
                id="summary"
                {...register("summary", {
                  required: true,
                  maxLength: {
                    value: 34,
                    message: "Summary should be less than 34 words",
                  },
                })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={4}
                onChange={(e) => {
                  console.log(e.target.value.split(" "));
                  setSummaryWords(e.target.value.split(" ").length - 1);
                }}
              />
              {errors.summary && (
                <div className="text-red-500 text-xs mt-2">
                  Summary is required
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <ResumeNextButton isValid={isValid} />
          </div>
        </form>
      </div>
    </FormsLayout>
  );
}
