import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import { ChartType, Kpi } from "@/entities/Kpi";

interface DisplayChartProps {
  chartType: ChartType;
  kpi: Kpi;
  kpiChartIndex: number;
}

export default function DisplayChart({
  chartType,
  kpi,
  kpiChartIndex: i,
}: DisplayChartProps) {
  return (
    <div>
      {chartType === "BarChart" && (
        <BarChartViz
          chartData={kpi.chartData}
          chartConfig={kpi.visuals[i].chartConfig}
          dataKeys={kpi.visuals[i].dataKeys}
        />
      )}

      {chartType === "BarChartHorizontal" && (
        <BarChartHorizontalViz
          chartData={kpi.chartData}
          chartConfig={kpi.visuals[i].chartConfig}
          dataKeys={kpi.visuals[i].dataKeys}
        />
      )}

      {chartType === "LineChart" && (
        <LineChartViz
          chartData={kpi.chartData}
          chartConfig={kpi.visuals[i].chartConfig}
          dataKeys={kpi.visuals[i].dataKeys}
        />
      )}

      {chartType === "PieChart" && (
        <PieChartViz
          chartData={kpi.chartData}
          chartConfig={kpi.visuals[i].chartConfig}
          dataKeys={kpi.visuals[i].dataKeys}
        />
      )}
    </div>
  );
}
