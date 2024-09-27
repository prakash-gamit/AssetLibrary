import { BarChartHorizontalViz } from "@/charts/BarCharHorizontalViz";
import { BarChartViz } from "@/charts/BarChartViz";
import { LineChartViz } from "@/charts/LineChartViz";
import { PieChartViz } from "@/charts/PieChartViz";
import SpeechBubble from "@/components/SpeechBubble";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisualChart } from "@/entities/Kpi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AssetLoader } from "./assetLoader";
import AssetModalFooter from "./AssetModalFooter";
import AssetModalHeader from "./AssetModalHeader";
import BusinessQuestions from "./BusinessQuestions";
import CopyAssetLink from "./CopyAssetLink";
import DisplayChart from "./DisplayChart";
import RequestAccess from "./RequestAccess";

export default function AssetRoute() {
  const {
    kpi,
    layout: _layout,
    storyboard,
    modalType,
  } = useLoaderData() as AssetLoader;
  const navigate = useNavigate();

  const assetId = kpi?.name ?? _layout?.name ?? storyboard?.name ?? "";
  const userHasAccess =
    kpi?.userHasAccess ?? _layout?.userHasAccess ?? storyboard?.userHasAccess;

  const visuals =
    kpi?.visuals ??
    _layout?.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);

  let layout = _layout;
  if (storyboard) {
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
          name={assetId}
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
            {visuals?.map((v, i) => {
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
          <BusinessQuestions questions={kpi.businessQuestions} />
        )}

        {!userHasAccess && (
          <div className="flex justify-center my-8">
            <RequestAccess assetId={assetId} />
          </div>
        )}

        <AssetModalFooter assetId={assetId} />
      </DialogContent>
    </Dialog>
  );
}
