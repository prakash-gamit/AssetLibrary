import { MarketingSpendByMonth } from "./MarketingSpendByMonth";
import { MarketingSpendByPlatform } from "./MarketingSpendByPlatform";
import { MonthlyDesktopVisitors } from "./MonthlyDesktopVisitorsKpi";
import { MonthlyMobileVisitors } from "./MonthlyMobileVisitorsKpi";
import { MonthlyVisitorsBrowser } from "./MonthlyVisitorsBrowserKpi";
import { VisitorsByReferrer } from "./VisitorsByReferrer";
import { VisitorsLayout } from "./VisitorsLayout";

export const kpisList = [
  MonthlyDesktopVisitors,
  MonthlyMobileVisitors,
  MonthlyVisitorsBrowser,
  VisitorsByReferrer,
  MarketingSpendByMonth,
  MarketingSpendByPlatform,
];

export const layoutsList = [VisitorsLayout];
