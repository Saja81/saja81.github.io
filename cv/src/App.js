import "./App.css";

import Home from "./views/Home";
import About from "./views/About";
import Lab from "./views/Lab";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

function Root() {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <About />, path: "/about/" },
        { element: <Lab />, path: "/lab/" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
