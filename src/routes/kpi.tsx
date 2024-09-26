import { AssetCard } from "@/components/AssetCard";
import { TabsContent } from "@/components/ui/tabs";
import { kpisList } from "@/data/data";
import { Link } from "react-router-dom";

export default function KpiRoute() {
  return (
    <TabsContent value="kpi" className="grid grid-cols-2 gap-8">
      {kpisList.map((m) => {
        const assetRoute = `/asset/${m.name.toLocaleLowerCase()}`;
        return (
          <Link to={assetRoute} key={assetRoute} className="w-full">
            <AssetCard title={m.name} description={m.descrioption} />
          </Link>
        );
      })}
    </TabsContent>
  );
}
