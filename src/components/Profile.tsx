import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PageListContext } from "../contexts/PageContext";
import configs from "../configs.json";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const { pageList } = useContext(PageListContext);

  useEffect(() => {
    const profilePage = pageList[pageList.length - 1];
    setName(configs.userName);
    setSlug(profilePage.slug);
  }, [pageList]);

  return (
    <div>
      <NavLink
        to={slug}
        className={({ isActive }) =>
          `flex relative items-center py-2 mt-5 font-medium ${
            isActive ? "text-glitch-orange" : "text-gray-400"
          }`
        }
      >
        <span className="material-icons-outlined mr-7">
          <img
            src={configs.userAvatar}
            alt={configs.userName}
            className="w-6 h-6 rounded"
          />
        </span>{" "}
        {name}
      </NavLink>
      <NavLink
        to={"/logout"}
        className={({ isActive }) =>
          `flex relative items-center py-2 mt-1 font-medium ${
            isActive ? "text-glitch-orange" : "text-gray-400"
          }`
        }
      >
        <span className="material-icons-outlined mr-7">logout</span> Log out
      </NavLink>
    </div>
  );
};

export default Profile;
