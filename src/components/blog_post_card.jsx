import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostCard({ id, title, body, image }) {
  return (
    <div className="min-w-0 rounded-lg border border-gray-200 bg-white shadow-md">
      <Link to={'posts/' + id}>
        <img src={image} alt={title} className="rounded-t-lg" />
        <div className="p-5">
          <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {body}
          </p>
          <div className="flex flex-col items-end">
            <span className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              بیشتر بخوانید
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostCard;
