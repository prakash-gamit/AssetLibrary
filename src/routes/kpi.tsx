import AssetLink from "@/components/AssetLink";
import { TabsContent } from "@/components/ui/tabs";
import { kpisList } from "@/data/data";

export default function KpiRoute() {
  return (
    <TabsContent value="/kpi" className="grid grid-cols-2 gap-8">
      {kpisList.map((k) => {
        return <AssetLink asset={k} key={k.name} />;
      })}
    </TabsContent>
  );
}
