import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccessRequested {
  assetIds: string[];
  add: (s: string) => void;
}

const useAccessRequested = create<
  AccessRequested,
  [["zustand/persist", AccessRequested]]
>(
  persist(
    (set, get) => {
      return {
        assetIds: [],
        add: (assetId) =>
          set((state) => {
            const assetIds = get().assetIds;
            if (!assetIds.includes(assetId)) {
              return { ...state, assetIds: [...assetIds, assetId] };
            }

            return state;
          }),
      };
    },
    {
      name: "access-requested-ids",
    }
  )
);

export default useAccessRequested;
