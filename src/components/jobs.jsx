import React from "react";

const Jobs = () => {
  return (
    <>
      <h1 className="flex justify-center text-4xl font-bold my-8 text-indigo-700">
        Browse Jobs
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
        {/* Web Developer Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Web Developer</h2>
          <p className="text-gray-700 text-base mb-4">
            Build modern and responsive websites using cutting-edge technologies.
          </p>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-black transition duration-300">
            Apply Now
          </button>
        </div>

        {/* App Developer Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">App Developer</h2>
          <p className="text-gray-700 text-base mb-4">
            Design and develop mobile applications for iOS and Android platforms.
          </p>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-black transition duration-300">
            Apply Now
          </button>
        </div>

        {/* AI/ML Engineer Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">AI/ML Engineer</h2>
          <p className="text-gray-700 text-base mb-4">
            Work on cutting-edge AI and machine learning projects to shape the future.
          </p>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-black transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Jobs;