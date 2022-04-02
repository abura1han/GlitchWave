import React from "react";

interface Props {
  children?: React.ReactElement;
}

const LoadingIndicator: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-5 py-2">
      {children ? (
        children
      ) : (
        <div className="flex items-center mt-4 text-gray-300 text-lg">
          <span className="material-icons-outlined animate-spin text-glitch-orange">
            refresh
          </span>
          <span className="ml-4">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default LoadingIndicator;
