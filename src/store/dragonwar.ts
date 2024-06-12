import { createSlice } from "@reduxjs/toolkit";
import { dragonwarSliceType } from "../types/store.ts";
const dragonwar = createSlice({
  name: "dragonwar",
  initialState: {
    isConfirm: false,
    round: 3,
    remainSec: 20,
    tickets: {
      bronze: 10,
      gold: 5,
      silver: 8,
    },
    duration: 30,
    participants: 3000,
    calcTime: 20,
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
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setParticipants: (state, action) => {
      state.participants = action.payload;
    },
    setCalcTime: (state, action) => {
      state.calcTime = action.payload;
    },
  },
});

export const { setConfirm, setRound, setRemainSec, setTickets, setDuration, setParticipants, setCalcTime } =
  dragonwar.actions;
export default dragonwar.reducer;
