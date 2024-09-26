import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentSearches {
  searches: Set<string>;
  add: (s: string) => void;
}

const useRecentSearches = create<
  RecentSearches,
  [["zustand/persist", RecentSearches]]
>(
  persist(
    (set, get) => {
      return {
        searches: new Set(),
        add: (s) =>
          set((state) => {
            const newSearches = new Set(get().searches);
            newSearches.add(s);
            return {
              ...state,
              // searches: newSearches.slice(newSearches.length - 5),
              searches: newSearches,
            };
          }),
      };
    },
    {
      name: "recent-searches",
    }
  )
);

export default useRecentSearches;
