import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import { Sidenav } from "./components/Sidebar"; // Assuming Sidebar component
import {routes} from "./routes"; // The route definitions
import { useMaterialTailwindController } from "./context"; // Assuming you're using Tailwind Controller context
import { Home } from "./components/dashboard";
import Navbar from "./components/Navbar";
function App() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller; // Using the sidenav type from the controller
  
  return (
    <div className="h-screen bg-blue-gray-50/50 overflow-hidden flex">
        {/* Sidebar */}
        <Sidenav
          routes={routes}
        />
        
        {/* Main content area */}
        <div className="flex-1 p-4 w-full overflow-auto">
          {/* Render the Dashboard Navbar */}
          
        <Navbar />
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
