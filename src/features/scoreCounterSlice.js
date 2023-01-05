import { createSlice } from "@reduxjs/toolkit";

export const scoreCounterSlice = createSlice({
  name: "scoreCounter",
  initialState: {
    players: {
      Bowen: {
        score: 0,
        rounds: [],
        isDealer: true,
        totalScore: 0,
      },
      Sarah: {
        score: 0,
        rounds: [],
        isDealer: false,
        totalScore: 0,
      },
      Robyn: {
        score: 0,
        rounds: [],
        isDealer: false,
        totalScore: 0,
      },
      Ben: {
        score: 0,
        rounds: [],
        isDealer: false,
        totalScore: 0,
      },
    },
    available_points: 26,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      const score = action.payload.value;
      state.players[action.payload.player].score += score;
      state.available_points -= score;
    },
    decrementByAmount: (state, action) => {
      state.players[action.payload.player].score += action.payload.value;
      state.available_points -= action.payload.value;
    },
    finishRound: (state, action) => {
      state.available_points = 26;
      for (const player in state.players) {
        const round_score = state.players[player].score;

        state.players[player].rounds.push(round_score);
        state.players[player].totalScore += round_score;
        state.players[player].score = 0;
      }
    },
    addPlayer: (state, action) => {
      const newPlayer = {
        score: 0,
        rounds: [],
        isDealer: false,
        totalScore: 0,
      };
      state.players[action.payload.name] = newPlayer;
    },
  },
});

export const { incrementByAmount, decrementByAmount, finishRound } =
  scoreCounterSlice.actions;

export default scoreCounterSlice.reducer;
