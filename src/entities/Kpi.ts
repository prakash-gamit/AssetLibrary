import { ChartConfig } from "@/components/ui/chart";
import { BaseModal } from "./BaseModal";

export interface Kpi extends BaseModal {
  businessQuestions: string[];
  visuals: VisualChart[];
  chartData: any; // eslint-disable-line
}

export interface VisualChart {
  type: ChartType;
  chartConfig: ChartConfig;
  dataKeys: string[];
}

type ChartType = "BarChart" | "BarChartHorizontal" | "LineChart" | "PieChart";
