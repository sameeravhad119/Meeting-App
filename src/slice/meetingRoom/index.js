import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: []
};

export const meetingRoomSlice = createSlice({
  name: "meetingRoom",
  initialState,
  reducers: {
    setMeetingRoom: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setMeetingRoom } = meetingRoomSlice.actions;

export const meetingRoomSelector = state => state.meetingRooms.all;

export default meetingRoomSlice.reducer;
