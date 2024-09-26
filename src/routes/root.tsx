import CustomTabTrigger from "@/components/CustomTabTrigger";
import { Tabs, TabsList } from "@/components/ui/tabs";
import Search from "@/Search";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);

  return (
    <main className="max-w-3xl mx-auto py-8">
      <div className="flex justify-center text-5xl font-bold">Library</div>
      <div className="flex justify-center text-xl mb-12 mt-4">
        Browse for assets needed to report and present analysis.
      </div>

      <Search />

      <Tabs
        value={tab}
        onValueChange={setTab}
        defaultValue="/"
        className="w-full"
      >
        <TabsList className="grid grid-cols-4">
          <CustomTabTrigger to="/" value="/">
            Featured
          </CustomTabTrigger>
          <CustomTabTrigger to="/kpi" value="/kpi">
            KPI
          </CustomTabTrigger>
          <CustomTabTrigger to="/layouts" value="/layouts">
            Layouts
          </CustomTabTrigger>
          <CustomTabTrigger to="/storyboards" value="/storyboards">
            Storyboards
          </CustomTabTrigger>
        </TabsList>

        <Outlet />
      </Tabs>
    </main>
  );
}
