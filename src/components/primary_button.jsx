import classNames from "classnames";
import React from "react";

function PrimaryButton({ title, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "inline-flex items-center justify-center px-5 py-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full",
        { "bg-red-700 hover:bg-red-800 focus:ring-red-300": type === "danger" },
        {
          "bg-slate-400 hover:bg-slate-500 focus:ring-slate-200 text-white":
            type === "secondary",
        }
      )}
    >
      <span className="text-center">{title}</span>
    </button>
  );
}

export default PrimaryButton;
