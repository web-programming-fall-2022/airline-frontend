import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faPlaneDeparture,
  faHourglassStart,
  faPlaneCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function TicketCart({
  startDate,
  endDate,
  origin,
  destination,
  isLimited,
  onClick,
  trailing,
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row my-2 py-8 px-8"
    >
      <div className="flex flex-col justify-between w-full">
        {isLimited && <p className="text-sm text-red-700 mb-5">ظرفیت محدود</p>}

        <span className="text-lg font-semibold text-gray-900 mb-5">
          {origin} - {destination}
        </span>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <ol className="max-w-4xl w-full items-start sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 p-4 bg-blue-200 rounded-full ring-0 ring-white shrink-0">
                  <FontAwesomeIcon className="px-1" icon={faPlaneDeparture} />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {new Date(startDate).getHours() +
                    ":" +
                    new Date(startDate).getMinutes()}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {new Date(startDate).toLocaleDateString("fa-IR")}
                </time>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 p-4 bg-blue-200 rounded-full ring-0 ring-white shrink-0">
                  <FontAwesomeIcon className="px-1" icon={faHourglassStart} />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {(endDate - startDate) / 1000 / 60 / 60} ساعت پرواز
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  -
                </time>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="flex z-10 justify-center items-center w-6 h-6 p-4 bg-blue-200 rounded-full ring-0 ring-white">
                  <FontAwesomeIcon className="px-1" icon={faPlaneCircleCheck} />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {new Date(endDate).getHours() +
                    ":" +
                    new Date(endDate).getMinutes()}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {new Date(endDate).toLocaleDateString("fa-IR")}
                </time>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {trailing}
    </div>
  );
}

export default TicketCart;
