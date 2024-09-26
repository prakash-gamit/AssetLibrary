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
import { kpisList, layoutsList, storyboards } from "@/data/data";
import { ModalType } from "@/entities/BaseModal";
import { Kpi, VisualChart } from "@/entities/Kpi";
import { Layout } from "@/entities/Layout";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import useFavourites from "@/store/useFavourites";
import { Bookmark, Grid3X3, Link2 } from "lucide-react";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import RequestAccess from "./RequestAccess";
import { Storyboard } from "@/entities/Storyboard";
import SpeechBubble from "@/components/SpeechBubble";

export async function assetLoader({ params }: { params: Params<"assetId"> }) {
  return {
    kpi: kpisList.filter(
      (k) => k.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0],
    layout: layoutsList.filter(
      (l) => l.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0],
    storyboard: storyboards.filter(
      (s) => s.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0],
  };
}

export default function AssetRoute() {
  const {
    kpi,
    layout: _layout,
    storyboard,
  } = useLoaderData() as {
    kpi: Kpi;
    layout: Layout;
    storyboard: Storyboard;
  };
  const navigate = useNavigate();
  const { toast } = useToast();
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  let id: string;
  let questions: string[] = [];
  let visuals: VisualChart[] = [];
  let isFavourite = false;
  let modalType: ModalType = "KPI";
  let userHasAccess: boolean | undefined = false;

  if (kpi) {
    id = kpi.name;
    questions = kpi.businessQuestions;
    visuals = kpi.visuals;
    isFavourite = favourites.includes(kpi.name);
    modalType = "KPI";
    userHasAccess = kpi.userHasAccess;
  }

  let layout = _layout;
  if (layout) {
    id = layout.name;
    modalType = "LAYOUT";
    visuals = layout.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);
    isFavourite = favourites.includes(layout.name);
    userHasAccess = layout.userHasAccess;
  }

  if (storyboard) {
    id = storyboard.name;
    modalType = "STORYBOARD";
    isFavourite = favourites.includes(storyboard.name);
    userHasAccess = storyboard.userHasAccess;
    layout = storyboard.layout;
  }

  console.log(layout);

  return (
    <Dialog
      open
      onOpenChange={() => {
        navigate(-1);
      }}
    >
      <DialogContent className="max-w-3xl max-h-screen overflow-scroll">
        <Link2
          className="absolute w-4 right-10 top-3 cursor-pointer -rotate-45"
          onClick={() => {
            window.navigator.clipboard.writeText(window.location.href);
            toast({
              className: cn(
                "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
              ),
              description: "Asset link copied to clipboard.",
            });
          }}
        />
        <DialogHeader className="items-center">
          <div className="p-2 bg-gray-100 w-fit rounded-lg mb-2">
            <Grid3X3 />
          </div>
          <DialogTitle className="text-5xl flex items-center">
            <span>{kpi?.name ?? layout?.name}</span>
            <Badge variant="secondary" className="ml-4 text-gray-400 text-base">
              {modalType}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {kpi?.descrioption ?? layout?.descrioption}
          </DialogDescription>
        </DialogHeader>
        {kpi && userHasAccess && modalType === "KPI" && (
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

        {userHasAccess &&
          layout?.visuals.map((v, index) => {
            const i = v.kpiChartIndex;
            const type = v.kpi.visuals[i].type;
            const kpi = v.kpi;

            return (
              <div key={v.kpiChartIndex} className="relative">
                {type === "BarChart" && (
                  <BarChartViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                    chartTitle={kpi.descrioption}
                  />
                )}

                {type === "BarChartHorizontal" && (
                  <BarChartHorizontalViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                    chartTitle={kpi.descrioption}
                  />
                )}

                {type === "LineChart" && (
                  <LineChartViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                    chartTitle={kpi.descrioption}
                  />
                )}

                {type === "PieChart" && (
                  <PieChartViz
                    chartData={kpi.chartData}
                    chartConfig={kpi.visuals[i].chartConfig}
                    dataKeys={kpi.visuals[i].dataKeys}
                    chartTitle={kpi.descrioption}
                  />
                )}

                {modalType === "STORYBOARD" &&
                  storyboard.stories[index] !== undefined && (
                    <div className="absolute top-0 right-0">
                      <SpeechBubble>{storyboard.stories[index]}</SpeechBubble>
                    </div>
                  )}
              </div>
            );
          })}

        {userHasAccess && kpi && (
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

        {!userHasAccess && (
          <div className="flex justify-center my-8">
            <RequestAccess />
          </div>
        )}

        <DialogFooter>
          <Button
            className="w-full font-semibold"
            onClick={() => {
              if (isFavourite) removeFromFavourites(id);
              else addToFavourites(id);
            }}
          >
            <Bookmark
              className="mr-2"
              fill={isFavourite ? "white" : "transparent"}
            />

            {isFavourite ? "Remove from favourites" : "Add to favourites"}
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
