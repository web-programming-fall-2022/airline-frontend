import React from "react";
import BaseInput from "./base_input";
import DateInput from "./date_input";
import SelectInput from "./select_input";

const baseInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 h-10";

function Input({
  label,
  placeholder,
  type,
  required,
  values,
  value,
  setValue,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-400 my-2">{label}</label>
      {getInputBasedOnType(
        type,
        placeholder,
        required,
        values,
        value,
        setValue
      )}
    </div>
  );
}

function getInputBasedOnType(
  type,
  placeholder,
  required,
  values,
  value,
  setValue
) {
  if (type === "select") {
    return (
      <SelectInput
        required={required}
        values={values}
        value={value}
        setValue={setValue}
        inputClassName={baseInputClassName}
      />
    );
  }
  if (type === "date") {
    return (
      <DateInput
        required={required}
        value={value}
        setValue={setValue}
        inputClassName={baseInputClassName}
      />
    );
  }
  return (
    <BaseInput
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      setValue={setValue}
      inputClassName={baseInputClassName}
    />
  );
}

export default Input;
