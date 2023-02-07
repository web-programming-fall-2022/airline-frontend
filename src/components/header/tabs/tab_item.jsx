import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabItem({ title, icon, link, isSelected }) {
  return (
    <Link
      className={classNames("flex-1 hover:bg-slate-50 rounded", {
        "text-blue-700": isSelected,
      })}
      to={link}
    >
      <div className="py-3 text-center">
        <FontAwesomeIcon className="px-1" icon={icon} />
        <span>{title}</span>
      </div>

      {isSelected && (
        <div className="w-2/5 h-1 bg-blue-800 m-auto rounded-t-full"></div>
      )}
    </Link>
  );
}

export default TabItem;
