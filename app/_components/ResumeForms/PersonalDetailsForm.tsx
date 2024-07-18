import { useForm } from "react-hook-form";
import InputWithLabel from "../InpuWithLabel";

export default function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel register={register} inputName="firstName" errors={errors} />
    </form>
  );
}
