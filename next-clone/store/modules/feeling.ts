import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type feelingStore = {
  selectedItem: number;
};

const initialState = {
  selectedItem: 0,
} as feelingStore;

const feelingSlice = createSlice({
  name: "feeling",
  initialState,
  reducers: {
    setFeeling: (state, action: PayloadAction<number>) => {
      state.selectedItem = action.payload;
    },
    initFeelint: (state, action: PayloadAction<feelingStore>) => {
      return action.payload;
    },
  },
});

export const { setFeeling, initFeelint } = feelingSlice.actions;

export default feelingSlice.reducer;
