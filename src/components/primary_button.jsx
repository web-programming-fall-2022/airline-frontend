import classNames from 'classnames';
import React from 'react';

function PrimaryButton({ title, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'text-md inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300',
        { 'bg-red-700 hover:bg-red-800 focus:ring-red-300': type === 'danger' },
        {
          'bg-slate-400 text-white hover:bg-slate-500 focus:ring-slate-200':
            type === 'secondary',
        }
      )}>
      <span className="text-center">{title}</span>
    </button>
  );
}

export default PrimaryButton;
