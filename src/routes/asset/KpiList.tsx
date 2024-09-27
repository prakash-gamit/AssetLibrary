import AssetLink from "@/components/AssetLink";
import { Layout } from "@/entities/Layout";

interface KpiListProps {
  layout: Layout;
}

export default function KpiList({ layout }: KpiListProps) {
  let kpis = layout.visuals.map((v) => v.kpi);
  kpis = kpis.filter(
    (k, i, arr) => arr.findIndex((k2) => k2.name === k.name) === i
  );

  return (
    <div className="mt-8">
      <div className="text-3xl font-semibold mb-2">KPIs</div>
      <div className="grid grid-cols-2 gap-4">
        {kpis.map((kpi) => {
          return <AssetLink asset={kpi} key={kpi.name} />;
        })}
      </div>
    </div>
  );
}
