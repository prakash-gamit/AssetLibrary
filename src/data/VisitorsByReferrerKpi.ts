import { Kpi } from "@/entities/Kpi";

export interface VisitorsByReferrer {
  referrer: string;
  visitors: number;
}

export const VisitorsByReferrer: Kpi = {
  name: "VBR",
  descrioption: "Website visitors based on referrer",
  modalType: "KPI",
  businessQuestions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros non arcu scelerisque malesuada.",
  ],
  chartData: [
    { referrer: "facebook", visitors: 186 },
    { referrer: "twitter", visitors: 305 },
    { referrer: "youtube", visitors: 237 },
    { referrer: "google", visitors: 73 },
    { referrer: "instagram", visitors: 209 },
    { referrer: "tiktok", visitors: 214 },
  ],
  visuals: [
    {
      type: "BarChart",
      chartConfig: {
        referrer: {
          label: "referrer",
          // color: "hsl(var(--chart-1))",
        },
      },
      dataKeys: ["referrer", "visitors"],
    },
  ],
};
