import { routes } from "../../routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidenav from "../Sidebar";
import { useStore } from "../../store";
import Home from "./Home";
const AdminDashboard = () => {
  const { isDarkMode } = useStore();

  return (
    <div className={`h-screen ${isDarkMode ? "bg-black" : "bg-blue-gray-50/50"} overflow-hidden flex`}>
      {/* Sidebar */}
      <Sidenav routes={routes} />
      
      {/* Main content area */}
      <div className="flex-1 p-4 w-full overflow-auto">
        {/* Render the Dashboard Navbar */}
        <Navbar />
        <Routes>
            <Route path="/admin-dashboard/home" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
