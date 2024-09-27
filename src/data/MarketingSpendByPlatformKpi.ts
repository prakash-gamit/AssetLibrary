import { ChartConfig } from "@/components/ui/chart";
import { Kpi } from "@/entities/Kpi";

export const MarketingSpendByPlatform: Kpi = {
  name: "MSP",
  descrioption: "Marketing spend on each platform",
  modalType: "KPI",
  userHasAccess: true,
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { platform: "facebook", spend: 2750, fill: "var(--color-facebook)" },
    { platform: "google", spend: 2000, fill: "var(--color-google)" },
    { platform: "twitter", spend: 1870, fill: "var(--color-twitter)" },
    { platform: "youtube", spend: 1730, fill: "var(--color-youtube)" },
    { platform: "instagram", spend: 900, fill: "var(--color-instagram)" },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        platform: {
          label: "platform",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig,
      dataKeys: ["platform", "spend"],
    },
    {
      type: "PieChart",
      chartConfig: {
        spend: {
          label: "spend",
        },
        facebook: {
          label: "Facebook",
          color: "hsl(var(--chart-1))",
        },
        google: {
          label: "Google",
          color: "hsl(var(--chart-2))",
        },
        twitter: {
          label: "Twitter",
          color: "hsl(var(--chart-3))",
        },
        youtube: {
          label: "Youtube",
          color: "hsl(var(--chart-4))",
        },
        instagram: {
          label: "Instagram",
          color: "hsl(var(--chart-5))",
        },
      },
      dataKeys: ["platform", "spend"],
    },
  ],
};
