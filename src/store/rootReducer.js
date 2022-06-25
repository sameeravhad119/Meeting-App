import {combineReducers} from '@reduxjs/toolkit';
import buildingReducer from '../slice/building';
import meetingRoomReducer from '../slice/meetingRoom';
import meetingReducer from '../slice/meeting';
import selectedMeetingRoomReducer from '../slice/selectedMeetingRoom';

const rootReducer = combineReducers({
    buildings : buildingReducer,
    meetingRooms: meetingRoomReducer,
    meetings: meetingReducer,
    selectedMeetingRoom: selectedMeetingRoomReducer
});

export default rootReducer;