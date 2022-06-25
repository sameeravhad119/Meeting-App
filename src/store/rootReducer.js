import {combineReducers} from '@reduxjs/toolkit';
import buildingReducer from '../slice/building';
import meetingRoomReducer from '../slice/meetingRoom';
import meetingReducer from '../slice/meeting';

const rootReducer = combineReducers({
    buildings : buildingReducer,
    meetingRooms: meetingRoomReducer,
    meetings: meetingReducer
    
});

export default rootReducer;