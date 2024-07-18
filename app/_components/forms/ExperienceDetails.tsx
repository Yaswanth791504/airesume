"use client";
import { useForm } from "react-hook-form";
import FormsLayout from "./Formslayout";
import FormElement from "./FormElement";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, removeExperience } from "@/app/_context/resumeSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import ResumeBackButton from "../ResumeBackButton";
import ResumeNextButton from "../ResumeNextButton";
import { increment } from "@/app/_context/resumeStepperSlice";

export default function ExperienceDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const experience = useSelector((state: any) => state.resume.experience);
  const dispatch = useDispatch();

  const handleAddExperience = () => {
    dispatch(addExperience(Math.floor(Math.random() * 1000)));
  };

  const handleRemoveExperience = (id: number) => {
    dispatch(removeExperience(id));
  };

  const handleSkip = () => {
    dispatch(increment());
  };

  return (
    <FormsLayout name="Experience">
      <div className="flex flex-1 p-10 gap-5 flex-col ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {experience && experience.length > 0 ? (
            experience.map((education: any) => {
              return (
                <ExperienceComponent
                  key={education.id}
                  errors={errors}
                  register={register}
                  id={education.id}
                  removeExtraEducation={handleRemoveExperience}
                />
              );
            })
          ) : (
            <div className="text-center p-10">Any Experience ?? </div>
          )}
        </form>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={handleAddExperience}
              disabled={experience.length >= 3}
              className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c] disabled:opacity-50"
            >
              <IoAddCircleOutline /> Add
            </button>
            <button
              onClick={handleSkip}
              className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c] disabled:opacity-50"
            >
              Skip
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <ResumeBackButton />
            <ResumeNextButton isValid={isValid && experience.length > 0} />
          </div>
        </div>
      </div>
    </FormsLayout>
  );
}

const ExperienceComponent = ({
  errors,
  register,
  id,
  removeExtraEducation,
}: {
  errors: any;
  register: any;
  id: number;
  removeExtraEducation: any;
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-2 border-[#942d2c] rounded-md p-5">
      <div className="col-span-1">
        <FormElement
          name={`companyName_${id}`}
          label="Company Name"
          error={errors}
          type="text"
          register={register}
          required
        />
      </div>
      <div className="col-span-1">
        <FormElement
          name={`role_${id}`}
          label="Role"
          error={errors}
          type="number"
          register={register}
          required
        />
      </div>
      <div className="col-span-1">
        <FormElement
          name={`companyfrom_${id}`}
          label="From"
          error={errors}
          type="date"
          register={register}
          required
        />
      </div>
      <div className="col-span-1">
        <FormElement
          name={`companyto_${id}`}
          label="To"
          error={errors}
          type="date"
          register={register}
          required
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="summary"
          className=" text-sm font-medium text-gray-700 mb-1 flex gap-2"
        >
          Descrption
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
            // setSummaryWords(e.target.value.split(" ").length - 1);
          }}
        />
        {errors.summary && (
          <div className="text-red-500 text-xs mt-2">Summary is required</div>
        )}
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
          type="button"
          className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c]"
        >
          Save
        </button>
      </div>
    </div>
  );
};
