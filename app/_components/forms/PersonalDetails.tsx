"use client";

import { useForm } from "react-hook-form";
import FormElement from "./FormElement";
import FormsLayout from "./Formslayout";
import { useState, useEffect } from "react";
import ResumeNextButton from "../ResumeNextButton";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/app/_context/resumeStepperSlice";
import { updatePersonalDetails } from "@/app/_context/resumeSlice";

export default function PersonalDetails() {
  const { name, role, about } = useSelector((state: any) => state.resume);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1] || "",
      role: role,
      summary: about,
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(updatePersonalDetails(data));
    dispatch(increment());
  };

  const [summaryWords, setSummaryWords] = useState(
    about ? about.split(" ").length : 0
  );

  useEffect(() => {
    const subscription = watch((value) => {
      setSummaryWords(value.summary?.split(" ").length || 0);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
                className="text-sm font-medium text-gray-700 mb-1 flex gap-2"
              >
                Summary
                <span className="text-[#8d8c8c] font-normal">
                  {summaryWords} / 34 words
                </span>
              </label>
              <textarea
                id="summary"
                {...register("summary", {
                  required: "Summary is required",
                  validate: {
                    maxLength: (value) =>
                      value.split(" ").length <= 34 ||
                      "Summary should be less than 34 words",
                  },
                })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={4}
              />
              {errors.summary?.message && (
                <div className="text-red-500 text-xs mt-2">
                  {errors.summary.message.toString()}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <ResumeNextButton
              isValid={isValid}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </FormsLayout>
  );
}
