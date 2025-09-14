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
import Requests from "./scenes/Requests"

import "./App.css";
import CreateProfile from "./scenes/CreateProfile";

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
          path: "/create-profile",
          element: <CreateProfile />,
        },
        {
          path: "/browse-professionals",
          element: <BrowseProfessionals />
        },
        {
          path: "/requests",
          element: <Requests/>
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
