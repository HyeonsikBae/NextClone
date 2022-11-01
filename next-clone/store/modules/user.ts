import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userStore = {
  name: string;
  phone: string;
  mail: string;
  description: string;
};

const initialState = {
  name: "Hyeonsik",
  phone: "010-2644-0432",
  mail: "baehyeonsik@gmail.com",
  description: ":)",
} as userStore;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state, action: PayloadAction<userStore>) => {
      return action.payload;
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
