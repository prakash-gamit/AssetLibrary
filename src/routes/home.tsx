import { AssetCard } from "@/components/AssetCard";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { TabsContent } from "@/components/ui/tabs";
import { featuredList, kpisMap, layoutsMap } from "@/data/data";
import useFavourites from "@/store/useFavourites";
import { Link } from "react-router-dom";

export default function HomeRoute() {
  const { favourites } = useFavourites();

  return (
    <TabsContent value="/">
      <SectionTitle title="Featured" className="mt-8" />
      <SectionDescription
        description="Curated top picks from this week"
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-8">
        {featuredList.map((m) => {
          const assetRoute = `/asset/${m.name.toLocaleLowerCase()}`;
          return (
            <Link to={assetRoute} key={assetRoute} className="w-full">
              <AssetCard title={m.name} description={m.description} />
            </Link>
          );
        })}
      </div>

      <SectionTitle title="Favourites" className="mt-16" />
      <SectionDescription
        description="Your list of favourite assets"
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-8">
        {favourites.map((f) => {
          const assetRoute = `/asset/${f.toLocaleLowerCase()}`;
          const asset = kpisMap[f] ?? layoutsMap[f];
          return (
            <Link to={assetRoute} key={assetRoute} className="w-full">
              <AssetCard title={asset.name} description={asset.description} />
            </Link>
          );
        })}

        {favourites.length === 0 && (
          <div className="text-gray-400">You have no favourites</div>
        )}
      </div>
    </TabsContent>
  );
}
