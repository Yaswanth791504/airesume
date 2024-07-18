"use client";

import { useForm } from "react-hook-form";
import FormsLayout from "./Formslayout";
import FormElement from "./FormElement";
import ResumeNextButton from "../ResumeNextButton";
import ResumeBackButton from "../ResumeBackButton";
import { useDispatch, useSelector } from "react-redux";
import { updateContactDetails } from "@/app/_context/resumeSlice";
import { increment } from "@/app/_context/resumeStepperSlice";

export default function ContactDetails() {
  const { phone, email, address } = useSelector((state: any) => state.resume);
  const [street, city, state, pincode] = address.split(", ");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone,
      email,
      street,
      city,
      state,
      pincode,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    dispatch(updateContactDetails(data));
    dispatch(increment());
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
            <ResumeNextButton isValid={isValid} onSubmit={onSubmit} />
          </div>
        </form>
      </div>
    </FormsLayout>
  );
}
