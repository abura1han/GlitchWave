import React, { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PageListContext } from "../contexts/PageContext";
import configs from "../configs.json";
/**
 * Sidebar navigation
 */
const MobileNav: React.FC = () => {
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
      className="w-full px-2 absolute top-full left-0 z-30 bg-dark-glitch"
      aria-label="Sidebar navigation"
    >
      {/* Padding for some extra space in the bottom */}
      <ul className="py-5">
        {/* Sidevar menu list */}
        {pageList &&
          pageList.map(({ icon, label, slug }, i) => (
            <li key={i} className="last:border-none">
              <NavLink
                to={slug}
                className={({ isActive }) =>
                  `flex relative items-center px-5 py-4 font-medium ${
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
    </nav>
  );
};

export default MobileNav;
