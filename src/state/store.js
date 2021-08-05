import create from "zustand";

const useStore = create((set) => ({
  textureEnabled: true,
  setTextureEnabled: (status) => set({ textureEnabled: status }),
  bounceEnabled: true,
  setBounceEnabled: (status) => set({ bounceEnabled: status }),
  specularEnabled: true,
  setSpecularEnabled: (status) => set({ specularEnabled: status }),
  currentShader: "Cube",
  setCurrentShader: (shader) => set({ currentShader: shader }),
}));

export default useStore;
