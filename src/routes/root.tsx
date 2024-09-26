import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Root() {
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
      </Tabs>
    </main>
  );
}
