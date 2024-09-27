import { kpisList, layoutsList, storyboards } from "@/data/data";
import { ModalType } from "@/entities/BaseModal";
import { Kpi } from "@/entities/Kpi";
import { Layout } from "@/entities/Layout";
import { Storyboard } from "@/entities/Storyboard";
import { Params } from "react-router-dom";

export type AssetLoader = {
  kpi?: Kpi;
  layout?: Layout;
  storyboard?: Storyboard;
  modalType: ModalType;
};

export async function assetLoader({
  params,
}: {
  params: Params<"assetId">;
}): Promise<AssetLoader> {
  let modalType: ModalType = "KPI";
  const kpi = kpisList.filter(
    (k) => k.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
  )?.[0];

  let layout: Layout | undefined = undefined;
  if (!kpi) {
    layout = layoutsList.filter(
      (l) => l.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0];

    if (layout) modalType = "LAYOUT";
  }

  let storyboard: Storyboard | undefined = undefined;
  if (!kpi && !layout) {
    storyboard = storyboards.filter(
      (s) => s.name.toLocaleLowerCase() === params?.assetId?.toLocaleLowerCase()
    )?.[0];

    if (storyboard) modalType = "STORYBOARD";
  }

  return {
    kpi,
    layout,
    storyboard,
    modalType,
  };
}
