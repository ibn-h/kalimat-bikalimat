import React from "react";

function SurahNavigation({ id }) {
  return (
    <div className="flex gap-3">
      <a
        href={"/" + Math.max(id - 1, 1)}
        className="text-base px-4 py-2 rounded-md text-white font-medium cursor-pointer bg-celadon-blue"
      >
        {"<"}
      </a>
      <div className="flex justify-center gap-2">
        <a
          href="/"
          className="text-base px-4 py-2 rounded-md text-white cursor-pointer bg-celadon-blue"
        >
          Go Back
        </a>
        <a
          href={`/${id}/memorize`}
          className="text-base px-4 py-2 rounded-md text-white cursor-pointer bg-celadon-blue"
        >
          Memorize
        </a>
      </div>
      <a
        href={"/" + Math.min(id + 1, 114)}
        className="text-base px-4 py-2 rounded-md text-white font-medium cursor-pointer bg-celadon-blue"
      >
        {">"}
      </a>
    </div>
  );
}

export default SurahNavigation;
