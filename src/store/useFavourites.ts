import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesState {
  favourites: string[];
  addToFavourites: (assetId: string) => void;
  removeFromFavourites: (assetId: string) => void;
}

const useFavourites = create<
  FavouritesState,
  [["zustand/persist", FavouritesState]]
>(
  persist(
    (set, get) => {
      return {
        favourites: [],

        addToFavourites: (assetId) =>
          set((state) => {
            const favourites = get().favourites;
            if (!favourites.includes(assetId)) {
              return {
                ...state,
                favourites: [...favourites, assetId],
              };
            }

            return state;
          }),

        removeFromFavourites: (assetId) =>
          set((state) => {
            const favourites = get().favourites;
            if (!favourites.includes(assetId)) return state;

            const index = favourites.findIndex((f) => f === assetId);
            return {
              ...state,
              favourites: [
                ...favourites.slice(0, index),
                ...favourites.slice(index + 1),
              ],
            };
          }),
      };
    },
    {
      name: "favourite-assets",
    }
  )
);

export default useFavourites;
