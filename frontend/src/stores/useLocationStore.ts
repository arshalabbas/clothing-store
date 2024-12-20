import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Location {
  pincode: string;
  district: string;
  state: string;
}

interface LocationState {
  location: Location | null;
}

interface LocationAction {
  setLocation: (location: Location) => void;
  clearLocation: () => void;
}

type LocationStore = LocationState & LocationAction;

export const useLocationStore = create<LocationStore>()(
  persist(
    (set) => ({
      location: null,
      setLocation: (location) => set({ location }),
      clearLocation: () => set({ location: null }),
    }),
    {
      name: "_location",
    },
  ),
);
