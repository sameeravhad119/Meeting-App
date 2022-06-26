import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: []
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setMeeting: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setMeeting } = meetingSlice.actions;

export const meetingSelector = state => state.meetings.all;

export default meetingSlice.reducer;
