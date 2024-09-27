import AssetLink from "@/components/AssetLink";
import { TabsContent } from "@/components/ui/tabs";
import { layoutsList } from "@/data/data";

export default function LayoutsRoute() {
  return (
    <TabsContent value="/layouts" className="grid grid-cols-2 gap-8">
      {layoutsList.map((l) => {
        return <AssetLink asset={l} key={l.name} />;
      })}
    </TabsContent>
  );
}
