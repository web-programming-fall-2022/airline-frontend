import React from "react";

function BaseInput({
  placeholder,
  type,
  required,
  value,
  setValue,
  inputClassName,
}) {
  return (
    <div className="flex flex-col">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
      ></input>
    </div>
  );
}

export default BaseInput;
