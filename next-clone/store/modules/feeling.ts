import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type feelingStore = {
  selectedItem: string;
};

const initialState = {
  selectedItem: "1",
} as feelingStore;

const feelingSlice = createSlice({
  name: "feeling",
  initialState,
  reducers: {
    setFeeling: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
    initFeelint: (state, action: PayloadAction<feelingStore>) => {
      return action.payload;
    },
  },
});

export const { setFeeling, initFeelint } = feelingSlice.actions;

export default feelingSlice.reducer;
