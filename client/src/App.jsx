import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {routes} from "./routes"; 
import { Home } from "./components/dashboard";
import Sidenav from './components/Sidebar'
import DashboardNavbar from './components/Navbar'
function App() {

  return (
      <div className="h-screen bg-blue-gray-50/50 overflow-hidden flex">
        {/* Sidebar */}
        <Sidenav
          routes={routes}
        />
        
        {/* Main content area */}
        <div className="flex-1 p-4 w-full overflow-auto">
          {/* Render the Dashboard Navbar */}
          <DashboardNavbar />

          <Routes>
            {routes.map((route , index) => {
              return route.routes ? (
                route.routes.map((subRoute, subIndex) => (
                  <Route
                    key={subIndex}
                    path={`/dashboard/${subRoute.path}`}
                    element={subRoute.element}
                  />
                ))
              ) : (
                <Route key={index} path={`/dashboard/${route.path}`} element={route?.element} />
              )
            })}
            <Route path="/" element={<Navigate to="/dashboard/home" element={<Home/>}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
