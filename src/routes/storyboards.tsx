import AssetLink from "@/components/AssetLink";
import { TabsContent } from "@/components/ui/tabs";
import { storyboards } from "@/data/data";

export default function StoryboardsRoute() {
  return (
    <TabsContent value="/storyboards" className="grid grid-cols-2 gap-8">
      {storyboards.map((s) => {
        return <AssetLink asset={s} key={s.name} />;
      })}
    </TabsContent>
  );
}
