import React from "react";

export const Button = () => {
  return (
    <button
      className="inline-flex items-center justify-center px-6 py-2 bg-[#d4e7f2] rounded-2xl"
      type="button"
      aria-label="Stop"
    >
      <div className="w-fit font-medium text-[#000000f2] text-lg text-center whitespace-nowrap">
        Stop
      </div>
    </button>
  );
};
