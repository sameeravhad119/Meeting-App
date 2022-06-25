import { createSlice } from "@reduxjs/toolkit";
import { todaysDate } from "../../utils/helper";

const initialState = {
    description: '',
    selectedBuilding: '',
    selectedMeetingDate: todaysDate("yyyy-MM-dd"),
    startTime: '00:00',
    endTime: '00:00',
    meetingRoomId: '',
    floor: ''
};

export const selectedMeetingRoomSlice = createSlice({
  name: "selectedMeetingRoom",
  initialState,
  reducers: {
    setSelectedMeetingRoom: (state, action) => {
      // state = {...state, ...action.payload};
      Object.assign(state, action.payload);
    },
    resetSelectedMeetingRoom: (state, action) => {
      // state = {...state, ...action.payload};
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {},
});

export const { setSelectedMeetingRoom } = selectedMeetingRoomSlice.actions;

export const selectedMeetingRoomSelector = state => state.selectedMeetingRoom;

export default selectedMeetingRoomSlice.reducer;
