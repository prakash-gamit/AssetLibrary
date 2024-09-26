import { create } from "zustand";

interface RecentSearches {
  searches: Set<string>;
  add: (s: string) => void;
}

const useRecentSearches = create<RecentSearches>((set) => {
  return {
    searches: new Set(),
    add: (s) =>
      set((state) => {
        const newSearches = new Set(state.searches);
        newSearches.add(s);
        return {
          ...state,
          // searches: newSearches.slice(newSearches.length - 5),
          searches: newSearches,
        };
      }),
  };
});

export default useRecentSearches;
