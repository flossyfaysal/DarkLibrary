import React from "react";

const ProgressLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      <p className="mt-4 text-gray-700">Loading...</p>
    </div>
  );
};

export default ProgressLoader;
