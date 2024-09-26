import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import useAccessRequested from "@/store/useAccessRequested";
import { PackagePlus } from "lucide-react";
import { useState } from "react";

interface RequestAccessProps {
  assetId: string;
}

export default function RequestAccess({ assetId }: RequestAccessProps) {
  const [open, setOpen] = useState(false);
  const { assetIds, add } = useAccessRequested();

  if (assetIds.includes(assetId)) {
    return <div>You have already requested access.</div>;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex p-2 bg-slate-500 rounded-md text-white font-semibold">
        <PackagePlus className="mr-2" />
        Request Access
      </PopoverTrigger>
      <PopoverContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add(assetId);
            setOpen(false);
          }}
        >
          <Textarea placeholder="Specify reason to allow acces" />
          <Button className="mt-2" type="submit">
            Request
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
