import React from "react";

function Profile({ id, name, description, email, image }) {
  return (
    <a
      id={id}
      href={"maitlto:" + email}
      className="flex flex-col md:flex-row items-center"
    >
      <img
        className="p-1 w-32 h-32 md:w-20 md:h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={image}
        alt={name}
      />
      <div className="mr-2 text-center py-1">
        <h3 className="text-sm font-bold">{name}</h3>
        <h4 className="text-xs text-center md:text-start">{description}</h4>
      </div>
    </a>
  );
}

export default Profile;
