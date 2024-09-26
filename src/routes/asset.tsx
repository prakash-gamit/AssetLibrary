import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { kpisList, layoutsList } from "@/data/data";
import { Kpi, VisualChart } from "@/entities/Kpi";
import { Layout } from "@/entities/Layout";
import { Bookmark, Grid3X3, Link2 } from "lucide-react";
import { Params, useLoaderData, useNavigate } from "react-router-dom";

type AssetModalProps = {
  type: "KPI" | "LAYOUT";
};

export async function assetLoader({ params }: { params: Params<"assetId"> }) {
  return {
    kpi: kpisList.filter(
      (k) => k.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0],
    layout: layoutsList.filter(
      (l) => l.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0],
  };
}

export default function AssetRoute({ type }: AssetModalProps) {
  const { kpi, layout } = useLoaderData() as { kpi: Kpi; layout: Layout };
  const navigate = useNavigate();

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
    <Dialog
      open
      onOpenChange={() => {
        navigate(-1);
      }}
    >
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
            {kpi?.descrioption ?? layout?.descrioption}
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
            <div key={v.kpiChartIndex}>
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
                return <BusinessQuestion q={q} i={i + 1} key={q} />;
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
}

const BusinessQuestion = ({ q, i }: { q: string; i: number }) => {
  return (
    <div key={q}>
      <div className="font-semibold text-lg">Question {i}</div>
      <div className="text-gray-400">{q}</div>
    </div>
  );
};
