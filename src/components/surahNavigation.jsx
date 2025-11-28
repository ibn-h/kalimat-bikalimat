import React from "react";

function SurahNavigation({ id }) {
  return (
    <div className="flex gap-5">
      <a
        href={"/" + Math.max(id - 1, 1)}
        className="bg-gray-300 cursor-pointer"
      >
        {"<"}
      </a>
      <a href="/" className="bg-gray-300 cursor-pointer">
        Go Back
      </a>
      <a href={"/memorize/" + id} className="bg-gray-300 cursor-pointer">
        Memorize
      </a>
      <a
        href={"/" + Math.min(id + 1, 114)}
        className="bg-gray-300 cursor-pointer"
      >
        {">"}
      </a>
    </div>
  );
}

export default SurahNavigation;
