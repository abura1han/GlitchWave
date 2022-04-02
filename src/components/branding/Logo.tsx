import React from "react";
import { Link } from "react-router-dom";
import configs from "../../configs.json";

/**
 * Site logo comes from configs.json
 */
const Logo: React.FC = () => {
  return (
    <Link to={"/"} className="font-bold text-xl text-glitch-orange">
      {configs.sitename}.
    </Link>
  );
};

export default Logo;
