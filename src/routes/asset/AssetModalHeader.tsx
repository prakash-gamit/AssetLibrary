import { Badge } from "@/components/ui/badge";
import { DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Grid3X3 } from "lucide-react";

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
    </DialogHeader>
  );
}
