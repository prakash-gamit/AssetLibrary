import { BaseModal } from "./BaseModal";
import { Kpi } from "./Kpi";

export interface Layout extends BaseModal {
  visuals: {
    kpi: Kpi;
    kpiChartIndex: number;
  }[];
}
