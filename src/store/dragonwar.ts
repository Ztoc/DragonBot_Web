import { createSlice } from "@reduxjs/toolkit";
import { dragonwarSliceType } from "../types/store.ts";
const dragonwar = createSlice({
  name: "dragonwar",
  initialState: {
    isConfirm: false,
    round: 1,
    remainSec: 20,
  } as dragonwarSliceType,
  reducers: {
    setConfirm: (state, action) => {
      state.isConfirm = action.payload;
    },

    setRound: (state, action) => {
      state.round = action.payload;
    },
    setRemainSec: (state, action) => {
      state.remainSec = action.payload;
    },
  },
});

export const { setConfirm, setRound, setRemainSec } = dragonwar.actions;
export default dragonwar.reducer;
