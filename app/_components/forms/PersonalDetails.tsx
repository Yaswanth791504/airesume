"use client";

import { useForm } from "react-hook-form";
import FormElement from "./FormElement";
import FormsLayout from "./Formslayout";
import { useState, useEffect, useRef } from "react";
import ResumeNextButton from "../ResumeNextButton";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/app/_context/resumeStepperSlice";
import { updateImage, updatePersonalDetails } from "@/app/_context/resumeSlice";
import Image from "next/image";
import Gemini from "./../../../public/gemini.svg";
import { AiChatModel } from "./../../utils/genai";
import { uploadImage } from "@/app/firebase/firebaseCalls";

export default function PersonalDetails() {
  const { name, role, about } = useSelector((state: any) => state.resume);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
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

  const generateSummary = async () => {
    const message = `Generate a summary for resume. It should be exactly 30 words, concise and professional. I'm a ${getValues(
      "role"
    )} expertise in ${getValues("role")}.`;
    try {
      const result = await AiChatModel.sendMessage(message);
      const summary = await result.response.text(); // Await the text extraction
      setValue("summary", summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setSummaryWords(value.summary?.split(" ").length || 0);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const [uploading, setUploading] = useState(false); // State to manage upload progress

  const handleImageUpload = async () => {
    const file = imageRef.current?.files?.[0];
    if (file) {
      setUploading(true); // Set uploading state to true
      try {
        const url = await uploadImage(file);
        dispatch(updateImage(url));
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false); // Set uploading state to false
      }
    }
  };

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
            <div className="col-span-2 flex flex-col gap-3">
              <div className="flex justify-between flex-row">
                <label
                  htmlFor="summary"
                  className="text-sm font-medium text-gray-700 mb-1 flex gap-2 justify-end items-end"
                >
                  Summary
                  <span className="text-[#8d8c8c] font-normal">
                    {summaryWords} / 34 words
                  </span>
                </label>
                <button
                  type="button"
                  onClick={generateSummary} // Add onClick handler
                  className="flex flex-row gap-2 bg-transparent text-[#942d2c] items-center px-3 py-1 rounded-md border-2 border-[#942d2c]"
                >
                  Need Help
                  <Image src={Gemini} width={20} height={20} alt="Gemini" />
                </button>
              </div>
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
            <div>
              <input
                type="file"
                ref={imageRef}
                name="image"
                id="image"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    if (imageRef.current) imageRef.current.click();
                  }}
                  className="flex flex-row gap-2 bg-transparent text-[#942d2c] items-center px-3 py-1 rounded-md border-2 border-[#942d2c]"
                  disabled={uploading} // Disable button during upload
                >
                  {uploading ? "Uploading..." : "Upload Image"}{" "}
                  {/* Show progress indicator */}
                </button>
              </div>
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
