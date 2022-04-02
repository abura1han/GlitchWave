import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./branding/Logo";
import configs from "../configs.json";
import MobileNav from "./MobileNav";

const MobileHeader: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <header className="flex md:hidden items-center justify-between px-2 lg:px-5 py-2 w-full border-b border-b-glitch-box relative">
      {/* Toggle mobile popup */}
      {isPopupOpen && <MobileNav />}

      {/* Hamburder button for small device */}
      <button
        className="flex items-center md:hidden"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        <span
          className={`material-icons-outlined ${
            isPopupOpen ? "text-glitch-orange" : "text-white"
          }`}
        >
          menu
        </span>
      </button>

      {/* Site branding */}
      <div>
        <Logo />
      </div>

      {/* Header navigation */}
      <div>
        <Link to={"/profile"} className="flex items-center">
          <img
            src={configs.userAvatar}
            alt="Abu Raihan"
            className="w-8 h-8 rounded mr-2 border-none"
          />
          <span className="font-medium hidden sm:block">
            {configs.userName}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
