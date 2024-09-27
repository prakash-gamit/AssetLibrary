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
  const description =
    kpi?.description ?? _layout?.description ?? storyboard?.description ?? "";
  const userHasAccess =
    kpi?.userHasAccess ?? _layout?.userHasAccess ?? storyboard?.userHasAccess;

  let layout = _layout;
  if (storyboard) {
    layout = storyboard.layout;
  }

  const visuals =
    kpi?.visuals ??
    layout?.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);

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
          description={description}
        />

        {userHasAccess && (
          <div className="flex flex-col gap-4 mt-8">
            {modalType === "KPI" && (
              <div className="text-3xl font-semibold">Available Charts</div>
            )}

            {visuals?.map((v, i) => {
              return (
                <DisplayChart
                  key={i}
                  chartType={v.type}
                  chartData={kpi?.chartData ?? layout?.visuals[i].kpi.chartData}
                  visualChart={v}
                  modalType={modalType}
                  pptSlide={storyboard?.pptSlides[i]}
                  chartTitle={layout?.visuals[i].kpi.description}
                />
              );
            })}
          </div>
        )}

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
