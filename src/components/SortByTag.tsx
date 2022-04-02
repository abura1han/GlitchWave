import React from "react";

interface Props {
  tags: string[];
  defaultActiveIndex?: number;
}

const SortByTag: React.FC<Props> = ({ tags, defaultActiveIndex = 0 }) => {
  return (
    <ul className="flex items-center overflow-x-auto">
      {tags &&
        tags.map((text, i) => (
          <li key={i} className="min-w-max">
            <button
              className={`px-4 py-2 text-base  text-white border-b-2 ${
                defaultActiveIndex === i
                  ? "border-b-glitch-orange bg-glitch-box font-semibold"
                  : "border-transparent"
              }`}
            >
              {text}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default SortByTag;
