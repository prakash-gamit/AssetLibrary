import { ChartConfig } from "@/components/ui/chart";
import { Kpi } from "@/entities/Kpi";

export const MonthlyVisitorsBrowser: Kpi = {
  name: "MVB",
  description: "Monthly website visitors by browser",
  modalType: "KPI",
  userHasAccess: true,
  affiliates: ["Engineering", "Product"],
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        browser: {
          label: "browser",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["browser", "visitors"],
    },
    {
      type: "PieChart",
      chartConfig: {
        visitors: {
          label: "Visitors",
        },
        chrome: {
          label: "Chrome",
          color: "hsl(var(--chart-1))",
        },
        safari: {
          label: "Safari",
          color: "hsl(var(--chart-2))",
        },
        firefox: {
          label: "Firefox",
          color: "hsl(var(--chart-3))",
        },
        edge: {
          label: "Edge",
          color: "hsl(var(--chart-4))",
        },
        other: {
          label: "Other",
          color: "hsl(var(--chart-5))",
        },
      },
      dataKeys: ["browser", "visitors"],
    },
  ],
};
