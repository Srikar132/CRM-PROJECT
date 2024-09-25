import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidenav } from "./components/Sidebar"; // Assuming Sidebar component
import {routes} from "./routes"; // The route definitions
import { useMaterialTailwindController } from "./context"; // Assuming you're using Tailwind Controller context
import { Home } from "./components/dashboard";
import DashboardNavbar from "./components/Navbar/DashboardNavbar";

function App() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller; // Using the sidenav type from the controller
  
  return (
      <div className="min-h-screen bg-blue-gray-50/50 flex">
        {/* Sidebar */}
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "dark"
              ? "/img/logo-ct.png"
              : "/img/logo-ct-dark.png"
          }
        />
        
        {/* Main content area */}
        <div className="flex-1 p-4 xl:ml-80 w-full">
          {/* Render the Dashboard Navbar */}
          <DashboardNavbar />

          <Home />
          
          {/* Defining Routes */}
          <Routes>
            {routes.map(({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route key={path} exact path={path} element={element} />
              ))
            )}
          </Routes>
        </div>
      </div>
  );
}

export default App;
