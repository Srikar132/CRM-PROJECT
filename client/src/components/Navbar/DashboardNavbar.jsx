import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "../../context";
import React from "react";
import PropTypes from "prop-types";
import { routes } from "../../routes";

export function DashboardNavbar({ brandName }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [openNav, setOpenNav] = React.useState(false);
  const [openNotifications, setOpenNotifications] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    const handleClickOutside = (event) => {
      if (openNotifications && !event.target.closest(".notification-menu")) {
        setOpenNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNotifications]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="blue-gray"
          className="capitalize"
        >
          <Link to={path} className="flex items-center gap-1 p-1 font-normal">
            {icon &&
              React.createElement(icon, {
                className: "w-[18px] h-[18px] opacity-50 mr-1 text-blue-gray-500",
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      color={fixedNavbar ? "black" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-black/10"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 w-full">
        <Link to="/">
          <Typography
            variant="small"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
          >
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6 text-blue-gray-500" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-blue-gray-500" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
      </Collapse>
      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="black"
                className="font-normal opacity-70 transition-all hover:text-black hover:opacity-100"
              >
                {layout?.length > 0  ? 'Dashboard' : layout }
              </Typography>
            </Link>
            <Typography variant="small" color="black" className="font-normal">
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="black">
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56 p-4">
            <Input label="Search" color="black" className="text-black p-2" placeholder="Search" />
          </div>
          <IconButton
            variant="text"
            color="black"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-black" />
          </IconButton>
          <Link to="/auth/sign-in">
            <Button
              variant="text"
              color="black"
              className="hidden items-center gap-1 px-4 xl:flex normal-case text-black"
            >
              <UserCircleIcon className="h-5 w-5 text-black" />
              Sign In
            </Button>
            <IconButton
              variant="text"
              color="black"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-black" />
            </IconButton>
          </Link>
          <Link to="">
            <Button
              variant="text"
              color="black"
              className="hidden items-center gap-1 px-4 xl:flex normal-case text-black"
              onClick={() => setOpenNotifications(openNotifications=>!openNotifications)}

            >
              <BellIcon className="h-5 w-5 text-black" /> Notifications
              </Button>
           
          </Link>
          <div className="relative notification-menu">
           
            {openNotifications && (
              <MenuList className="w-max border-0 bg-black text-white absolute right-0 mt-2 z-50">
                <MenuItem className="flex items-center gap-3">
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="mb-1 font-normal"
                    >
                      <strong>New message</strong> from Laur
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 text-xs font-normal opacity-60"
                    >
                      <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4">
                  <Avatar
                    src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                    alt="item-1"
                    size="sm"
                    variant="circular"
                  />
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="mb-1 font-normal"
                    >
                      <strong>New album</strong> by Travis Scott
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 text-xs font-normal opacity-60"
                    >
                      <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-black to-gray-900">
                    <CreditCardIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="white"
                      className="mb-1 font-normal"
                    >
                      Payment successfully completed
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1 text-xs font-normal opacity-60"
                    >
                      <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                    </Typography>
                  </div>
                </MenuItem>
              </MenuList>
            )}
          </div>
         
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.defaultProps = {
  brandName: "Admin Dashboard",
};

DashboardNavbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
