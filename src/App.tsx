import { AssetCard } from "@/components/AssetCard";
import { AssetModal } from "@/components/AssetModal";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonthlyDesktopVisitors } from "@/data/MonthlyDesktopVisitorsKpi";
import { MonthlyMobileVisitors } from "@/data/MonthlyMobileVisitorsKpi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MonthlyVisitorsBrowser } from "./data/MonthlyVisitorsBrowserKpi";
import { VisitorsLayout } from "./data/VisitorsLayout";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const onOpenChange = () => {
    navigate("/");
  };

  return (
    <main className="max-w-3xl mx-auto py-8">
      <div className="flex justify-center text-5xl font-bold">Library</div>
      <div className="flex justify-center text-xl mb-12 mt-4">
        Browse for assets needed to report and present analysis.
      </div>
      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="kpi">KPI</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
          <TabsTrigger value="storyboards">Storyboards</TabsTrigger>
        </TabsList>
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
        <TabsContent value="kpi" className="grid grid-cols-2 gap-8">
          {[
            MonthlyDesktopVisitors,
            MonthlyMobileVisitors,
            MonthlyVisitorsBrowser,
          ].map((m) => {
            const assetRoute = `/${m.name.toLocaleLowerCase()}`;
            return (
              <Link to={assetRoute} key={assetRoute} className="w-full">
                <AssetModal
                  type="KPI"
                  kpi={m}
                  open={location.pathname.toLocaleLowerCase() === assetRoute}
                  onOpenChange={onOpenChange}
                />
              </Link>
            );
          })}
        </TabsContent>
        <TabsContent value="layouts" className="grid grid-cols-2 gap-8">
          {[VisitorsLayout].map((l) => {
            const assetRoute = `/${l.name.toLocaleLowerCase()}`;
            return (
              <Link to={assetRoute} key={assetRoute}>
                <AssetModal
                  type="LAYOUT"
                  layout={l}
                  open={location.pathname.toLocaleLowerCase() === assetRoute}
                  onOpenChange={onOpenChange}
                />
              </Link>
            );
          })}
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default App;
