import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import SpeechBubble from "@/components/SpeechBubble";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { VisualChart } from "@/entities/Kpi";
import useFavourites from "@/store/useFavourites";
import { Bookmark } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AssetLoader } from "./assetLoader";
import AssetModalHeader from "./AssetModalHeader";
import CopyAssetLink from "./CopyAssetLink";
import RequestAccess from "./RequestAccess";
import DisplayChart from "./DisplayChart";

export default function AssetRoute() {
  const {
    kpi,
    layout: _layout,
    storyboard,
    modalType,
  } = useLoaderData() as AssetLoader;
  const navigate = useNavigate();
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  let id: string = "";
  let questions: string[] = [];
  let visuals: VisualChart[] = [];
  let isFavourite = false;
  let userHasAccess: boolean | undefined = false;

  if (kpi) {
    id = kpi.name;
    questions = kpi.businessQuestions;
    visuals = kpi.visuals;
    isFavourite = favourites.includes(kpi.name);
    userHasAccess = kpi.userHasAccess;
  }

  let layout = _layout;
  if (layout) {
    id = layout.name;
    visuals = layout.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);
    isFavourite = favourites.includes(layout.name);
    userHasAccess = layout.userHasAccess;
  }

  if (storyboard) {
    id = storyboard.name;
    isFavourite = favourites.includes(storyboard.name);
    userHasAccess = storyboard.userHasAccess;
    layout = storyboard.layout;
  }

  return (
    <Dialog
      open
      onOpenChange={() => {
        navigate(-1);
      }}
    >
      <DialogContent className="max-w-3xl max-h-screen overflow-scroll">
        <CopyAssetLink />

        <AssetModalHeader
          name={id}
          modalType={modalType}
          description={
            kpi?.descrioption ??
            storyboard?.descrioption ??
            layout?.descrioption ??
            ""
          }
        />

        {kpi && userHasAccess && modalType === "KPI" && (
          <div className="flex flex-col gap-4 mt-8">
            <div className="text-3xl font-semibold">Available Charts</div>
            {visuals.map((v, i) => {
              return (
                <DisplayChart
                  key={i}
                  chartType={v.type}
                  kpi={kpi}
                  kpiChartIndex={i}
                />
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
                  storyboard &&
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
            <RequestAccess assetId={id} />
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
