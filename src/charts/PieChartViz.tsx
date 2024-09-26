"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartVizProps } from "./BarChartViz";

export function PieChartViz({
  chartData,
  chartConfig,
  dataKeys,
  chartTitle,
}: BarChartVizProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{chartTitle ?? "Pie Chart"}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey={dataKeys[1]} nameKey={dataKeys[0]} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
