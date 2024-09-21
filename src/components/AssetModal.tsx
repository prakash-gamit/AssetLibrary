import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AssetCard } from "./AssetCard";
import { Bookmark, Grid3X3, Link2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Kpi } from "@/entities/Kpi";
import { BarChartViz } from "@/charts/BarChartViz";
import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { LineChartViz } from "@/charts/LineChartViz";

export interface AssetModalProps {
  type: "KPI" | "LAYOUT";
  kpi: Kpi;
}

export const AssetModal = ({ type, kpi }: AssetModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <AssetCard title={kpi?.name} description={kpi?.descrioption} />
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-screen overflow-scroll">
        <Link2 className="absolute w-4 right-10 top-3 cursor-pointer -rotate-45" />
        <DialogHeader className="items-center">
          <div className="p-2 bg-gray-100 w-fit rounded-lg mb-2">
            <Grid3X3 />
          </div>
          <DialogTitle className="text-5xl flex items-center">
            <span>{kpi.name}</span>
            <Badge variant="secondary" className="ml-4 text-gray-400 text-base">
              {type}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {kpi.descrioption}
          </DialogDescription>
        </DialogHeader>
        <div>
          {kpi.visuals.map((v, i) => {
            return (
              <div key={v.type}>
                {v.type === "BarChart" && (
                  <BarChartViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                  />
                )}

                {v.type === "BarChartHorizontal" && (
                  <BarChartHorizontalViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                  />
                )}

                {v.type === "LineChart" && (
                  <LineChartViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-16">
          <div className="text-3xl font-semibold mb-4">Business Questions</div>
          <div className="grid grid-cols-2 gap-4">
            {kpi?.businessQuestions.map((q, i) => {
              return (
                <div key={q}>
                  <div className="font-semibold text-lg">Question {i + 1}</div>
                  <div className="text-gray-400">{q}</div>
                </div>
              );
            })}
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full font-semibold">
            <Bookmark className="mr-2" />
            Favourite
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
