"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartVizProps } from "./BarChartViz";

export function BarChartHorizontalViz({
  chartData,
  chartConfig,
  dataKeys,
  chartTitle,
}: BarChartVizProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle ?? "Bar Chart - Horizontal"}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey={dataKeys[1]} hide />
            <YAxis
              dataKey={dataKeys[0]}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKeys[1]} fill="hsl(var(--chart-1))" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
