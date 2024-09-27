import { AssetCard } from "@/components/AssetCard";
import { TabsContent } from "@/components/ui/tabs";
import { storyboards } from "@/data/data";
import { Link } from "react-router-dom";

export default function StoryboardsRoute() {
  return (
    <TabsContent value="/storyboards" className="grid grid-cols-2 gap-8">
      {storyboards.map((l) => {
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
