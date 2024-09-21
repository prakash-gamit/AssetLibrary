import { Layout } from "@/entities/Layout";
import { MonthlyDesktopVisitors } from "./MonthlyDesktopVisitorsKpi";

export const VisitorsLayout: Layout = {
  name: "VL",
  descrioption: "Website visitors by desktop/mobile/browser",
  visuals: [
    {
      kpi: MonthlyDesktopVisitors,
      kpiChartIndex: 0,
    },
    {
      kpi: MonthlyDesktopVisitors,
      kpiChartIndex: 2,
    },
  ],
};
