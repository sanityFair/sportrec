import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "@/shared";
import { MainPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);

export const Routes = () => <RouterProvider router={router} />;
