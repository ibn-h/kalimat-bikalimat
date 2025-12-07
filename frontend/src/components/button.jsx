import React from "react";

export const Button = () => {
  return (
    <button
      className="all-[unset] box-border inline-flex items-center justify-center px-6 py-2 relative bg-[#d4e7f2] rounded-[32px]"
      type="button"
      aria-label="Stop"
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#000000f2] text-lg text-center tracking-[0] leading-[19.8px] whitespace-nowrap">
        Stop
      </div>
    </button>
  );
};
