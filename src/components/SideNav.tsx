import React, { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PageListContext } from "../contexts/PageContext";
import configs from "../configs.json";
import Logo from "./branding/Logo";
import Profile from "./Profile";
/**
 * Sidebar navigation
 */
const SideNav: React.FC = () => {
  // Page list comes form page context
  const { pageList } = useContext(PageListContext);
  const { pathname } = useLocation();

  // Show active page name to document title
  useEffect(() => {
    const pageLabel = pageList.find(({ slug }) => slug === pathname);

    if (pageLabel) {
      window.document.title = `${pageLabel.label} - ${configs.sitename}`;
    } else {
      window.document.title = configs.sitename;
    }
  }, [pathname, pageList]);

  return (
    <nav
      className="flex-col sticky top-0 left-0 h-screen mr-4 lg:mr-0  px-5 pr-12 bg-dark-glitch md:flex hidden"
      aria-label="Sidebar navigation"
    >
      {/* Site branding */}
      <div className="mt-5">
        <Logo />
      </div>
      {/* Padding for some extra space in the bottom */}
      <ul className="pb-5 mt-10">
        {/* Sidevar menu list */}
        {pageList &&
          pageList.map(({ icon, label, slug }, i) => (
            <li key={i}>
              <NavLink
                to={slug}
                className={({ isActive }) =>
                  `flex relative items-center py-2 mt-5 font-medium ${
                    isActive ? "text-glitch-orange" : "text-gray-400"
                  }`
                }
              >
                <span className="material-icons-outlined mr-7">{icon}</span>{" "}
                {label}
              </NavLink>
            </li>
          ))}
      </ul>

      {/* Profile */}
      <div className="flex-1 flex flex-col justify-end mb-5">
        <Profile />
      </div>
    </nav>
  );
};

export default SideNav;
