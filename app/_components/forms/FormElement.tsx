import React from "react";

export default function FormElement({
  name,
  label,
  error,
  type,
  register,
  required,
  styles,
  value,
  onChange,
}: {
  name: string;
  label: string;
  error: any;
  type: string;
  register: any;
  required: boolean;
  styles?: any;
  value?: string;
  onChange?: any;
}) {
  return (
    <div className="mb-4" style={{ ...styles }}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        // onChange={onChange}
        type={type}
        name={name}
        id={name}
        value={value}
        {...register(name, { required })}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#942d2c] focus:border-[#942d2c] sm:text-sm"
      />
      {error && error[name] && (
        <div className="text-red-500 text-xs mt-2">{error[name].message}</div>
      )}
    </div>
  );
}
