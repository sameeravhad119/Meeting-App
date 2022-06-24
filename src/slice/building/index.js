import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    all : []
};

export const buildingSlice = createSlice({
    name : 'building',
    initialState,
    reducers: {
        setBuildings: (state, action)=>{
           state.all = action.payload;
        }
    },
    extraReducers: (builder)=>{}
});

export const {setBuildings} = buildingSlice.actions;

export default buildingSlice.reducer;