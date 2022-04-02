import React from "react";
import MobileHeader from "./MobileHeader";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactChild;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>
        {/* Header for small device */}
        <MobileHeader />
        <div className="flex">
          {/* Sidebar navigation */}
          <SideNav />
          <div className="flex-1 px-4 lg:px-6 pb-6 w-full mx-auto">
            <div className="mt-5">{children && children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
