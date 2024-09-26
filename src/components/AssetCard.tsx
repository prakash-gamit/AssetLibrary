import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartPie } from "lucide-react";

export interface AssetCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description: string;
}

export const AssetCard = ({ title, description }: AssetCardProps) => {
  return (
    <Card className="text-start w-full h-full flex items-center">
      <div className="ml-4 bg-gray-100 p-4 rounded-lg">
        <ChartPie className="w-16 h-16 stroke-slate-300 stroke-1" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="text-sm text-gray-400">06/27/2024</div>
      </CardHeader>
    </Card>
  );
};
