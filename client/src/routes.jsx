import { FaUsers, FaUserMd, FaHome, FaTasks, FaMoneyBillWave, FaEdit, FaChartLine, FaCog, FaUserPlus, FaEye } from "react-icons/fa";

// componets
import Home from "./components/admin-dashboard/Home";
import AddEmployee from "./components/admin-dashboard/Employee/AddEmployee";
const Component = ({name}) => {
  return (
    <>
      {name}
    </>
  )
};

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
    icon: <FaUsers {...icon} />, 
    routes : [
      {
        name : "add employee",
        path : "add-employee",
        icon : <FaUserPlus {...icon}/>,
        element : <AddEmployee />
      }, 
      {
        name : "view employees",
        path : "view-employee",
        icon : <FaEye {...icon}/>,
        element : <Component name={"view employee"} />,
      },
    ]
  },
  {
    name: "customers",
    path: "customers",
    icon: <FaUserMd {...icon} />, 
    element: <Component  name={"customers"}/>,
  },
  {
    name: "Analytics",
    icon: <FaChartLine {...icon} />,
    routes: [
      {
        name: "revenue",
        path: "revenue",
        icon: <FaMoneyBillWave {...icon} />, 
        element: <Component name={"revenue"} />,
      },
      {
        name: "salaries",
        path: "salaries",
        icon: <FaTasks {...icon} />, 
        element: <Component name={"salaries"} />,
      },
    ],
  },
  {
    name: "settings",
    path: "settings",
    icon: <FaCog {...icon} />, 
  element: <Component name={"settings"} />,
  },
];
