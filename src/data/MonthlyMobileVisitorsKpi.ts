import { ChartConfig } from "@/components/ui/chart";
import { Kpi } from "@/entities/Kpi";

export interface MonthlyMobileVisitorsMetric {
  month: string;
  mobile: number;
}

export const MonthlyMobileVisitors: Kpi = {
  name: "MMV",
  description: "Monthly website visitors on mobile",
  modalType: "KPI",
  affiliates: ["Engineering", "Product"],
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { month: "January", mobile: 186 },
    { month: "February", mobile: 305 },
    { month: "March", mobile: 237 },
    { month: "April", mobile: 73 },
    { month: "May", mobile: 209 },
    { month: "June", mobile: 214 },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        mobile: {
          label: "Mobile",
          // color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["month", "mobile"],
    },
    {
      type: "BarChartHorizontal",
      chartConfig: {
        mobile: {
          label: "Mobile",
          // color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["month", "mobile"],
    },
    {
      type: "LineChart",
      chartConfig: {
        mobile: {
          label: "Mobile",
          // color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["month", "mobile"],
    },
  ],
};
