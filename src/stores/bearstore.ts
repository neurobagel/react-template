import { create } from 'zustand';

type State = {
  bears: number;
};

type Action = {
  increasePopulation: (bears: State['bears']) => void;
  removeAllBears: () => void;
  updateBears: (bears: number) => void;
};

export const useBearStore = create<State & Action>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
