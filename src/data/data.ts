import { Kpi } from "@/entities/Kpi";
import { Layout } from "@/entities/Layout";
import { MarketingSpendByMonth } from "./MarketingSpendByMonthKpi";
import { MarketingSpendByPlatform } from "./MarketingSpendByPlatformKpi";
import { MonthlyDesktopVisitors } from "./MonthlyDesktopVisitorsKpi";
import { MonthlyMobileVisitors } from "./MonthlyMobileVisitorsKpi";
import { MonthlyVisitorsBrowser } from "./MonthlyVisitorsBrowserKpi";
import { VisitorsByReferrer } from "./VisitorsByReferrerKpi";
import { VisitorsLayout } from "./VisitorsLayout";
import { PrakashStoryboard } from "./PrakashStoryboard";

export const kpisList = [
  MonthlyDesktopVisitors,
  MonthlyMobileVisitors,
  MonthlyVisitorsBrowser,
  VisitorsByReferrer,
  MarketingSpendByMonth,
  MarketingSpendByPlatform,
];

export const kpisMap: { [index: string]: Kpi } = kpisList.reduce(
  (acc, k) => ({ ...acc, [k.name]: k }),
  {}
);

export const layoutsList = [VisitorsLayout];

export const layoutsMap: { [index: string]: Layout } = layoutsList.reduce(
  (acc, l) => ({ ...acc, [l.name]: l }),
  {}
);

export const featuredList = [
  MonthlyVisitorsBrowser,
  VisitorsByReferrer,
  MarketingSpendByMonth,
];

export const storyboards = [PrakashStoryboard];
