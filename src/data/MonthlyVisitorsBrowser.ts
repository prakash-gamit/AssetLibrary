import { ChartConfig } from "@/components/ui/chart";
import { Kpi } from "@/entities/Kpi";

export const MonthlyVisitorsBrowser: Kpi = {
  name: "MVB",
  descrioption: "Monthly website visitors by browser",
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
          label: "Browser",
          // color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["browser", "visitors"],
    },
  ],
};
