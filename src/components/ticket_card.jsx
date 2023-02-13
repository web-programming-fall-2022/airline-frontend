import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faPlaneDeparture,
  faHourglassStart,
  faPlaneCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

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
      className="my-2 flex flex-col items-center rounded-lg border bg-white py-8 px-8 shadow-md md:flex-row">
      <div className="flex w-full flex-col justify-between">
        {isLimited && <p className="mb-5 text-sm text-red-700">ظرفیت محدود</p>}

        <span className="mb-5 text-lg font-semibold text-gray-900">
          {origin} - {destination}
        </span>

        <div className="flex w-full flex-col justify-between md:flex-row">
          <ol className="w-full max-w-4xl items-start sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 p-4 ring-0 ring-white">
                  <FontAwesomeIcon className="px-1" icon={faPlaneDeparture} />
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 sm:flex"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {new Date(startDate).getHours() +
                    ':' +
                    new Date(startDate).getMinutes()}
                </h3>
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                  {new Date(startDate).toLocaleDateString('fa-IR')}
                </time>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 p-4 ring-0 ring-white">
                  <FontAwesomeIcon className="px-1" icon={faHourglassStart} />
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 sm:flex"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {(endDate - startDate) / 1000 / 60 / 60} ساعت پرواز
                </h3>
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                  -
                </time>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 p-4 ring-0 ring-white">
                  <FontAwesomeIcon className="px-1" icon={faPlaneCircleCheck} />
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 sm:flex"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {new Date(endDate).getHours() +
                    ':' +
                    new Date(endDate).getMinutes()}
                </h3>
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                  {new Date(endDate).toLocaleDateString('fa-IR')}
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
