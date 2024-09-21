import { Kpi } from "@/entities/Kpi";

export interface MonthlyDesktopVisitorsMetric {
  month: string;
  desktop: number;
}

export const MonthlyDesktopVisitors: Kpi = {
  name: "MDV",
  descrioption: "Monthly website visitors on desktop",
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        desktop: {
          label: "Desktop",
          // color: "hsl(var(--chart-1))",
        },
      },
      dataKeys: ["month", "desktop"],
    },
    {
      type: "BarChartHorizontal",
      chartConfig: {
        desktop: {
          label: "Desktop",
          // color: "hsl(var(--chart-1))",
        },
      },
      dataKeys: ["month", "desktop"],
    },
    {
      type: "LineChart",
      chartConfig: {
        desktop: {
          label: "Desktop",
          // color: "hsl(var(--chart-1))",
        },
      },
      dataKeys: ["month", "desktop"],
    },
  ],
};
