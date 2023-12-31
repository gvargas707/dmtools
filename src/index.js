import React from "react";
import { createRoot } from "react-dom/client";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/login/LoginPage"
import SharePage from "./pages/share/SharePage";

import ExplorePage from "./pages/explore/ExplorePage";
import ExploreCollection from "./pages/explore/ExploreCollection";

import CreatePage from "./pages/create/CreatePage";
import CreatePageLanding from "./pages/create/CreatePageLanding";
import NPCGeneratorBuilder from "./pages/create/GeneratorBuilders/NPCGeneratorBuilder";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <PublicRoute><LoginPage /></PublicRoute>,
      },
      {
        path: "share",
        element: <ProtectedRoute><SharePage /></ProtectedRoute>,
      },
      {
        path: "explore",
        element: <ExplorePage />,
        children: [
          {
            index: true,
            element: <ExploreCollection />
          }
        ]
      },
      {
        path: "create",
        element: <CreatePage />,
        children: [
          {
            index: true,
            element: <CreatePageLanding />
          },
          {
            path: "npc-builder",
            element: <NPCGeneratorBuilder />
          }
        ]
      }
    ]
  },
])

root.render(
  <>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </>
)

//reactDOM.render(<App />, document.getElementById("root"));