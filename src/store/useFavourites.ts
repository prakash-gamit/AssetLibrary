import { create } from "zustand";

interface FavouritesState {
  favourites: string[];
  addToFavourites: (assetId: string) => void;
  removeFromFavourites: (assetId: string) => void;
}

const useFavourites = create<FavouritesState>((set) => {
  return {
    favourites: [],

    addToFavourites: (assetId) =>
      set((state) => {
        if (!state.favourites.includes(assetId)) {
          return {
            ...state,
            favourites: [...state.favourites, assetId],
          };
        }

        return state;
      }),

    removeFromFavourites: (assetId) =>
      set((state) => {
        if (!state.favourites.includes(assetId)) return state;

        const index = state.favourites.findIndex((f) => f === assetId);
        return {
          ...state,
          favourites: [
            ...state.favourites.slice(0, index),
            ...state.favourites.slice(index + 1),
          ],
        };
      }),
  };
});

export default useFavourites;
