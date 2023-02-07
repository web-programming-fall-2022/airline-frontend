import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../primary_button";

function UserIndicator({ user }) {
  return (
    <div className="flex flex-row justify-between items-center content-center bg-white p-3 mt-3 rounded-lg">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon className="p-5" icon={faPersonWalking} />
        <span className="">{user.name} سلام</span>
      </div>
      <div className="max-w-sm">
        {" "}
        <PrimaryButton title={"خروج"} link={"/logout"} type={"danger"} />
      </div>
    </div>
  );
}

export default UserIndicator;
