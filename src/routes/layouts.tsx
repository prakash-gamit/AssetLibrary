import { AssetCard } from "@/components/AssetCard";
import { TabsContent } from "@/components/ui/tabs";
import { layoutsList } from "@/data/data";
import { Link } from "react-router-dom";

export default function LayoutsRoute() {
  return (
    <TabsContent value="/layouts" className="grid grid-cols-2 gap-8">
      {layoutsList.map((l) => {
        const assetRoute = `/asset/${l.name.toLocaleLowerCase()}`;
        return (
          <Link to={assetRoute} key={assetRoute}>
            <AssetCard title={l.name} description={l.description} />
          </Link>
        );
      })}
    </TabsContent>
  );
}
