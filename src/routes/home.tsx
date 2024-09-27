import AssetLink from "@/components/AssetLink";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { TabsContent } from "@/components/ui/tabs";
import { featuredList, kpisMap, layoutsMap, storyboardsMap } from "@/data/data";
import useFavourites from "@/store/useFavourites";

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
        {featuredList.map((asset) => {
          return <AssetLink asset={asset} key={asset.name} />;
        })}
      </div>

      <SectionTitle title="Favourites" className="mt-16" />
      <SectionDescription
        description="Your list of favourite assets"
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-8">
        {favourites.map((f) => {
          const asset = kpisMap[f] ?? layoutsMap[f] ?? storyboardsMap[f];
          return <AssetLink asset={asset} key={asset.name} />;
        })}

        {favourites.length === 0 && (
          <div className="text-gray-400">You have no favourites</div>
        )}
      </div>
    </TabsContent>
  );
}
