import { ChartConfig } from "@/components/ui/chart";
import { Kpi } from "@/entities/Kpi";

export const MarketingSpendByMonth: Kpi = {
  name: "MSM",
  description: "Marketing spend by month",
  modalType: "KPI",
  userHasAccess: true,
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { month: "january", spend: 2750 },
    { month: "february", spend: 2000 },
    { month: "march", spend: 1870 },
    { month: "april", spend: 1730 },
    { month: "may", spend: 900 },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        month: {
          label: "month",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["month", "spend"],
    },
    {
      type: "LineChart",
      chartConfig: {
        month: {
          label: "month",
          // color: "hsl(var(--chart-1))",
        },
      },
      dataKeys: ["month", "spend"],
    },
  ],
};
