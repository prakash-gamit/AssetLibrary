import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface AssetCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description: string;
}

export const AssetCard = ({ title, description }: AssetCardProps) => {
  return (
    <Card className="text-start w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
