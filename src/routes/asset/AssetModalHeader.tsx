import { Badge } from "@/components/ui/badge";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Grid3X3, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AssetModalHeaderProps {
  name: string;
  modalType: string;
  description: string;
}

export default function AssetModalHeader({
  name,
  modalType,
  description,
}: AssetModalHeaderProps) {
  return (
    <DialogHeader className="items-center">
      <div className="p-2 bg-gray-100 w-fit rounded-lg mb-2">
        <Grid3X3 />
      </div>
      <DialogTitle className="text-5xl flex items-center">
        <span>{name}</span>
        <Badge variant="secondary" className="ml-4 text-gray-400 text-base">
          {modalType}
        </Badge>
      </DialogTitle>
      <DialogDescription className="text-center text-lg text-gray-400">
        {description}
      </DialogDescription>
      <div className="text-center pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        eros non arcu scelerisque malesuada. Lorem ipsum dolor sit amet.
      </div>
      <div className="flex gap-2">
        {["#comms", "#coverage", "#stakeholders"].map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="py-1 px-3 font-semibold text-gray-500 border border-gray-300"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex justify-evenly w-full pt-8">
        {[
          {
            infoKey: "Used",
            value: "2485",
            showInfoIcon: true,
          },
          {
            infoKey: "Type",
            value: "Universal",
          },
          {
            infoKey: "Page No.",
            value: "6",
            showInfoIcon: true,
          },
          {
            infoKey: "Last Updated",
            value: "5 days ago",
          },
        ].map(({ infoKey, value, showInfoIcon }) => (
          <InfoBlock
            infoKey={infoKey}
            value={value}
            showInfoIcon={showInfoIcon}
          />
        ))}
      </div>
    </DialogHeader>
  );
}

interface InfoBlockProps {
  infoKey: string;
  value: string;
  showInfoIcon?: boolean;
}
function InfoBlock({ infoKey, value, showInfoIcon = false }: InfoBlockProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold">{value}</div>
      <div className="text-gray-400 flex text-sm items-center">
        {infoKey}{" "}
        {showInfoIcon && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-3 ml-1" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Random info tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
