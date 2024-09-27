import { Toaster } from "@/components/ui/toaster.tsx";
import ErrorPage from "@/error-page.tsx";
import AssetRoute from "@/routes/asset/asset.tsx";
import { assetLoader } from "@/routes/asset/assetLoader.ts";
import HomeRoute from "@/routes/home.tsx";
import KpiRoute from "@/routes/kpi.tsx";
import LayoutsRoute from "@/routes/layouts.tsx";
import Root from "@/routes/root.tsx";
import StoryboardsRoute from "@/routes/storyboards.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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
    element: <AssetRoute />,
    loader: assetLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
