import { createSlice } from "@reduxjs/toolkit";
import { dragonwarSliceType } from "../types/store.ts";
const dragonwar = createSlice({
  name: "dragonwar",
  initialState: {
    isConfirm: false,
    round: 1,
  } as dragonwarSliceType,
  reducers: {
    setConfirm: (state, action) => {
      state.isConfirm = action.payload;
    },

    setRound: (state, action) => {
      state.round = action.payload;
    },
  },
});

export const { setConfirm, setRound } = dragonwar.actions;
export default dragonwar.reducer;
