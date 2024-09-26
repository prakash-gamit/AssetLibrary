import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { PackagePlus } from "lucide-react";
import { useState } from "react";

export default function RequestAccess() {
  const [open, setOpen] = useState(false);

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
