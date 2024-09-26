import { FaUsers, FaUserMd, FaHome, FaTasks, FaMoneyBillWave, FaEdit, FaChartLine, FaCog } from "react-icons/fa";

// componets
import Home from "./components/admin-dashboard/Home";
const Component = () => {
  return (
    <>
      Dummy Component
    </>
  )
}
const icon = {
  className: "text-2xl",
};

export const routes = [
  {
    name: "dashboard",
    path: "home",
    icon: <FaHome {...icon} />,
    element: <Home />,
  },
  {
    name: "employees",
    path: "employees",
    icon: <FaUsers {...icon} />, 
    element: <Component />,
  },
  {
    name: "customers",
    path: "customers",
    icon: <FaUserMd {...icon} />, 
    element: <Component />,
  },
  {
    name: "Analytics",
    icon: <FaChartLine {...icon} />,
    routes: [
      {
        name: "revenue",
        path: "revenue",
        icon: <FaMoneyBillWave {...icon} />, 
        element: <Component />,
      },
      {
        name: "salaries",
        path: "salaries",
        icon: <FaTasks {...icon} />, 
        element: <Component />,
      },
    ],
  },
  {
    name: "settings",
    path: "settings",
    icon: <FaCog {...icon} />, 
    element: <Component />,
  },
];
