import { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { FaUsers, FaHome, FaTasks, FaFileAlt, FaEdit, FaEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useMaterialTailwindController, setOpenSidenav } from "../context";
import { routes } from "../routes";

// Submenu component for handling sub-routes with enhanced animation
const Submenu = ({ title, pages, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-4 py-3 text-center capitalize transition-all hover:bg-gray-700 rounded-lg"
      >
        <div className="flex items-center">
          <Icon className="h-5 w-5 text-gray-300 mr-6" />
          <Typography variant="small" className="font-medium text-gray-300">
            {title}
          </Typography>
        </div>
      </button>
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="pl-6 mt-2 overflow-hidden"
      >
        {pages.map(({ name, path, icon: PageIcon }, idx) => (
          <li key={idx}>
            <NavLink to={path}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "gradient" : "text"}
                  color={isActive ? "blue" : "gray"}
                  className="w-full flex items-center gap-4 px-4 py-2 text-left capitalize hover:bg-gray-600 transition-all rounded-lg"
                >
                  <PageIcon className="h-5 w-5 text-gray-300" />
                  <Typography variant="small" className="font-medium text-gray-300">
                    {name}
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </li>
  );
};

Submenu.propTypes = {
  title: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  icon: PropTypes.elementType.isRequired,
};

// Main Sidenav component with enhanced styles and animations
export function Sidenav({ brandImg, brandName }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gray-900",
    white: "bg-gray-900 shadow-lg",
    transparent: "bg-gray-900",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-gray-700 shadow-xl`}
    >
      {/* Sidebar header */}
      <div className="relative flex justify-between items-center py-6 px-8 bg-gray-800 rounded-t-xl">
        <Link to="/" className="text-center">
          <Typography variant="h5" color="white" className="font-bold text-center">
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <MdClose className="h-5 w-5 text-white" />
        </IconButton>
      </div>

      {/* Sidebar content */}
      <div className="m-4 bg-gray-900 rounded-md">
        {routes.map(({ layout, title, pages, icon: Icon }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-2 bg-gray-700 rounded-2xl">
            <Submenu title={title} pages={pages} icon={Icon} />
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Admin Dashboard",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;