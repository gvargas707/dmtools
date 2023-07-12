import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from "./pages/ErrorPage";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
])

root.render(
  <>
    <RouterProvider router={router} />
  </>
)

//reactDOM.render(<App />, document.getElementById("root"));