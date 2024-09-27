import { Layout } from "@/entities/Layout";
import { MonthlyDesktopVisitors } from "./MonthlyDesktopVisitorsKpi";
import { MonthlyMobileVisitors } from "./MonthlyMobileVisitorsKpi";
import { MonthlyVisitorsBrowser } from "./MonthlyVisitorsBrowserKpi";

export const VisitorsLayout: Layout = {
  name: "VL",
  description: "Website visitors by desktop/mobile/browser",
  modalType: "LAYOUT",
  userHasAccess: true,
  affiliates: ["Engineering", "Product", "Marketing"],
  visuals: [
    {
      kpi: MonthlyDesktopVisitors,
      kpiChartIndex: 0,
    },
    {
      kpi: MonthlyDesktopVisitors,
      kpiChartIndex: 2,
    },
    {
      kpi: MonthlyMobileVisitors,
      kpiChartIndex: 1,
    },
    {
      kpi: MonthlyVisitorsBrowser,
      kpiChartIndex: 1,
    },
  ],
};
