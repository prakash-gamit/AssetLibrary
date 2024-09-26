import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <Command>
        <CommandInput
          placeholder="Type to search assets..."
          onFocus={() => setOpen(true)}
        />
      </Command>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search assets..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recent searches">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </div>
  );
}
