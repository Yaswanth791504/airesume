export default function InputWithLabel({ register, inputName,errors }) {
  return (
    <div>
      <label htmlFor={inputName}>{register}</label>
      <input type="text" name={inputName} {...register(inputName)} />
      {errors.inputName && }
    </div>
  );
}
