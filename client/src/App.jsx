import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Landing from "./scenes/Landing";
import BrowseProfessionals from "./scenes/BrowseProfessionals";
import ProfileLayout from "./scenes/Profile";
import DashboardLayout from "./scenes/Profile/Dashboard";
import Login from "./scenes/Login";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse-professionals",
      element: <BrowseProfessionals/>
    },
    {
      path: "/profile",
      element: <ProfileLayout/>,
      children: [
        {
          path: "dashboard",
          element: <DashboardLayout/>,
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
