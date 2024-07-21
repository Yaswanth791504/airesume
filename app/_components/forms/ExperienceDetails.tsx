"use client";
import { useForm } from "react-hook-form";
import FormsLayout from "./Formslayout";
import FormElement from "./FormElement";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  removeExperience,
  updateExperience,
} from "@/app/_context/resumeSlice";
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
            experience.map((exp: any) => {
              return (
                <ExperienceComponent
                  key={exp.id}
                  id={exp.id}
                  experience={exp}
                  removeExtraExperience={handleRemoveExperience}
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
            <ResumeNextButton
              isValid={isValid && experience.length > 0}
              onSubmit={() => dispatch(increment())}
            />
          </div>
        </div>
      </div>
    </FormsLayout>
  );
}

const ExperienceComponent = ({
  id,
  experience,
  removeExtraExperience,
}: {
  id: number;
  experience: any;
  removeExtraExperience: (id: number) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      [`companyName_${id}`]: experience.companyName,
      [`role_${id}`]: experience.role,
      [`startDate_${id}`]: experience.startDate,
      [`endDate_${id}`]: experience.endDate,
      [`description_${id}`]: experience.description,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log(data);
    const updatedExperience = {
      id,
      companyName: data[`companyName_${id}`],
      role: data[`role_${id}`],
      startDate: data[`startDate_${id}`],
      endDate: data[`endDate_${id}`],
      description: data[`description_${id}`],
    };
    dispatch(updateExperience(updatedExperience));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
            register={register}
            required
          />
        </div>
        <div className="col-span-1">
          <FormElement
            name={`startDate_${id}`}
            label="From"
            error={errors}
            type="date"
            register={register}
            required
          />
        </div>
        <div className="col-span-1">
          <FormElement
            name={`endDate_${id}`}
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
            Description
          </label>
          <textarea
            id={`description_${id}`}
            {...register(`description_${id}`, {
              required: true,
              maxLength: {
                value: 34,
                message: "Description should be less than 34 words",
              },
            })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
          {errors[`description_${id}`] && (
            <div className="text-red-500 text-xs mt-2">
              {(errors && errors[`description_${id}`]?.message?.toString()) ??
                ""}
            </div>
          )}
        </div>
        <div className="flex flex-1 justify-between col-span-2">
          <button onClick={() => removeExtraExperience(id)} type="button">
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
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
            className="bg-transparent text-[#942d2c] flex gap-1 items-center px-3 py-1 rounded-md border-2 border-[#942d2c]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
