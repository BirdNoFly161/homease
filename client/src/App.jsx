import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Landing from "./scenes/Landing";
import BrowseProfessionals from "./scenes/BrowseProfessionals";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/browse-professionals",
      element: <BrowseProfessionals/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
