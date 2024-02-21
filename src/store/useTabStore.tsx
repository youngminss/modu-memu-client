import { create } from "zustand"

export const useTabStore = create((set) => ({
  isVoteClicked: false,
  setPlaceClicked: () => set(() => ({ isVoteClicked: false })),
  setVoteClicked: () => set(() => ({ isVoteClicked: true })),
}))
