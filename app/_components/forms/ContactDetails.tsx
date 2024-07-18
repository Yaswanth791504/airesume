"use client";

import { useForm } from "react-hook-form";
import FormsLayout from "./Formslayout";
import FormElement from "./FormElement";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/app/_context/resumeStepperSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import ResumeNextButton from "../ResumeNextButton";
import ResumeBackButton from "../ResumeBackButton";

export default function ContactDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(increment());
  };

  const handelPrevious = () => {
    dispatch(decrement());
  };

  return (
    <FormsLayout name="Contact">
      <div className="flex flex-1 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <FormElement
                name="phone"
                label="Phone Number"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="email"
                label="Email"
                error={errors}
                type="email"
                register={register}
                required
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="street"
                label="Street"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="city"
                label="City"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="state"
                label="State"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
            <div className="col-span-1">
              <FormElement
                name="pincode"
                label="Pincode"
                error={errors}
                type="text"
                register={register}
                required
              />
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-3">
            <ResumeBackButton />
            <ResumeNextButton isValid={isValid} />
          </div>
        </form>
      </div>
    </FormsLayout>
  );
}
