import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import useFavourites from "@/store/useFavourites";
import { Bookmark } from "lucide-react";

interface AssetModalFooterProps {
  assetId: string;
}

export default function AssetModalFooter({ assetId }: AssetModalFooterProps) {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();
  const isFavourite = favourites.includes(assetId);

  return (
    <DialogFooter>
      <Button
        className="w-full font-semibold"
        onClick={() => {
          if (isFavourite) removeFromFavourites(assetId);
          else addToFavourites(assetId);
        }}
      >
        <Bookmark
          className="mr-2"
          fill={isFavourite ? "white" : "transparent"}
        />

        {isFavourite ? "Remove from favourites" : "Add to favourites"}
      </Button>
    </DialogFooter>
  );
}
