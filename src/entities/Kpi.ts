import { ChartConfig } from "@/components/ui/chart";

export interface Kpi {
  name: string;
  descrioption: string;
  businessQuestions: string[];
  // metrics: MetricType;
  visuals: {
    type: "BarChart" | "BarChartHorizontal" | "LineChart" | "PieChart";
    chartConfig: ChartConfig;
    dataKeys: string[];
  }[];
  chartData: any; // eslint-disable-line
}
