import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import SpeechBubble from "@/components/SpeechBubble";
import { ModalType } from "@/entities/BaseModal";
import { ChartType, VisualChart } from "@/entities/Kpi";

interface DisplayChartProps {
  chartType: ChartType;
  chartData: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  visualChart: VisualChart;
  modalType: ModalType;
  pptSlide?: string;
}

export default function DisplayChart({
  chartType,
  chartData,
  visualChart,
  modalType,
  pptSlide,
}: DisplayChartProps) {
  return (
    <div className="relative">
      {chartType === "BarChart" && (
        <BarChartViz
          chartData={chartData}
          chartConfig={visualChart.chartConfig}
          dataKeys={visualChart.dataKeys}
        />
      )}

      {chartType === "BarChartHorizontal" && (
        <BarChartHorizontalViz
          chartData={chartData}
          chartConfig={visualChart.chartConfig}
          dataKeys={visualChart.dataKeys}
        />
      )}

      {chartType === "LineChart" && (
        <LineChartViz
          chartData={chartData}
          chartConfig={visualChart.chartConfig}
          dataKeys={visualChart.dataKeys}
        />
      )}

      {chartType === "PieChart" && (
        <PieChartViz
          chartData={chartData}
          chartConfig={visualChart.chartConfig}
          dataKeys={visualChart.dataKeys}
        />
      )}

      {modalType === "STORYBOARD" && pptSlide !== undefined && (
        <div className="absolute top-0 right-0">
          <SpeechBubble>{pptSlide}</SpeechBubble>
        </div>
      )}
    </div>
  );
}
