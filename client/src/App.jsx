import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Landing from "./scenes/Landing";
import BrowseProfessionals from "./scenes/BrowseProfessionals";
import ProfileLayout from "./scenes/Profile";
import DashboardLayout from "./scenes/Profile/Dashboard";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import UserDetails from "./scenes/UserDetails";
import Root from "./scenes";

import "./App.css";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/browse-professionals",
          element: <BrowseProfessionals />
        },
        {
          path: "/profile",
          element: <ProfileLayout />,
          children: [
            {
              path: "dashboard",
              element: <DashboardLayout />,
            }
          ]
        },
        {
          path: "/u/:userId",
          element: <UserDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
