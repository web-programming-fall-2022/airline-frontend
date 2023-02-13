import classNames from "classnames";
import React from "react";

function SelectInput({ required, values, value, setValue, inputClassName }) {
  return (
    <div className="flex flex-col">
      <select
        onChange={(e) => setValue(e.target.value)}
        className={classNames(inputClassName, "text-sm")}
        required={required}
      >
        {values.map((v) => {
          return <option value={v.value}>{v.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
