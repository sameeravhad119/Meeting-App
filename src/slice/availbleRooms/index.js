import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: []
};

export const availbleRoomsSlice = createSlice({
  name: "availbleRooms",
  initialState,
  reducers: {
    setAvailbleRooms: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAvailbleRooms } = availbleRoomsSlice.actions;

export const availbleRoomsSelector= state=> state.availbleRooms.all;
export default availbleRoomsSlice.reducer;
