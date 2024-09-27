import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisualChart } from "@/entities/Kpi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Affiliates from "./Affiliates";
import { AssetLoader } from "./assetLoader";
import AssetModalFooter from "./AssetModalFooter";
import AssetModalHeader from "./AssetModalHeader";
import BusinessQuestions from "./BusinessQuestions";
import CopyAssetLink from "./CopyAssetLink";
import DisplayChart from "./DisplayChart";
import RequestAccess from "./RequestAccess";
import KpiList from "./KpiList";
import AssetLink from "@/components/AssetLink";
import ErrorPage from "@/error-page";

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
  const affiliates =
    kpi?.affiliates ?? _layout?.affiliates ?? storyboard?.affiliates;

  let layout = _layout;
  if (storyboard) {
    layout = storyboard.layout;
  }

  const visuals =
    kpi?.visuals ??
    layout?.visuals.reduce((acc: VisualChart[], v) => {
      return [...acc, v.kpi.visuals[v.kpiChartIndex]];
    }, []);

  if (!kpi && !layout && !storyboard) {
    return <ErrorPage />;
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
          description={description}
        />

        {userHasAccess && affiliates && <Affiliates affiliates={affiliates} />}

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

        {userHasAccess && storyboard && (
          <div className="mt-8">
            <div className="text-3xl font-semibold mb-2">Layout</div>
            <div className="grid grid-cols-2">
              <AssetLink asset={storyboard.layout} />
            </div>
          </div>
        )}

        {userHasAccess && layout && <KpiList layout={layout} />}

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
