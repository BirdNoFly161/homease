import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./scenes";
import Landing from "./scenes/landingpage";
import Contact from "./scenes/contact";

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
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
