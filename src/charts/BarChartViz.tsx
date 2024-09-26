"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface BarChartVizProps {
  chartData: any; // eslint-disable-line
  chartConfig: ChartConfig;
  dataKeys: string[];
  chartTitle?: string;
}

export function BarChartViz({
  chartData,
  chartConfig,
  dataKeys,
  chartTitle,
}: BarChartVizProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle ?? "Bar Chart"}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKeys[0]}
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
