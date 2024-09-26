import { AssetCard } from "@/components/AssetCard";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { TabsContent } from "@/components/ui/tabs";

export default function HomeRoute() {
  return (
    <TabsContent value="featured">
      <SectionTitle title="Featured" className="mt-8" />
      <SectionDescription
        description="Curated top picks from this week"
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-8">
        {/* <AssetModal /> */}
        <AssetCard
          title="Daily visitors"
          description="Daily number of desktop and mobile users"
        />
        <AssetCard
          title="Advertisement spends"
          description="Monthly advertisement spend on different platforms"
        />
      </div>
    </TabsContent>
  );
}
