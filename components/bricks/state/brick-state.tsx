import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useBrickStore = create<{
  copyModeEnabled: boolean;
  enableCopyMode: () => void;
  disableCopyMode: () => void;
  toggleCopyMode: () => void;
}>()(
  devtools(
    persist(
      (set, get) => {
        return {
          copyModeEnabled: false,
          enableCopyMode: () => set({ copyModeEnabled: true }),
          disableCopyMode: () => set({ copyModeEnabled: false }),
          toggleCopyMode: () =>
            set((state) => ({ copyModeEnabled: !state.copyModeEnabled })),
        };
      },
      {
        name: 'bricks',
      },
    ),
  ),
);
