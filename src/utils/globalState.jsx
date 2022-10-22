import create from "zustand";

const globalState = create((set) => ({

  data: {},
  setData: (data) => set((state) => ({
    ...state,
    data,
  })),

  siteTitle: null,
  setSiteTitle: (siteTitle) => set((state) => ({
    ...state,
    siteTitle,
  })),

  siteContent: null,
  setSiteContent: (siteContent) => set((state) => ({
    ...state,
    siteContent,
  })),

  siteImage: null,
  setSiteImage: (siteImage) => set((state) => ({
    ...state,
    siteImage,
  })),

}));

export default globalState;
