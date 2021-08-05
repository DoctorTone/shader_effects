import create from "zustand";

const useStore = create((set) => ({
  textureEnabled: true,
  setTextureEnabled: (status) => set({ textureEnabled: status }),
  bounceEnabled: true,
  setBounceEnabled: (status) => set({ bounceEnabled: status }),
  specularEnabled: true,
}));

export default useStore;
