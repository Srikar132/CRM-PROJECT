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
      <div className="flex-1 flex flex-col  p-4 w-full overflow-auto">
        {/* Render the Dashboard Navbar */}
        <Navbar />
        <div className="flex-1 ">
          <Routes>
            {/* Map through main routes */}
            {routes.map((route, index) => {
              return route.routes ? (
                // If the route has nested routes, map through the nested ones
                route.routes.map((subRoute, subIndex) => (
                  <Route
                    key={subIndex}
                    path={`/${subRoute.path}`}
                    element={subRoute.element}
                  />
                ))
              ) : (
                // Otherwise, render the single route
                <Route
                  key={index}
                  path={`/${route.path}`}
                  element={route?.element}
                />
              );
            })}
            {/* Default route to redirect to the home */}
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
