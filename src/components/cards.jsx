import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 card-2">
        <div className="font-bold text-xl mb-2">For Developers</div>
        <p className="text-gray-700 text-base mb-4">
          Explore exciting opportunities and advance your career in tech.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600">
          Explore Jobs
        </button>
      </div>

    
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 card-1">
        <div className="font-bold text-xl mb-2">For Employees</div>
        <p className="text-gray-700 text-base mb-4">
          Find the right talent for your company and grow your team.
        </p>
        <button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-black">
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default Cards;