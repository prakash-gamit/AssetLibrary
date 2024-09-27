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
      <DialogDescription className="text-center text-lg">
        {description}
      </DialogDescription>
    </DialogHeader>
  );
}
