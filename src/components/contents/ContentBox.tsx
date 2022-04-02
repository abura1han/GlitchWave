import React from "react";
import Search from "../Search";

interface Props {
  name: string;
  showSearch?: boolean;
  children?: JSX.Element[] | JSX.Element;
}

const ContentBox: React.FC<Props> = ({
  name,
  showSearch = false,
  children,
}) => {
  return (
    <div className="mt-5 bg-glitch-bar relative rounded">
      <div className="flex justify-between items-center bg-glitch-bar px-5 py-4 text-white font-semibold text-base">
        <h2>{name && name}</h2>
        {showSearch && (
          <div className="ml-1">
            <Search />
          </div>
        )}
      </div>
      {children && children}
    </div>
  );
};

export default ContentBox;
