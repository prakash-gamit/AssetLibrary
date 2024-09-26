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
import { useNavigate } from "react-router-dom";
import { kpisList, layoutsList } from "./data/data";
import useRecentSearches from "./store/useRecentSearches";

export default function Search() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { searches, add } = useRecentSearches();
  const [searchText, setSearchText] = useState("");
  const sanitizedSearchText = searchText.toLocaleLowerCase();

  return (
    <div className="mb-4">
      <Command>
        <CommandInput
          placeholder="Type to search assets..."
          onFocus={() => setOpen(true)}
        />
      </Command>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type to search assets..."
          value={searchText}
          onChangeCapture={(e) => {
            setSearchText(e.currentTarget.value);
          }}
        />
        <CommandList>
          {searchText && <CommandEmpty>No results found.</CommandEmpty>}

          {searches.size > 0 && (
            <CommandGroup heading="Recent searches">
              {[...searches].map((s) => {
                return (
                  <CommandItem key={s} onSelect={() => setSearchText(s)}>
                    {s}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          <CommandSeparator />

          {searchText && (
            <CommandGroup heading="Search results">
              {[...kpisList, ...layoutsList]
                .filter((asset) => {
                  return (
                    asset.name
                      .toLocaleLowerCase()
                      .includes(sanitizedSearchText) ||
                    asset.descrioption
                      .toLocaleLowerCase()
                      .includes(sanitizedSearchText)
                  );
                })
                .map((asset) => {
                  return (
                    <CommandItem
                      key={asset.name}
                      onSelect={() => {
                        add(searchText);
                        const assetRoute = `/asset/${asset.name}`;
                        navigate(assetRoute);
                      }}
                    >
                      {`${asset.name}: ${asset.descrioption}: ${asset.modalType}`}
                    </CommandItem>
                  );
                })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
