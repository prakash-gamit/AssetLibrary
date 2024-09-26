import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentSearches {
  searches: string[];
  add: (s: string) => void;
}

const useRecentSearches = create<
  RecentSearches,
  [["zustand/persist", RecentSearches]]
>(
  persist(
    (set, get) => {
      return {
        searches: [],
        add: (s) =>
          set((state) => {
            const searches = get().searches;
            if (!searches.includes(s)) {
              return { ...state, searches: [...searches, s] };
            }

            return state;
          }),
      };
    },
    {
      name: "recent-searches",
    }
  )
);

export default useRecentSearches;
