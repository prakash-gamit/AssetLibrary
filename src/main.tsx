import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import AssetRoute, { assetLoader } from "./routes/asset.tsx";
import Root from "./routes/root.tsx";
import KpiRoute from "./routes/kpi.tsx";
import LayoutsRoute from "./routes/layouts.tsx";
import StoryboardsRoute from "./routes/storyboards.tsx";
import HomeRoute from "./routes/home.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
      },
      {
        path: "kpi",
        element: <KpiRoute />,
      },
      {
        path: "layouts",
        element: <LayoutsRoute />,
      },
      {
        path: "storyboards",
        element: <StoryboardsRoute />,
      },
    ],
  },
  {
    path: "asset/:assetId",
    element: <AssetRoute type="KPI" />,
    loader: assetLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
