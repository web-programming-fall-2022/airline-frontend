import React from 'react';

function Profile({ id, name, description, email, image }) {
  return (
    <a
      id={id}
      href={'maitlto:' + email}
      className="flex flex-col items-center md:flex-row">
      <img
        className="h-32 w-32 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 md:h-20 md:w-20"
        src={image}
        alt={name}
      />
      <div className="mr-2 py-1 text-center">
        <h3 className="text-sm font-bold">{name}</h3>
        <h4 className="text-center text-xs md:text-start">{description}</h4>
      </div>
    </a>
  );
}

export default Profile;
