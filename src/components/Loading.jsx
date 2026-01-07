import React from "react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <div className="text-ink font-title text-xl animate-pulse">
        {text}
      </div>
    </div>
  );
};

export default Loading;
