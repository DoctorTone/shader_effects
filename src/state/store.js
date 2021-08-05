import create from "zustand";

const useStore = create((set) => ({
  textureEnabled: true,
  setTextureEnabled: (status) => set({ textureEnabled: status }),
}));

export default useStore;
