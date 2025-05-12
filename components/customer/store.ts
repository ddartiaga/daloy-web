import { create } from "zustand";
import { Feature } from "geojson";

type CustomerStoreType = {
  feature: Feature | null;
  setFeature: (feature: Feature | null) => void;
};

export const useCustomerStore = create<CustomerStoreType>((set) => ({
  feature: null,
  setFeature: (feature) => set({ feature: feature }),
}));
