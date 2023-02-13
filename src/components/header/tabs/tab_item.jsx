import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabItem({ title, icon, link, isSelected }) {
  return (
    <Link
      className={classNames('flex-1 rounded hover:bg-slate-50', {
        'text-blue-700': isSelected,
      })}
      to={link}>
      <div className="py-3 text-center">
        <FontAwesomeIcon className="px-1" icon={icon} />
        <span>{title}</span>
      </div>

      {isSelected && (
        <div className="m-auto h-1 w-2/5 rounded-t-full bg-blue-800"></div>
      )}
    </Link>
  );
}

export default TabItem;
