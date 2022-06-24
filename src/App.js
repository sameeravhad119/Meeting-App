import { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMeetingPage from './pages/AddMeetingPage';
import FreeRoomsPage from './pages/FreeRoomsPage';
import OverviewPage from './pages/OverviewPage';
import { setBuildings } from './slice/building';
import { setMeeting } from './slice/meeting';
import { setMeetingRoom } from './slice/meetingRoom';
import { useQuery , gql} from '@apollo/client'
import craftService from './services/craftService';

const transformData = (response) => {
  let buildings = [];
  let meetingsRooms = [];
  let meetings = [];
  
  response.forEach((building) => {
    const {
      name: buildingName,
      id: buildingId,
      meetingRooms: mRooms,
    } = building;
    console.log('mRooms', mRooms);
    buildings.push({ buildingId, buildingName });
    mRooms.forEach((meetingRoom) => {
      console.log('meetingRoom', meetingRoom);
      const {
        name: meetingRoomName,
        id: meetingRoomId,
        floor,
        meetings: mtings,
      } = meetingRoom;
      meetingsRooms.push({ meetingRoomName, meetingRoomId, buildingId, floor });
      mtings.forEach((meeting) => {
        const { id: meetingId, title, date, startTime, endTime } = meeting;
        meetings.push({
          meetingId,
          title,
          date,
          startTime,
          endTime,
          buildingId,
          floor,
          meetingRoomId,
        });
      });
    });
  });
  return { buildings, meetingsRooms, meetings };
};


function App() {
  const dispatch = useDispatch(); 
  const ref = useRef(null);

  useEffect(() => {
     const fetchInfo = async ()=>{
      let response= await craftService.getAllMeetingInfo().catch(()=>{
      });
      console.log('response', response);
      const { buildings, meetingsRooms, meetings } = transformData(response.Buildings);
      
      dispatch(setBuildings(buildings));
      dispatch(setMeetingRoom(meetingsRooms));
      dispatch(setMeeting(meetings));

     }
    
     if(ref.current === null){
       fetchInfo();
       ref.current = true;
     }
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OverviewPage/>}/>
          <Route path='/addMeeting' element={<AddMeetingPage/>}/>
          <Route path='/freeRooms' element={<FreeRoomsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
