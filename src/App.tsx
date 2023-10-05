import React from "react";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <CssVarsProvider defaultColorScheme="dark">
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;
