import React from "react";
import BaseInput from "./base_input";
import DateInput from "./date_input";

const baseInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 h-10";

function Input({ label, placeholder, type, required, value, setValue }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-400 my-2">{label}</label>
      {type == "date" ? (
        <DateInput
          selectedDayRange={value}
          setSelectedDayRange={setValue}
          inputClassName={baseInputClassName}
        />
      ) : (
        <BaseInput
          inputClassName={baseInputClassName}
          value={value}
          setValue={setValue}
          label={label}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      )}
    </div>
  );
}

export default Input;
