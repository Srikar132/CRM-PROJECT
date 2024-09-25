import { FaUsers, FaHome, FaTasks, FaFileAlt, FaEdit, FaEye } from "react-icons/fa";

export const routes = [
  {
    layout: "dashboard",
    title: "Customers",
    icon: FaUsers,
    pages: [
      { name: "customers list", path: "/customers/list", icon: FaEye },
      { name: "update customers", path: "/customers/update", icon: FaEdit },
    ],
  },
  {
    layout: "dashboard",
    title: "Employers",
    icon: FaHome,
    pages: [
      { name: "employers list", path: "/employers/list", icon: FaEye },
      { name: "update employers", path: "/employers/update", icon: FaEdit },
    ],
  },
  {
    layout: "dashboard",
    title: "Reports",
    icon: FaFileAlt,
    pages: [{ name: "view reports", path: "/reports/view", icon: FaEye }],
  },
  {
    layout: "dashboard",
    title: "Tasks",
    icon: FaTasks,
    pages: [
      { name: "add tasks", path: "/tasks/add", icon: FaEdit },
      { name: "edit tasks", path: "/tasks/edit", icon: FaEdit },
    ],
  },
  {
    layout: "dashboard",
    title: "Transactions",
    icon: FaFileAlt,
    pages: [{ name: "view transactions", path: "/transactions/view", icon: FaEye }],
  },
];