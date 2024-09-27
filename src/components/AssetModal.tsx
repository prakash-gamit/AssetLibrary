import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Kpi, VisualChart } from "@/entities/Kpi";
import { Layout } from "@/entities/Layout";
import { Bookmark, Grid3X3, Link2 } from "lucide-react";
import { AssetCard } from "./AssetCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type AssetModalProps = {
  type: "KPI" | "LAYOUT";
  kpi?: Kpi;
  layout?: Layout;
};

export const AssetModal = ({ type, kpi, layout }: AssetModalProps) => {
  let questions: string[] = [];
  let visuals: VisualChart[] = [];
  if (kpi) {
    questions = kpi.businessQuestions;
    visuals = kpi.visuals;
  }

  if (layout) {
    // questions = layout.visuals.reduce((acc: string[], l) => {
    //   return [...acc, ...l.kpi.businessQuestions];
    // }, []);
    visuals = layout.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <AssetCard
          title={kpi?.name ?? layout?.name ?? ""}
          description={kpi?.description ?? layout?.description ?? ""}
        />
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-screen overflow-scroll">
        <Link2 className="absolute w-4 right-10 top-3 cursor-pointer -rotate-45" />
        <DialogHeader className="items-center">
          <div className="p-2 bg-gray-100 w-fit rounded-lg mb-2">
            <Grid3X3 />
          </div>
          <DialogTitle className="text-5xl flex items-center">
            <span>{kpi?.name ?? layout?.name}</span>
            <Badge variant="secondary" className="ml-4 text-gray-400 text-base">
              {type}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {kpi?.description ?? layout?.description}
          </DialogDescription>
        </DialogHeader>
        {kpi && type === "KPI" && (
          <div className="flex flex-col gap-4 mt-8">
            <div className="text-3xl font-semibold">Available Charts</div>
            {visuals.map((v, i) => {
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

                  {v.type === "PieChart" && (
                    <PieChartViz
                      chartData={kpi.chartData}
                      chartConfig={kpi.visuals[i].chartConfig}
                      dataKeys={kpi.visuals[i].dataKeys}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {layout?.visuals.map((v) => {
          const i = v.kpiChartIndex;
          const type = v.kpi.visuals[i].type;
          const kpi = v.kpi;

          return (
            <div>
              {type === "BarChart" && (
                <BarChartViz
                  chartData={kpi.chartData}
                  chartConfig={kpi.visuals[i].chartConfig}
                  dataKeys={kpi.visuals[i].dataKeys}
                />
              )}

              {type === "BarChartHorizontal" && (
                <BarChartHorizontalViz
                  chartData={kpi.chartData}
                  chartConfig={kpi.visuals[i].chartConfig}
                  dataKeys={kpi.visuals[i].dataKeys}
                />
              )}

              {type === "LineChart" && (
                <LineChartViz
                  chartData={kpi.chartData}
                  chartConfig={kpi.visuals[i].chartConfig}
                  dataKeys={kpi.visuals[i].dataKeys}
                />
              )}

              {type === "PieChart" && (
                <PieChartViz
                  chartData={kpi.chartData}
                  chartConfig={kpi.visuals[i].chartConfig}
                  dataKeys={kpi.visuals[i].dataKeys}
                />
              )}
            </div>
          );
        })}

        {kpi && (
          <div className="mt-16">
            <div className="text-3xl font-semibold mb-4">
              Business Questions
            </div>
            <div className="grid grid-cols-2 gap-4">
              {questions.map((q, i) => {
                return <BusinessQuestion q={q} i={i + 1} />;
              })}
            </div>
          </div>
        )}
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

const BusinessQuestion = ({ q, i }: { q: string; i: number }) => {
  return (
    <div key={q}>
      <div className="font-semibold text-lg">Question {i}</div>
      <div className="text-gray-400">{q}</div>
    </div>
  );
};
