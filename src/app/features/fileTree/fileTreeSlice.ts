import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";

interface IClickedFile {
  activeTabID: string;
  name: string;
  content: string | undefined;
}

export interface fileTreeState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabToRemoveID: string | null;
}

const initialState: fileTreeState = {
  openedFiles: [],
  clickedFile: {
    activeTabID: "",
    name: "",
    content: "",
  },
  tabToRemoveID: "",
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    addOpenedFile(state, action: PayloadAction<IFile>) {
      state.openedFiles = [...state.openedFiles, action.payload];
    },

    closeOpenedFile(state, action: PayloadAction<IFile[]>) {
      state.openedFiles = action.payload;
    },

    setClickedFile(state, action: PayloadAction<IClickedFile>) {
      state.clickedFile = action.payload;
    },
    setTabToRemoveId(state, action: PayloadAction<string | null>) {
      state.tabToRemoveID = action.payload;
    },
    closeAllFiles(state) {
      state.openedFiles = [];
    },
  },
});

export const {
  addOpenedFile,
  closeOpenedFile,
  setClickedFile,
  closeAllFiles,
  setTabToRemoveId,
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
